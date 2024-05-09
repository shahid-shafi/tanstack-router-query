import { useQuery } from "@tanstack/react-query";
import { TypeProduct } from "../types/products.types";
import ProductsCard from "../components/Products/ProductsCard";

const HomePage = () => {
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["PRODUCTS"],
    queryFn: () => fetchProducts(),
    staleTime: Infinity,
  });

  if (isLoading) return <>Loading...</>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {data.map((product: TypeProduct) => (
        <ProductsCard key={product?.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
