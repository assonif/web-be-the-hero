import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logoImage} alt="Be The Hero" />
      <span>Bem vinda, APAD</span>

      <Link className="button" to="/incidents/new">
        Cadastrar novo caso
      </Link>
      <button type="button">
        <FiPower size={18} />
      </button>
    </Container>
  );
}
