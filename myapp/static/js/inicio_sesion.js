import { getUserByEmail } from "./getUsers.js";

const form = document.getElementById('form2');
const email = document.getElementById('email');
const password = document.getElementById('password');

const validacionDatos = async() => {
	await getUserByEmail(email.value)
		.then((user) => {
			console.log(user);
			if (user.email === email.value && user.password === password.value) {
				localStorage.setItem("userData", JSON.stringify(user));
				swal({title: 'Logeado Exitosamente', icon:'success'})
					.then(() => window.location.href = '../index.html')
			} else {
				swal({title: 'Credenciales Invalidas', icon:'error'})
			}
		})
}

form.addEventListener('submit', async e => {
	e.preventDefault();
	await validacionDatos();
});