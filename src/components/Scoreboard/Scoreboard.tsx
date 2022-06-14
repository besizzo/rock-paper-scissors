import { Container, Player } from './styles';
// import dots from '../../shared/images/dots.svg';
// import circle from '../../shared/images/dots-circle.svg';
import { useStore } from 'effector-react';
import $store from '../../store';

export const Scoreboard = () => {
  const store = useStore($store);

  return (
    <Container>
      <Player style={{ textAlign: 'left' }}>
        <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
          {store.players.playerOne.name || '---'}
        </span>
        <span style={{ display: 'block' }}>
          {store.players.playerOne.score}
        </span>
      </Player>
      <Player style={{ textAlign: 'right' }}>
        <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
          {store.players.playerTwo.name || '---'}
        </span>
        <span style={{ display: 'block' }}>
          {store.players.playerTwo.score}
        </span>
      </Player>
    </Container>
  );
};
