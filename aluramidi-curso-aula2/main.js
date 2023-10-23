function idElementoAudio () {
    document.querySelector('idElementoAudio').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listadeTeclas = document.querySelectorAll('.tecla');

let contador = 0,

while(contador<listadeTeclas.lenght){

    const tecla = listadeTeclas[contador]

    const instrumento = tecla.classlist[1]

    const idAudio = '#som_$(instrumento)'; //template string

    tecla.onclick = function () {
    tocaSom(IdAudio)    
    };
    
    contador = contador + 1;
   
}
