import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import DatePicker from './DatePicker';

import api from '../../services/api';
import history from '../../services/history';

import BannerInput from './BannerInput';

import { Container } from './styles';

export default function CreateEdit() {
  async function handleSubmit(data) {
    await api.post('meetups', data);

    history.push('/');
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />
        <Input name="name" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <DatePicker name="date" />
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
