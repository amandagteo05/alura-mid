function idElementoAudio () {
    document.querySelector('idElementoAudio').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listadeTeclas = document.querySelectorAll('.tecla');

let contador = 0,

while(contador<listadeTeclas.lenght){
    listaDeTeclas[contador].onclick = function () {
        tocaSom('#som_tecla_splash');
    
    };
    
    contador = contador + 1;
   
}
