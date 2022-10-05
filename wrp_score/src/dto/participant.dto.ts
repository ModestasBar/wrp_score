export enum STryStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAIL = 'fail',
}

export enum TryId {
  S1 = 's1',
  S2 = 's2',
  S3 = 's3',
}

export interface IParticipant {
  id: number;
  name: string;
  surname: string;
  gender: string;
  bodyWeight: string;
  classCategory: string;
  birthYear: string;
  age: string;
  s1: IStry;
  s2: IStry;
  s3: IStry;
  total: string | null;
  points: string | null;
  place: string | null;
}

export const initialParticipant: Omit<IParticipant, 'id'> = {
  name: '',
  surname: '',
  gender: '',
  bodyWeight: '',
  classCategory: '',
  birthYear: '',
  age: '',
  s1: {
    id: TryId.S1,
    weight: '',
    status: STryStatus.PENDING,
  },
  s2: {
    id: TryId.S2,
    weight: '',
    status: STryStatus.PENDING,
  },
  s3: {
    id: TryId.S3,
    weight: '',
    status: STryStatus.PENDING,
  },
  total: '',
  points: '',
  place: '',
};

export interface IStry {
  id: TryId;
  weight: string | null;
  status: STryStatus;
}
