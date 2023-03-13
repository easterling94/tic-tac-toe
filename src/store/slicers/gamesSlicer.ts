import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fakeGames } from '../fake-games-store'

type IBoardRow = Array<null | boolean>

export interface IGame {
  id: string;
  name: string;
  isCurrentUserFirst: boolean,
  board: IBoardRow
}

interface InitialState {
  games: Array<IGame>,
  currentUserGame: null | string,
}

const NEW_GAME: IBoardRow = [
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
    playingGame(state) {}
  }
})