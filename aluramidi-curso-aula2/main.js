function idElementoAudio () {
    document.querySelector('idElementoAudio').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listadeTeclas = document.querySelectorAll('.tecla');

let contador = 0,

for(contador<listadeTeclas.lenght){

    const tecla = listadeTeclas[contador]

    const instrumento = tecla.classlist[1]

    const idAudio = '#som_$(instrumento)'; //template string

    tecla.onclick = function () {
    tocaSom(IdAudio)    
    };
    
    contador = contador + 1;
   
}

 function tocasom(idElemento){
    document,querySelector(idElementoAudio),play()
 }

 consta listadeTeclas = documentSelectorAll('.tecla');

 let contador = 0;

  for (let contador = 0; contador < listadeTeclas.lenght; contador ++>){

    const tecla listadeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
  
  tecla.onkeydown = function (evento){

    if(evento.code === 'Enter'|| evento.code==='Space')
    tecla.classList.add('ativa');
}

tecla.onleyup = function () {
    tecla.classList.remove('ativa');
}
  }
 
