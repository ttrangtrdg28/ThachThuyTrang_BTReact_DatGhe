import React, { Component } from "react";
import BookingList from "./BookingList";

export default class TicketDetail extends Component {
  render() {
    return (
      <div>
        <div className="d-flex align-items-center">
          <div className="gheDuocChon"></div>
          <h4 className="pl-2 py-1 text-white ">Ghế đã chọn</h4>
        </div>

        <div className="d-flex align-items-center">
          <div className="gheDangChon"></div>
          <h4 className="pl-2 py-1 text-white ">Ghế đang chọn</h4>
        </div>

        <div className="d-flex align-items-center">
          <div className="ghe"></div>
          <h4 className="pl-2 py-1 text-white ">Ghế chưa đặt</h4>
        </div>

        <BookingList />
      </div>
    );
  }
}
