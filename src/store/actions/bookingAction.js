import { BOOKING } from "../types/bookingType";

export const bookingAction = (data) => {
  return {
    type: BOOKING,
    payload: data,
  };
};
