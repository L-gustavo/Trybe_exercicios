// 1 questao
function mudarP(){
    const textP = document.getElementsByTagName('p')[1];
    textP.innerHTML = "Trabalhando na área de tecnologia";
}
mudarP();

// 2 questao
function quadradoA(){
    const quadradoA = document.getElementsByClassName('main-content')[0];
    quadradoA.style.backgroundColor = 'rgb(76,164,109)';
}
quadradoA();

// 3 questao

function quadradoVermelho(){
    let quadradoVermelho = document.getElementsByClassName('center-content')[0];
    quadradoVermelho.style.backgroundColor = 'white';
}
quadradoVermelho()