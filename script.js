var botonencriptar = document.querySelector(".btn_encriptar");
var botondesencriptar = document.querySelector(".btn_desencriptar");
var imgmuneco = document.querySelector(".imgmuneco");
var parrafo = document.querySelector(".mensajeencriptado");
var resultado = document.querySelector(".textoencriptado");

botonencriptar.onclick = encriptar;
botondesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    var ingresartexto = recuperartexto()
    resultado.textContent = encriptartexto(ingresartexto);
    
}

function desencriptar() {
    ocultarAdelante();
    var ingresartexto = recuperartexto()
    resultado.textContent = desencriptartexto(ingresartexto);
    
}

function recuperartexto() {
    var ingresartexto = document.querySelector(".ingresartexto")
    return ingresartexto.value

} 

function ocultarAdelante() { 
    imgmuneco.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptartexto(mensaje) {
    var texto = mensaje;
    var textofinal = "";

    for (var i = 0; i < texto.length; i++) {
          if(texto[i] == "a"){
            textofinal = textofinal + "ai"
          }else if(texto[i] == "e"){
            textofinal = textofinal + "enter"
          }else if(texto[i] == "i"){
            textofinal = textofinal + "imes"
          }else if(texto[i] == "o"){
            textofinal = textofinal + "ober"
          }else if(texto[i] == "u"){
            textofinal = textofinal + "ufat"
          }else{
            textofinal = textofinal + texto[i];
          }
    }
    return textofinal;
}
function desencriptartexto(mensaje) {
    var texto = mensaje;
    var textofinal = "";

    for (var i = 0; i < texto.length; i++) {
          if(texto[i] == "a"){
            textofinal = textofinal + "a"
            i = i + 1;
          }else if(texto[i] == "e"){
            textofinal = textofinal + "e"
            i = i + 4;
          }else if(texto[i] == "i"){
            textofinal = textofinal + "i"
            i = i + 3;
          }else if(texto[i] == "o"){
            textofinal = textofinal + "o"
            i = i + 3;
          }else if(texto[i] == "u"){
            textofinal = textofinal + "u"
            i = i + 3;
          }else{
            textofinal = textofinal + texto[i];
          }
    }
    return textofinal;
}

const btncopiar = document.querySelector(".btn_copiar");
btncopiar.addEventListener("click", copiar = () =>{
  var contenido = document.querySelector(".textoencriptado").textContent;
  navigator.clipboard.writeText(contenido);
})