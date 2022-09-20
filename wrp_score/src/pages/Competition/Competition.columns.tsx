import EditableField from '../../components/EditableField';
import { IParticipant } from '../../dto/participant.dto';

export const competitionRow = ({
  name,
  surname,
  gender,
  bodyWeight,
  classCategory,
  total,
  points,
  place,
}: IParticipant) => [
  {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
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
    content: <EditableField />,
  },
  {
    content: <EditableField />,
  },
  {
    content: <EditableField />,
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
