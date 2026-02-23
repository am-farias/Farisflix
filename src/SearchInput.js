export default function SearchInput({input, setInput, Search}) {

    //Agarramos al valor del input ingresado
    let change = (e) =>{
        let valor = e.target.value;
        setInput(valor); 
    }

    //Permitimos la busqueda pulsando enter
    let buttonS = (e) => {
    if(e.key === "Enter"){
      Search();
    }
  };

  return (
      <input value={input} onChange={change} onKeyDown={buttonS} placeholder="Escribe aqui para buscar"></input>
  )
}
