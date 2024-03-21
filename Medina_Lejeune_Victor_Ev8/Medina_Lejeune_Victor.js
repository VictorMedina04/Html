let arr = [];
function redondearElementos(arr) {
    let arrNum = new Array();

    for (let i; i < arr.length; i++) {
        if (parseFloat(arr[i])) {
            Math.round(arr[i]);
            arrNum.push(arr[i]);
        } else {
            arr[i].split;
        }
    }
    return arrNum;
}

function eliminarExtremos(arr) {
    redondearElementos(arr);
    let mayor;
    let menor;
    for (let i; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
        }
    }
    for (let i; i < arr.length; i++) {
        if (arr[i] < menor) {
            menor = arr[i];
        }
    }
    arr.splice(0, mayor);
    arr.splice(0, menor);


    return arr;
}

function parsearNotas(str) {
    let arrNotas = new Array();
    str.split()

    return arrNotas;
}

function principal() {
    let str = "Jurado1:4.56#Jurado2:nulo#Jurado3:9.28#Jurado4:3.34#Jurado5:5.9#Jurado6:7.32";
    let arr = new Array();
    let notaMedia = 0;
    str = parsearNotas(str).redondearElementos(arr).eliminarExtremos(arr);


    for (let i; i < arr.length; i++) {
        notaMedia += arr[i] / arr.length;
    }
    return notaMedia;
}

alert(principal());