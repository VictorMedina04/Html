num = prompt("Numero a comprobar")
alert(comprobarParImpar(num));

function comprobarParImpar(n){
    if(n%2==0){
        return "El número es par"
    }else{
        return "El número es impar"
    }
}