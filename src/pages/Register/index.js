import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, InternalContainer, Section, Form } from './styles';

import logoImage from '../../assets/logo.svg';

export default function Register() {
  return (
    <Container>
      <InternalContainer>
        <Section>
          <img src={logoImage} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="E02041" />
            Já sou cadastrado
          </Link>
        </Section>

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
