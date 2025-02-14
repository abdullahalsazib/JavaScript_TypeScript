import { TastMoinalObj } from "../data/data";
import { Footer } from "./Footer";
import { CommonHeader, TastMonialCart } from "./Shop";

const Cart = () => {
  return (
    <>
      <div>
        <CommonHeader title="Cart" />
        <div className=" flex items-center justify-between flex-row bg-[#F9F1E7] py-15 px-[10%]">
          {TastMoinalObj.map((item, index) => (
            <TastMonialCart
              h1Title={item.title}
              pTitle={item.pTitle}
              key={index}
              icons={item.icons}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
