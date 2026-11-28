import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductViewPage from "./pages/ProductViewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

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
          path="/product/:id"
          element={
            <Layout>
              <ProductViewPage />
            </Layout>
          }
        />

        <Route
          path="*"
          element={
            <Layout>
              <h1>Página não encontrada</h1>
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;