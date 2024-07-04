// recurso2.js

function escribe(id) {
    var respuesta = document.getElementById('respuesta');
    switch (id) {
        case 1:
            respuesta.innerHTML = 'rojo';
            break;
        case 2:
            respuesta.innerHTML = 'amarillo';
            break;
        case 3:
            respuesta.innerHTML = 'verde';
            break;
        case 4:
            respuesta.innerHTML = 'azul';
            break;
        default:
            respuesta.innerHTML = 'ninguno';
            break;
    }
}
