import { createEvent, createStore } from "effector";

type Player = {
  name: string,
  score: number,
  choice: 'rock' | 'paper' | 'scissors' | null,
}

type Players = {
  playerOne: Player,
  playerTwo: Player,
}

interface Store {
  players: {
    playerOne: Player,
    playerTwo: Player,
  }
  newPlayerName: string,
};

const removePlayer = (state: Store, player: string): Players => {
  switch (true) {
    case (state.players.playerOne.name === player):
      return {
        playerOne: {
          name: state.players.playerTwo.name,
          score: 0,
          choice: null
        },
        playerTwo: {
          name: '',
          score: 0,
          choice: null
        },
      };
    case (state.players.playerTwo.name === player):
      return {
        ...state.players,
        playerTwo: {
          name: '',
          score: 0,
          choice: null
        },
      };
    default:
      return { ...state.players }
  }
}

const addPlayers = (state: Store, players: string[]): Players => {
  return ({
    playerOne: {
      name: players[0] || '',
      score: 0,
      choice: null
    },
    playerTwo: {
      name: players[1] || '',
      score: 0,
      choice: null
    },
  })
}

const editScore = (players: Players, choices: { username: string, choice: string }[]): Players => {
  console.log(choices)
  switch (true) {
    case (choices[0].choice === choices[1].choice):
      return players;
    case ((choices[0].choice === 'paper' && choices[1].choice === 'rock') ||
      (choices[0].choice === 'rock' && choices[1].choice === 'scissors') ||
      (choices[0].choice === 'scissors' && choices[1].choice === 'paper')
    ):
      return {
        ...players,
        playerOne: {
          ...players.playerOne,
          score: players.playerOne.score + 1,
        }
      };
    default:
      return {
        ...players,
        playerTwo: {
          ...players.playerTwo,
          score: players.playerTwo.score + 1,
        }
      };
  }
}

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
export const setPlayers = createEvent<string[]>();
export const playerDisconnected = createEvent<string>();
export const bothMadeChoice = createEvent<{ username: string, choice: string }[]>();


export default createStore<Store>(initialState)
  .on(setUsername, (state, newPlayerName) => ({ ...state, newPlayerName }))
  .on(setPlayers, (state, players) => ({
    ...state,
    players: addPlayers(state, players)
  }))
  .on(playerDisconnected, (state, playerName) => ({
    ...state,
    players: removePlayer(state, playerName)
  }))
  .on(bothMadeChoice, (state, choices) => ({
    ...state,
    players: editScore(state.players, choices),
  }))