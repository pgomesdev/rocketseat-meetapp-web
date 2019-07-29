import React from 'react';
import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';

import { Container, EditButton, CancelButton } from './styles';

export default function Details() {
  return (
    <Container>
      <header>
        <h1>Meetup de React Native</h1>
        <div>
          <EditButton>
            <MdEdit size={20} color="#fff" />
            Editar
          </EditButton>
          <CancelButton>
            <MdDeleteForever size={20} color="#fff" />
            Cancelar
          </CancelButton>
        </div>
      </header>
      <img
        src="https://www.nekonation.com/wp-content/uploads/2015/11/DJ-LineUp-November-2015-Purrth-WEB-940x300.jpg"
        alt="Meetup"
      />
      <p>
        O Meetup de React Native é um evento que reúne a comunidade de
        desenvolvimento mobile utilizando React a fim de compartilhar
        conhecimento. Todos são convidados. Caso queira participar como
        palestrante do meetup envie um e-mail para organizacao@meetuprn.com.br.
      </p>
      <div>
        <p>
          <MdEvent size={20} color="#fff" />
          24 de Junho, às 20h
        </p>
        <p>
          <MdPlace size={20} color="#fff" />
          Rua Guilherme Gembala, 260
        </p>
      </div>
    </Container>
  );
}
