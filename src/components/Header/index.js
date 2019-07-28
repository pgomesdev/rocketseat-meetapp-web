import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <Link to="/dashboard">
          <img src={logo} alt="MeetApp Logo" />
        </Link>
        <div>
          <div>
            <p>Pedro Ivo Gomes Silva</p>
            <Link to="/profile">Meu perfil</Link>
          </div>
          <button type="button">Sair</button>
        </div>
      </Content>
    </Container>
  );
}
