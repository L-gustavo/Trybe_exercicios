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

let days = document.querySelectorAll('.day');
for (let index = 0; index < days.length; index += 1) {
  days[index].addEventListener('mouseover', zoomDay)
  days[index].addEventListener('mouseout', voltaSizeDay)
}

function zoomDay(event){
  event.target.style.fontSize = '40px'
}

function voltaSizeDay(event){
  event.target.style.fontSize = '20px'
}

// 7 questao fazer uma tarefa personalizada no calendário/ criar uma <span>
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks"

function tarefaDia(projeto){
  let span = document.createElement('span');
  span.innerHTML = projeto
  let divElement = document.querySelector('.my-tasks')
  divElement.appendChild(span)
}

tarefaDia('projeto')

// 8 questao 

function adicionaCor(cor){
  let classElement = document.querySelector('.my-tasks')
  let div = document.createElement('div');
  div.innerHTML = "dia 13"
  div.className = 'task';
  div.style.backgroundColor = cor
  classElement.appendChild(div)
}

adicionaCor('blue');

// 9 questão
function divColor(){
  let taskSelected = document.getElementsByClassName('task selected');
  let myTask = document.querySelector('.task');
  myTask.addEventListener('click', function(event){
    if(taskSelected.length === 0){
      event.target.className = 'task selected';
    }
    else{
      event.target.className = 'task';
    }
  })
}
divColor();

// 10 questao

// setDayColor();
function corLegendaTarefa(cor) {
  let diaTarefa = document.querySelector('#days');
  diaTarefa.addEventListener('click', function (event) {
    event.target.style.color = cor;
  });
}
corLegendaTarefa('red')
// function setDayColor() {
//   let selectedTask = document.getElementsByClassName('task selected');
//   let days = document.querySelector('#days');
//   let taskDiv = document.querySelector('.task');
//   let taskColor = taskDiv.style.backgroundColor;
  
//   days.addEventListener('click', function(event){
//     let eventTargetColor = event.target.style.color;
//     if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
//       let color = selectedTask[0].style.backgroundColor;
//       event.target.style.color = color;
//     } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
//       event.target.style.color = 'rgb(119,119,119)';
//     }
//   });
// };
