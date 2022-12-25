import { IProduct } from "../../types/types";
import ProductCard from "./ProductCard";

interface ProductsListProps {
  columns?: 1 | 2 | 3 | 4,
  gap?: 1 | 2 | 3 | 4 | 5 | 6,
}

async function getAllProducts() {
  const res = await fetch("https://dummyjson.com/products")

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function ProductsList ({
  columns = 3,
  gap = 6
}: ProductsListProps) {
  const columnsVariants = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  }
  const gapVariants = {
    1: 'gap-1',
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    5: 'gap-5',
    6: 'gap-6',
  }

  const data = await getAllProducts()
  const products: IProduct[] = data?.products

  return (
    <div className={`grid ${columnsVariants[columns]} ${gapVariants[gap]}`}>
      {
        products.map((product) => {
          return <ProductCard product={product} key={product.id} />
        })
      }
    </div>
  );
}

export default ProductsList;