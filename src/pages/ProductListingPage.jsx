import { useMemo, useState } from "react";
import { FilterGroup } from "../components/FilterGroup";
import { Section } from "../components/Section";
import { ProductListing } from "../components/ProductListing";

const INITIAL_PRODUCTS = [
  {
    name: "Nome do produto 1",
    image: "/product-thumb-1.png",
    price: 200,
    priceDiscount: 149.9,
    category: "Tênis",
    condition: "Novo",
  },
  {
    name: "Nome do produto 2",
    image: "/product-thumb-2.png",
    price: 49.9,
    category: "Camisetas",
    condition: "Novo",
  },
  {
    name: "Nome do produto 3",
    image: "/product-thumb-3.png",
    price: 120,
    priceDiscount: 99.9,
    category: "Tênis",
    condition: "Usado",
  },
  {
    name: "Nome do produto 4",
    image: "/product-thumb-4.png",
    price: 180,
    category: "Calças",
    condition: "Novo",
  },
];

const CATEGORY_OPTIONS = [
  { text: "Tênis", value: "Tênis" },
  { text: "Camisetas", value: "Camisetas" },
  { text: "Calças", value: "Calças" },
];

const CONDITION_OPTIONS = [
  { text: "Novo", value: "Novo" },
  { text: "Usado", value: "Usado" },
];

function ProductListingPage() {
  const [sortOrder, setSortOrder] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedConditions, setSelectedConditions] = useState([]);

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = INITIAL_PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      const matchesCondition =
        selectedConditions.length === 0 ||
        selectedConditions.includes(product.condition);

      return matchesCategory && matchesCondition;
    });

    const getEffectivePrice = (product) =>
      product.priceDiscount !== undefined &&
      product.priceDiscount !== null
        ? product.priceDiscount
        : product.price;

    if (sortOrder === "lowest-price") {
      return [...filtered].sort(
        (a, b) => getEffectivePrice(a) - getEffectivePrice(b)
      );
    }

    if (sortOrder === "highest-price") {
      return [...filtered].sort(
        (a, b) => getEffectivePrice(b) - getEffectivePrice(a)
      );
    }

    return filtered;
  }, [sortOrder, selectedCategories, selectedConditions]);

  const totalText = `${filteredAndSortedProducts.length} ${
    filteredAndSortedProducts.length === 1
      ? "produto encontrado"
      : "produtos encontrados"
  }`;

  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        alignItems: "flex-start",
        padding: "24px",
      }}
    >
      <aside
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "308px",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: "308px",
            height: "60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "4px",
          }}
        >
          <label htmlFor="sort-select">
            Ordenar por
          </label>

          <select
            id="sort-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Padrão</option>
            <option value="lowest-price">Menor preço</option>
            <option value="highest-price">Maior preço</option>
          </select>
        </div>

        <div
          style={{
            backgroundColor: "#FFFFFF",
            width: "308px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div>
            <h2>Filtrar por</h2>

            <hr
              style={{
                border: "none",
                borderTop: "1px solid #CCCCCC",
              }}
            />
          </div>

          <FilterGroup
            title="Categoria"
            inputType="checkbox"
            options={CATEGORY_OPTIONS}
            selectedValues={selectedCategories}
            onChange={setSelectedCategories}
          />

          <FilterGroup
            title="Estado"
            inputType="radio"
            options={CONDITION_OPTIONS}
            selectedValues={selectedConditions}
            onChange={setSelectedConditions}
          />
        </div>
      </aside>

      <div style={{ flex: 1 }}>
        <Section title={totalText} titleAlign="left">
          <ProductListing
            products={filteredAndSortedProducts}
          />
        </Section>
      </div>
    </div>
  );
}

export default ProductListingPage;