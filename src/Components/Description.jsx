import "./Css/description.module.css";
import c_icon from "../Assets/Images/icons/client.png";
import e_icon from "../Assets/Images/icons/cart.png";
import gift from "../Assets/Images/gift.png";

const Description = () => {
  return (
    <div className="grid sm:grid-flow-row md:grid-cols-2 mx-5 sm:mx-16 mt-20 sm:mb-10 gap-10 sm:gap-0 ">
      <div className="flex flex-col sm: sm:pt-5">
        <h1 className="text-3xl md:text-4xl font-semibold border-l-[7px] my-3 pl-3 border-blue-700">
          We Are trusted
        </h1>
        <span className="text-blue-700 text-center sm:text-left font-medium text-3xl pl-5">
          Since 1956
        </span>
        <div className="flex justify-around sm:justify-normal am gap-10 sm:gap-20 mt-7 sm:mt-0">
          <div className="flex sm:gap-5 items-center sm:mt-10">
            <img src={c_icon} alt="Image" className="h-12" />
            <div>
              <p className="text-lg sm:text-3xl text-blue-700 font-medium">
                100+
              </p>
              <span className="text-gray-500  font-normal">Clients</span>
            </div>
          </div>
          <div className="flex sm:gap-5 items-center sm:mt-10">
            <img src={e_icon} alt="Image" className="h-12" />
            <div>
              <p className=" sm:text-3xl text-blue-700 font-medium">7 Tons +</p>
              <span className="text-gray-500 font-normal whitespace-nowrap">
                Spices Exported
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex justify-between bg-blue-100 rounded-3xl py-5 px-5 text-center sm:text-left">
        <div className=" sm:w-52 w-full ">
          <h3 className="sm:text-4xl text-3xl text-center sm:text-left font-medium ">
            <span className="text-blue-700">Gift</span> For Your Beloved
          </h3>
          <p className="text-gray-500 text-center sm:text-left font-medium my-5">How it works?</p>

          <div className="sm:hidden flex">
          <img src={gift} alt="Image" className="h-32 m-auto my-5" />
        </div>

          <button
            type="button"
            className="text-white w-full sm:w-fit font-normal bg-blue-700 sm:hover:bg-gray-800 active:bg-gray-800 duration-200 rounded-full text-base px-8 py-2.5 text-center  "
          >
            Send Gift
          </button>
        </div>
        <div className="sm:flex hidden">
          <img src={gift} alt="Image" className="h-40 m-auto mr-4" />

        </div>
      </div>
    </div>
  );
};

export default Description;
