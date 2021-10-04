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

// function validacaoData() {
//   let inputValueData = document.querySelector('#data').value;
//   if (inputValueData === '') {
//     return alert('Prencher a data');
//   }
//     let pedacoInput = inputValueData.split('/');
//     let dia = pedacoInput[0];
//     let mes = pedacoInput[1];
//     let ano = pedacoInput[2];
//     if (dia < 1 || dia > 31) {
//     return alert('Erro no dia');
//   }
//     if (mes < 1 || mes > 12) {
//     return alert('Erro no mês');
//   }
//     if (ano < 0) {
//     return alert('Erro no ano');
//   }
//     return true;
// } 

// let inputBota = document.querySelector('#envia')
// inputBota.addEventListener('click', function (event) {
//   event.preventDefault();
//   validacaoData();
// })


// function limparDiv() {
//   let bodyInput = document.querySelector('body');
//   bodyInput.removeChild('div')
// }

// parse(dateString, format = 'YYYY-MM-DD')
let picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date, format) {
      // you should do formatting based on the passed format,
      // but we will just return 'D/M/YYYY' for simplicity
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      // dateString is the result of `toString` method
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(day, month, year);
  }
});
// parte 3

new window.JustValidate('.js-form-1', {
  rules: {
    nome: {
      required: true,
    },
    emai: {
      required: true,
    },
    cpf: {
      required: true,
    },
    endereco: {
      required: true,
    },
    cidade: {
      required: true,
    },
    cargo: {
      required: true,
    },
    descriçao: {
      required: true,
    },
      email: {
          email: true,
          remote: {
              url: 'https://just-validate-api.herokuapp.com/check-correct',
              sendParam: 'email',
              successAnswer: 'OK',
              method: 'GET'
          }
      },
      login: {
          remote: {
              url: 'https://just-validate-api.herokuapp.com/check-correct',
              sendParam: 'login',
              successAnswer: 'OK',
              method: 'GET'
          }
      }
  },
  messages: {
      email: {
          remote: 'Email already exist',
          email: 'Email not valid!'
      },
      login: {
          remote: 'Login already exist',
          required: 'Login is required!'
      }
  },
});
