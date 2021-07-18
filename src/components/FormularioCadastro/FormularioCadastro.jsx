import React from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import { useState } from "react";

function FormularioCadastro({TestaCPF}) {
  const [state, setState] = React.useState({
    promocoes: true,
    novidades: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [erros, setErros] = useState({cpf: {valido: true, texto: ""}});

  return (
    <form
        onSubmit={(event) => {
            event.preventDefault();
            console.log({nome, sobrenome, cpf, state})
        }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
            setNome(event.target.value)
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
            setSobrenome(event.target.value)
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={cpf}
        onChange={(event) => {
            setCpf(event.target.value)
        }}
        onBlur={(event) => {
            const ehValido = TestaCPF(cpf);
            setErros({cpf: ehValido})
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        control={
          <Switch
            checked={state.promocoes}
            onChange={handleChange}
            name="promocoes"
            color="primary"
          />
        }
        label="Promoções"
      />
      <FormControlLabel
        control={
          <Switch
            checked={state.novidades}
            onChange={handleChange}
            name="novidades"
            color="primary"
          />
        }
        label="Novidades"
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
