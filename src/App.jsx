import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';

// Páginas principais do projeto (ajuste os caminhos conforme suas pastas)
const HomePage = () => <div>Página Inicial (Home)</div>;
const ProductListingPage = () => <div>Listagem de Produtos</div>;
const CategoriesPage = () => <div>Categorias</div>;
const OrdersPage = () => <div>Meus Pedidos</div>;
const LoginPage = () => <div>Entrar</div>;
const RegisterPage = () => <div>Cadastre-se</div>;
const InfoPage = ({ title }) => <div>{title}</div>;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas que usam o Layout padrão (Header + Conteúdo + Footer) */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              <ProductListingPage />
            </Layout>
          }
        />
        <Route
          path="/categories"
          element={
            <Layout>
              <CategoriesPage />
            </Layout>
          }
        />
        <Route
          path="/my-orders"
          element={
            <Layout>
              <OrdersPage />
            </Layout>
          }
        />

        {/* Rotas institucionais do Footer */}
        <Route
          path="/about"
          element={
            <Layout>
              <InfoPage title="Sobre a Loja" />
            </Layout>
          }
        />
        <Route
          path="/security"
          element={
            <Layout>
              <InfoPage title="Segurança" />
            </Layout>
          }
        />
        <Route
          path="/wishlist"
          element={
            <Layout>
              <InfoPage title="Lista de Desejos" />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <InfoPage title="Blog" />
            </Layout>
          }
        />
        <Route
          path="/careers"
          element={
            <Layout>
              <InfoPage title="Trabalhe conosco" />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <InfoPage title="Contato" />
            </Layout>
          }
        />

        {/* Rotas de autenticação (podem usar ou não o Layout) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Fallback para rotas não encontradas */}
        <Route
          path="*"
          element={
            <Layout>
              <div>Página não encontrada</div>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;