import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { Wrapper, Container } from './styles';

import logo from '../../assets/logo.svg';

export default function SignUp() {
  function handleSubmit(data) {
    return data;
  }

  return (
    <Wrapper>
      <Container>
        <img src={logo} alt="MeetApp logo" />
        <Form onSubmit={handleSubmit}>
          <Input name="fullname" placeholder="Digite seu nome completo" />
          <Input name="username" placeholder="Digite seu nome de usuário" />
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <button type="submit">Cadastrar</button>
        </Form>
        <Link to="/">Já possuo conta</Link>
      </Container>
    </Wrapper>
  );
}
