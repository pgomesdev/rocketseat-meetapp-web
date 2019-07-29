import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdCameraAlt, MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';

export default function CreateEdit() {
  return (
    <Container>
      <div>
        <div>
          <MdCameraAlt size={54} color="rgba(255, 255, 255, 0.3)" />
          <p>Selecionar imagem</p>
        </div>
      </div>
      <Form>
        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <Input name="date" placeholder="Data do Meetup" />
        <Input name="location" placeholder="Localização" />
        <div>
          <button type="submit">
            <MdAddCircleOutline size={20} color="#fff" />
            Salvar Meetup
          </button>
        </div>
      </Form>
    </Container>
  );
}
