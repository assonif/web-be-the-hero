import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import RegisterSection from '../../components/RegisterSection';

import api from '../../services/api';

import { Container, InternalContainer, Form } from './styles';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = { title, description, value };

    try {
      await api.post('incidents', data, {
        headers: {
          authorization: ongId,
        },
      });

      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente');
    }
  }

  return (
    <Container>
      <InternalContainer>
        <RegisterSection
          header="Cadastrar novo caso"
          paragraph="Descreva o caso detalhadamento para encontrar um herói para resolver isso."
          route="/profile"
          backLink="Voltar para home"
        />

        <Form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Título do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Valor em reais"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar{' '}
          </button>
        </Form>
      </InternalContainer>
    </Container>
  );
}
