import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import storage from '../utils/localStorage';
import api from '../utils/api';

export default function Login() {
  const [formValues, setFormValues] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    api
      .post('/login', payload)
      .then(({ data }) => storage.set('token', data.token))
      .then(() => navigate('/customer/products'))
      .catch((err) => console.error(err));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setFormValues({ ...formValues, email: value });
    if (name === 'password') setFormValues({ ...formValues, password: value });
  };

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
            id="email"
            name="email"
            placeholder="email@trybeer.com.br"
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
            placeholder="***********"
            type="password"
            onChange={ handleInputChange }
            value={ formValues.password }
          />
        </FormGroup>
        <Button
          type="submit"
          color="success"
          className="px-4 mb-3"
          style={ { width: '17rem' } }
        >
          LOGIN

        </Button>
        <Link to="/register">
          <Button
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
