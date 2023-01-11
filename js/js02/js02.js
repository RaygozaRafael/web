console.log("Sesión js02");


function multiplica(a,b){
    return a*b;
}

const suma = function (a,b) { return a+b};

function factorialConCiclo(a){
    let b = 1;
    for(let i = 1; i <= a ; i++){
        b *= i;
    }
    return b;
}


console.log("factorial " + factorialConCiclo(5));