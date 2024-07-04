function cifra() {
    var num;
    var valid = false;

    do {
        num = prompt("Escribe un número");

        // Validar si el número ingresado es válido (es un número)
        if (!isNaN(num)) {
            num = Number(num); // Convertir la entrada a número

            // Verificar si el número tiene más de una cifra
            if (num >= 10 || num <= -10) {
                alert("Tu número tiene más de una cifra");
            } else {
                alert("Tu número solo tiene una cifra");
            }

            valid = true; // Marcar como válido para salir del bucle
        } else {
            alert("Por favor, ingresa un número válido.");
        }
    } while (!valid);
}

cifra(); // Llama a la función para que se ejecute al cargar la página
