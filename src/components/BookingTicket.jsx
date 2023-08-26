import React, { Component } from "react";

import "./BaiTapBookingTicket.css";
import TicketList from "./TicketList";
import TicketDetail from "./TicketDetail";

export default class BookingTicket extends Component {
  render() {
    return (
      <div>
        <div className="row bookingMovie">
          <div className="overlay"></div>
          <div className="col-12 col-md-8 col-sm-8">
            <div className="content">
              <h1 className="text-center py-4" style={{ color: "#fff" }}>
                Movie Seat Selection
              </h1>
              <div className="container ">
                {/* seat layout */}
                <div className="screen">
                  <h2 className="wthree">Screen</h2>
                </div>
                <div
                  className="seatStructure txt-center"
                  style={{ overflowX: "auto" }}
                >
                  <p id="notification" />

                  <TicketList />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-sm-4 pt-5 px-0">
            <TicketDetail />
          </div>
        </div>
      </div>
    );
  }
}
