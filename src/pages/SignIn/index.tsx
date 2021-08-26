import React from 'react';
import {Container, Title} from './styles';
import {Image} from 'react-native';
import logoImg from '../../assets/logo.png';
export default function SignIn() {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu Login</Title>
    </Container>
  );
}
