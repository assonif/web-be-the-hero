import React from 'react';

import RegisterSection from '../../components/RegisterSection';

import { Container, InternalContainer, Form } from './styles';

export default function Register() {
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

        <Form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="Email" />
          <input placeholder="WhatsApp" />

          <div>
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </Form>
      </InternalContainer>
    </Container>
  );
}
