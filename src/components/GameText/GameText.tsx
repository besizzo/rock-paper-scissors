import styled from '@emotion/styled';
import { useStore } from 'effector-react';
import $store from '../../store';

const HelperText = styled.p`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const GameText = () => {
  const store = useStore($store);
  let text: string;

  switch (true) {
    case store.players.playerTwo.name === '':
      text = 'waiting for another player to join in';
      break;
    case store.currentRoundWinner !== null:
      text = '';
      break;
    case store.currentChoice !== null:
      text = 'waiting for the opponent to make a choice';
      break;

    default:
      text = 'make your choice';
      break;
  }

  return <HelperText>{text}</HelperText>;
};
