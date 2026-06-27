import { useState, useEffect, useRef } from "react";
import "./ActivityToast.css";

const FIRST_NAMES = [
  "James",
  "John",
  "Robert",
  "Michael",
  "William",
  "David",
  "Richard",
  "Joseph",
  "Thomas",
  "Charles",
  "Christopher",
  "Daniel",
  "Matthew",
  "Anthony",
  "Mark",
  "Donald",
  "Steven",
  "Paul",
  "Andrew",
  "Kenneth",
  "Joshua",
  "Kevin",
  "Brian",
  "George",
  "Timothy",
  "Ronald",
  "Edward",
  "Jason",
  "Jeffrey",
  "Ryan",
  "Jacob",
  "Gary",
  "Nicholas",
  "Eric",
  "Jonathan",
  "Stephen",
  "Larry",
  "Justin",
  "Scott",
  "Brandon",
  "Benjamin",
  "Samuel",
  "Raymond",
  "Gregory",
  "Frank",
  "Alexander",
  "Patrick",
  "Jack",
  "Dennis",
  "Jerry",
  "Mary",
  "Patricia",
  "Jennifer",
  "Linda",
  "Barbara",
  "Elizabeth",
  "Susan",
  "Jessica",
  "Sarah",
  "Karen",
  "Lisa",
  "Nancy",
  "Betty",
  "Margaret",
  "Sandra",
  "Ashley",
  "Dorothy",
  "Kimberly",
  "Emily",
  "Donna",
  "Michelle",
  "Carol",
  "Amanda",
  "Melissa",
  "Deborah",
  "Stephanie",
  "Rebecca",
  "Sharon",
  "Laura",
  "Cynthia",
  "Kathleen",
  "Amy",
  "Angela",
  "Shirley",
  "Anna",
  "Brenda",
  "Pamela",
  "Emma",
  "Nicole",
  "Helen",
  "Samantha",
  "Katherine",
  "Christine",
  "Debra",
  "Rachel",
  "Carolyn",
  "Janet",
  "Catherine",
  "Maria",
  "Heather",
  "Diane",
  "Julie",
  "Joyce",
  "Victoria",
  "Kelly",
  "Christina",
  "Lauren",
  "Joan",
  "Evelyn",
  "Olivia",
  "Judith",
  "Megan",
  "Cheryl",
  "Andrea",
  "Hannah",
  "Martha",
  "Jacqueline",
  "Frances",
  "Gloria",
  "Ann",
  "Teresa",
  "Kathryn",
  "Sara",
  "Janice",
  "Jean",
  "Alice",
  "Madison",
  "Doris",
  "Abigail",
  "Julia",
  "Grace",
  "Amber",
  "Denise",
  "Danielle",
  "Marilyn",
  "Beverly",
  "Charlotte",
  "Natalie",
  "Diana",
  "Brittany",
];

const LAST_NAMES = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Moore",
  "Jackson",
  "Martin",
  "Lee",
  "Perez",
  "Thompson",
  "White",
  "Harris",
  "Sanchez",
  "Clark",
  "Ramirez",
  "Lewis",
  "Robinson",
  "Walker",
  "Young",
  "Allen",
  "King",
  "Wright",
  "Scott",
  "Torres",
  "Nguyen",
  "Hill",
  "Flores",
  "Green",
  "Adams",
  "Nelson",
  "Baker",
  "Hall",
  "Rivera",
  "Campbell",
  "Mitchell",
  "Carter",
  "Roberts",
  "Turner",
  "Phillips",
  "Evans",
  "Torres",
  "Parker",
  "Collins",
  "Edwards",
  "Stewart",
  "Flores",
  "Morris",
  "Nguyen",
  "Murphy",
  "Rivera",
  "Cook",
  "Rogers",
  "Morgan",
  "Peterson",
  "Cooper",
  "Reed",
  "Bailey",
  "Bell",
  "Gomez",
  "Kelly",
  "Howard",
  "Ward",
  "Cox",
  "Diaz",
  "Richardson",
  "Wood",
  "Watson",
  "Brooks",
  "Bennett",
  "Gray",
  "James",
  "Reyes",
  "Hughes",
  "Price",
  "Myers",
  "Long",
  "Foster",
  "Sanders",
  "Ross",
  "Morales",
  "Powell",
  "Sullivan",
  "Russell",
  "Ortiz",
  "Jenkins",
  "Gutierrez",
  "Perry",
];

