const boton = document.getElementById('chequear');

boton.addEventListener('click', chequearResultado);

let numeroAzar = Math.floor(Math.random() * 100) + 1;

let colocarNumero = document.getElementById('numeroEntrada');

let mensaje = document.getElementById('adivinaste');

let intento = document.getElementById('intento');

let intentos = 0

function chequearResultado() {
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(colocarNumero.value)
    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Que lastima, intena de nuevo, suerte'
        mensaje.style.color = 'black';
        return
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = '!Felicidades!, adivinaste el número';
        mensaje.style.color = 'green';
        colocarNumero.disable = true;
    }else if (numeroIngresado < numeroAzar){
        mensaje.textContent = '!Mas alto! El numero es mayor al que dijiste';
        mensaje.style.color = 'red';
    }else{
        mensaje.textContent = '!Mas bajo! El numero es menor al que dijiste';
        mensaje.style.color = 'red';
    }
};