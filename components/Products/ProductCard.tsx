import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  return (
    <div className="bg-neutral-800 rounded-md shadow-md relative">
      <Link href="/products/3">
        <Image 
          className="w-full h-auto rounded-t-md uppercase text-xs leading-none rounded-md"
          src="https://i.dummyjson.com/data/products/3/1.jpg" 
          alt="Samsung Universe 9"
          width="200"
          height="200"
          />
      </Link>
      <div className="p-3">
        <div className="uppercase text-xs">smartphones</div>
        <Link href="/products/3" className="font-medium text-lg">Samsung Universe 9</Link>
      </div>
    </div>
  );
}

export default ProductCard;