const US_STATES = [
  "California",
  "Texas",
  "Florida",
  "New York",
  "Pennsylvania",
  "Illinois",
  "Ohio",
  "Georgia",
  "North Carolina",
  "Michigan",
  "New Jersey",
  "Virginia",
  "Washington",
  "Arizona",
  "Tennessee",
  "Massachusetts",
  "Indiana",
  "Missouri",
  "Maryland",
  "Wisconsin",
  "Colorado",
  "Minnesota",
  "Nevada",
  "Alabama",
  "Louisiana",
  "Kentucky",
  "Oregon",
  "Oklahoma",
  "Connecticut",
  "Iowa",
  "Utah",
  "Arkansas",
  "Mississippi",
  "Kansas",
  "New Mexico",
  "Nebraska",
  "West Virginia",
  "Idaho",
  "Hawaii",
  "Maine",
];

const ACTIONS = [
  {
    type: "deposit",
    verbs: [
      "just made a deposit",
      "just invested",
      "just funded their account",
    ],
  },
  {
    type: "withdrawal",
    verbs: [
      "just made a withdrawal",
      "just cashed out",
      "just processed a withdrawal",
    ],
  },
];

const TIMES = [
  "just now",
  "1 min ago",
  "2 mins ago",
  "3 mins ago",
  "5 mins ago",
  "8 mins ago",
  "10 mins ago",
];

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateActivity() {
  const firstName = randomItem(FIRST_NAMES);
  const lastName = randomItem(LAST_NAMES);
  const state = randomItem(US_STATES);
  const action = randomItem(ACTIONS);
  const verb = randomItem(action.verbs);
  const time = randomItem(TIMES);
  const initials = `${firstName[0]}${lastName[0]}`;

  return {
    firstName,
    lastName,
    state,
    verb,
    time,
    type: action.type,
    initials,
  };
}

export default function ActivityToast() {
  const [visible, setVisible] = useState(false);
  const [activity, setActivity] = useState(null);
  const [exiting, setExiting] = useState(false);
  const timerRef = useRef(null);

  function showNext() {
    setExiting(false);
    setActivity(generateActivity());
    setVisible(true);

    // start exit after 4s
    timerRef.current = setTimeout(() => {
      setExiting(true);
      // remove after animation
      timerRef.current = setTimeout(() => {
        setVisible(false);
        // wait 1.5s then show next
        timerRef.current = setTimeout(showNext, 1500);
      }, 500);
    }, 4000);
  }

  useEffect(() => {
    // initial delay
    timerRef.current = setTimeout(showNext, 2000);
    return () => clearTimeout(timerRef.current);
  }, []);

  if (!visible || !activity) return null;

  return (
    <div
      className={`ActivityToast ${activity.type} ${exiting ? "exit" : "enter"}`}
    >
      <div className="ATAvatar">{activity.initials}</div>
      <div className="ATBody">
        <div className="ATName">
          {activity.firstName} {activity.lastName[0]}.
          <span className="ATState">{activity.state}</span>
        </div>
        <div className="ATAction">
          <span className={`ATBadge ${activity.type}`}>
            {activity.type === "deposit" ? "↑ Deposit" : "↓ Withdrawal"}
          </span>
          {activity.verb}
        </div>
        <div className="ATTime">{activity.time}</div>
      </div>
    </div>
  );
}
