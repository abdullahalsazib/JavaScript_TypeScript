import { BiPlus, BiSolidStar, BiStar } from "react-icons/bi";
import {
  FaAngleRight,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Footer } from "../Pages/Footer";

const SingleProduct = () => {
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
            <div className=" w-20 h-20 bg-slate-100 ring-1 ring-blue-500 opacity-50 rounded-lg shadow-2xl"></div>
            <div className=" w-20 h-20 bg-slate-100 ring-1 ring-blue-500 opacity-50 rounded-lg shadow-2xl"></div>
            <div className=" w-20 h-20 bg-slate-100 ring-1 ring-blue-500 opacity-50 rounded-lg shadow-2xl"></div>
            <div className=" w-20 h-20 bg-slate-100 ring-1 ring-blue-500 opacity-50 rounded-lg shadow-2xl"></div>
          </div>
          <div className=" w-full h-[100%] bg-slate-100 shadow-2xl rounded-lg ring-1 ring-blue-500 opacity-50"></div>
        </div>

        <div className=" w-1/2  flex items-start justify-between  gap-20 flex-col">
          <div className=" space-y-1">
            <h1 className=" text-[42px] font-bold capitalize">
              Lorem, ipsum dolor.
            </h1>
            <p className=" text-slate-600 text-2xl">BDT: 12000tk</p>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae sequi aperiam sit ipsum at illo tempore necessitatibus
              impedit? Placeat aliquid ea temporibus veritatis obcaecati
              expedita animi sint nesciunt architecto error. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Recusandae sequi aperiam
              sit ipsum
            </p>
            <div className=" flex items-center justify-around gap-10 py-5">
              <div className=" flex items-center justify-center border-2 rounded-lg border-slate-400">
                <button className=" cursor-pointer text-lg  py-4 px-5">
                  +
                </button>
                <div className="  py-4 px-5">1</div>
                <button className=" cursor-pointer text-lg  py-4 px-5">
                  -
                </button>
              </div>
              <CommonBtnCart title="Add to Cart" />
              <CommonBtnCart title="Compare" icon={<BiPlus />} />
            </div>
          </div>
          <div className=" flex items-start justify-start gap-4 flex-col">
            <p className=" text-sm font-mono text-slate-600 capitalize opacity-50">
              Category : sofa
            </p>
            <p className=" text-sm font-mono text-slate-600 capitalize opacity-50">
              tag : sofa, chair, Home, shop
            </p>
            <span className=" flex items-center justify-start gap-4">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
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
        <div className=" text-slate-700">
          <p className=" text-sm py-5 text-justify capitalize">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            error, nisi quidem earum placeat, laborum iusto nulla, sunt
            necessitatibus excepturi quasi eos doloribus! Delectus, praesentium,
            sunt libero recusandae reiciendis cupiditate blanditiis dolor
            adipisci cum nobis tenetur quia sapiente fugiat facere unde, rem
            consectetur officia in fugit nesciunt provident impedit atque.
          </p>
          <p className=" text-sm text-justify capitalize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            aperiam, ipsum, expedita nihil provident dolores minus temporibus
            quod, amet esse aspernatur. Fugit eos illo minima adipisci itaque
            labore voluptatibus sit excepturi doloremque! Perspiciatis
            dignissimos iure eligendi sint fugit? Cumque praesentium illo
            exercitationem corrupti harum quis est. Mollitia quisquam iure qui
            dicta quibusdam reiciendis itaque maiores labore, debitis aspernatur
            cum rerum fuga officia velit necessitatibus magnam quasi! Rem,
            dolores aspernatur officiis deserunt, itaque, reiciendis minus
            impedit nam consectetur earum laudantium dolor. Sit odio, magnam
            maxime placeat pariatur sequi a quod nobis excepturi eum libero
            voluptates aspernatur, tempora recusandae, vel reprehenderit veniam.
          </p>
          <p className=" py-5 text-sm text-justify capitalize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            aperiam, ipsum, expedita nihil provident dolores minus temporibus
            quod, amet esse aspernatur. Fugit eos illo minima adipisci itaque
            labore voluptatibus sit excepturi doloremque! Perspiciatis
            dignissimos iure eligendi sint fugit? Cumque praesentium illo
            exercitationem corrupti harum quis est. Mollitia quisquam iure qui
            dicta quibusdam reiciendis itaque maiores labore, debitis aspernatur
            cum rerum fuga officia velit necessitatibus magnam quasi! Rem,
            dolores aspernatur officiis deserunt, itaque, reiciendis minus
            impedit nam consectetur earum laudantium dolor. Sit odio, magnam
            maxime placeat pariatur sequi a quod nobis excepturi eum libero
            voluptates aspernatur, tempora recusandae, vel reprehenderit veniam.
          </p>
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
      <button className=" outline-1 outline-black py-4 px-9 cursor-pointer w-full rounded-lg capitalize flex items-center justify-center gap-5">
        {props.icon}
        {props.title}
      </button>
    </>
  );
};
