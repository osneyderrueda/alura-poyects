const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById("btnCopiar");
const txtIngresarTexto = document.getElementById("txtIngresarTexto");
const txtMostrarTexto = document.getElementById("txtMostrarTexto");

window.addEventListener("load", ocultarFormulario);
btnEncriptar.addEventListener("click", encriptarTexto);
btnDesencriptar.addEventListener("click", desencriptarTexto);
txtIngresarTexto.addEventListener("input", validarContenido);
btnCopiar.addEventListener("click", copiarTexto);
txtMostrarTexto.addEventListener("input", ocultarFormulario);

//FUNCIONES
function encriptarTexto() {
  let txtResultado = "";

  for (let i = 0; i < txtIngresarTexto.value.length; i++) {
    if (txtIngresarTexto.value.charAt(i) == "e") {
      txtResultado = txtResultado + "enter";
    } else if (txtIngresarTexto.value.charAt(i) == "i") {
      txtResultado = txtResultado + "imes";
    } else if (txtIngresarTexto.value.charAt(i) == "a") {
      txtResultado = txtResultado + "ai";
    } else if (txtIngresarTexto.value.charAt(i) == "o") {
      txtResultado = txtResultado + "ober";
    } else if (txtIngresarTexto.value.charAt(i) == "u") {
      txtResultado = txtResultado + "ufat";
    } else {
      txtResultado = txtResultado + txtIngresarTexto.value.charAt(i);
    }
  }
  txtMostrarTexto.value = txtResultado;

  ocultarFormulario();
}
function desencriptarTexto() {
  let txtResultado = txtIngresarTexto.value;

  txtResultado = txtResultado.replaceAll("enter", "e");
  txtResultado = txtResultado.replaceAll("imes", "i");
  txtResultado = txtResultado.replaceAll("ai", "a");
  txtResultado = txtResultado.replaceAll("ober", "o");
  txtResultado = txtResultado.replaceAll("ufat", "u");

  txtMostrarTexto.value = txtResultado;

  ocultarFormulario();
}
function validarContenido() {
  let regex = /[^\sa-z]/g;
  console.log(regex.test("3"));
  txtIngresarTexto.value = txtIngresarTexto.value.toLowerCase(); //Todo carácter en mayuscula la convierte en minúscula
  txtIngresarTexto.value = txtIngresarTexto.value.replaceAll(regex, ""); //Solo acepta letras sin acento
}
function copiarTexto() {
  navigator.clipboard.writeText(txtMostrarTexto.value);
}
function ocultarFormulario() {
  if (txtMostrarTexto.value == "") {
    estadoActivoDesactivo("on");
  } else {
    estadoActivoDesactivo("off");
  }
}
function estadoActivoDesactivo(estado) {
  let elementoDivImg = document.getElementById("contenedorImageSalida");
  let elementoDivParrafoP = document.getElementById("contenedorParrafoAyuda");

  if (estado == "on") {
    txtMostrarTexto.style.display = "none";
    btnCopiar.style.display = "none";
    elementoDivParrafoP.style.display = "block";
    elementoDivImg.style.display = "block";
  } else if (estado == "off") {
    txtMostrarTexto.style.display = "block";
    btnCopiar.style.display = "block";
    elementoDivParrafoP.style.display = "none";
    elementoDivImg.style.display = "none";
  }
}
