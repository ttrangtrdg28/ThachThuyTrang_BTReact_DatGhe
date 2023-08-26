import React, { Component } from "react";

import { connect } from "react-redux";
import { bookingAction } from "../store/actions/bookingAction";

class Ticket extends Component {
  render() {
    return (
      <td>
        <div
          onClick={() => this.props.booking(this.props.item)}
          className={`ghe ${this.props.item.dangChon && "gheDangChon"} ${
            this.props.item.daDat && "gheDaChon"
          } `}
        >
          {this.props.item.soGhe}
        </div>
      </td>
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
