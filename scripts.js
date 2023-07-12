//Ejercicio 1 

function ParOImpar (numero) {
    if (numero % 2 === 0) {
        console.log (numero + " es un número par");
    }
        else {
            console.log (numero + " es un numero impar");
        }

    }

    var numero1 = 7;
    ParOImpar(numero1)


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

    var numero2 = 10;
    var numero3 = 5;
    numeromayor(numero2, numero3);



// Ejercicio 3

function multiplode5 (numero) {
    if (numero % 5 === 0) {
        console.log (numero + " es multiplo de 5")
    } 
    else 
    { console.log (numero + " no es multiplo de 5")
    }
}

    var numero4 = 25;
    multiplode5(numero4);



//Ejercicio 4

function imprimirnumeroshasta (numero) {
    for (let i = 0; i <= numero; i++) {
        console.log (i);
    }
}

    var numero5 = 5;
    imprimirnumeroshasta(numero5);


//Ejercicio 5

function imprimirpalabraNumerodeveces (palabra, veces) {
    for (let i = 1; i <= veces; i++){
        console.log (palabra);
    }
}

    var palabra = "Hola";
    var cantidad = 3;
    imprimirpalabraNumerodeveces(palabra, cantidad);


//Ejercicio 6

function printarray (array) {
    array.forEach (function (elemento) {
        console.log (elemento);
    }); 
}

    var array1 = [1, 2, 3, 4, 5];
    printarray(array1);


// Ejercicio 7

function printarraybutnoFifth (array) {
    array.forEach (function (elemento,indice){
        if (indice !== 4){
            console.log (elemento);
        }
    }); 
}

    var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    printarraybutnoFifth(array2);

//Ejercicio 8

function xarraypornumero (array,numero) {
    for (let i = 0; i < array.lenght; i++) {
        console.log(array [i] * numero);
    }            
}

xarraypornumero ([1, 2, 3, 4, 5], 2); 