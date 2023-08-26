import React, { Component } from "react";
import BookingDetail from "./BookingDetail";
import { connect } from "react-redux";

class BookingList extends Component {
  renderBookingList = () => {
    return this.props.bookingList.map((booking) => {
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
    bookingList: state.ticketReducer.chairList.filter(
      (element) => element.dangChon === true
    ),
  };
};

export default connect(mapStateToProps)(BookingList);
