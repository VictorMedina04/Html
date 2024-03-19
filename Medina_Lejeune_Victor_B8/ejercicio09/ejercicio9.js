let cadena = prompt("Cadena a analizar");

alert(analizarCadena(cadena));

function analizarCadena(texto){
    if(texto==texto.toLowerCase()){
        return "Solo minúsculas"
    }if(texto==texto.toUpperCase()){
        return "Solo mayúsculas"
    }else{
        return "Mezcla de ambas"
    }
}