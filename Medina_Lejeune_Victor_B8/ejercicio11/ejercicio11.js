/*Realiza un script que pregunte al usuario por un tamaño de array y pida
tantos números como el tamaño indicado, de manera que los vaya
almacenando en el array. Una vez pedidos todos los datos, imprima por
pantalla el array y la suma de todos sus elementos. El programa no se
detendrá aquí, sino que continuará pidiendo números. Por cada número,
debe eliminar el primer elemento del array, añadir el nuevo número al final
del array y actualizar la suma. Se continuará la ejecución hasta que se
introduzca cualquier cosa que no sea un número positivo.*/

let cantidad = prompt("Diga el tamaño del array, tiene que ser mayor a 0");
cadena[cantidad]

while (numero < 0) {
    for (let i; i = cadena.lenght; i++) {
        let numero = prompt("Introduzca numeros mayores a 0 para completar el array.")
        cadena.push(numero)

    }
    for (let i; i < cadena.lenght; i++) {
        let suma;
        suma += cadena[i];

    }
    alert("El array es: " + cadena)
    alert("La suma de los numeros del array es: " + suma)
}

