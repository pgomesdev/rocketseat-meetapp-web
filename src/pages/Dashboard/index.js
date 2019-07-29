import React, { useState, useEffect } from 'react';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function fetchMeetups() {
      const response = await api.get('schedule');

      const data = response.data.map(meetup => ({
        ...meetup,
        formattedDate: format(parseISO(meetup.date), "d 'de' MMMM', às' H'h'", {
          locale: pt,
        }),
      }));

      setMeetups(data);
    }

    fetchMeetups();
  }, []);

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
        {meetups.map(meetup => (
          <li>
            <p>{meetup.name}</p>
            <div>
              <p>{meetup.formattedDate}</p>
              <Link to={`/details/${meetup.id}`}>
                <MdChevronRight size={24} color="#fff" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
