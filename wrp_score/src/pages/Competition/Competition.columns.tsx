import { IParticipant, IStry } from '../../dto/participant.dto';

export interface ICompRow {
  editable: boolean;
  content: string | null | number | IStry;
}

export const competitionRow = ({
  name,
  surname,
  gender,
  bodyWeight,
  classCategory,
  total,
  points,
  place,
  s1,
  s2,
  s3,
}: IParticipant): ICompRow[] => [
  {
    content: `${name} ${surname}`,
    editable: false,
  },
  {
    content: gender,
    editable: false,
  },
  {
    content: bodyWeight,
    editable: false,
  },
  {
    content: classCategory,
    editable: false,
  },
  {
    content: s1,
    editable: true,
  },
  {
    content: s2,
    editable: true,
  },
  {
    content: s3,
    editable: true,
  },
  {
    content: total,
    editable: false,
  },
  {
    content: points,
    editable: false,
  },
  {
    content: place,
    editable: false,
  },
];

export enum headColumnId {
  NAME,
  GENDER,
  BODY_WEIGHT,
  CLASS_CATEGORY,
  S1,
  S2,
  S3,
  BEST,
  POINTS,
  PLACE,
}

export const competitionHeadColumns = [
  {
    label: 'Name',
    id: headColumnId.NAME,
    sx: {
      width: '200px',
      borderRight: '1px solid black',
    },
  },
  {
    label: 'Gender',
    id: headColumnId.GENDER,
    sx: {
      width: '100px',
      borderRight: '1px solid black',
    },
  },
  {
    label: 'Weight',
    id: headColumnId.BODY_WEIGHT,
    sx: {
      width: '100px',
      borderRight: '1px solid black',
    },
  },
  {
    label: 'Category',
    id: headColumnId.CLASS_CATEGORY,
    sx: {
      width: '100px',
      borderRight: '1px solid black',
    },
  },
  {
    label: 'S1',
    id: headColumnId.S1,
    sx: {
      width: '200px',
      borderRight: '1px solid black',
    },
  },
  {
    label: 'S2',
    id: headColumnId.S2,
    sx: {
      width: '200px',
      borderRight: '1px solid black',
    },
  },
  {
    label: 'S3',
    id: headColumnId.S3,
    sx: {
      width: '200px',
      borderRight: '1px solid black',
    },
  },
  {
    label: 'Best',
    id: headColumnId.BEST,
  },
  {
    label: 'Points',
    id: headColumnId.POINTS,
  },
  {
    label: 'Place',
    id: headColumnId.PLACE,
  },
];
