export enum STryStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAIL = 'fail',
}

export enum AttemptName {
  S_1 = 's1',
  S_2 = 's2',
  S_3 = 's3',
}

export enum GameName {
  Game_1 = 'game_1',
  Game_2 = 'game_2',
  Game_3 = 'game_3',
  Game_4 = 'game_4',
}

export interface IAttempt {
  weight: string | null;
  status: STryStatus;
}

export interface IGameAttempt {
  [AttemptName.S_1]: IAttempt;
  [AttemptName.S_2]: IAttempt;
  [AttemptName.S_3]: IAttempt;
}

export interface IAllGames {
  [GameName.Game_1]: IGameAttempt;
  [GameName.Game_2]: IGameAttempt;
  [GameName.Game_3]: IGameAttempt;
  [GameName.Game_4]: IGameAttempt;
}

export const initAttemptValue: IAttempt = {
  weight: '',
  status: STryStatus.PENDING,
};

export const initGameValue: IGameAttempt = {
  [AttemptName.S_1]: initAttemptValue,
  [AttemptName.S_2]: initAttemptValue,
  [AttemptName.S_3]: initAttemptValue,
};

export const initAllGamesValue: IAllGames = {
  [GameName.Game_1]: initGameValue,
  [GameName.Game_2]: initGameValue,
  [GameName.Game_3]: initGameValue,
  [GameName.Game_4]: initGameValue,
};
