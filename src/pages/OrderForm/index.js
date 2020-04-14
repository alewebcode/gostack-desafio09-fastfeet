import React, { useState } from 'react';
import { Form } from '@unform/web';

import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import Select from '~/components/Form/AsyncSelect';
import Input from '~/components/Form/Input';
import api from '~/services/api';
import { Container, Content } from './styles';

export default function OrderForm() {
  function handleSubmit() {}

  const [recipient, deliveryman] = useState('');

  async function loadData(value) {
    const response = await api.get(`recipients?filter=${value}`);

    if (response.ok) {
      // const data = await response.json();

      const recipients = response.data.map((rec) => ({
        label: rec.name,
        value: rec.name,
      }));

      return recipients;
    }

    return [];
  }

  return (
    <Container>
      <div>
        <h1>Cadastro de encomendas</h1>

        <span>
          <button className="grey">
            <MdKeyboardArrowLeft />
            Voltar
          </button>
          <button type="submit" className="purple" onSubmit={handleSubmit}>
            <MdDone />
            Salvar
          </button>
        </span>
      </div>
      <Content>
        <Form>
          <Select
            name="recipient"
            defaultOptions
            label="Destinatário"
            placeholder="Selecione o destinatário"
            loadOptions={(inputValue) => loadData(inputValue)}
          />

          <Select name="deliveryman" label="Entregador" />

          <div>
            <Input name="product" label="Produto" type="text" />
          </div>
        </Form>
      </Content>
    </Container>
  );
}
