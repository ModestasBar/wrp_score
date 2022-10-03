enum STryStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAIL = 'fail',
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
  total: number | null;
  points: number | null;
  place: number | null;
}

export interface IStry {
  weight: number | null;
  status: STryStatus;
}
