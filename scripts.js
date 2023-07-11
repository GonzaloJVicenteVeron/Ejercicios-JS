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