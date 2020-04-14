import React from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { useDispatch } from 'react-redux';
import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/fastfeet-logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('insira um email válido')
    .required('o email é obrigatorio'),
  password: Yup.string().required('o campo senha é obrigatório'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="fast feet" />
      <Form schema={schema} onSubmit={handleSubmit}>
        SEU EMAIL
        <Input name="email" type="email" />
        SUA SENHA
        <Input name="password" type="password" />
        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
