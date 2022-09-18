import React, { useEffect, useState } from "react";
import user from "../assets/user.jpg";


const Dashboard = (props) => {

  return (
    <div className="dashboard">
        <div className="active-dep">
             <h3 className="m-heading">Active Deposits</h3>
             <div className="grid-container tab">
                <div className="tab-head">PROPERTY</div>
                <div className="tab-head">MOVE IN DATE</div>
                <div className="tab-head">DEPOSIT</div>
                <div className="tab-head">STATUS</div>

                <div className="tab-col">771 Lst Round</div>
                <div className="tab-col">22nd Feb 2022</div>
                <div className="tab-col">$2256</div>
                <div className="tab-col">Awaiting</div>

                <div className="tab-col">1141 Jagged Abor</div>
                <div className="tab-col">12nd Jan 2022</div>
                <div className="tab-col">$4706</div>
                <div className="tab-col">Payment Processed</div>
             </div>
        </div>

        <div className="more-items">
            <div className="all-items">All Active Deposits</div>
        </div>
        <div className="active-dep">
             <h3 className="m-heading">Closed Deposits</h3>
             <div className="grid-container tab">
                <div className="tab-head">PROPERTY</div>
                <div className="tab-head">MOVE IN DATE</div>
                <div className="tab-head">DEPOSIT</div>
                <div className="tab-head">STATUS</div>

                <div className="tab-col">231 Noble Cape</div>
                <div className="tab-col">24nd Mar 2022</div>
                <div className="tab-col">$2256</div>
                <div className="tab-col">Extend Processing Payment</div>

                <div className="tab-col">1141 Jagged Abor</div>
                <div className="tab-col">12nd Jan 2022</div>
                <div className="tab-col">$4706</div>
                <div className="tab-col">No Payment Received</div>
             </div>
        </div>

        <div className="more-items">
            <div className="all-items">All Closed Deposits</div>
        </div>
    </div>
  );
};

export default Dashboard;
