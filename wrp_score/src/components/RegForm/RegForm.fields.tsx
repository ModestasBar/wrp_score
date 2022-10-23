import { InputAdornment, InputBaseProps, TextFieldProps } from '@mui/material';
import { GameCategory, GenderOption } from '../../dto/general.dto';

export interface IDropdownOptions {
  label: string;
  value: string;
}

type TRegistrationField = TextFieldProps & {
  inputProps?: InputBaseProps;
  values?: IDropdownOptions[];
};

export const registrationFields: TRegistrationField[] = [
  {
    name: 'name',
    label: 'First name',
    variant: 'standard',
  },
  {
    name: 'surname',
    label: 'Last name',
    type: 'surname',
    variant: 'standard',
  },
  {
    name: 'gender',
    variant: 'standard',
    label: 'Gender',
    type: 'gender',
    select: true,
    values: [
      { label: 'Male', value: GenderOption.MALE },
      { label: 'Female', value: GenderOption.FEMALE },
    ],
  },
  {
    name: 'birthYear',
    label: 'Birth year',
    type: 'calender',
    variant: 'standard',
    helperText: 'YYYY-MM-DD',
  },
  {
    name: 'bodyWeight',
    label: 'Body weight',
    variant: 'standard',
    inputProps: {
      endAdornment: <InputAdornment position="start">kg</InputAdornment>,
    },
  },
  {
    name: 'classCategory',
    label: 'Category',
    variant: 'standard',
    select: true,
    values: [
      { label: 'Category 1', value: GameCategory.CATEGORY_1 },
      { label: 'Category 2', value: GameCategory.CATEGORY_2 },
      { label: 'Category 3', value: GameCategory.CATEGORY_3 },
      { label: 'Category 4', value: GameCategory.CATEGORY_4 },
    ],
  },
];
