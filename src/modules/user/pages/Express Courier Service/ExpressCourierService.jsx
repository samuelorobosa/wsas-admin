import uuid from 'react-uuid';
import './ExpressCourierService.css';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ShippingRequestTable from "./components/ShippingRequestTable/ShippingRequestTable.jsx";

export default function ExpressCourierService() {
  const shippingRequestCategories = [
    { name: 'New Requests', key: 'new-requests' },
    { name: 'Pending Requests', key: 'pending-requests' },
    { name: 'Shipped Requests', key: 'shipped-requests' },
  ]
  const { orders } = useSelector((state) => state.orders);
  const [currentTabIdx, setTabIdx] = useState(0);

  const onChangeInput = (e) => {
    console.log(e.target.value);
  }

  return (
    <div className="express-courier-service">
      <header className="header-container">
        <h1 className="subroute-header">Express Courier Service</h1>
      </header>
      <main className="orders-content">
        <ul className="order-tabs">
          {
            shippingRequestCategories.map(({name}, idx) => (
              <li key={uuid()} className={`tab ${name}`}>
                <button
                  onClick={() => setTabIdx(idx)}
                  className={`order-tab-btn ${currentTabIdx === idx && 'active'}`}
                >
                  {name}
                </button>
              </li>
            ))
          }
        </ul>
        <nav className="toolbar">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by order id"
              onInput={onChangeInput}
            />
            <FaSearch />
          </div>
        </nav>
        <section className="orders-table">
          <ShippingRequestTable orders={orders} />
        </section>
      </main>
    </div>
  )
}
