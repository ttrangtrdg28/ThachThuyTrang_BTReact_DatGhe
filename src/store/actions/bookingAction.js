import { BOOKING, PAYMENT } from "../types/bookingType";

export const bookingAction = (data) => {
  return {
    type: BOOKING,
    payload: data,
  };
};

export const paymentAction = (data) => {
  return {
    type: PAYMENT,
    payload: data,
  };
};
