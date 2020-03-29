import React from 'react';

import RegisterSection from '../../components/RegisterSection';

import { Container, InternalContainer, Form } from './styles';

export default function NewIncident() {
  return (
    <Container>
      <InternalContainer>
        <RegisterSection
          header="Cadastrar novo caso"
          paragraph="Descreva o caso detalhadamento para encontrar um herói para resolver isso."
          route="/profile"
          backLink="Voltar para home"
        />

        <Form>
          <input type="text" placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <input type="text" placeholder="Valor em reais" />

          <button className="button" type="submit">
            Cadastrar{' '}
          </button>
        </Form>
      </InternalContainer>
    </Container>
  );
}
