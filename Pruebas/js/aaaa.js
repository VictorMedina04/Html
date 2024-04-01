let p1 = document.getElementById("parrafo1");
let p2 = document.getElementById("parrafo2");
alert(p1.innerText)
alert(p1.innerHTML)
alert(p2.innerText)
alert(p2.innerHTML)



let boton = document.getElementById('boton');
boton.addEventListener('click', botonPulsado);

function botonPulsado() {
    let primerLi = document.querySelector('li')
    for (let li of primerLi) {
        alert(primerLi.innerText)
    }

}