function enviar() {

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("correo").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();


    let validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos obligatoriamente.");
        return;
    }


    if (!validarEmail.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }


    alert("Gracias por contactarnos. Hemos recibido tu solicitud y te responderemos lo antes posible.");
}
