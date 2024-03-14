

let dni = prompt("Introduzca el numero del dni para calcular la letra");

function calcularLetraDni(dni) {
    var letras = [T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E, T];
    dni = parseInt(dni);
    let letra = dni % (cadena.length - 1);
    return letras[letra];
}

alert(calcularLetraDni);