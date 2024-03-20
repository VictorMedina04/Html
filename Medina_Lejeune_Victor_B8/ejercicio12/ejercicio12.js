let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alert("Array desordenado"+numeros)
alert("Array ordenado"+ordenar(numeros));

function ordenar(cadena) {
    let ordenado;
    do {
        ordenado = false;
        for (let i = 0; i < cadena.length - 1; i++) {
            if (cadena[i] < cadena[i + 1]) {
                let menor = cadena[i];
                cadena[i] = cadena[i + 1];
                cadena[i + 1] = menor;
                ordenado = true;
            }
        }
    } while (ordenado);
    return cadena;
}