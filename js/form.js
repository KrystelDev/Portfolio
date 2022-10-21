function validar() {
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var subject = document.getElementById("subject");
	var message = document.getElementById("message");

	if(name.value.length == 0 || email.value.length == 0 || subject.value.length == 0 || message.value.length == 0)
	{
      alert("No debe haber ningún campo vacio");
    	user.focus();
    	return false;
	} else {
        alert("Datos de formulario enviados exitosamente.");
        document.getElementById("myForm").reset();
        return false;
        }
}