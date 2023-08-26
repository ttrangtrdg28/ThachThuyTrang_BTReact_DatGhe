import React, { Component } from "react";

import { connect } from "react-redux";
import { bookingAction } from "../store/actions/bookingAction";

class Ticket extends Component {
  renderContent = () => {
    return this.props.element.danhSachGhe.map((item) => {
      return (
        <td key={item.soGhe}>
          <div
            onClick={() => this.props.booking(item)}
            className={`ghe ${item.dangChon && "gheDangChon"} ${
              item.daDat && "gheDaChon"
            } `}
          >
            {item.soGhe}
          </div>
        </td>
      );
    });
  };
  render() {
    return (
      <tr>
        <td style={{ color: "white" }}>
          <b>{this.props.element.hang}</b>
        </td>
        {this.renderContent()}
      </tr>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    booking: (chair) => {
      const action = bookingAction(chair);
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(Ticket);
