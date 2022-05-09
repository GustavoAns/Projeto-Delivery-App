import React from 'react';
import { Link } from 'react-router-dom';
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
    <nav className="navbar w-100 navbar-expand-lg navbar-light bg-light fixed-top">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link
              className="nav-link"
              to="/customer/products"
              data-testid="customer_products__element-navbar-link-products"
            >
              Produtos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              data-testid="customer_products__element-navbar-link-orders"
              className="nav-link"
              to="/customer/orders"
            >
              Meus Pedidos
            </Link>
          </li>
          <li className="nav-item">
            <span
              data-testid="customer_products__element-navbar-user-full-name"
              className="nav-link"
            >
              Usuario
            </span>
          </li>
          <li className="nav-item d-flex flex-row-reverse">
            <Link
              data-testid="customer_products__element-navbar-link-logout"
              className="nav-link"
              to="/login"
            >
              Sair
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// Navbar.propTypes = {
//   location: PropTypes.string.isRequired,
// };
