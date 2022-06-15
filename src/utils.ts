import { Store, Players, } from './store'

export const removePlayer = (state: Store, player: string): Players => {
  switch (true) {
    case (state.players.playerOne.name === player):
      return {
        playerOne: {
          name: state.players.playerTwo.name,
          score: 0,
        },
        playerTwo: {
          name: '',
          score: 0,
        },
      };

    case (state.players.playerTwo.name === player):
      return {
        playerOne: {
          name: state.players.playerOne.name,
          score: 0,
        },
        playerTwo: {
          name: '',
          score: 0,
        },
      };

    default:
      return { ...state.players }
  }
}

export const addPlayers = (players: string[]): Players => {
  return ({
    playerOne: {
      name: players[0] || '',
      score: 0,
    },
    playerTwo: {
      name: players[1] || '',
      score: 0,
    },
  })
}

export const addPoint = (state: Store, winner: string | null): Store => {
  switch (true) {
    case winner === null:
      return state;

    case (state.players.playerOne.name === winner):
      return {
        ...state,
        players: {
          ...state.players,
          playerOne: {
            ...state.players.playerOne,
            score: state.players.playerOne.score + 1,
          }
        },
        currentRoundWinner: winner,
      }

    default:
      return {
        ...state,
        players: {
          ...state.players,
          playerTwo: {
            ...state.players.playerTwo,
            score: state.players.playerTwo.score + 1,
          }
        },
        currentRoundWinner: winner,
      }
  }
}

export const determineWinner = (choices: { username: string, choice: string }[]) => {
  switch (true) {
    case (choices[0].choice === choices[1].choice):
      return 'draw'
    case ((choices[0].choice === 'paper' && choices[1].choice === 'rock') ||
      (choices[0].choice === 'rock' && choices[1].choice === 'scissors') ||
      (choices[0].choice === 'scissors' && choices[1].choice === 'paper')
    ):
      return choices[0].username
    default:
      return choices[1].username
  }
}