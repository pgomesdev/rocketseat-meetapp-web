import React from 'react';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <Link to="/create">
          <MdAddCircleOutline size={20} color="#fff" />
          Novo meetup
        </Link>
      </header>
      <ul>
        <li>
          <p>Meetup de React Native</p>
          <div>
            <p>24 de Junho, às 20h</p>
            <Link to="/details">
              <MdChevronRight size={24} color="#fff" />
            </Link>
          </div>
        </li>
        <li>
          <p>NodeJS Meetup</p>
          <div>
            <p>24 de Junho, às 20h</p>
            <Link to="/details">
              <MdChevronRight size={24} color="#fff" />
            </Link>
          </div>
        </li>
        <li>
          <p>Rocketseat Meetup</p>
          <div>
            <p>24 de Junho, às 20h</p>
            <Link to="/details">
              <MdChevronRight size={24} color="#fff" />
            </Link>
          </div>
        </li>
      </ul>
    </Container>
  );
}
