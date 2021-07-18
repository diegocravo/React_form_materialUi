import React, { Component, Fragment } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
// import 'fontsource-roboto';

import { Container, Typography } from '@material-ui/core';

class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de Cadastro
        </Typography>
        <FormularioCadastro validarCpf={validarCpf} />
      </Container>
    );
  }
}

function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return {valido: false, texto: "CPF deve ter 11 dígitos"}
  }else {
    return {valido: true, texto: ""}
  }
}

export default App;
