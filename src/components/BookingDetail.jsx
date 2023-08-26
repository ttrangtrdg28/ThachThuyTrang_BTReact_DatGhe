import React, { Component } from "react";

export default class BookingDetail extends Component {
  render() {
    return (
      <tr>
        <td className="pl-3">{this.props.booking.soGhe}</td>
        <td className="pl-3">{this.props.booking.gia}</td>
        <td align="center">
          <button className="btn btn-danger my-2">Xóa</button>
        </td>
      </tr>
    );
  }
}
