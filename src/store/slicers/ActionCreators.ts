import { AppDispatch } from '../store-config'
import { gamesSlice } from './gamesSlicer'
import { userGameSet } from '../../services/local-storage'

export const createNewGameAction = (gameID: string) => async (dispatch: AppDispatch) => {
  userGameSet(gameID)
  dispatch(gamesSlice.actions.createNewGame(gameID))
}