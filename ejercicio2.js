function generaAleatorio(min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
}

function generaNAleatorios(cantidad, min, max) {
    const numeros = [];
    for (let i = 0; i < cantidad; i++) {
        numeros.push(generaAleatorio(min, max)); 
    }
    return numeros;
}

function simularLoteria(cantidadDecimos) {
    if (cantidadDecimos <= 0 || !Number.isInteger(cantidadDecimos)) {
        alert("Por favor, ingrese un número .");
        return;
    }

    const decimosOriginales = generaNAleatorios(cantidadDecimos, 0, 99999);

    let intentos = 0;
    const maxIntentos = 999999;
    let ganadorEncontrado = false;

    while (intentos < maxIntentos && !ganadorEncontrado) {
        const numeroAleatorio = generaAleatorio(0, 99999);
        intentos++;

        if (decimosOriginales.includes(numeroAleatorio)) {
            alert("¡Felicidades! Has ganado.");
            ganadorEncontrado = true;
        }
    }

    if (!ganadorEncontrado) {
        alert("No se encontró una coincidencia ");
    }
}

const cantidadDecimos = parseInt(prompt("Ingrese la cantidad de décimos :"));
simularLoteria(cantidadDecimos);
