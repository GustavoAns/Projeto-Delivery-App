import React from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';

export default function Navbar() {
  // const [redirect, setRedirect] = useState(false);
  // const [isExploring, setIsExploring] = useState(false);

  // const TAG = {
  //   NAV_PRODUCTS: 'customer_products__element-navbar-link-products',
  //   NAV_ORDERS: 'customer_products__element-navbar-link-orders',
  //   NAV_USER_FULL_NAME: 'customer_products__element-navbar-user-full-name',
  //   NAV_LOGOUT: 'customer_products__element-navbar-link-logout',
  // };

  // useEffect(() => {
  //   if (location.includes('PRODUCTS')) setIsExploring(true);
  //   if (location.includes('ORDERS')) setIsExploring(true);
  // }, [location]);

  // if (redirect) return <Redirect to="/perfil" />;

  return (
    <header className="header-container">
      <h1>Nav</h1>
    </header>
  );
}

// Navbar.propTypes = {
//   location: PropTypes.string.isRequired,
// };
