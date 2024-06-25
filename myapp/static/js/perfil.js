const user = JSON.parse(localStorage.getItem("userData"));

const nombre = document.getElementById("username")
const email = document.getElementById("user-email")
const rut = document.getElementById("rut")
const telefono = document.getElementById("telefono")

nombre.setAttribute("value",user.nombre + " " + user.apellido)
email.setAttribute("value",user.email)
rut.setAttribute("value",user.RUT)
telefono.setAttribute("value",user.nrTelefono)

