import { ChooseName } from '../../components/ChooseName';
import { Game } from '../../components/Game';
import styled from '@emotion/styled';
import { useStore } from 'effector-react';
import $store from '../../store';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 620px;
  position: relative;
`;

export const Main = () => {
  const store = useStore($store);
  return <Container>{store.isLogged ? <Game /> : <ChooseName />}</Container>;
};
