function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // 1 questao colocar os dias no calendário de acordo com o que se pede
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
     17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  // 1 passo acessar a ul que tem a Id 'days'
  let elementUl = document.querySelector('#days');
  for(let index = 0; index < dezDaysList.length; index += 1){
    let elementLi = document.createElement('li');
    elementLi.className = 'day';
    elementLi.innerText = dezDaysList[index]
    elementUl.appendChild(elementLi)
    if(dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31){
      elementLi.classList.add('holiday');
    }
    if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || 
      dezDaysList[index] === 18 || dezDaysList[index] === 25){
      elementLi.classList.add('friday');
    }
  }
  // 2 questão criar uma função e add um botão
  let buttonContainer = document.querySelector('.buttons-container')
  
  function createButton(buttonNome){
    let botao = document.createElement('button');
    botao.innerText = buttonNome
    botao.id = 'btn-holiday'
    buttonContainer.appendChild(botao)
  }

createButton('Feriados')

  // 3 questao fazer com que o botão mude de cor ao ser clicado e ao 
  // ser clicado novamente voltar ao normal
  let botao = document.querySelector('#btn-holiday')
  botao.addEventListener('click', function(){
  let mudaCor = document.querySelectorAll('.holiday');
  for( let index = 0; index < mudaCor.length; index += 1){
    if(mudaCor[index].style.backgroundColor === 'black'){
      mudaCor[index].style.backgroundColor = "rgb(238,238,238)"
    } else {
      mudaCor[index].style.backgroundColor = 'black'
    }
  }
});

  // 4 questao 

  function fridayButton(friday){
    let button = document.createElement('button')
    // let buttonContainer = document.querySelector('.buttons-container')
    button.innerHTML = friday
    button.id = "btn-friday"
    buttonContainer.appendChild(button);
  }

  fridayButton('Sexta-feira')

  // 5 questao
  // ajuda do grupo de estudos
  let fridayB = document.querySelector('#btn-friday');

  fridayB.addEventListener('click', function(){
    let fridayCor = document.querySelectorAll('.friday')
    let array = [4,11,18,25];

    for (let index = 0; index < fridayCor.length; index += 1){
      if (fridayCor[index].innerText === 'Sexta-feira'){
        fridayCor[index].innerText = array[index];
      } else { 
        fridayCor[index].innerText = 'Sexta-feira'
      }
    }
  });
//  6 questao
