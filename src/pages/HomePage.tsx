import { useQuery } from "@tanstack/react-query";
import { TypeProduct } from "../types/products.types";
import ProductsCard from "../components/Products/ProductsCard";
import CreateProductModal from "../components/Products/AddProductModal";

const HomePage = () => {
  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3030/products");
    const data = await response.json();
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["PRODUCTS"],
    queryFn: () => fetchProducts(),
    staleTime: Infinity,
  });
  if (isLoading)
    return (
      <div className="text-5xl h-screen flex justify-center items-center">
        Loading...
      </div>
    );

  return (
    <>
      <CreateProductModal />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {data?.map((product: TypeProduct) => (
          <ProductsCard key={product?.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
