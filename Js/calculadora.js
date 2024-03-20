function agregarDigito(digito) {
  document.getElementById("pantalla").value += digito;
}

function borrarUltimoCaracter() {
  let pantalla = document.getElementById("pantalla");
  if (pantalla.value === "Error!") {
    pantalla.value = "";
  } else {
    pantalla.value = pantalla.value.slice(0, -1);
  }
}

function resetPantalla() {
  document.getElementById("pantalla").value = "";
}

function calcularResultado() {
  let pantalla = document.getElementById("pantalla");

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
}

function cambiarColor() {
  let calculadora = document.getElementById("calculadora");
  let boton = document.getElementById("botonColor");

  calculadora.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  boton.style.backgroundColor = calculadora.style.backgroundColor;
}
