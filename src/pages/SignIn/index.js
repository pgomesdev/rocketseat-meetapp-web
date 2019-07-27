import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { Wrapper, Container } from './styles';

import logo from '../../assets/logo.svg';

export default function SignIn() {
  function handleSubmit(data) {
    return data;
  }

  return (
    <Wrapper>
      <Container>
        <img src={logo} alt="MeetApp logo" />
        <Form onSubmit={handleSubmit}>
          <Input name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <button type="submit">Acessar</button>
        </Form>
        <Link to="/register">Criar conta</Link>
      </Container>
    </Wrapper>
  );
}
