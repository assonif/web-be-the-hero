import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container } from './styles';

import logoImage from '../../assets/logo.svg';

export default function RegisterSection({
  header,
  paragraph,
  route,
  backLink,
}) {
  return (
    <Container>
      <img src={logoImage} alt="Be The Hero" />

      <h1>{header}</h1>
      <p>{paragraph}</p>

      <Link className="back-link" to={route}>
        <FiArrowLeft size={16} color="E02041" />
        {backLink}
      </Link>
    </Container>
  );
}
