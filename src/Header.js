import { useState } from "react";
import Api from "./Api";
import SearchInput from "./SearchInput";

function Header({setMovies}) {
  const [input, setInput] = useState("");

  //Si el input esta vacio o es falso, detenemos la ejecucion
  let Search = async()=>{
    if(!input.trim()) return;

    let resultados = await Api(input);
    setMovies(resultados);
  }

  //Eliminar los resultados al borrar el input
  let change = (valor) => {
    setInput(valor);
    if(valor === ""){
        setMovies([]);
        return;
        }
  }
  return(
    <>
      <h1>Farisflix</h1>
      <div className="cont">
        <SearchInput input={input} setInput={change} Search={Search} placeholder="Escribe aqui para buscar"/>
        <button onClick={Search}>Buscar</button>
      </div>
    </>
);
}

export default Header;