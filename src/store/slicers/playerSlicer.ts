import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Player {
  player: number | null
}

const initialState: Player = {
  player: null
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayer (state, action: PayloadAction<number>) {
      state.player = action.payload
    }
  }
})