import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
        <h1>Welcome to My Website</h1>
        <p>This is the Home Page.</p>
        <button onClick={() => navigate("/about")}>
  Go to About
</button>
    </div>
  );

}

export default Home;