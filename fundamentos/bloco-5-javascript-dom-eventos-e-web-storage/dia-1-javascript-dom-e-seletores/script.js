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

// 4 questao
function corrigiText(){
    let corrigiText = document.getElementsByTagName('h1')[0];
    corrigiText.innerText = 'Exercício 5.1 - JavaScript';
}
corrigiText();
// 5 questao
function textoMai(){
    let textoMai = document.getElementsByTagName('p')[0];
    textoMai.innerHTML = textoMai.innerHTML.toUpperCase();
}
textoMai();

// 6 questao
function botarNavegador(){
    let paragrafo3 = document.getElementsByTagName('p');
    for (let index = 0; index < paragrafo3.length; index += 1 ){
        console.log(paragrafo3[index].innerHTML); 
    }
}
botarNavegador();
