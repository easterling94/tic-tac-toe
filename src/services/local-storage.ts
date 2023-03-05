import { v4 as uuid } from 'uuid';

export const checkIfNewUser = () => {
  if(!localStorage.getItem('currentUser')) {
    const currentUserId = uuid();
    localStorage.setItem('currentUser', currentUserId)
  }
}

export const checkIfGameIsOn = () => {
  return localStorage.getItem('currentUserGame')
}

export const userGameSet = (game: string) => {
  if(checkIfGameIsOn()) return 
  localStorage.setItem('currentUserGame', game)
}

export const userGameDelete = () => {
  localStorage.removeItem('currentUserGame')
}