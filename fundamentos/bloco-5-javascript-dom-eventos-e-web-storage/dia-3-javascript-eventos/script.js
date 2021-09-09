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

  function createButton(buttonNome){
    let buttonContainer = document.querySelector('.buttons-container')
    let botão = document.createElement('button');
    botão.innerText = buttonNome
    botão.id = 'btn-holiday'
    buttonContainer.appendChild(botão)
  }

createButton('Feriados')