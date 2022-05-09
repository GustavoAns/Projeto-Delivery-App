import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import storage from '../utils/localStorage';
import api from '../services/api';
import validationEmail from '../utils/validations';

export default function Login() {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [alertStatus, setAlertStatus] = useState({ open: false, message: '' });
  const dataTestId = {
    inputEmail: 'common_login__input-email',
    inputPassword: 'common_login__input-password',
    buttonLogin: 'common_login__button-login',
    buttonRegister: 'common_login__button-register',
    alertInvalidEmail: 'common_login__element-invalid-email',
  };

  const navigate = useNavigate();

  const openAlert = (message) => {
    const TIME_FOR_CLOSE = 5000;
    setAlertStatus({ open: true, message });
    setTimeout(() => setAlertStatus({ open: false, message: '' }), TIME_FOR_CLOSE);
  };

  const validateForm = () => {
    const MIN_LENGTH_PASSWORD = 6;
    const { email, password } = formValues;
    const emailIsValid = validationEmail(email);
    const passwordIsValid = password && +password.length >= MIN_LENGTH_PASSWORD;
    return [emailIsValid, passwordIsValid].every((field) => field);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    api
      .post('/login', payload)
      .then(({ data }) => storage.set('token', data.token))
      .then(() => navigate('/customer/products'))
      .catch(({ response: { data } }) => openAlert(data));
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const alertElement = () => (
    <p
      value={ alertStatus.message }
      data-testid={ dataTestId.alertInvalidEmail }
    >
      {alertStatus.message}
    </p>
  );

  const {
    inputEmail,
    inputPassword,
    buttonLogin,
    buttonRegister } = dataTestId;
  return (
    <div className="bg-light d-flex justify-content-center align-items-center vh-100">
      <Form
        onSubmit={ handleSubmit }
        className="d-flex flex-column justify-content-center
        align-items-center border p-5 box-shadow"
      >
        <FormGroup>
          <Label for="email">
            Login
          </Label>
          <Input
            data-testid={ inputEmail }
            id="email"
            name="email"
            placeholder="email@trybeer.com.br"
            type="email"
            onChange={ handleInputChange }
            value={ formValues.email }
          />
          { alertStatus.open && alertElement()}
        </FormGroup>
        <FormGroup>
          <Label for="password">
            Senha
          </Label>
          <Input
            data-testid={ inputPassword }
            id="password"
            name="password"
            placeholder="***********"
            type="password"
            onChange={ handleInputChange }
            value={ formValues.password }
          />
        </FormGroup>
        <Button
          data-testid={ buttonLogin }
          disabled={ !validateForm() }
          type="submit"
          color="success"
          className="px-4 mb-3"
          style={ { width: '17rem' } }
        >
          LOGIN
        </Button>
        <Link to="/register">
          <Button
            data-testid={ buttonRegister }
            type="button"
            color="success"
            outline
            className="px-4"
            style={ { width: '17rem' } }
          >
            Ainda não tenho conta
          </Button>
        </Link>
      </Form>
    </div>
  );
}
