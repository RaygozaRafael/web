console.log("Mensaje a consola desde el script externo");

document.getElementById("parrafo").innerHTML = "Uso de la API DOM mediante script externo";

function changeColor() {
    document.getElementById("demo").style.color = "red";
}

function changeColorH2(elemento, color) {
    console.log(elemento);
    console.log(color);
    document.getElementById("color-h2").style.color = color;
    elemento.style.color = "red";
}

function changeColorByClass(color) {
    const colleccion = document.getElementsByClassName("example");
    console.log(colleccion);
    for(let index = 0; index < colleccion.length; index++){
        colleccion[index].style.color = color;
    }

}