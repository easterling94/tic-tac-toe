import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fakeGames } from '../fake-games-store'

export interface IGame {
  id: string;
  name: string;
}

interface InitialState {
  games: Array<IGame>,
  chosenGame: null | string,
  currentUserGame: null | string,
}

const initialState: InitialState = {
  games: fakeGames,
  chosenGame: null,
  currentUserGame: null,
}

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    getGames(state) {

    },
    createNewGame(state, action: PayloadAction<string>) {
      state.games = [...state.games, {id: action.payload, name: `Стол ${state.games?.length + 1}`}];
      state.currentUserGame = action.payload;
    }
  }
})