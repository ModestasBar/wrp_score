import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AttemptName, GameName } from '../dto/game.dto';
import { GameCategory, GenderOption } from '../dto/general.dto';

export interface ICompetitionState {
  gameName: GameName | '';
  category: GameCategory | '';
  gender: GenderOption | '';
  attempt: AttemptName | '';
}

const initialState: ICompetitionState = {
  gameName: '',
  category: '',
  gender: '',
  attempt: '',
};

export const competitionSlice = createSlice({
  name: 'competitionDetails',
  initialState,
  reducers: {
    changeGame: (state, action: PayloadAction<GameName>) => {
      state.gameName = action.payload;
    },
    changeCategory: (state, action: PayloadAction<GameCategory>) => {
      state.category = action.payload;
    },
    changeGender: (state, action: PayloadAction<GenderOption>) => {
      state.gender = action.payload;
    },
    changeAttempt: (state, action: PayloadAction<AttemptName>) => {
      state.attempt = action.payload;
    },
  },
});

export const { changeGame, changeCategory, changeGender, changeAttempt } =
  competitionSlice.actions;

export default competitionSlice.reducer;
