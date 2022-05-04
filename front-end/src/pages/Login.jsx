import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default function Login() {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    //setDate({ value: event.target.value });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target

    
    if (name === "email") setFormValues({ ...formValues, email: value })
    if (name === "password") setFormValues({ ...formValues, password: value })


  };


  return (
    <div className="bg-light d-flex justify-content-center align-items-center vh-100">
      <Form onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center
        align-items-center border p-5 box-shadow"
      >
        <FormGroup>
          <Label for="email">
            Login
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="email@trybeer.com.br"
            type="email"
            onChange={handleInputChange}
            value={formValues.email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">
            Senha
          </Label>
          <Input
            id="password"
            name="password"
            placeholder="***********"
            type="password"
            onChange={handleInputChange}
            value={formValues.password}

          />
        </FormGroup>
        <Button type="submit" color="success" className="px-4 mb-3"  >LOGIN</Button>
        <Button
          type="button"
          color="success"
          outline
          className="px-4"
        >
          Ainda não tenho conta
        </Button>
      </Form>
      {/* <div>
        logo
      </div>
      <div>
        nome do app
      </div>
      <form onSubmit={ handleChange }>
        <label htmlFor="emailID">
          login:
          <input id="emailID" type="text" name={ date } onChange={ handleChange } />
        </label>
        <div>
          senha
        </div>
        <div>
          button de login
          <input type="submit" value="Enviar" />
        </div>
      </form>
      <div>
        cadastra
      </div>
      <h1 className="display-4">Homepage</h1> */}
    </div>
  );
}
