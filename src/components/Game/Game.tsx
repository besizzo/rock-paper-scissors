import { Container } from './styles';
import { Scoreboard } from '../Scoreboard';
import { Gameboard } from '../Gameboard';
import { GameOptions } from '../GameOptions';

export const Game = () => {
  return (
    <>
      <Container>
        <Scoreboard />
        <Gameboard />
        <GameOptions />
      </Container>
    </>
  );
};
