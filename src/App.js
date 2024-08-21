import React from 'react';
import './App.css';
import redicon from './image/red-circle.png';
import greenicon from './image/green-circle.png';

function App() {
  return (
    <div className="dashboard-grid">
      <div className="red last-bet">
        <div>
          <img src={redicon} className="status-icon"></img>
        </div>
        <div className="card-content">
          <div className="card-title">Last Bet</div>
          <div className="detail-row">
            <div className="detail-name">Sport</div>
            <div className="detail-timestamp">
              2024-07-26T11:55:21.954529+00:00
            </div>
          </div>
          <div className="divider"></div>
          <div className="detail-row">
            <div className="detail-name">Casino</div>
            <div className="detail-timestamp">
              2024-07-24T12:27:30.6991352+00:00
            </div>
          </div>
        </div>
      </div>

      <div className="red last-payments">
        <div>
          <img src={redicon} className="status-icon"></img>
        </div>
        <div className="card-content">
          <div className="card-title">Last Payments</div>
          <div className="detail-row">
            <div className="detail-name">Deposit</div>
            <div className="detail-timestamp">-</div>
          </div>
          <div className="divider"></div>
          <div className="detail-row">
            <div className="detail-name">Withdraw</div>
            <div className="detail-timestamp">-</div>
          </div>
        </div>
      </div>

      <div className="red last-registration">
        <img src={redicon} className="status-icon"></img>
        <div className="small-card-content">
          <div className="detail-name">Last Registration</div>
          <div className="detail-timestamp">
            2024-07-22T11:15:21.954529+00:00
          </div>
        </div>
      </div>

      <div className="green last-registration">
        <img src={greenicon} className="status-icon"></img>
        <div className="small-card-content">
          <div className="detail-name">Last Login</div>
          <div className="detail-timestamp">
            2024-07-22T11:15:21.954529+00:00
          </div>
        </div>
      </div>

      <div className="green last-registration">
        <img src={greenicon} className="status-icon"></img>
        <div className="small-card-content">
          <div className="detail-name">Last Feed Updating</div>
          <div className="detail-timestamp">
            2024-07-22T11:15:21.954529+00:00
          </div>
        </div>
      </div>

      <div className="red last-registration">
        <img src={redicon} className="status-icon"></img>
        <div className="small-card-content">
          <div className="detail-name">Last SMS - Paystack</div>
          <div className="detail-timestamp">
            2024-07-22T11:15:21.954529+00:00
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
