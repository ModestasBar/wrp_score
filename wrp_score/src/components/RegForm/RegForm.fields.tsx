import { InputAdornment, InputBaseProps, TextFieldProps } from '@mui/material';

export interface IDropdownOptions {
  label: string;
  value: string;
}

type TRegistrationField = TextFieldProps & {
  inputProps?: InputBaseProps;
  values?: IDropdownOptions[];
};

export enum fieldsName {
  NAME = 'name',
  SURNAME = 'surname',
  GENDER = 'gender',
  BIRTH_YEAR = 'birthYear',
  BODY_WEIGHT = 'bodyWeight',
  CLASS_CATEGORY = 'classCategory',
}

export enum genderVal {
  MALE = 'M',
  FEMALE = 'F',
}

export enum classCategory {
  CATEGORY_1 = 'category1',
  CATEGORY_2 = 'category2',
  CATEGORY_3 = 'category3',
  CATEGORY_4 = 'category4',
}

export const registrationFields: TRegistrationField[] = [
  {
    name: fieldsName.NAME,
    label: 'First name',
    variant: 'standard',
  },
  {
    name: fieldsName.SURNAME,
    label: 'Last name',
    type: 'surname',
    variant: 'standard',
  },
  {
    name: fieldsName.GENDER,
    variant: 'standard',
    label: 'Gender',
    type: 'gender',
    select: true,
    values: [
      { label: 'Male', value: genderVal.MALE },
      { label: 'Female', value: genderVal.FEMALE },
    ],
  },
  {
    name: fieldsName.BIRTH_YEAR,
    label: 'Birth year',
    type: 'calender',
    variant: 'standard',
    helperText: 'YYYY-MM-DD',
  },
  {
    name: fieldsName.BODY_WEIGHT,
    label: 'Body weight',
    variant: 'standard',
    inputProps: {
      endAdornment: <InputAdornment position="start">kg</InputAdornment>,
    },
  },
  {
    name: fieldsName.CLASS_CATEGORY,
    label: 'Category',
    variant: 'standard',
    select: true,
    values: [
      { label: 'Category1', value: classCategory.CATEGORY_1 },
      { label: 'Category2', value: classCategory.CATEGORY_2 },
      { label: 'Category3', value: classCategory.CATEGORY_3 },
      { label: 'Category4', value: classCategory.CATEGORY_4 },
    ],
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
