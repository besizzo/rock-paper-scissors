import { useStore } from 'effector-react';
import $store, { loggedOff, playAgain } from '../../store';
import { Container, MessageBox, ButtonsBox, Button, P } from './styles';

export const MatchResults = ({ socket }: { socket: any }) => {
  const store = useStore($store);
  const message =
    store.currentRoundWinner === 'draw'
      ? 'draw'
      : `${store.currentRoundWinner} won this round`;

  const handleQuit = () => {
    (socket.current as any).disconnect();
    loggedOff();
  };

  const handleAgain = () => {
    playAgain();
  };

  return (
    <Container>
      <MessageBox>
        <P>{message}</P>
      </MessageBox>
      <ButtonsBox>
        <Button onClick={handleQuit}>quit</Button>
        <Button onClick={handleAgain}>again</Button>
      </ButtonsBox>
    </Container>
  );
};
