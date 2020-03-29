import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import RegisterSection from '../../components/RegisterSection';

import api from '../../services/api';
import { Container, InternalContainer, Form } from './styles';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    const data = { name, email, phone, city, uf };

    try {
      const response = await api.post('ongs', data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente');
    }
  }

  return (
    <Container>
      <InternalContainer>
        <RegisterSection
          header="Cadastro"
          paragraph="Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os
        casos da sua ONG."
          route="/"
          backLink="Já sou cadastrado"
        />

        <Form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <div>
            <input
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              value={uf}
              onChange={(e) => setUf(e.target.value)}
              style={{ width: 80 }}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </Form>
      </InternalContainer>
    </Container>
  );
}
