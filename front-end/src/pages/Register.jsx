import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import storage from '../utils/localStorage';
import api from '../utils/api';

export default function Register() {
  const [formValues, setFormValues] = useState({ name: '', email: '', password: '' });
  const [valueName, setValueName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    api
      .post('/user/register', data)
      .then(({token}) => storage.set('token', token))
      .then(() => navigate('/customer/products'))
      .catch((err) => console.error(err));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === "email") setFormValues({ ...formValues, email: value })
    if (name === "password") setFormValues({ ...formValues, password: value })
    if (name === "name") setFormValues({ ...formValues, name: value })
  };

  return (
    <Container className="bg-light d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="text-center display-4">Cadastro</h1>
      <Form onSubmit={handleSubmit}
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
            type="text"
            onChange={handleInputChange}
            value={formValues.name}
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
        <Button type="submit" color="success" className="px-4 mb-3" style={{ width: '17rem' }}>CADASTRAR</Button>
      </Form>
    </Container>
  );
}
