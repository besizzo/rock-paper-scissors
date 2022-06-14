import { useRef, useEffect } from 'react';
import io from 'socket.io-client';
import { Container } from './styles';
import { Scoreboard } from '../Scoreboard';
import { Gameboard } from '../Gameboard';
import { GameOptions } from '../GameOptions';

import { useStore } from 'effector-react';
import $store, {
  setUsername,
  addPlayer,
  setPlayers,
  playerDisconnected,
  bothMadeChoice,
} from '../../store';

const socketURL = 'https://front-task-rps-4.herokuapp.com/';

export const Game = () => {
  const socketRef = useRef({});
  const store = useStore($store);

  useEffect(() => {
    const socket = io(socketURL, {
      query: {
        username: store.newPlayerName,
      },
    });
    socketRef.current = socket;
    socket.on('connected', (player) => {
      console.log('player conntected: ', player); // ['Player_1_name', 'Player_2_name']
    });
    socket.emit('get_players');
    socket.on('players_received', (players) =>
      // console.log('those are:', payload),
      setPlayers(players),
    );
    socket.on('disconnected', (playerName: { username: string }) => {
      playerDisconnected(playerName.username);
    });
    socket.on('game_finished', (payload) => {
      console.log('FINISHED');
      bothMadeChoice(payload.results);
    });
    // console.log('state of players: ', store.players);
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
