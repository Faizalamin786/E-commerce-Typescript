
import {
    type RouteConfig,
    route,
    index,
    layout,
    prefix,
  } from '@react-router/dev/routes';
  
  export default [
    index('./pages/HomePage'),
    route('product/:slug', './pages/ProductPage'),
    route('cart', './pages/CartPage'),
    route('signin', './pages/SigninPage'),
    route('signup', './pages/SignupPage'),
  
    layout('./components/ProtectedRoute', [
      route('shipping', './pages/ShippingAddressPage'),
      route('payment', './pages/PaymentMethodPage'),
      route('placeorder', './pages/PlaceOrderPage'),
      route('order/:id', './pages/OrderPage'),
      route('orderhistory', './pages/OrderHistoryPage'),
      route('profile', './pages/ProfilePage'),
    ]),
  ] satisfies RouteConfig;
  
