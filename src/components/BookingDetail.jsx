import React, { Component } from "react";
import { bookingAction } from "../store/actions/bookingAction";
import { connect } from "react-redux";

class BookingDetail extends Component {
  render() {
    const { soGhe, gia } = this.props.item;
    console.log(this.props.item);
    return (
      <tr>
        <td className="pl-3">{soGhe}</td>
        <td className="pl-3">{gia}</td>
        <td align="center">
          <button
            className="btn btn-danger my-2"
            onClick={() => this.props.dispatch(bookingAction(this.props.item))}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default connect()(BookingDetail);
