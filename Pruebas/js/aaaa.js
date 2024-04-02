let p1 = document.getElementById("parrafo1");
let p2 = document.getElementById("parrafo2");
alert(p1.innerText)
alert(p1.innerHTML)
alert(p2.innerText)
alert(p2.innerHTML)


let boton = document.getElementById('boton');
boton.addEventListener('click', botonPulsado);

function botonPulsado() {
    //crear texto
    /*
        let lista = document.querySelector('ol');
        let nuevoLi = document.createElement('li');
        nuevoLi.innerText = prompt("Diga el texto");
    
        lista.append(nuevoLi)
    */



    /*
      let primerLi = document.querySelector('li')
         for (let li of primerLi) {
             alert(primerLi.innerText) 
         }
      */




    //Va sumando los mensajes de uno en uno
    /*
   let zonaMensajes = document.querySelector('.zonaMensajes')
   let numActual = parseInt(zonaMensajes.querySelector('strong').innerText) + 1;

   nuevoP.querySelector('strong').innerText = numActual;
*/



    /*
    let lista = document.querySelector('ol');
        let segundoLi = lista.querySelector('li:nth-child(2)')
    
        lista.append(nuevoLi)
    
*/
}



p1.innerHTML = '<strong>Cambiazo bro.</strong>';


let elementosDeLista = document.querySelectorAll('li');


for (let x of elementosDeLista) {


    //alert(x.innerText);


    x.innerText += ' leído';


}


function botonPulsado() {


    let lista = document.querySelector('ol');


    let nuevoLi = document.createElement('li');


    nuevoLi.innerText = prompt('Diga texto: ');


    lista.append(nuevoLi);


}


let boton2 = document.getElementById('boton2');
boton2.addEventListener('click', botonlocologo);
let i = 1;


function botonlocologo() {


    let nuevoParrafo = document.querySelector('.zonaMsg').cloneNode(true);


    nuevoParrafo.querySelector('strong').innerHTML = i;


    document.querySelector('p:last-child').after(nuevoParrafo);


    i++;


}
