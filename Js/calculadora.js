//Variables 
const botonReset = document.getElementById("reset")
const botonIgual = document.getElementById("igual")
const botonColor = document.getElementById("botonColor")
const botonBorrar = document.getElementById("borrar")
const pantalla = document.getElementById("pantalla")

//Agregar digito

function agregarDigito(digito) {
  document.getElementById("pantalla").value += digito;
}

//Borrar ultimo caracter

botonBorrar.addEventListener("click", () => {
  let pantalla = document.getElementById("pantalla");
  if (pantalla.value === "Error!") {
    pantalla.value = "";
  } else {
    pantalla.value = pantalla.value.slice(0, -1);
  }
})

//Resetear pantalla

botonReset.addEventListener("click", () => {

  document.getElementById("pantalla").value = "";
})

//Calcular resultado

botonIgual.addEventListener("click", () => {

  try {
    if (pantalla.value != "") {
      let resultado = eval(pantalla.value);
      pantalla.value = resultado;
    } else {
      pantalla.value = "";
    }
  } catch {
    pantalla.value = "Error!";
  }
})

//Cambiar color calculadora

botonColor.addEventListener("click", () => {

  let calculadora = document.getElementById("calculadora");
  let codigo = document.getElementById("color");
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  calculadora.style.backgroundColor = randomColor;
  botonColor.style.backgroundColor = randomColor;
  codigo.innerText = randomColor;
})


