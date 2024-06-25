//Hace una petición tipo GET a la API
export const getCars = async() => {
    //Hacemos una Peticion a la API, y esta retorna una promesa 
    return await fetch("https://autos-mar-api.onrender.com")
                    .then((response) => (response.status === 200) ? response.json() : false)
                    .then((data) => data.vehiculos)
                    .catch(error => console.log("Error obt. Veh:", error))
}
