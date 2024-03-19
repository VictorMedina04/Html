
principal();
//Ejercicio1
function sortear(arr) {
    let desde = 0;
    let hasta = arr.length;
    let numAleatorio = Math.floor(desde+Math.random() * hasta)
    return arr[numAleatorio];
}
//Ejercicio2
function camelize(str) {

    let palabrasSueltas = str.split('-');

    for (let i = 1; i < palabrasSueltas.length; i++) {
        let primeraEnMayuscula = palabrasSueltas[i].charAt(0).toUpperCase()
        palabrasSueltas[i] = primeraEnMayuscula + palabrasSueltas[i].subString(1);
    }
    return palabrasSueltas.join('');
}

//Ejercicio3
function pedirNombres() {
    let resultado = new Array();

    let texto = prompt("Introduzca texto");
    while (isNaN(texto)) {
        resultado.push(texto);
        texto = prompt("Introduzca texto");
    }
    return resultado;
}

//Ejercicio4

function principal(){
    let propiedadesCSS = pedirNombres();

    for(let i=0;i<propiedadesCSS.length;i++){
        propiedadesCSS[i] = camelize(propiedadesCSS[i]);
    }

    alert("El escogido es "+sortear(propiedadesCSS));

}

/*
principal();
function sortear(arr) {
    let desde = 0;
    let hasta = arr.length;
    let numAleatorio;
    numAleatorio = Math.floor(desde + Math.random() * hasta);
    return arr[numAleatorio];
}
function camelize(str) {
    let palabrasSueltas = str.split('-');
    for (let i = 1; i < palabrasSueltas.length; i++) {
        let primeraEnMayus = palabrasSueltas[i].charAt(0).toUpperCase();
        palabrasSueltas[i] = primeraEnMayus + palabrasSueltas[i].substring(1);
    }
    return palabrasSueltas.join('');
}
function pedirNombres() {
    let resultado = new Array();
    let texto = prompt("Introduzca un texto");
    while (isNaN(texto)) {
        resultado.push(texto);
        texto = prompt("Introduzca un texto")
    }
    return resultado;
}
function principal() {
    let propiedadesCSS = pedirNombres();
    for (let i = 0; i < propiedadesCSS.length; i++) {
        propiedadesCSS[i] = camelize(propiedadesCSS[i]);
    }
    alert("El escogido es " + sortear(propiedadesCSS));
}*/