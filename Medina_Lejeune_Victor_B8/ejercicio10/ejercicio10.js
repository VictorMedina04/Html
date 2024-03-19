let str = prompt('Introduzca un texto o palabra por favor');

palindromo(cadena);
function palindromo(str) {
    str = str.toLowerCase().replace("");
    let alreves = str.split("").reverse().join("");
    if (str == alreves) {
        alert('El texto o palabra introducido es un palindromo');
    }
    else {
       alert('El texto o palabra introducido no es un palindromo');
    }
}

