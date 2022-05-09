import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import { Redirect } from 'react-router-dom';

export default function Navbar({ location }) {
  // const [redirect, setRedirect] = useState(false);
  const [isExploring, setIsExploring] = useState(false);

  const TAG = {
    NAV_PRODUCTS: 'customer_products__element-navbar-link-products',
    NAV_ORDERS: 'customer_products__element-navbar-link-orders',
    NAV_USER_FULL_NAME: 'customer_products__element-navbar-user-full-name',
    NAV_LOGOUT: 'customer_products__element-navbar-link-logout',
  }

  useEffect(() => {
    if (location.includes('PRODUCTS')) setIsExploring(true);
    if (location.includes('ORDERS')) setIsExploring(true);
  }, [location]);

  // if (redirect) return <Redirect to="/perfil" />;

  return (
    <header className="header-container">

      <button
        type="button"
        
        // onClick={}

        data-testid={TAG.NAV_PRODUCTS}
      >

      </button>

      <button
        type="button"
        // onClick={}

        data-testid={TAG.NAV_ORDERS}
      >

      </button>

      <button
        type="button"
        // onClick={}

        data-testid={TAG.NAV_USER_FULL_NAME}
      >

      </button>

      <button
        type="button"
        // onClick={}

        data-testid={TAG.NAV_LOGOUT}
      >

      </button>




    </header>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
