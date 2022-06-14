// LOOP DEL JUEGO
var time = new Date();
var deltaTime = 0;

if(document.readyState === "complete" || document.readyState === "interactive"){
  setTimeout(Init,1);
}else{
  document.addEventListener("DOMContentLoaded", Init);
}

function Init(){
  time = new Date();
  Start();
  Loop();
}
function Loop(){
  deltaTime = (new Date() - time) /1000;
  time = new Date();
  update();
  requestAnimationFrame(Loop);
}

// Logica del Juego
var sueloY = 22;
var velY = 0;
var impulso = 900;
var gravedad = 2500;
var dinoPosX = 42;
var dinoPosY = sueloY;
var sueloX = 0;
var velEscenario = 1280/3;
var gameVel = 1;
var score = 0;
var parado = false;
var saltando = false;
var tiempoHastaObstaculo = 2;
var tiempoObstaculoMin = 0.7;
var tiempoObstaculoMax = 1.8;
var obstaculoPosY = 16;
var obstaculo = [];
var tiempoHastaObstaculo = 2;
var tiempoObstaculoMin = 0.7;
var tiempoObstaculoMax = 1.8;
var obstaculoPosY = 16;
var obstaculos = [];
var tiempoHastaNube = 0.5;
var tiempoNubeMin = 0.7;
var tiempoNubeMax = 2.7;
var maxNubeY = 270;
var minNubeY = 100;
var nubes = [];
var velNube = 0.5;
var contenedor;
var dino;
var textoScore;
var suelo;
var gameOver;

function update(){

}

