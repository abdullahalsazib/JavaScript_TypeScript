import React from "react";

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
      <div className="bg-slate-50 p-1 cursor-pointer duration-200 relative group  shadow-lg h-[450px] flex items-start justify-between flex-col">
        {/* Product Image */}
        <img
          className=" w-full object-cover "
          src={product.image_url}
          alt="Product"
        />
        <div className=" absolute top-3 right-3 w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black">
          -30%
        </div>
        <div className=" absolute top-3 text-sm  capitalize left-3 py-2 px-4  flex items-center justify-center  bg-blue-200 text-black">
          stock {product.stock}
        </div>

        {/* Product Details */}
        <div className="flex flex-col items-start justify-center mt-3 py-5 px-2">
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
        <div className="absolute top-0 left-0 w-full h-full bg-[#6a6a6a82] bg-opacity-50 flex items-center justify-center flex-col text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="py-2 px-6 text-lg  bg-white hover:text-amber-600 text-black duration-200 cursor-pointer capitalize">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
