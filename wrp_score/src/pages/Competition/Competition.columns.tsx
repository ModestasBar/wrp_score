import { AttemptName, GameName, IAttempt } from '../../dto/game.dto';
import { IParticipant } from '../../dto/participant.dto';

interface IEditable {
  editableId: AttemptName;
  data: IAttempt;
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
  allGames: {
    [GameName.Game_1]: {
      [AttemptName.S_1]: s1,
      [AttemptName.S_1]: s2,
      [AttemptName.S_1]: s3,
    },
  },
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
      editableId: AttemptName.S_1,
      data: s1,
    },
  },
  {
    editable: {
      editableId: AttemptName.S_2,
      data: s2,
    },
  },
  {
    editable: {
      editableId: AttemptName.S_3,
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
  S_1,
  S_2,
  S_3,
  BEST,
  POINTS,
  PLACE,
}

export const competitionHeadColumns = [
  {
    label: 'Name',
    id: headColumnId.NAME,
  },
  {
    label: 'Gender',
    id: headColumnId.GENDER,
  },
  {
    label: 'Weight',
    id: headColumnId.BODY_WEIGHT,
  },
  {
    label: 'Category',
    id: headColumnId.CLASS_CATEGORY,
  },
  {
    label: 'S1',
    id: headColumnId.S_1,
  },
  {
    label: 'S2',
    id: headColumnId.S_2,
  },
  {
    label: 'S3',
    id: headColumnId.S_3,
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
