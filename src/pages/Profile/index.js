import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import { updateProfileRequest } from '../../store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={user} onSubmit={handleSubmit}>
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
        <button type="submit">
          <MdAddCircleOutline size={20} color="#fff" />
          Salvar perfil
        </button>
      </Form>
    </Container>
  );
}
