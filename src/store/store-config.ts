import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { playerSlice } from './slicers/playerSlicer'
import { gamesSlice } from './slicers/gamesSlicer';

const rootReducer = combineReducers({
  player: playerSlice.reducer,
  games: gamesSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;