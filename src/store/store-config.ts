import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import { playerSlice } from './slicers/playerSlicer'
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

const rootReducer = combineReducers({
  player: playerSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;