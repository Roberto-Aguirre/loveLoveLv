<<<<<<< HEAD

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


=======

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


>>>>>>> 930a92c45a03470354be1ace3a5769613bd1336e
