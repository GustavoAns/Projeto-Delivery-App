import React, { useState } from 'react';

export default function Home() {
  const [date, setDate] = useState({ value: '' });
  const handleChange = (event) => { setDate({ value: event.target.value }); };
  return (
    <div className="bg-light d-flex justify-content-center align-items-center vh-100">
      <div>
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

      <h1 className="display-4">Homepage</h1>
    </div>
  );
}
