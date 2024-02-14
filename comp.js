const fotosPanel = document.getElementById("panelFotos");
const objetoImagen = document.createElement("li");
const imagen = document.createElement("img");

function mostrarImagenes(){
for (let i = 1; i<=195 ; i++) {
    const imagen = document.createElement("img");
    imagen.setAttribute("src",`frida/2 (${i}).jpg`)
    imagen.setAttribute("class","imagenes-cuadros");
    document.body.append(imagen)
}

}
mostrarImagenes()

console.log(imagen);