import { useNavigate } from "react-router-dom";

function Peliculas() {
    const navigate = useNavigate();
  return (
    <>
      <h1>Peliculas</h1>
      <div className="cont">
        <button id="peli" onClick={() => navigate("/")}>Menu</button>
      </div>
    </>
  );
}
export default Peliculas;