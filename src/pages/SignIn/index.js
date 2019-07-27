import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { signInRequest } from '../../store/modules/auth/actions';

import { Wrapper, Container } from './styles';

import logo from '../../assets/logo.svg';

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
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
