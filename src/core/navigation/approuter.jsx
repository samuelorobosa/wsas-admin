import { createBrowserRouter, redirect } from "react-router-dom";
import { routeNames, subRouteNames } from "./routenames";
import DashboardPage from "../../modules/dashboard/pages/DashboardPage/DashboardPage"
import ProfilePage from "../../modules/user/pages/ProfilePage/ProfilePage";
import EventHistoryPage from "../../modules/user/pages/EventHistoryPage/EventHistoryPage";
import LoginPage from "../../modules/auth/pages/LoginPage/LoginPage";
import ResetPasswordPage from "../../modules/auth/pages/ResetPasswordPage/ResetPasswordPage";
import AllOrders from "../../modules/order-management/pages/AllOrders/AllOrders";
import AddFunds from "../../modules/user/pages/AddFunds/AddFunds.jsx";
import WithdrawFunds from "../../modules/user/pages/WithdrawFunds/WithdrawFunds.jsx";
import TransactionHistory from "../../modules/user/pages/TransactionHistory/TransactionHistory.jsx";
import ManageSubscription from "../../modules/user/pages/ManageSubscription/ManageSubscription.jsx";
import PaySupplier from "../../modules/user/pages/PaySupplier/PaySupplier.jsx";
import ShippingAddressBook from "../../modules/user/pages/ShippingAddressBook/ShippingAddressBook.jsx";
import RequestExpressCourierService
  from "../../modules/user/pages/RequestExpressCourierService/RequestExpressCourierService.jsx";
import Users from "../../modules/users/pages/Users/Users";
import SupplierOrders from "../../modules/pay-supplier/pages/SupplierOrders/SupplierOrders";
import ReceiveOrders from "../../modules/receive-orders/pages/ReceiveOrders/ReceiveOrders";
import ShippingRequest from "../../modules/user/pages/ShippingRequest/ShippingRequest.jsx";
import ExpressCourierService from "../../modules/user/pages/Express Courier Service/ExpressCourierService.jsx";

const appRouter = createBrowserRouter([
  {
    path: routeNames.home,
    loader: () => redirect(routeNames.login),
  },
  {
    path: routeNames.dashboard,
    element: <DashboardPage />,
    children: [
      {
        path: subRouteNames.eventHistory,
        element: <EventHistoryPage />,
      },
      {
        path: subRouteNames.profile,
        element: <ProfilePage />,
      },
      {
        path: subRouteNames.withdrawFunds,
        element: <WithdrawFunds />,
      },
      {
        path: subRouteNames.transactionHistory,
        element: <TransactionHistory />,
      },
      {
        path: subRouteNames.manageSubscription,
        element: <ManageSubscription />,
      },
      {
        path: subRouteNames.paySupplier,
        element: <PaySupplier />,
      },
      {
        path: subRouteNames.shippingAddresses,
        element: <ShippingAddressBook />,
      },
      {
        path: subRouteNames.requestExpressCourierService,
        element: <RequestExpressCourierService />,
      },
      {
        path: '*',
        element: <div>PAGE IS STILL IN DEVELOPMENT</div>
      },
      //Admin
      {
        path: subRouteNames.users,
        element: <Users />,
      },
      {
        path: subRouteNames.orders,
        element: <AllOrders />,
      },
      {
        path: subRouteNames["supplier-orders"],
        element: <SupplierOrders />,
      },
      {
        path: subRouteNames["receive-orders"],
        element: <ReceiveOrders />,
      },
      {
        path: subRouteNames['add-funds'],
        element: <AddFunds />,
      },
      {
        path: subRouteNames['shipping-request'],
        element: <ShippingRequest />,
      },
      {
        path: subRouteNames['express-courier-service'],
        element: <ExpressCourierService />,
      },
    ]
  },
  {
    path: routeNames.login,
    element: <LoginPage />,
  },
  {
    path: routeNames.resetPassword,
    element: <ResetPasswordPage />,
  }
]);

export default appRouter;
