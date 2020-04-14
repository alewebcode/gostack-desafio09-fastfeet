import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAdd, MdRemoveRedEye, MdEdit, MdDelete } from 'react-icons/md';
import history from '../../services/history';

import ActionMenu from '~/components/ActionMenu';

import api from '~/services/api';

import { Container, Content, Status } from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [searchValue] = useState('');

  // async componentDidMount() {
  //   const response = await api.get('orders');

  //   this.setState({orders:response.data})
  // }

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('orders', {
        params: {
          q: searchValue,
        },
      });

      setOrders(response.data);
    }
    loadOrders();
  }, [searchValue]);

  return (
    <Container>
      <h1>Gerenciando encomendas</h1>
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
              <th>Destinatário</th>
              <th>Entregador</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id}>
                <td>#{order.id}</td>
                <td>{order.recipient.name}</td>
                <td>{order.deliveryman.name}</td>
                <td>{order.recipient.city}</td>
                <td>{order.recipient.state}</td>
                <td>
                  <Status status={order.status}>
                    <span>{order.status}</span>
                  </Status>
                </td>
                <td>
                  <ActionMenu>
                    <button type="button" onClick={() => ''}>
                      <MdRemoveRedEye color="#8E5BE8" />
                      Visualizar
                    </button>
                    <button type="button" onClick={() => ''}>
                      <MdEdit color="#4D85EE" />
                      Editar
                    </button>
                    <button type="button" onClick={() => ''}>
                      <MdDelete color="#DE3B3B" />
                      Excluir
                    </button>
                  </ActionMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
