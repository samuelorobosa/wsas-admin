import './AddFunds.css'
import InputGroupAlt from "../../../../core/uikit/InputGroupAlt/InputGroupAlt.jsx";
import Button from "../../../../core/uikit/Button/Button.jsx";
import {CustomSelectField} from "../../../../core/uikit/index.js";
import {useState} from "react";
export default function AddFunds () {
  const [activeTab, setActiveTab] = useState('ngnBank');
  const tabRef = [
      {
          key: 1,
          name: 'ngnBank',
          tabContent: 'Nigerian Bank (NGN and GBP)'
      },
      {
          key: 2,
          name: 'ukBankTransfer',
          tabContent: 'UK Bank Transfer/Card Payment (GBP)'
      },
      {
          key: 3,
          name: 'cardPayment',
          tabContent: 'Card Payment for Rest of the world (NGN)'
      }
  ]

  return (
      <>
          <nav className="appbar">
              <h1 className="appbar-title">Add Funds</h1>
          </nav>
          {/*Tabs goes here*/}
          <div className="tabs">
              {
                    tabRef.map(({ name, tabContent }) => (
                        <button
                            key={name}
                            className={activeTab === name ? 'active' : ''}
                            onClick={() => setActiveTab(name)}
                        >
                            {tabContent}
                        </button>
                    ))
              }
          </div>
          {/*Tabs goes here*/}

            {/*Tab content goes here*/}
            {
                activeTab === 'ngnBank' && <AddFunds.ngnBank/>
            }
            {
                activeTab === 'ukBankTransfer' && <AddFunds.ukBankTransfer/>
            }
            {
                activeTab === 'cardPayment' && <AddFunds.cardPayment/>
            }
            {/*Tab content goes here*/}


      </>
  )
}


AddFunds.PaymentHistoryNgnBank = () => {
    return (
        <table className="payment__history">
            <thead>
            <tr>
                <th>Transaction ID</th>
                <th>Payer</th>
                <th>Amount Paid</th>
                <th>Amount Credited</th>
                <th>Account Paid to</th>
                <th>Date</th>
                <th>Rate</th>
                <th>Update</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td data-label="S/N">xxxx</td>
                <td data-label="Payer">John Doe</td>
                <td data-label="Amount Paid">$100</td>
                <td data-label="Amount Credited">$90</td>
                <td data-label="Account Paid to">XYZ Bank</td>
                <td data-label="Date">2023-01-01</td>
                <td data-label="Rate">1.2</td>
                <td data-label="Update">Edit</td>
                <td data-label="Status">Pending</td>
            </tr>
            <tr>
                <td data-label="S/N">2</td>
                <td data-label="Payer">Jane Smith</td>
                <td data-label="Amount Paid">$150</td>
                <td data-label="Amount Credited">$130</td>
                <td data-label="Account Paid to">ABC Bank</td>
                <td data-label="Date">2023-02-15</td>
                <td data-label="Rate">1.5</td>
                <td data-label="Update">Edit</td>
                <td data-label="Status">Completed</td>
            </tr>
            </tbody>
        </table>
    )
}

AddFunds.ngnBank = () => {
    return(
        <>
            <AddFunds.PaymentHistoryNgnBank/>
        </>
    )
}


AddFunds.PaymentHistoryUkBankTransfer = () => {
    return (
        <table className="payment__history">
            <thead>
            <tr>
                <th>Transaction ID</th>
                <th>Amount Paid</th>
                <th>Date</th>
                <th>Action</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td data-label="S/N">xxxx</td>
                <td data-label="Amount Paid">$100</td>
                <td data-label="Date">2023-01-01</td>
                <td data-label="Update">Edit</td>
                <td data-label="Status">Pending</td>
            </tr>
            <tr>
                <td data-label="S/N">xxxx</td>
                <td data-label="Amount Paid">$100</td>
                <td data-label="Date">2023-01-01</td>
                <td data-label="Update">Edit</td>
                <td data-label="Status">Pending</td>
            </tr>
            </tbody>
        </table>
    )
}

AddFunds.ukBankTransfer = () => {
    return (
        <>
            <AddFunds.PaymentHistoryUkBankTransfer/>
        </>
    )
}

AddFunds.PaymentHistoryCardPayment = () => {
    return (
        <table className="payment__history">
            <thead>
            <tr>
                <th>Transaction ID</th>
                <th>Amount Paid</th>
                <th>Amount Credited</th>
                <th>Date</th>
                <th>Exchange Rate</th>
                <th>Action</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td data-label="S/N">xxxx</td>
                <td data-label="Amount Paid">$100</td>
                <td data-label="Amount Credited">120,000</td>
                <td data-label="Date">2023-01-01</td>
                <td data-label="Exchange Rate">$1 = 1,200</td>
                <td data-label="Action">Edit</td>
                <td data-label="Status">Pending</td>
            </tr>
            <tr>
                <td data-label="S/N">xxxx</td>
                <td data-label="Amount Paid">$100</td>
                <td data-label="Amount Credited">120,000</td>
                <td data-label="Date">2023-01-01</td>
                <td data-label="Exchange Rate">$1 = 1,200</td>
                <td data-label="Action">Edit</td>
                <td data-label="Status">Pending</td>
            </tr>
            </tbody>
        </table>
    )
}

AddFunds.cardPayment = () => {
    return (
        <>
            <AddFunds.PaymentHistoryCardPayment/>
        </>
    )
}
