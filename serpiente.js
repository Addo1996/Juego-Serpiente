
    // 1. Capturamos el canvas y su contexto de dibujo
    const canvas = document.getElementById("canvasJuego");
    const ctx = canvas.getContext("2d");
    const TAMANIO_CELDA = 25;
    const SERPIENTE=[
      {x:5, y:5},
      {x:5, y:4},
      {x:4, y:4},
      {x:3, y:4},
      {x:2, y:4}
    ];


    

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

function  pintarParte(lineaX, lineaY){
  const posicionX= lineaX * TAMANIO_CELDA;
  const posicionY= lineaY * TAMANIO_CELDA;
  ctx.fillStyle= "color";
  ctx.fillRect(posicionX, posicionY, TAMANIO_CELDA, TAMANIO_CELDA);
  ctx.strokeStyle = "black";
  ctx.strokeRect(posicionX, posicionY, TAMANIO_CELDA, TAMANIO_CELDA);
}

function pintarSerpiente() {

  for(let i = 0; i < SERPIENTE.length; i++) {
    const parte = SERPIENTE[i];
    // Cabeza
    if(i === 0) {
      ctx.fillStyle = "yellow";
    } else {
      ctx.fillStyle = "red";
    }
    pintarParte(parte.x, parte.y);

  }

}


function dibujarTodo() {

  limpiarCanvas();

  dibujarTablero();

  pintarSerpiente();

}


