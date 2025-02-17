import { BiPlus, BiRightArrow, BiSolidStar, BiStar } from "react-icons/bi";
import {
  FaAngleRight,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Footer } from "../Pages/Footer";
import ProductList from "../Pages/ProductList";
import { useEffect, useState } from "react";
import { getProductById, ProductProps } from "../api/Product";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductProps | null>(null);

  useEffect(() => {
    if (id) {
      getProductById(id)
        .then((response) => setProduct(response.data))
        .catch((error) => console.error("Error Fetching :", error));
    }
  }, [id]);
  const [cartItem, setCartItem] = useState(0);

  if (!product) {
    return <p className="text-center">Loading product details...</p>;
  }
  return (
    <div className=" pt-19">
      <div className="  bg-[#fff3e3] w-full py-8 px-[10%] text-lg  text-slate-500 flex items-center  gap-5 capitalize">
        <p>home</p> <FaAngleRight className="text-xl text-black" /> <p>shop</p>
        <FaAngleRight className="text-xl text-black" />
        <span className=" relative  h-[50px] right-0 px-[1px] bg-slate-400 w-[0.2px]"></span>{" "}
        <p className=" text-slate-900">product title</p>
      </div>
      <div className=" flex w-full px-[10%] gap-10 flex-row py-10 h-[70vh]">
        <div className=" w-1/2  flex items-start justify-start flex-row gap-10">
          <div className=" flex items-start justify-center flex-col gap-10">
            <img
              src={product.image_url}
              alt="error"
              className=" w-20 h-20 bg-slate-100 ring-1 ring-blue-500 p-1 rounded-lg shadow-2xl"
            />
            <img
              src={product.image_url}
              alt="error"
              title={product.image_url}
              className=" w-20 h-20 bg-slate-100 ring-1 ring-blue-500 p-1 rounded-lg shadow-2xl"
            />
          </div>
          <img
            className=" w-[80%] bg-slate-100 shadow-2xl rounded-lg ring-1 ring-blue-500 opacity-90 p-2"
            src={product.image_url}
            alt=""
          />
        </div>

        <div className=" w-1/2  flex items-start justify-between  gap-20 flex-col">
          <div className=" space-y-1">
            <h1 className=" text-[42px] font-bold capitalize">
              {product.name}
            </h1>
            <p className=" text-slate-600 text-2xl">৳. {product.price}tk</p>
            <div className="flex items-center justify-start gap-5 py-2">
              <div className=" flex items-center justify-center text-xl space-x-2">
                <BiSolidStar className=" text-yellow-500" />
                <BiSolidStar className=" text-yellow-500" />
                <BiSolidStar className=" text-yellow-500" />
                <BiSolidStar className=" text-yellow-500" />
                <BiStar className=" text-yellow-500" />
              </div>
              <span className=" relative  h-[30px] right-0 px-[1px] bg-slate-200 w-[0.2px]"></span>
              <p className=" text-sm capitalize text-slate-300">
                5 customer review
              </p>
            </div>
            <p className=" w-[60%] text-sm text-slate-700">
              {product.description}
            </p>
            <div className=" flex items-center justify-around gap-10 py-5">
              <div className=" flex items-center justify-center border-2 rounded-lg border-slate-400 hover:bg-slate-100 group/icon">
                <button
                  className=" cursor-pointer text-lg  py-4 px-5  active:scale-125"
                  onClick={() => setCartItem(cartItem - 1)}
                >
                  -
                </button>
                <input
                  type="number"
                  value={cartItem}
                  className=" w-20 text-center border-none outline-none"
                  onChange={(e) => setCartItem(Number(e.target.value))}
                />
                <button
                  className=" cursor-pointer text-lg  py-4 px-5 active:scale-125"
                  onClick={() => setCartItem(cartItem + 1)}
                >
                  +
                </button>
              </div>
              <CommonBtnCart title="Add to Cart" />
              <CommonBtnCart title="Compare" icon={<BiPlus />} />
            </div>
          </div>
          <div className=" flex items-start justify-start gap-4 flex-col border-t-1 border-slate-200 w-full py-10">
            <p className=" text-lg font-mono text-slate-600 capitalize opacity-50">
              Category : sofa
            </p>
            <p className=" text-lg font-mono text-slate-600 capitalize opacity-50">
              tag : sofa, chair, Home, shop
            </p>
            <span className=" flex items-center justify-start gap-4 text-lg">
              <a href="#" className=" text-2xl hover:scale-110 duration-200">
                <FaFacebook />
              </a>
              <a href="#" className=" text-2xl hover:scale-110 duration-200">
                <FaLinkedin />
              </a>
              <a href="#" className=" text-2xl hover:scale-110 duration-200">
                <FaTwitter />
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* discription */}
      <div className=" w-full px-[10%] py-15 mt-10  border-t-[1px] border-slate-300 ">
        <div className="flex items-center justify-center text-2xl gap-10">
          <button className=" cursor-pointer">Description</button>
          <button className=" text-slate-400 cursor-pointer">
            Additional Information
          </button>
          <button className="text-slate-400 cursor-pointer">Reviews [5]</button>
        </div>
        {/* discription content's */}
        <div className=" text-slate-500">
          <p className=" text-lg py-5 text-justify capitalize">
            {product.description}
          </p>
          <p className=" text-sm text-justify capitalize">
            {product.description}
          </p>
          <p className=" py-5 text-sm text-justify capitalize">
            {product.description}
          </p>
        </div>
        <div className="flex gap-10 py-5 items-center justify-center">
          {/* <div className=" bg-slate-200 h-[400px] rounded-xl"> </div> */}
          <img
            src={product.image_url}
            className=" w-[50%]!   border-2 border-slate-300 rounded-lg p-3"
            alt=""
          />
          <img
            src={product.image_url}
            className=" w-[50%]!   border-2 border-slate-300 rounded-lg p-3"
            alt=""
          />
          {/* <div className=" bg-slate-200 h-[400px] rounded-xl"></div> */}
        </div>

        {/* related product */}
        <div className=" border-t-[1px] border-slate-300 mt-10 pt-10">
          <h1 className=" text-[52px] text-center capitalize">
            Related Products
          </h1>
          <ProductList />
          <div className=" flex items-center justify-center py-5">
            <SeeMoreBtn title=" see more" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;

const CommonBtnCart: React.FC<{
  title: string;
  icon?: React.ReactNode;
}> = (props) => {
  return (
    <>
      <button className=" outline-1 outline-slate-300 py-4 px-9 cursor-pointer w-full rounded-lg capitalize flex items-center justify-center gap-5 bg-slate-50 duration-200 hover:bg-slate-100 hover:text-slate-500 active:scale-105">
        {props.icon}
        {props.title}
      </button>
    </>
  );
};
export const SeeMoreBtn: React.FC<{
  title: string;
}> = ({ title }) => {
  return (
    <>
      <button className=" capitalize text-sm py-3 px-20 active:scale-105 group/icon rounded-md text-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white duration-200 border-2 border-orange-400 flex items-center justify-center gap-5">
        {title}
        <BiRightArrow className=" group-hover/icon:scale-125 group-hover/icon:translate-x-10 duration-500" />
      </button>
    </>
  );
};
