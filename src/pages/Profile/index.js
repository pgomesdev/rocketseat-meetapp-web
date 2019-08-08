import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';

export default function Profile() {
  return (
    <Container>
      <Form>
        <Input name="fullname" placeholder="Digite seu nome completo" />
        <Input name="username" placeholder="Digite seu usário" />
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <hr />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Digite sua senha atual"
        />
        <Input
          type="password"
          name="password"
          placeholder="Digite sua nova senha"
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirme sua nova senha"
        />
        <button type="button">
          <MdAddCircleOutline size={20} color="#fff" />
          Salvar perfil
        </button>
      </Form>
    </Container>
  );
}
