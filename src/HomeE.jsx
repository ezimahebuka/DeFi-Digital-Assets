import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const HomeE = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <h1>Welcome to Swift Earn</h1>
        <div>
          <Link to={`/dashboard/${id}`}>
            <button
              style={{
                padding: "10px 40px",
                borderRadius: "5px",
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(255,255,255,0.08)",
                color: "var(--text-primary)",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeE;
