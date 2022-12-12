import { IAllGames, initAllGamesValue } from './game.dto';

export interface IParticipant {
  id: number | string;
  name: string;
  surname: string;
  gender: string;
  bodyWeight: string;
  classCategory: string;
  birthYear: string;
  allGames: IAllGames;
  age: string;
  total: string | null;
  points: string | null;
  place: string | null;
}

export const initialParticipant: Omit<IParticipant, 'id'> = {
  name: '',
  surname: '',
  gender: '',
  bodyWeight: '',
  classCategory: '',
  birthYear: '',
  age: '',
  allGames: initAllGamesValue,
  total: '',
  points: '',
  place: '',
};
