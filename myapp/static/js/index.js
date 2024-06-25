import { getCars } from "./getCars.js";
import { addCards } from "./addCards.js";
//https://www.brunofritsch.cl/comprar-seminuevo-precio-promocion-chile/autos-usados

//Obtiene y guarda en LocalStorage la Data de la API
if(sessionStorage.getItem('carsList') === null){
    getCars()
    .then((data) =>  {
        if(data !== undefined){
            sessionStorage.setItem("carsList", JSON.stringify(data))
            addCards(4, data)
        }
    })
    .catch((error) => console.log('Error al guardar los vehiculos: ',error))

}else{
    const vehiculos = JSON.parse(sessionStorage.getItem("carsList"))
    addCards(4, vehiculos)
}