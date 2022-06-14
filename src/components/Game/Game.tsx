import { useRef, useEffect } from 'react';
import io from 'socket.io-client';
import { Container } from './styles';
import { Scoreboard } from '../Scoreboard';
import { Gameboard } from '../Gameboard';
import { GameOptions } from '../GameOptions';

import { useStore } from 'effector-react';
import $store, {
  setPlayers,
  playerDisconnected,
  bothMadeChoice,
} from '../../store';

const SOCKET_URL = 'https://front-task-rps-4.herokuapp.com/';

export const Game = () => {
  const socketRef = useRef({});
  const store = useStore($store);

  useEffect(() => {
    const socket = io(SOCKET_URL, {
      query: {
        username: store.newPlayerName,
      },
    });
    socketRef.current = socket;
    // (socketRef.current as any) instead of regular socket does not help to prevent double emmition from the server side
    socket.on('connected', (player) => {
      console.log('player conntected: ', player);
    });
    socket.emit('get_players');
    socket.on('players_received', (players) => setPlayers(players));
    socket.on('disconnected', (playerName: { username: string }) => {
      playerDisconnected(playerName.username);
    });
    socket.on('game_finished', (payload) => {
      bothMadeChoice(payload.results);
    });
    socket.on('Error', (error) => console.log(error));
  }, []);

  return (
    <>
      <Container>
        <Scoreboard />
        <Gameboard />
        <GameOptions socket={socketRef} />
      </Container>
    </>
  );
};
