
    // 1. Capturamos el canvas y su contexto de dibujo
    const canvas = document.getElementById("canvasJuego");
    const ctx = canvas.getContext("2d");
    const TAMANIO_CELDA = 25;
    const serpiente=[
      {x:5, y:5},
      {x:5, y:4},
      {x:4, y:4},
      {x:3, y:4},
      {x:2, y:4}
    ];
    let intervaloSerpiente
    let direccionActual = "derecha";
    let comida = {
      x: 10,
      y: 10
    };
    let puntaje = 0;

    generarComida();
    // Primera pintura del juego al cargar la página
    dibujarTodo();

    // =========================
    // FUNCIONES DE DIBUJO
    // =========================

    function limpiarCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function dibujarTablero() {
      ctx.strokeStyle = "#334155";
      // Dibujar lineas verticales.
      for (let x = 0; x <= canvas.width; x += TAMANIO_CELDA) {

        ctx.beginPath();

        ctx.moveTo(x, 0);

        ctx.lineTo(x, canvas.height);

        ctx.stroke();

  } // Dibujar lineas horizontales.
  for (let y = 0; y <= canvas.height; y += TAMANIO_CELDA) {

    ctx.beginPath();

    ctx.moveTo(0, y);

    ctx.lineTo(canvas.width, y);

    ctx.stroke();

}

}

function pintarParte(lineaX, lineaY, color) {

  const posicionX = lineaX * TAMANIO_CELDA;
  const posicionY = lineaY * TAMANIO_CELDA;

  ctx.fillStyle = color;

  ctx.fillRect(
    posicionX,
    posicionY,
    TAMANIO_CELDA,
    TAMANIO_CELDA
  );

  ctx.strokeStyle = "black";

  ctx.strokeRect(
    posicionX,
    posicionY,
    TAMANIO_CELDA,
    TAMANIO_CELDA
  );

}

function pintarSerpiente() {

  for(let i = 0; i < serpiente.length; i++) {
    const parte = serpiente[i];
    if(i === 0) {
      pintarParte(parte.x, parte.y, "yellow");
    } else {
      pintarParte(parte.x, parte.y, "red");
    }
  }
}
function pintarComida() {
  pintarParte(comida.x, comida.y, "orange");
}
function generarComida(){
  const totalColumnas = canvas.width / TAMANIO_CELDA;
  const totalFilas = canvas.height/ TAMANIO_CELDA;
  comida.x= Math.floor(Math.random ()* totalColumnas);
  comida.y= Math.floor(Math.random ()* totalFilas);

}

function atrapaComida() {
  const cabeza = serpiente[0];
  if( cabeza.x === comida.x &&cabeza.y === comida.y)
    {
    return true;
  }
  return false;
}

function moverDerecha(){
  const cabeza= serpiente[0];
  const nuevaCabeza= {x: cabeza.x +1, y: cabeza.y};
  serpiente.unshift(nuevaCabeza);
  serpiente.pop();
}

function moverIzquierda(){
  const cabeza= serpiente[0];
  const nuevaCabeza= {x: cabeza.x -1, y: cabeza.y};
  serpiente.unshift(nuevaCabeza);
  serpiente.pop();
}

function moverArriba(){
  const cabeza= serpiente[0];
  const nuevaCabeza= {x: cabeza.x, y: cabeza.y -1};
  serpiente.unshift(nuevaCabeza);
  serpiente.pop();
}

function moverAbajo(){
  const cabeza= serpiente[0];
  const nuevaCabeza= {x: cabeza.x, y: cabeza.y +1};
  serpiente.unshift(nuevaCabeza);
  serpiente.pop();
}

function moverSerpiente() {
  if(direccionActual === "derecha") {
    moverDerecha();
  }
  if(direccionActual === "izquierda") {
    moverIzquierda();
  }
  if(direccionActual === "arriba") {
    moverArriba();
  }
  if(direccionActual === "abajo") {
    moverAbajo();
  }
  if(atrapaComida()) {
  puntaje++;
  document.getElementById("puntaje").textContent = puntaje;
  generarComida();
}
  dibujarTodo();
}

function iniciarJuego(){
 intervaloSerpiente=setInterval(moverSerpiente, 1000);
}

function pausarJuego() {
  clearInterval(intervaloSerpiente);
}

function cambiarDireccion(direccion) {
  direccionActual = direccion;
}
function dibujarTodo() {

  limpiarCanvas();

  dibujarTablero();

  pintarComida();

  pintarSerpiente();

}

function reiniciarJuego() {
  location.reload();
}

