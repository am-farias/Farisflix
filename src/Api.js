const api = "b6e57bd5";

async function Api(movie) {
    const enlace = `http://www.omdbapi.com/?i=tt3896198&apikey=${api}&s=${movie}`;
    try {
        let respuesta = await fetch(enlace);
        let data = await respuesta.json();
        console.log(data);

        return data.Search || [];

    } catch (error) {
        console.error("Error en la busqueda", error);
        return [];
    }
}

export default Api;