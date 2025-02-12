import React from "react";

interface ProductProps {
  id: number;
  name: string;
  desc: string;
  price: number;
  stock: number;
  image_url: string;
}

const ProductCard: React.FC<{ product: ProductProps }> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg bg-white">
      <img
        src={product.image_url}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.desc}</p>
      <p className="text-lg font-semibold text-blue-500">${product.price}</p>
      <p className="text-sm text-gray-500">Stock: {product.stock}</p>
    </div>
  );
};

export default ProductCard;
