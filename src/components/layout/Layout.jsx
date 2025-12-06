import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import BottomNav from './BottomNav';
import styles from './Layout.module.css';
import { ROUTES } from '../../constants/routes';

function Layout({ children }) {
  const location = useLocation();
  const hideNavPaths = [ROUTES.CREATE_CHALLENGE];
  const shouldHideNav = hideNavPaths.includes(location.pathname);

  return (
    <div className={styles.app}>
      <div className={styles.contents}>{children}</div>
      {!shouldHideNav && <BottomNav />}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
