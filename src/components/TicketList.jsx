import React, { Component } from "react";
import Ticket from "./Ticket";
import { connect } from "react-redux";

class TicketList extends Component {
  renderContent = () => {
    return this.props.data.map((element) => {
      return element.danhSachGhe.map((item) => {
        return <Ticket key={item.soGhe} item={item} element={element} />;
      });
    });
  };

  render() {
    return (
      <table id="seatsBlock">
        <thead>
          <tr align="center" style={{ color: "#fff" }}>
            <th></th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
          </tr>
        </thead>
        <tbody>
          <td align="center" style={{ color: "#fff" }} width={50}>
            <b>A</b>
          </td>
          {this.renderContent()}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.ticketReducer.chairList.filter(
      (element) => element.hang !== ""
    ),
  };
};

export default connect(mapStateToProps)(TicketList);
