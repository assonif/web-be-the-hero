import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { Container, Form } from './styles';

import heroesImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';

export default function Logon() {
  return (
    <Container>
      <Form>
        <img src={logoImage} alt="Be The Hero" />

        <form>
          <h1>Faça seu logon</h1>
          <input type="text" placeholder="Sua ID" />
          <Link className="button" to="/profile">
            Entrar
          </Link>
          {/* <button className="button" type="submit">
            Entrar
          </button> */}
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </Form>
      <img src={heroesImage} alt="Heroes" />
    </Container>
  );
}
