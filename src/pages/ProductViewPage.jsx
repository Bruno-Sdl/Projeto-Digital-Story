import { Gallery } from "../components/Gallery";
import { BuyBox } from "../components/BuyBox";
import { ProductOptions } from "../components/ProductOptions";
import { Section } from "../components/Section";
import { ProductListing } from "../components/ProductListing";

function ProductViewPage() {
  const productImages = [
    { src: "/product-image-1.png" },
    { src: "/product-image-2.png" },
  ];

  const recommendedProducts = [
    {
      name: "Nome do produto 1",
      image: "/product-thumb-1.png",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      name: "Nome do produto 2",
      image: "/product-thumb-2.png",
      price: 49.9,
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "flex-start",
        }}
      >
        <Gallery
          images={productImages}
          showThumbs
          width="700px"
          height="570px"
          radius="4px"
        />

        <BuyBox
          name="Tênis Nike Revolution 6 Next Nature Masculino"
          reference="REF: 38416711"
          stars="4.7"
          rating="(90 avaliações)"
          price={219}
          priceDiscount={219}
          description="Descrição do produto conforme especificação do projeto."
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <ProductOptions
              options={["39", "40", "41", "42"]}
              radius="4px"
              shape="square"
              type="text"
            />

            <ProductOptions
              options={[
                "#6FEEB6",
                "#FF6969",
                "#5E5E5E",
                "#6D70B7",
              ]}
              shape="circle"
              type="color"
            />
          </div>
        </BuyBox>
      </div>

      <Section
        title="Produtos recomendados"
        titleAlign="left"
        link={{
          text: "Ver todos",
          href: "/products",
        }}
      >
        <ProductListing
          products={recommendedProducts}
        />
      </Section>
    </>
  );
}

export default ProductViewPage;