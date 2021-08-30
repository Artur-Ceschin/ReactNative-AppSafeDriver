import React from 'react';
import {Image} from 'react-native';
import logoImg from '../../assets/logo.png';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {Container, Title, FlexView} from './styles';
export default function SignIn() {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu Login</Title>
      <Input />
      <Input />
      <FlexView>
        <Button>Cadastrar</Button>
        <Button>Entrar</Button>
      </FlexView>
    </Container>
  );
}
