import { addCards } from "./addCards.js";

const vehiculos = JSON.parse(sessionStorage.getItem('carsList'))
addCards(12, vehiculos);

//Aqui se Añadiran los eventListeners para los botones de filtrado