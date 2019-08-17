import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { parseISO } from 'date-fns';
import { toast } from 'react-toastify';

import DatePicker from './DatePicker';

import api from '../../services/api';
import history from '../../services/history';

import BannerInput from './BannerInput';

import { Container } from './styles';

export default function CreateEdit({ match }) {
  const { params } = match;
  const meetup =
    useSelector(state => ({
      ...state.meetup[params.id],
      date: state.meetup[params.id] && parseISO(state.meetup[params.id].date),
    })) || {};

  if (params['0'] === 'edit' && !params.id) {
    return <Redirect to="/create" />;
  }

  async function handleSubmit(data) {
    try {
      if (!params.id) {
        await api.post('meetups', data);
      } else {
        await api.put(`meetups/${params.id}`, data);
      }

      history.push('/');

      toast.success(
        `Meetup ${params.id ? 'atualizado' : 'criado'} com sucesso.`
      );
    } catch (e) {
      toast.error('Ocorre um erro enquanto o meetup era salvo');
    }
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
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

CreateEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};
