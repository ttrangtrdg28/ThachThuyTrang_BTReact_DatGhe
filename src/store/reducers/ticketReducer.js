import data from "../../data/danhSachGhe.json";
import { BOOKING, PAYMENT } from "../types/bookingType";

const DEFAULT_STATE = {
  chairList: data,
  paymentList: [],
};

export const ticketReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case BOOKING: {
      const data = JSON.parse(JSON.stringify(state.chairList));
      const dataPayment = JSON.parse(JSON.stringify(state.paymentList));

      state.chairList = data.map((element) => {
        const danhSachGhe = [];
        element.danhSachGhe.forEach((item) => {
          danhSachGhe.push({
            ...item,
            dangChon:
              item.soGhe === action.payload.soGhe
                ? !item.dangChon
                : item.dangChon,
          });
        });
        return {
          ...element,
          danhSachGhe: danhSachGhe,
        };
      });

      const indexPayment = dataPayment.findIndex(
        (element) => element.soGhe === action.payload.soGhe
      );
      if (indexPayment !== -1) {
        dataPayment.splice(indexPayment, 1);
      }
      state.paymentList = dataPayment;
      break;
    }

    case PAYMENT: {
      const data = JSON.parse(JSON.stringify(state.chairList));

      state.chairList = data.map((element) => {
        element.danhSachGhe.forEach((item) => ({
          ...item,
          danhSachGhe:
            item.dangChon === true
              ? (item.daDat = true) && (item.dangChon = false)
              : (item.daDat = item.daDat),
        }));
        return {
          ...element,
        };
      });

      break;
    }
  }
  return { ...state };
};
