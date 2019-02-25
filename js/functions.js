function solonumeros(e) {
	var keycode = window.event? e.which : e.keycode;
 	if(keycode < 48 || keycode >57){
		e.preventDefault();
		var error = document.getElementById("displayError");
		error.innerHTML ="Ingresar solo numeros.";
 	}
}
function validarForm(){
	
}