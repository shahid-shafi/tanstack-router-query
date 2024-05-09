export type TypeProduct = {
  id: number;
  category: string;
  description: string;
  title: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
};
