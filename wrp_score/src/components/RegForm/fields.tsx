import { InputAdornment, InputBaseProps, TextFieldProps } from '@mui/material'

type TRegistrationField = TextFieldProps & {
  inputProps?: InputBaseProps
  values?: any
}

export enum Fields {
  Name = 'name',
  Surname = 'surname',
  Gender = 'gender',
  Calender = 'calender',
  BirthYear = 'birthYear',
  BodyWeight = 'bodyWeight',
}

export enum Gender {
  Male = 'M',
  Female = 'F',
}

export const registrationFields: TRegistrationField[] = [
  {
    name: Fields.Name,
    label: 'First name',
    variant: 'standard'
  },
  {
    name: Fields.Surname,
    label: 'Last name',
    type: 'surname',
    variant: 'standard'
  },
  {
    name: Fields.Gender,
    variant: 'standard',
    label: 'Gender',
    type: 'gender',
    select: true,
    values: [
      { label: 'Male', value: Gender.Male },
      { label: 'Female', value: Gender.Female }
    ]
  },
  {
    name: Fields.Calender,
    label: 'Birth year',
    type: 'calender',
    variant: 'standard',
    helperText: 'YYYY-MM-DD'
  },
  {
    name: Fields.BodyWeight,
    label: 'Body weight',
    variant: 'standard',
    inputProps: {
      endAdornment: <InputAdornment position="start">kg</InputAdornment>
    }
  },
  {
    label: 'Class',
    type: 'calender',
    variant: 'filled',
    inputProps: { readOnly: true }
  }
]
