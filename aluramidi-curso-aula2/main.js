function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

Const listadeTeclas = document.querySelectorAll('.tecla');

while()
{
    listadeTeclas[0].onclick=tocaSomPom;
}