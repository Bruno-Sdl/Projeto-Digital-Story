import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import cartIcon from '../assets/mini-cart.svg';
import './Header.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmed = searchTerm.trim();
    if (trimmed) {
      navigate(`/products?filter=${encodeURIComponent(trimmed)}`);
    } else {
      navigate('/products');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <header className="header">
      <div className="header-top">
        {/* 3.1.1 - Componente de Logo */}
        <Link to="/" aria-label="Ir para a página inicial">
          <Logo />
        </Link>

        {/* 3.1.2 - Campo de busca */}
        <div className="search-box">
          <input
            id='search-product'
            name='search'
            type="text"
            className="search-input"
            placeholder="Pesquisar produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Campo de busca de produtos"
          />
           
          <button
            type="button"
            onClick={handleSearch}
            className="search-button"
            aria-label="Buscar produtos"
            >
            🔍
          </button>
        </div>

        {/* 3.1.3 - Área de Redirecionamento */}
        <div className="auth-actions">
          <Link to="/register" className="register-link">
            Cadastre-se
          </Link>
          <Link to="/login" className="login-button">
            Entrar
          </Link>
        </div>

        {/* 3.1.4 - Carrinho de compras (sem ação de clique) */}
        <img src={cartIcon} alt="Carrinho de compras" className="cart-icon" />
      </div>

      {/* 3.1.5 - Navegação Principal */}
      <nav className="main-nav" aria-label="Navegação principal">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Produtos
        </NavLink>
        <NavLink
          to="/categories"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Categorias
        </NavLink>
        <NavLink
          to="/my-orders"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Meus Pedidos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;