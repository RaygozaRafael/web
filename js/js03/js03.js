/* 
    Preguntar el numero del mes y de acuerdo al mes indicado
    desplegar en consola la estacion del año
    12, 1, 2 = Invierno
    3, 4, 5  = Primavera
    6, 7, 8  = Verano
    9, 10; 11= Otoño
    
*/
/* 
let mes = prompt("Dame el numero del mes del anio");
let mesActual;
let estacionActual;

while (mes > 12 || mes < 1){
    mes =  prompt("El valor indicado debe ser un numero de 1 a 12")
};
mes = Number(mes);

switch (mes) {
    case 1:
        mesActual = "Enero";
        estacionActual = "Invierno";
        break;
    case 2:
        mesActual = "Febrero";
        estacionActual = "Invierno";
        break;
    case 3:
        mesActual = "Marzo";
        estacionActual = "Primavera";
        break;
    case 4:
        mesActual = "Abril";
        estacionActual = "Primavera";
        break;
    case 5:
        mesActual = "Mayo";
        estacionActual = "Primavera";
        break;
    case 6:
        mesActual = "Junio";
        estacionActual = "Verano";
        break;
    case 7:
        mesActual = "Julio";
        estacionActual = "Verano";
        break;
    case 8:
        mesActual = "Agosto";
        estacionActual = "Verano";
        break;
    case 9:
        mesActual = "Septiembre";
        estacionActual = "Otonio";
        break;
    case 10:
        mesActual = "Octubre";
        estacionActual = "Otonio";
        break;
    case 11:
        mesActual = "Noviembre";
        estacionActual = "Otonio";
        break;
    case 12:
        mesActual = "Enero";
        estacionActual = "Invierno";
        break;
    default:
        break;

}

document.getElementById("estacion").innerHTML = "El mes de "+mesActual+" esta en la estacion de "+estacionActual+".";
console.log("El mes de "+mesActual+" esta en la estacion de "+estacionActual+"."); 
*/

function validaMes(a){
    if(a > 12 || a < 1){
        return false;
    }
    else{
        return true;
    }
} 

function validarEstacion(b){

}

let mes = prompt("Dame el numero del mes del anio");
let mesActual;
let estacionActual;

while (validaMes(mes)) {
    mes = prompt("El valor indicado debe ser un numero de 1 a 12")
};

mes = Number(mes);

if (mes === 1){
    mesActual = "Enero";
    estacionActual = "Invierno";
}
else if(mes === 2){
    mesActual = "Febrero";
    estacionActual = "Invierno";
}
else if(mes === 3){
    mesActual = "Marzo";
        estacionActual = "Primavera";
}
else if(mes === 4){
    mesActual = "Abril";
        estacionActual = "Primavera";
}
else if(mes === 5){
    mesActual = "Mayo";
        estacionActual = "Primavera";
}
else if(mes === 6){
    mesActual = "Junio";
        estacionActual = "Verano";
}
else if(mes === 7){
    mesActual = "Julio";
        estacionActual = "Verano";
}
else if(mes === 8){
    mesActual = "Agosto";
        estacionActual = "Verano";
}
else if(mes === 9){
    mesActual = "Septiembre";
        estacionActual = "Otonio";
}
else if(mes === 10){
    mesActual = "Octubre";
        estacionActual = "Otonio";
}
else if(mes === 11){
    mesActual = "Noviembre";
    estacionActual = "Otonio";
}
else if(mes === 12){
    mesActual = "Diciembre";
    estacionActual = "Invierno";
}
else{
    mesActual = "Error";
    estacionActual = "Error";
}

document.getElementById("estacion").innerHTML = "El mes de " + mesActual + " esta en la estacion de " + estacionActual + ".";
console.log("El mes de " + mesActual + " esta en la estacion de " + estacionActual + "."); 