import { IGame } from './slicers/gamesSlicer'

export const fakeGames: Array<IGame> = [
  {
    id: '1',
    name: 'Стол 1',
    isCurrentUserFirst: true,
    board: [
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
  },
  {
    id: '2',
    name: 'Стол 2',
    isCurrentUserFirst: false,
    board: [
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
  },  {
    id: '3',
    name: 'Стол 3',
    isCurrentUserFirst: true,
    board: [
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
  }
]