import { createEvent, createStore } from "effector";

type Player = {
  name: string,
  score: number,
  choice: 'rock' | 'paper' | 'scissors' | null,
}

interface Store {
  players: {
    playerOne: Player,
    playerTwo: Player,
  }
  newPlayerName: string,
};

// state.players.playerOne.name === ''
// ? state.players.playerOne.name = name
// : state.players.playerTwo.name = name;

const addNewPlayer = (state: Store, name: string): { playerOne: Player, playerTwo: Player } => {
  return state.players.playerOne.name === ''
    ? {
      playerOne: {
        name: name,
        score: 0,
        choice: null
      },
      playerTwo: state.players.playerTwo
    } : {
      playerOne: state.players.playerOne,
      playerTwo: {
        name: name,
        score: 0,
        choice: null
      },
    }
};

const initialState: Store = {
  players: {
    playerOne: {
      name: '',
      score: 0,
      choice: null,
    },
    playerTwo: {
      name: '',
      score: 0,
      choice: null,
    },
  },
  newPlayerName: '',
};

export const setUsername = createEvent<string>();
export const addPlayer = createEvent();


export default createStore<Store>(initialState)
  .on(setUsername, (state, newPlayerName) => ({ ...state, newPlayerName }))
  .on(addPlayer, (state) => ({
    ...state,
    newPlayerName: '',
    players: addNewPlayer(state, state.newPlayerName),

  }))