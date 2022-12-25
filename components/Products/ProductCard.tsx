import Image from "next/image";
import Link from "next/link";
import { IProduct } from "../../types/types";

import IconBasket from "../../public/assets/images/svg/basket-solid.svg"

interface ProductCardProps {
  product: IProduct
}

const ProductCard = ({product}: ProductCardProps) => {
  return (
    <div className="bg-neutral-800 rounded-md shadow-md relative flex flex-col">
      <Link href={`/products/${product.id}`} className="overflow-hidden">
        <Image 
          className="w-full h-auto rounded-t-md uppercase text-xs leading-none rounded-md max-h-48 transition-transform hover:scale-110"
          src={product.thumbnail} 
          alt="Samsung Universe 9"
          width="200"
          height="200"
          />
      </Link>
      <div className="p-3 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-auto">
          <div className="uppercase text-xs">{product.category}</div>
          <div className="text-xs">Rating: {product.rating}</div>
        </div>
        <Link href={`/products/${product.id}`} className="font-medium text-lg">{product.title}</Link>
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">{`$` + product.price}</div>
          <button className="bg-neutral-700 p-2 rounded-md transition-colors fill-white hover:fill-emerald-600" title="Add to cart">
            <IconBasket width="20" height="20" className="fill-inherit"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;