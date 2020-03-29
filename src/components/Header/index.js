import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import { Container } from './styles';

export default function Header() {
  const ongName = localStorage.getItem('ongName');

  const history = useHistory();

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <Container>
      <img src={logoImage} alt="Be The Hero" />
      <span>Bem vinda, {ongName}</span>

      <Link className="button" to="/incidents/new">
        Cadastrar novo caso
      </Link>
      <button type="button" onClick={handleLogout}>
        <FiPower size={18} />
      </button>
    </Container>
  );
}
