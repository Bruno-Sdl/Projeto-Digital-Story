import Header from '../components/Header';
import Footer from '../components/Footer';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main className="layout-main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;