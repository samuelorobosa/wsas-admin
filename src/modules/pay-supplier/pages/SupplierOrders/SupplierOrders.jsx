import uuid from 'react-uuid';
import './SupplierOrders.css';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import OrdersTable from "../../../order-management/components/OrdersTable/OrdersTable";

export default function SupplierOrders() {
  const { orderCategories, orders } = useSelector((state) => state.orders);
  const [currentTabIdx, setTabIdx] = useState(0);

  const onChangeInput = (e) => {
    console.log(e.target.value);
  }

  return (
    <div className="all-orders">
      <header className="header-container">
        <h1 className="subroute-header">Supplier Orders</h1>
      </header>
      <main className="orders-content">
        <ul className="order-tabs">
          {
            orderCategories.map(({name}, idx) => (
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
          <OrdersTable orders={orders} />
        </section>
      </main>
    </div>
  )
}
