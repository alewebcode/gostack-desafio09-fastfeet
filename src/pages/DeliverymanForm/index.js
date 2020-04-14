import React from 'react';

import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { Container, Content } from './styles';
import AvatartInput from './AvatarInput';

import api from '~/services/api';

export default function DeliverymanForm() {
  async function handleSubmit(data) {
    console.tron.log(data);
    try {
      await api.post('/deliverymans', data);
      toast.success('Cadastro efetuado com sucesso');
    } catch (err) {
      toast.error('Não foi possível cadastrar');
    }
  }

  return (
    <Container>
      <div>
        <h1>Cadastro de entregadores</h1>
        <span>
          <button type="button" className="grey">
            <MdKeyboardArrowLeft />
            Voltar
          </button>
          <button type="submit" className="purple" form="deliverymanform">
            <MdDone />
            Salvar
          </button>
        </span>
      </div>
      <Content>
        <Form id="deliverymanform" onSubmit={handleSubmit}>
          <AvatartInput name="avatar_id" />
          Nome
          <Input type="text" name="name" />
          Email
          <Input type="email" name="email" />
        </Form>
      </Content>
    </Container>
  );
}
