import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fakeGames } from '../fake-games-store'

interface IGame {
  id: number;
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
      state.games = [...state.games, {id: state.games?.length, name: action.payload}];
      state.currentUserGame = action.payload;
    }
  }
})