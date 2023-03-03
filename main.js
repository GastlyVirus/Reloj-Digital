// Traigo el primer elemento del arreglo "relojContainer" y dentro de una variable
let reloj = document.getElementsByClassName("horarioActual")[0];

//--------------------------------------------------------------------------------
// Creamos un timer con "setInterval()" para hacer que una funcion se repita con un tiempo de retraso entre cada ejecucion. Se pasa dos parametros, la funcion que quieres llamar y el tiempo en milisegundos a retrasar cada ejecucion de la funcion. Se ejecutara hasta que sea borrada.
setInterval(() => {

  // Para traer la hora, creo una variable con formato DATE(Los objetos Date representan en JavaScript un momento fijo en el tiempo en un formato independiente. El objeto Date contiene un Number que representa los milisegundos transcurridos desde el 1 de Enero de 1970 UTC.)
  let tiempoActual = new Date();

  // Metodo para traer la hora/minutos/segundos de la variable tiempoActual que esta dentro de DATE
  // Se agrega el metodos IF porque 
  let hora = tiempoActual.getHours();
  if (hora < 10) {
    hora = `0${hora}`;
  }

  let minutos = tiempoActual.getMinutes();
  if (minutos < 10) {
    minutos = `0${minutos}`;
  }

  let segundos = tiempoActual.getSeconds();
  if (segundos < 10) {
    segundos = `0${segundos}`;
  }

  // La propiedad "INNERHTML" obtiene el contenido html de un elemento para poder reemplazarlo
  reloj.innerHTML = `${hora}:${minutos}:${segundos}`;
}, 1000);
//--------------------------------------------------------------------------------

