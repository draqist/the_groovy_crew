import { Product, ProductsSliderComponent } from "../styles/ProductSlider";

export default function ProductSlide() {
  return (
    <ProductsSliderComponent>
      <div className="title">PRINTS</div>
      <div className="products">
        <Product className="product">
          <div className="product_info">this is the land of the living.</div>
        </Product>
        <Product />
        <Product />
        <Product />
      </div>
    </ProductsSliderComponent>
  );
}
