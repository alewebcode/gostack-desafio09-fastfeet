import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdMoreHoriz } from 'react-icons/md';

import { Container, MoreButton, ActionsList } from './styles';

export default function ActionMenu({ children, ...props }) {
  const [visible, setVisible] = useState(false);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <MoreButton onClick={handleVisible}>
        <MdMoreHoriz size={20} color="#999" />
      </MoreButton>

      <ActionsList visible={visible} {...props}>
        {children}
      </ActionsList>
    </Container>
  );
}

ActionMenu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
};
