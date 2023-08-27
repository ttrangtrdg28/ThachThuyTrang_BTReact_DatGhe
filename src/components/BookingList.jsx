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
    return this.props.paymentList.reduce((total, element) => {
      console.log(element);
      if (element.dangChon) {
        console.log(element.gia);
        return (total += element.gia);
      }
    }, 0);
  };

  render() {
    return (
      <>
        <table className="table-bordered mt-4 text-white">
          <thead>
            <tr align="center">
              <th width={100}>Số ghế</th>
              <th width={250}>Giá</th>
              <th width={150}>Thao tsác</th>
            </tr>
          </thead>
          <tbody>
            {this.renderBookingList()}

            <tr>
              <td className="pl-3">Tổng tiền</td>
              <td className="px-3" align="right">
                {this.totalPrice()}
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
    paymentList: state.ticketReducer.paymentList,
  };
};

export default connect(mapStateToProps)(BookingList);
