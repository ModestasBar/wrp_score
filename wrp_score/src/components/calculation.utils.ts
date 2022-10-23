import { STryStatus } from '../dto/game.dto';
import { ILiftLock } from '../pages/Competition/Competition';

export const calculateSuccessLift = (data: ILiftLock) => {
  const { participant, tryId, value } = data ?? {};

  return {
    ...participant,
    [tryId]: {
      status: STryStatus.SUCCESS,
      weight: value,
    },
    total: value,
  };
};

export const calculateBadLift = (data: ILiftLock) => {
  const { participant, tryId, value } = data ?? {};

  return {
    ...participant,
    [tryId]: {
      status: STryStatus.FAIL,
      weight: value,
    },
  };
};
