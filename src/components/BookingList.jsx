import React, { Component } from "react";
import BookingDetail from "./BookingDetail";
import { connect } from "react-redux";

class BookingList extends Component {
  renderBookingList = () => {
    return this.props.bookingList.map((element) => {
      return element.danhSachGhe.map((item) => {
        if (item.dangChon) {
          return <BookingDetail key={item.soGhe} item={item} />;
        } else {
          return;
        }
      });
    });
  };

  render() {
    return (
      <>
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

        <div className="d-flex justify-content-start mt-3">
          <button className="btn btn-success">Confirm booking</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookingList: state.ticketReducer.chairList,
  };
};

export default connect(mapStateToProps)(BookingList);
