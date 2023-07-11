//Ejercicio 1 

function ParOImpar (numero) {
    if (numero % 2 === 0) {
        console.log (numero + " es un número par");
    }
        else {
            console.log (numero + " es un numero impar");
        }

    }

// Ejercicio 2

function numeromayor (num1, num2) {
    if (num1 > num2) {
        console.log (num1 + " es mayor que " + num2);
    }
    else if (num1 < num2) {
        console.log (num2 + " es mayor que " + num1);
    }
    else {
        console.log ("los numeros son iguales");
    }

}

// Ejercicio 3

function multiplode5 (numero) {
    if (numero % 5 === 0) {
        console.log (numero + " es multiplo de 5")
    } 
    else 
    { console.log (numero + " no es multiplo de 5")
    }
}


//Ejercicio 4

function imprimirnumeroshasta (numero) {
    for (let i = 0; i <= numero; i++) {
        console.log (i);
    }
}

//Ejercicio 5

function imprimirpalabraNumerodeveces (palabra, veces) {
    for (let i = 1; i <= veces; i++){
        console.log (palabra);
    }
}

//Ejercicio 6

function printarray (array) {
    array.forEach (function (elemento) {
        console.log (elemento);
    }); 
}

// Ejercicio 7

function printarraybutnoFifth (array) {
    array.forEach (function (elemento,indice){
        if (indice !== 4){
            console.log (elemento);
        }
    }); 
}