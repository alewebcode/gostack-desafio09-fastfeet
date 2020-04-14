import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/fastfeet-logo.png';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="fast feet" />
          <Link to="/orders">Encomendas</Link>
          <Link to="/deliverymans">Entregadores</Link>
          <Link to="/">Destinatários</Link>
          <Link to="/">Problemas</Link>
        </nav>

        <aside>
          <div>
            <strong>Admin</strong>
            <Link to="/logout">Sair</Link>
          </div>
        </aside>
      </Content>
    </Container>
  );
}
