import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fakeGames } from '../fake-games-store'

interface IGame {
  id: number;
  name: string;
}

interface InitialState {
  games: null | Array<IGame>,
  chosenGame: null | string,
}

const initialState = {
  games: fakeGames
}

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    getGames(state) {

    },
    createNewGame(state, action: PayloadAction<string>) {
      console.log(action.payload)
      state.games = [...state.games, {id: state.games.length, name: action.payload}]
    }
  }
})