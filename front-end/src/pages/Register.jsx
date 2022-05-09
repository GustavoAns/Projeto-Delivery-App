import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import storage from '../utils/localStorage';
import api from '../services/api';
import validationEmail from '../utils/validations';

export default function Register() {
  const [formValues, setFormValues] = useState({ name: '', email: '', password: '' });
  const dataTestId = {
    inputName: 'common_register__input-name',
    inputEmail: 'common_register__input-email',
    inputPassword: 'common_register__input-password',
    buttonRegister: 'common_register__button-register',
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    api
      .post('/user/register', data)
      .then(({ token }) => storage.set('token', token))
      .then(() => navigate('/customer/products'))
      .catch((err) => console.error(err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = () => {
    const MIN_LENGTH_PASSWORD = 6;
    const MIN_LENGTH_NAME = 12;
    const { email, password, name } = formValues;
    const nameIsValid = name && +name.length >= MIN_LENGTH_NAME;
    const emailIsValid = validationEmail(email);
    const passwordIsValid = password && +password.length >= MIN_LENGTH_PASSWORD;
    return [emailIsValid, passwordIsValid, nameIsValid].every((field) => field);
  };

  const {
    inputEmail,
    inputName,
    inputPassword,
    buttonRegister } = dataTestId;
  return (
    <Container
      className="bg-light
    d-flex flex-column justify-content-center align-items-center vh-100"
    >
      <h1 className="text-center display-4">Cadastro</h1>
      <Form
        onSubmit={ handleSubmit }
        className="d-flex flex-column justify-content-center
        align-items-center border p-5 box-shadow"
      >
        <FormGroup>
          <Label for="name">
            Nome
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Seu nome"
            data-testid={ inputName }
            type="text"
            onChange={ handleInputChange }
            value={ formValues.name }
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">
            Login
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="email@trybeer.com.br"
            data-testid={ inputEmail }
            type="email"
            onChange={ handleInputChange }
            value={ formValues.email }
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">
            Senha
          </Label>
          <Input
            id="password"
            name="password"
            data-testid={ inputPassword }
            placeholder="***********"
            type="password"
            onChange={ handleInputChange }
            value={ formValues.password }
          />
        </FormGroup>
        <Button
          type="submit"
          disabled={ !validateForm() }
          color="success"
          data-testid={ buttonRegister }
          className="px-4 mb-3"
          style={ { width: '17rem' } }
        >
          CADASTRAR

        </Button>
      </Form>
    </Container>
  );
}
