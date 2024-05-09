import { TypeProduct } from "../../types/products.types";

const ProductsCard = ({ product }: { product: TypeProduct }) => {
  console.log(product);
  return (
    <div className="max-w-96 bg-slate-300 rounded-md p-4">
      <img className="" src={product?.image || ""} alt="product-image" />
      <div>
        <h1>{product?.title}</h1>
        <p>{product?.price || 0}</p>
        <p>{product?.rating?.rate || 0}</p>
      </div>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductsCard;
