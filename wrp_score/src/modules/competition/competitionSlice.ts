import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICompetitionState {
  competitionName: string;
}

const initialState: ICompetitionState = {
  competitionName: '',
};

export const competitionSlice = createSlice({
  name: 'competitionDetails',
  initialState,
  reducers: {
    changeCompetition: (state, action: PayloadAction<any>) => {
      state.competitionName = action.payload;
    },
  },
});

export const { changeCompetition } = competitionSlice.actions;

export default competitionSlice.reducer;
