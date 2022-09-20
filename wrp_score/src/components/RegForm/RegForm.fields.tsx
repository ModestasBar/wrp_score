import { InputAdornment, InputBaseProps, TextFieldProps } from '@mui/material';

export interface IDropdownOptions {
  label: string;
  value: string;
}

type TRegistrationField = TextFieldProps & {
  inputProps?: InputBaseProps;
  values?: IDropdownOptions[];
};

export enum Fields {
  NAME = 'name',
  SURNAME = 'surname',
  GENDER = 'gender',
  CALENDER = 'calender',
  BIRTH_YEAR = 'birthYear',
  BODY_WEIGHT = 'bodyWeight',
}

export enum Gender {
  Male = 'M',
  Female = 'F',
}

export const registrationFields: TRegistrationField[] = [
  {
    name: Fields.NAME,
    label: 'First name',
    variant: 'standard',
  },
  {
    name: Fields.SURNAME,
    label: 'Last name',
    type: 'surname',
    variant: 'standard',
  },
  {
    name: Fields.GENDER,
    variant: 'standard',
    label: 'Gender',
    type: 'gender',
    select: true,
    values: [
      { label: 'Male', value: Gender.Male },
      { label: 'Female', value: Gender.Female },
    ],
  },
  {
    name: Fields.CALENDER,
    label: 'Birth year',
    type: 'calender',
    variant: 'standard',
    helperText: 'YYYY-MM-DD',
  },
  {
    name: Fields.BODY_WEIGHT,
    label: 'Body weight',
    variant: 'standard',
    inputProps: {
      endAdornment: <InputAdornment position="start">kg</InputAdornment>,
    },
  },
  {
    label: 'Class',
    type: 'calender',
    variant: 'filled',
    inputProps: { readOnly: true },
  },
];

export const initValues = {
  name: '',
  surname: '',
  gender: '',
  bodyWeight: '',
  classCategory: '',
  birthYear: '',
  age: '',
  s1: {
    weight: null,
    status: false,
  },
  s2: {
    weight: null,
    status: false,
  },
  s3: {
    weight: null,
    status: false,
  },
  total: null,
  points: null,
  place: null,
};
