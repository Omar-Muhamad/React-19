import { FC } from "react";
import Link from "next/link";

import { Product } from "./AllProducts";

type ProductCardProps = {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <li>
      <Link href={`/shop/${product.title}`} className="flex flex-col pb-4">
        <div className="h-80 w-full py-8 px-4 bg-lightGray flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-fit"
          />
        </div>

        <h2 className="mt-5 font-bold truncate">Adidas</h2>
        <p className="truncate">{product.title}</p>
        <p className="text-lg">{product.price} $</p>
      </Link>
    </li>
  );
};

export default ProductCard;
