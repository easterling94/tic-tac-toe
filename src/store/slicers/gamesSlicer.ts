import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fakeGames } from '../fake-games-store'

export type TBoardRow = null | 'X' | 'O'

export interface IGame {
  id: string;
  name: string;
  isCurrentUserFirst: boolean,
  board: Array<TBoardRow>
}

interface InitialState {
  games: Array<IGame>,
  currentUserGame: null | string,
}

const NEW_GAME: Array<TBoardRow> = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
]

const initialState: InitialState = {
  games: fakeGames,
  currentUserGame: null,
}

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    getGames(state) {

    },
    createNewGame(state, action: PayloadAction<string>) {
      state.games = [...state.games, {id: action.payload, name: `Стол ${state.games?.length + 1}`, isCurrentUserFirst: true, board: NEW_GAME}];
      state.currentUserGame = action.payload;
    },
    recordPlayerMove(state, action: PayloadAction<IGame>) {
      state.games = state.games.map(game => game.id === action.payload.id ? action.payload : game)
    }
  }
})