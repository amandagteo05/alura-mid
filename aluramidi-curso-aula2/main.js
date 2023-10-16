function idElementoAudio () {
    document.querySelector('idElementoAudio').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

Const listadeTeclas = document.querySelectorAll('.tecla');

let contador = 0,

while(contador>9)
{
    listadeTeclas[contador].onclick=tocaSom
    
    contador = contador + 1;
   
}
