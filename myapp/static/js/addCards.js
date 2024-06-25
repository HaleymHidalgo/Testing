import { viewProduct } from "./viewProduct.js";

export const addCards = (nCards, vehiculos) => {
    //Obtenemos el arreglo de vehiculos
    const lastVehLoad = 0;

    //Obtenemos el contenedor de cartas
    const rowCards = document.getElementById("rowCards");

    //Crearemos n°cards , recorriendo el arreglo de Vehiculos
    try{
        // Recorremos la lista de vehiculos partiendo desde el ultimo cargado
        for (let i = lastVehLoad; i < (nCards + lastVehLoad); i++) {
            //Identificamos
            const vehiculo = vehiculos.find( vehiculo => vehiculo.id === i);
            rowCards.appendChild(createCard(vehiculo));
        }
    }catch(e){
        console.log(e);
    }
}

const createCard = (vehiculo) => {
    const { id, img, marca, modelo, precio, cantidad } = vehiculo;

    const colCard = document.createElement("div");
    colCard.classList.add("col-xl-3", "col-lg-6", "col-md-6", "col-sm-12", "col-xs-12", "flex-row-center");

    const card = document.createElement("div");
    card.classList.add("card");
    card.addEventListener('click', () => viewProduct(vehiculo))

    const image = document.createElement("img");
    image.classList.add("card-img");
    image.src = img[0];
    image.alt = modelo;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const titulo = document.createElement("h5");
    titulo.classList.add("card-title");
    titulo.textContent = modelo;

    const parrafo = document.createElement("p");
    parrafo.textContent = marca;

    //Insertamos todo
    cardBody.appendChild(titulo);
    cardBody.appendChild(parrafo);
    card.appendChild(image);
    card.appendChild(cardBody);
    colCard.appendChild(card);
    return colCard;
}