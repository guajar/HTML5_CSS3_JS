var form = document.getElementById("form-contact");

var apellidosInput = document.getElementsByName("tienes_apellidos");
var ejercitoInput = document.getElementById("ejercito");
var tooManyEnemies = document.getElementById("too-many-enemies");

var inputApellidos = document.createElement("input");
inputApellidos.setAttribute("id", "apellidos");
inputApellidos.setAttribute("type", "text");
inputApellidos.setAttribute("name", "apellidos");
inputApellidos.setAttribute("placeholder", "Apellidos");
inputApellidos.setAttribute("required", "");

for (var i = 0; i < apellidosInput.length; i++) {
    apellidosInput[i].addEventListener('click', function(event){
        if (this.value == 'yes') {
            this.parentNode.appendChild(inputApellidos);
        } else {
            if(document.getElementById("apellidos")) {
                this.parentNode.removeChild(inputApellidos);
            }
        }
    });
}

ejercitoInput.addEventListener("keyup", function(event) {
	if (this.value > 50) {
		tooManyEnemies.style.display = 'block';
	}
	else {
		tooManyEnemies.style.display = 'none';
	}
});

form.addEventListener("submit", function(event) {
	var inputNombre = document.getElementById("nombre");
	var apellidosRadioInput = {
		"appellido_si": document.getElementById("apellidos_si"),
		"appellido_no": document.getElementById("apellidos_no")
	}
});