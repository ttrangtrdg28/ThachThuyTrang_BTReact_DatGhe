import React, { Component } from "react";
import BookingDetail from "./BookingDetail";
import { connect } from "react-redux";

class BookingList extends Component {
  renderBookingList = () => {
    const list = this.props.bookingList.flatMap(
      (element) => element.danhSachGhe
    );

    let itm = list.filter((item) => item.dangChon === true);

    let lst = itm.reduce((total, ticket) => (total + ticket.gia, 0));

    return itm.map((booking) => {
      <BookingDetail key={booking.soGhe} booking={booking} />;
    });
  };

  render() {
    return (
      <table className="table-bordered mt-4 text-white">
        <thead>
          <tr align="center">
            <th width={100}>Số ghế</th>
            <th width={250}>Giá</th>
            <th width={150}>Thao tác</th>
          </tr>
        </thead>
        <tbody>{this.renderBookingList()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookingList: state.ticketReducer.chairList,
  };
};

export default connect(mapStateToProps)(BookingList);
