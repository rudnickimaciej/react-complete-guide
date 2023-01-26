import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function navigateHanlder() {
    navigate("/info");
  }
  return (
    <>
      <h1>
        <progress value="110" max="100">
          50%
        </progress>
      </h1>
      <button onClick={navigateHanlder}>Navigate</button>
    </>
  );
}

export default Home;
