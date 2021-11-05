import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeGeral = this.handleChangeGeral.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
    }
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      nome: value.toUpperCase(),
    });
  }

  handleChangeGeral({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <fieldset>
        <label>
          Nome:
          <input type='text' name= 'nome' value={ this.state.nome } maxlength='40' onChange={ this.handleChange } required></input>
        </label>
        <label>
          Email:
          <input type='email' name= 'email' value={ this.state.email } onChange={ this.handleChangeGeral} maxlength='50' required></input>
        </label>
        <label>
          CPF:
          <input type='text' name= 'cpf' value={ this.state.cpf } onChange={ this.handleChangeGeral} maxlength='11' required></input> 
        </label>
        <label>
          Endereço:
          <input type='text' name= 'endereco' value={ this.state.endereco } onChange={ this.handleChangeGeral} maxlength='200' required></input> 
        </label>
        <label>
          Cidade:
          <input type='text' name= 'cidade' value={ this.state.cidade } onChange={ this.handleChangeGeral} maxlength='28' required></input> 
        </label>
        <label>
          Estado:
          <input type='ComboBox' name= 'estado' value={ this.state.estado } onChange={ this.handleChangeGeral} maxlength='28' required></input> 
        </label>
      </fieldset>
    )
  }
}

export default App;
