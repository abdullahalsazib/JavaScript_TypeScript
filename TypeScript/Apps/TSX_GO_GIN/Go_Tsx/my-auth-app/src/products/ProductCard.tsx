import React from "react";
import { BiShare, BiTransfer } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";

interface ProductProps {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  stock?: number;
  image_url?: string;
}

const ProductCard: React.FC<{ product: ProductProps }> = ({ product }) => {
  // const ProductCard: React.FC = () => {
  return (
    <>
      <div className="cursor-pointer duration-200 relative group/card h-[450px] flex items-start justify-between flex-col">
        {/* Product Image */}
        <img
          className=" w-full object-cover group-hover/card:blur-xs"
          src={product.image_url}
          alt="Product"
        />
        <div className=" absolute top-3 right-3 w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black group-hover/card:blur-xs">
          -30%
        </div>
        {/* <div className=" absolute top-3 text-sm  capitalize left-3 py-2 px-4  flex items-center justify-center  bg-blue-200 text-black">
          stock {product.stock}
        </div> */}

        {/* Product Details */}
        <div className="flex flex-col items-start justify-center mt-3 px-5 bg-[#F4F5F7] w-full py-10 space-y-1 group-hover/card:blur-xs">
          <h1 className="text-xl font-semibold">{product.name}</h1>

          {/* Description 10 character porjonto show korbe */}
          {product.description && (
            <p className="text-sm text-slate-600">
              {product.description.slice(0, 25)}
            </p>
          )}

          <div className="flex items-center justify-between py-2 w-full">
            <p className="text-gray-800 font-semibold">BDT: {product.price}</p>
            <p className="text-gray-500 line-through">
              BDT: {Number(product.price) + 100}
            </p>
          </div>
        </div>

        {/* Hover Section */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#c8c8c882] bg-opacity-50 flex items-center justify-center flex-col text-white opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
          <button className="py-2 px-6 text-lg  bg-white hover:text-amber-600 text-black duration-200 cursor-pointer capitalize">
            Add to Cart
          </button>
          <div className="flex items-center justify-center gap-1 w-full px-1 py-2">
            <CardSubLink
              icons={
                <BiShare className=" group-hover/sub:text-sky-500 group-hover/sub:scale-125" />
              }
              title="share"
            />
            <CardSubLink
              icons={
                <BiTransfer className=" group-hover/sub:text-sky-500 group-hover/sub:scale-125" />
              }
              title="compare"
            />
            <CardSubLink
              icons={
                <HiHeart className=" group-hover/sub:text-sky-500 group-hover/sub:scale-125" />
              }
              title="like"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

interface CardSubLinkProps {
  title: string;
  icons: React.ReactNode;
}

const CardSubLink: React.FC<CardSubLinkProps> = (props) => {
  return (
    <>
      <a
        href="#"
        className="flex items-center justify-center gap-1 group/sub font-light capitalize text-sm bg-[#f3f3f36e] py-1 px-2 text-slate-900 hover:scale-110 duration-200"
      >
        {props.icons}
        <p className=" group-hover/sub:text-slate-500">{props.title}</p>
      </a>
    </>
  );
};
