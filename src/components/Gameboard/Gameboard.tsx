import styled from '@emotion/styled';
import { GameText } from '../GameText';
import { CurrentChoice } from '../CurrentChoice';

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Gameboard = () => (
  <Container>
    <GameText />
    <CurrentChoice />
  </Container>
);
