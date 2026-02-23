import { useNavigate } from "react-router-dom";

function Series() {
  const navigate = useNavigate();
  return(
  <>
  <h1>Series</h1>
  <div className="cont">
    <button onClick={() => navigate("/")}>Menu</button>
  </div>
  </>
  );
}

export default Series;