const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const rut = document.getElementById('rut');
const telefono = document.getElementById('telefono');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const nombreValue = nombre.value.trim();
    const apellidoValue = apellido.value.trim();
    const rutValue = rut.value.trim();
    const telefonoValue = telefono.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(nombreValue === '') {
		setErrorFor(nombre, 'Nombre necesario');
	} else {
		setSuccessFor(nombre);
	}

    if(apellidoValue === '') {
		setErrorFor(apellido, 'Apellido necesario');
	} else {
		setSuccessFor(apellido);
	}

    if(rutValue === '') {
		setErrorFor(rut, 'Rut necesario');
	} else if (!isRut(rutValue)){
        setErrorFor(rut, 'No ingreso un rut valido ej:(99.999.999-k)');
    } else {
		setSuccessFor(rut);
	}

    if(telefonoValue === '') {
		setErrorFor(telefono, 'Telefono necesario');
	} else {
		setSuccessFor(telefono);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email necesario');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
		if (setSuccessFor(email)){
			//funcion para guardar el email
		}
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Necesita una contraseña');
	} else {
		setSuccessFor(password);
		if (setSuccessFor(password)){
			//funcion para guardar la contraseña
		}
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Debe re ingresar la contraseña');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords no coinciden');
	} else{
		setSuccessFor(password2);
	}
}

export function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

export function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

export function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

export function isRut(rut) {
	return /^(\d{1,2}(?:[\.]?\d{3}){2}-[\dkK])$/.test(rut);
}