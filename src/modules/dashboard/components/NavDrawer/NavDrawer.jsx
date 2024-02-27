import { useMemo } from 'react';
import './NavDrawer.css';
import {
  FaUser,
} from 'react-icons/fa';
import { subRouteNames } from '../../../../core/navigation/routenames';
import NavDrawerItem from '../NavDrawerItem/NavDrawerItem';
import uuid from 'react-uuid';
import logo from '../../../../core/assets/logo.jpeg';

export default function NavDrawer() {
  const sidebarMenu = useMemo(() => [
    {
      title: 'Order',
      key: 0,
      icon: <FaUser />,
      links: [
        {
          title: 'Users',
          path: subRouteNames.users,
        },
        {
          title: 'Orders',
          path: subRouteNames.orders,
        },
      ],
    },
    {
      title: 'Pay Supplier',
      key: 1,
      icon: <FaUser />,
      links: [
        {
          title: 'Supplier Orders',
          path: subRouteNames["supplier-orders"],
        },
      ],
    },
    {
      title: 'Receive Orders',
      key: 2,
      icon: <FaUser />,
      links: [
        {
          title: 'Receive Orders',
          path: subRouteNames["receive-orders"],
        },
      ],
    },
    {
      title: 'Transaction History',
      key: 3,
      icon: <FaUser />,
      links: [
        {
          title: 'Transaction History',
          path: subRouteNames["transaction-history"],
        },
      ],
    },
    {
      title: 'Add Funds',
      key: 4,
      icon: <FaUser />,
      links: [
        {
          title: 'Add Funds',
          path: subRouteNames["add-funds"],
        },
      ],
    },
    {
      title: 'Shipping Request',
      key: 5,
      icon: <FaUser />,
      links: [
        {
          title: 'Shipping Request',
          path: subRouteNames["shipping-request"],
        },
      ],
    },
    {
      title: 'Express Courier Service',
      key: 5,
      icon: <FaUser />,
      links: [
        {
          title: 'Express Courier Service',
          path: subRouteNames["express-courier-service"],
        },
      ],
    },
    // {
    //   title: 'Wallet',
    //   key: 1,
    //   icon: <FaDollarSign />,
    //   links: [
    //     {
    //       title: 'Add Funds',
    //       path: subRouteNames.addFunds,
    //     },
    //     {
    //       title: 'Withdraw Funds',
    //       path: subRouteNames.withdrawFunds,
    //     },
    //     {
    //       title: 'Manage Subscription',
    //       path: subRouteNames.manageSubscription,
    //     },
    //     {
    //       title: 'Transaction History',
    //       path: subRouteNames.transactionHistory,
    //     },
    //   ],
    // },
    // {
    //   title: 'Procurement',
    //   key: 2,
    //   icon: <FaShoppingCart />,
    //   links: [
    //     {
    //       title: 'Pay Supplier',
    //       path: subRouteNames.paySupplier,
    //     },
    //   ],
    // },
    // {
    //   title: 'Logistics',
    //   key: 4,
    //   icon: <FaTruckMoving />,
    //   links: [
    //     {
    //       title: 'Shipping Address Book',
    //       path: subRouteNames.shippingAddresses,
    //     },
    //     {
    //       title: 'Request Shipping',
    //       path: subRouteNames.requestShipping,
    //     },
    //     {
    //       title: 'Express Courier Service',
    //       path: subRouteNames.requestExpressCourierService,
    //     },
    //   ],
    // },
    // {
    //   title: 'Support',
    //   key: 5,
    //   icon: <FaAddressCard />,
    //   links: [
    //     {
    //       title: 'Whatsapp',
    //       path: subRouteNames.createTicket,
    //     },
    //   ],
    // },
  ], []);

  return (
    <nav className="nav-drawer">
      <div className="logo-box">
        <img src={logo} alt="We Shop And Ship Logo" className="logo" />
        <h3 className="title">WeShopAndShip</h3>
      </div>
      {
        sidebarMenu.map(({ title, key, icon, links, }) => (
          <NavDrawerItem key={uuid()} title={title} icon={icon} links={links} itemKey={key} />
        ))
      }
    </nav>
  )
}
