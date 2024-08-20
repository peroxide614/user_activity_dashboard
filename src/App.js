import React from 'react';
import './App.css';
import redicon from './image/red-circle.png';
// import greenicon from './image/green-circle.png';

function App() {
  return (
    <div className="full-page">
      <div className="two-biggest">
        <div className="biggest-element red">
          <div>
            <img src={redicon} className="redicon"></img>
          </div>
          <div className="status">
            <div className="activity-name">Last Bet</div>
            <div className="name-and-timestamp">
              <div className="name">Sport</div>
              <div className="timestamp">2024-07-26T11:55:21.954529+00:00</div>
            </div>
            <div className="divider"></div>
            <div className="name-and-timestamp">
              <div className="name">Casino</div>
              <div className="timestamp">2024-07-24T12:27:30.6991352+00:00</div>
            </div>
          </div>
        </div>
        <div className="biggest-element red">
          <div>
            <img src={redicon} className="redicon"></img>
          </div>
          <div className="status">
            <div className="activity-name">Last Payments</div>
            <div className="name-and-timestamp">
              <div className="name">Deposit</div>
              <div className="timestamp">-</div>
            </div>
            <div className="divider"></div>
            <div className="name-and-timestamp">
              <div className="name">Withdraw</div>
              <div className="timestamp">-</div>
            </div>
          </div>
        </div>
      </div>
      <div className="two-small-elements">
        <div className="one-line-status red">
          <img src={redicon} className="redicon"></img>
          <div className="small-element-info">
            <div className="name">Last Registration</div>
            <div className="timestamp">2024-07-22T11:15:21.954529+00:00</div>
          </div>
        </div>
        <div className="one-line-status red">
          <img src={redicon} className="redicon"></img>
          <div className="small-element-info">
            <div className="name">Last Registration</div>
            <div className="timestamp">2024-07-22T11:15:21.954529+00:00</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
