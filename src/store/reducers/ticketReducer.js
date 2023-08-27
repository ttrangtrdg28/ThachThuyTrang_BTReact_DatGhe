import data from "../../data/danhSachGhe.json";
import { BOOKING } from "../types/bookingType";

const DEFAULT_STATE = {
  chairList: data,
};

export const ticketReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case BOOKING:
      const data = JSON.parse(JSON.stringify(state.chairList));

      console.log(data);

      console.log(action.payload);

      // data.forEach((element, index) => {
      //   element.danhSachGhe.find((item) => {
      //     item.soGhe === action.payload.soGhe;
      //   });
      //   data[index].danhSachGhe.dangChon = !data[index].danhSachGhe.dangChon;
      // });

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

      // const danhSachGhe = data.map((element) => element.danhSachGhe);
      // console.log(danhSachGhe);
      // const index = danhSachGhe.findIndex(
      //   (element) => element.soGhe === action.payload.soGhe
      // );
      // console.log(index);
      // data[index].danhSachGhe.dangChon = !data[index].danhSachGhe.dangChon;

      // state.chairList = data;
      break;
  }
  return { ...state };
};
