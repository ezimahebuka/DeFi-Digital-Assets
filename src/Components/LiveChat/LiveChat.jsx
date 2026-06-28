import { useState, useEffect, useRef } from "react";
import "./LiveChat.css";

const AGENT = { name: "Sarah", role: "Support Agent", avatar: "S" };

const AUTO_REPLIES = [
  "Hi there! Welcome to DeFi Digital Assets. How can I help you today?",
  "Great question! Our investment plans offer up to 550% ROI. Would you like to learn more about a specific plan?",
  "You can get started by clicking the 'Get Started' button and creating a free account. It only takes 2 minutes!",
  "Our minimum deposit starts at $1,000 for the Starter Plan. We have options for every budget.",
  "Withdrawals are processed within 24–48 hours. You can withdraw via crypto or bank transfer.",
  "Our platform is SSL-secured with bank-grade encryption. Your funds are fully protected.",
  "You can reach our support team 24/7 via this chat or by emailing support@defidigitalassets.com.",
  "Absolutely! We have a referral program where you earn bonuses for every trader you invite.",
  "Let me connect you with a senior advisor who can walk you through our premium plans.",
  "Is there anything else I can help you with today? We're here around the clock!",
];

let replyIndex = 0;

function getNextReply() {
  const reply = AUTO_REPLIES[replyIndex % AUTO_REPLIES.length];
  replyIndex++;
  return reply;
}

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "agent",
      text: "👋 Hi! I'm Sarah from DeFi Digital Assets. How can I help you today?",
      time: formatTime(new Date()),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const [minimised, setMinimised] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (open && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, typing, open]);

  // Focus input when opened
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
    if (open) setUnread(0);
  }, [open]);

  function formatTime(date) {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  function sendMessage(e) {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;

    const userMsg = {
      id: Date.now(),
      from: "user",
      text,
      time: formatTime(new Date()),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    // Simulate agent typing delay
    const delay = 1200 + Math.random() * 1000;
    setTimeout(() => {
      setTyping(false);
      const agentMsg = {
        id: Date.now() + 1,
        from: "agent",
        text: getNextReply(),
        time: formatTime(new Date()),
      };
      setMessages((prev) => [...prev, agentMsg]);
      if (!open) setUnread((n) => n + 1);
    }, delay);
  }

  return (
    <>
      {/* Overlay */}
      {open && <div className="LCOverlay" onClick={() => setOpen(false)} />}

      {/* Chat window */}
      {open && (
        <div className={`LCWindow ${minimised ? "minimised" : ""}`}>
          {/* Header */}
          <div className="LCHeader">
            <div className="LCAgentInfo">
              <div className="LCAgentAvatar">
                {AGENT.avatar}
                <span className="LCOnline" />
              </div>
              <div>
                <div className="LCAgentName">{AGENT.name}</div>
                <div className="LCAgentRole">{AGENT.role} · Online</div>
              </div>
            </div>
            <div className="LCHeaderActions">
              <button
                className="LCIconBtn"
                onClick={() => setMinimised((m) => !m)}
                title={minimised ? "Expand" : "Minimise"}
              >
                {minimised ? "▲" : "▼"}
              </button>
              <button
                className="LCIconBtn"
                onClick={() => setOpen(false)}
                title="Close"
              >
                ✕
              </button>
            </div>
          </div>

          {!minimised && (
            <>
              {/* Messages */}
              <div className="LCMessages">
                <div className="LCWelcomeBanner">
                  <div className="LCWelcomeIcon">💬</div>
                  <p>We typically reply in under a minute.</p>
                </div>

                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`LCMessage ${msg.from === "user" ? "user" : "agent"}`}
                  >
                    {msg.from === "agent" && (
                      <div className="LCMsgAvatar">{AGENT.avatar}</div>
                    )}
                    <div className="LCMsgContent">
                      <div className="LCBubble">{msg.text}</div>
                      <div className="LCMsgTime">{msg.time}</div>
                    </div>
                  </div>
                ))}

                {typing && (
                  <div className="LCMessage agent">
                    <div className="LCMsgAvatar">{AGENT.avatar}</div>
                    <div className="LCMsgContent">
                      <div className="LCBubble LCTyping">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={bottomRef} />
              </div>

              {/* Input */}
              <form className="LCInputArea" onSubmit={sendMessage}>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="LCInput"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                />
                <button
                  type="submit"
                  className="LCSendBtn"
                  disabled={!input.trim()}
                  title="Send"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>

              <div className="LCFooter">
                Powered by DeFi Digital Assets Support
              </div>
            </>
          )}
        </div>
      )}

      {/* Trigger button */}
      <button
        className={`LCTrigger ${open ? "active" : ""}`}
        onClick={() => setOpen((o) => !o)}
        title="Live Chat"
        aria-label="Open live chat"
      >
        {open ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        )}
        {!open && unread > 0 && <span className="LCBadge">{unread}</span>}
      </button>
    </>
  );
}
