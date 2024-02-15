

const objetoImagen = document.createElement("li");
const imagen = document.createElement("img");

mostrarImagenes()

function mostrarImagenes(){
for (let i = 1; i<=192 ; i++) {
    const fotosPanel = document.getElementById("panelFotos");
    const imagen = document.createElement("img");
    imagen.setAttribute("src",`frida/2 (${i}).jpg`)
    imagen.setAttribute("class","imagenes-cuadros");
    fotosPanel.append(imagen)
}
}

let mangas = 5

