let dni = prompt("Introduzca el numero del dni para calcular la letra");

if (dni > 99999999 && dni < 0) {
    alert("Introduzca un número valido");
} else {
    function calcularLetraDni(dni) {

        let letra = dni.charArt(8);
        let numeros = dni.substring(0,7)
        let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", " D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
        numeros = parseInt(numeros);
        let letraDevuelta = numeros % (cadena.length - 1);
        return letraDevuelta;
    }

    alert(calcularLetraDni);
}