function criarOption() {
  let selected = document.getElementById('estado-select');
  let estadosBr = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let i = 0; i < estadosBr.length; i += 1) {
  let options = document.createElement('option');
  selected.appendChild(options).innerText = estadosBr[i];
  selected.appendChild(options).value = estadosBr[i];
  }
}
criarOption();

// requisito 2 na parte da data

function validacaoData() {
  let inputValueData = document.querySelector('#data').value;
  if (inputValueData === '') {
    return alert('Prencher a data');
  }
    let pedacoInput = inputValueData.split('/');
    let dia = pedacoInput[0];
    let mes = pedacoInput[1];
    let ano = pedacoInput[2];
    if (dia < 1 || dia > 31) {
    return alert('Erro no dia');
  }
    if (mes < 1 || mes > 12) {
    return alert('Erro no mês');
  }
    if (ano < 0) {
    return alert('Erro no ano');
  }
    return true;
} 

let inputBota = document.querySelector('#envia')
inputBota.addEventListener('click', function (event) {
  event.preventDefault();
  validacaoData();
})
