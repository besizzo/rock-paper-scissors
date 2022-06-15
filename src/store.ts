import { createEvent, createStore } from "effector";
import { removePlayer, addPlayers, addPoint, determineWinner } from './utils'

export type Choice = 'rock' | 'paper' | 'scissors' | null;

type Player = {
  name: string,
  score: number,
}

export type Players = {
  playerOne: Player,
  playerTwo: Player,
}

export interface Store {
  players: {
    playerOne: Player,
    playerTwo: Player,
  }
  newPlayerName: string,
  currentChoice: Choice,
  currentRoundWinner: string | null,
  isLogged: boolean;
};

const initialState: Store = {
  players: {
    playerOne: {
      name: '',
      score: 0,
    },
    playerTwo: {
      name: '',
      score: 0,
    },
  },
  newPlayerName: '',
  currentChoice: null,
  currentRoundWinner: null,
  isLogged: false,
};

export const setUsername = createEvent<string>();
export const setPlayers = createEvent<string[]>();
export const playerDisconnected = createEvent<string>();
export const bothMadeChoice = createEvent<{ username: string, choice: string }[]>();
export const playerMadeChoice = createEvent<Choice>();
export const loggedIn = createEvent();
export const loggedOff = createEvent();
export const roundEnded = createEvent();
export const playAgain = createEvent();

export default createStore<Store>(initialState)
  .on(setUsername, (state, newPlayerName) => ({ ...state, newPlayerName }))
  .on(setPlayers, (state, players) => ({
    ...state,
    players: addPlayers(players)
  }))
  .on(playerDisconnected, (state, playerName) => ({
    ...state,
    players: removePlayer(state, playerName),
    currentChoice: null,
    currentRoundWinner: null,
  }))
  .on(bothMadeChoice, (state, choices) => (addPoint(state, determineWinner(choices))))
  .on(playerMadeChoice, (state, choice) => ({
    ...state,
    currentChoice: choice,
  }))
  .on(loggedIn, (state) => ({
    ...state,
    isLogged: true,
  }))
  .on(loggedOff, (state) => ({
    ...state,
    currentChoice: null,
    currentRoundWinner: null,
    isLogged: false,
  }))
  .on(playAgain, (state) => ({
    ...state,
    currentRoundWinner: null,
    currentChoice: null,
  }))
