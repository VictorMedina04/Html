alert(rellenarArray());

function rellenarArray() {

    let tamano = prompt("Diga el tamaño del array, tiene que ser mayor a 0");
    let cadena = [];
    let num
    cadena.length = tamano;
    for (let i = 1; i < (parseInt(tamano) + 1); i++) {
        num = prompt("Introduzca numeros mayores a 0 para completar el array.")
        cadena.push(num);
    }
    alert(cadena);

    let nuevonum = prompt('Diga otro número para guardar');
    while (nuevonum >=0) {
        cadena.unshift(nuevonum);
        nuevonum = prompt('Diga otro número para guardar');
    }
    return (cadena);

}

