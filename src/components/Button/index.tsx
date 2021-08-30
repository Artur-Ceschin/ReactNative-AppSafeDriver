import React, {ReactNode} from 'react';
import {Container, ButtonText} from './styles';

interface ButtonPros {
  children: ReactNode;
}

export function Button({children}: ButtonPros) {
  return (
    <Container>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
}
