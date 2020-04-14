import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAdd, MdMoreHoriz } from 'react-icons/md';
import history from '../../services/history';

import ActionMenu from '~/components/ActionMenu';

import api from '~/services/api';

import { Container, Content } from './styles';

export default function Deliverymans() {
  const [deliverymans, setDeliverymans] = useState([]);
  const [searchValue] = useState('');

  useEffect(() => {
    async function loadDeliverymans() {
      const response = await api.get('deliverymans', {
        params: {
          q: searchValue,
        },
      });

      setDeliverymans(response.data);
    }
    loadDeliverymans();
  }, [searchValue]);

  return (
    <Container>
      <h1>Gerenciando entregadores</h1>
      <Content>
        <div>
          <Form>
            <Input type="text" name="filter" />
          </Form>

          <button type="submit" onClick={() => history.push('/orderform')}>
            <MdAdd size={20} /> Cadastrar
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Foto</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {deliverymans.map((deliveryman) => (
              <tr key={deliveryman.id}>
                <td>#{deliveryman.id}</td>
                <td>{deliveryman.avatar_id}</td>
                <td>{deliveryman.name}</td>
                <td>{deliveryman.email}</td>

                <td>
                  <MdMoreHoriz size={20} />
                  <ActionMenu route="" onRemoveClick="" onVisualizeClick="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
