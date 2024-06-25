//Hace una petición tipo GET a la API
export const getUserByEmail = async(user) => {
    //Hacemos una Peticion a la API, y esta retorna una promesa 
    return await fetch(`https://users-adm-api.onrender.com/byEmail/${user}`)
                    .then((response) => (response.status === 200) ? response.json() : false)
                    .then((data) => data.user)
                    .catch(error => console.log("Error obt. User:", error))
                }