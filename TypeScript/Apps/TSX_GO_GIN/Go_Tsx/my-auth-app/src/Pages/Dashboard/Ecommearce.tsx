import LineFooter from "./LineFooter";

const Ecommearce = () => {
  return (
    <>
      <div className="bg-slate-100 w-full h-screen px-3 pt-2 pb-28 flex gap-5 flex-col overflow-auto">
        <div className=" py-4">
          <h1 className="text-2xl">Add Attribute</h1>
        </div>
        <div className="bg-white py-6 px-4 rounded-lg w-full shadow-2xl">
          <div className="flex flex-col items-start justify-start w-full py-3 px-4">
            <label htmlFor="productName">
              Product Name <span className="text-red-500 text-lg">*</span>
            </label>
            <input
              className="border-[1px] border-slate-200 hover:border-slate-400 duration-150 focus:border-[1.4px] focus:border-slate-800 outline-0 px-3 py-2 w-full rounded-md mt-1"
              type="text"
              id="productName"
              placeholder="Enter product name"
            />
            <p
              className="text-[10px] text-slate-400 py-2"
              style={{ letterSpacing: "1px" }}
            >
              Do not exceed 20 characters when entering the product name.
            </p>
          </div>
          <div className=" flex items-center justify-between">
            <div className="flex flex-col items-start justify-start w-full py-3 px-4">
              <label htmlFor="productName">
                Category <span className="text-red-500 text-lg">*</span>
              </label>
              <input
                className="border-[1px] border-slate-200 hover:border-slate-400 duration-150 focus:border-[1.4px] focus:border-slate-800 outline-0 px-3 py-2 w-full rounded-md mt-1"
                type="text"
                id="productName"
                placeholder="Enter product name"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-full py-3 px-4">
              <label htmlFor="productName">
                Gender <span className="text-red-500 text-lg">*</span>
              </label>
              <input
                className="border-[1px] border-slate-200 hover:border-slate-400 duration-150 focus:border-[1.4px] focus:border-slate-800 outline-0 px-3 py-2 w-full rounded-md mt-1"
                type="text"
                id="productName"
                placeholder="Enter product name"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full py-3 px-4">
            <label htmlFor="productName">
              Brand <span className="text-red-500 text-lg">*</span>
            </label>
            <input
              className="border-[1px] border-slate-200 hover:border-slate-400 duration-150 focus:border-[1.4px] focus:border-slate-800 outline-0 px-3 py-2 w-full rounded-md mt-1"
              type="text"
              id="productName"
              placeholder="Enter product name"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-full py-3 px-4">
            <label htmlFor="description">
              Description <span className="text-red-500 text-lg">*</span>
            </label>
            {/* <input
            className="border-[1px] border-slate-200 hover:border-slate-400 duration-150 focus:border-[1.4px] focus:border-slate-800 outline-0 px-3 py-2 w-full rounded-md mt-1"
            type="text"
            id="description"
            /> */}
            <textarea
              className="border-[1px] border-slate-200 hover:border-slate-400 duration-150 focus:border-[1.4px] focus:border-slate-800 outline-0 px-3 py-2 w-full rounded-md mt-1"
              id="description"
              placeholder="Description"
              //   cols={30}
              rows={10}
            ></textarea>
            <p
              className="text-[10px] text-slate-400 py-2"
              style={{ letterSpacing: "1px" }}
            >
              Do not exceed 100 characters when entering the product name.
            </p>
          </div>
        </div>
        <div className="bg-white py-6 px-4 rounded-lg w-full shadow-2xl">
          <div className=" flex items-center justify-start gap-5">
            <button className=" bg-blue-600 py-3 px-20 hover:bg-white hover:border-[1px] border-[1px] hover:text-blue-600 duration-150 hover:border-blue-600 text-white rounded-lg cursor-pointer  text-sm">
              Add product
            </button>
            <button className=" border-[1px] border-blue-600 py-3 px-20 text-blue-600 hover:bg-blue-600  hover:text-white duration-200 ease-out rounded-lg cursor-pointer text-sm">
              Add product
            </button>
            <button
              disabled
              className=" border-[1px] border-gray-300 py-3 px-20 text-gray-500 rounded-lg cursor-pointer text-sm"
            >
              Schedule
            </button>
          </div>
        </div>
        <LineFooter />
      </div>
    </>
  );
};

export default Ecommearce;
