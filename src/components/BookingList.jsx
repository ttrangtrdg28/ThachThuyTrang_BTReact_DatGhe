import React, { Component } from "react";
import BookingDetail from "./BookingDetail";
import { connect } from "react-redux";
import { paymentAction } from "../store/actions/bookingAction";

class BookingList extends Component {
  renderBookingList = () => {
    return this.props.bookingList.map((element) => {
      return element.danhSachGhe.map((item) => {
        if (item.dangChon) {
          return <BookingDetail key={item.soGhe} item={item} />;
        }
      });
    });
  };

  totalPrice = () => {
    let totalPrice = 0;
    this.props.bookingList.forEach((element) => {
      for (let i = 0; i < element.danhSachGhe.length; i++) {
        const ghe = element.danhSachGhe[i];
        if (ghe.dangChon) {
          totalPrice += parseInt(ghe.gia);
        }
      }
    });
    return totalPrice;
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
          <tbody>
            {this.renderBookingList()}

            <tr>
              <td className="pl-3">Tổng tiền</td>
              <td className="px-3" align="right">
                {this.totalPrice().toLocaleString()}
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <div className="d-flex justify-content-start mt-3">
          <button
            onClick={() =>
              this.props.dispatch(paymentAction(this.props.payment))
            }
            className="btn btn-success"
          >
            Confirm booking
          </button>
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
