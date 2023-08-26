import data from "../../data/danhSachGhe.json";
import { BOOKING } from "../types/bookingType";

const DEFAULT_STATE = {
  chairList: data,
};

export const ticketReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case BOOKING:
      const data = JSON.parse(JSON.stringify(state.chairList));

      const index = data.findIndex(
        (element) =>
          element.danhSachGhe.soGhe === action.payload.danhSachGhe.soGhe
      );
      data[index].danhSachGhe.dangChon = !data[index].danhSachGhe.dangChon;

      state.chairList = data;
      break;
  }
  return { ...state };
};
