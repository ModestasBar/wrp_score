import { IParticipant, IStry, TryId } from '../../dto/participant.dto';

interface IEditable {
  editableId: TryId;
  data: IStry;
}

export interface ICompRow {
  editable?: IEditable;
  content?: string | null | number;
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
  },
  {
    content: gender,
  },
  {
    content: bodyWeight,
  },
  {
    content: classCategory,
  },
  {
    editable: {
      editableId: TryId.S1,
      data: s1,
    },
  },
  {
    editable: {
      editableId: TryId.S2,
      data: s2,
    },
  },
  {
    editable: {
      editableId: TryId.S3,
      data: s3,
    },
  },
  {
    content: total,
  },
  {
    content: points,
  },
  {
    content: place,
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
