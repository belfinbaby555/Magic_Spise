import { useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import test from '../Assets/Images/products/driedginger.jpg'
import cart from '../Assets/Images/icons/cart.png'



function ProductDetails(){
    let param=useParams();
    let num=['1 kg','2 kg','3 kg','4 kg','5 kg']
    const [units, setUnits] = useState(1); // change value here to og quantity when doing backend
    const incUnit = () => {
      setUnits(() => {
        return units + 1;
      });
    };
    const decUnit = () => {
      setUnits(() => {
        if (units > 1) {
          return units - 1;
        } else return units;
      });
    };

return(
    <div className="w-screen h-fit flex box-border py-5 px-10 pt-24">
        <div className="w-full flex flex-col box-border px-10">
            <div className="bg-cover bg-center rounded-xl w-full h-96" style={{backgroundImage:`url(${require('../Assets/Images/products/'+param.name+'.jpg')})`}}></div>
            <h3 className="capitalize text-4xl mt-8 font-medium">More Information</h3>
            <h4 className="capitalize text-xl py-4">unit</h4>
            <p className="text-base text-gray-500">1kg</p>
            <h4 className="capitalize text-xl py-4">Shelf Life</h4>
            <p className="taxt-base text-gray-500">12 Months</p>
            <h4 className="capitalize text-xl py-4">country of origin</h4>
            <p className="taxt-base text-gray-500">india</p>
            <h4 className="capitalize text-xl py-4">FSSAI Licence</h4>
            <p className="taxt-base text-gray-500">1145896632548</p>
            <h4 className="capitalize text-xl py-4">Description</h4>
            <p className="taxt-base text-gray-500">Pepper, particularly black pepper, is one of the 
                most commonly used spices worldwide. It contains a compound called piperine, which 
                has potent antioxidant and anti-inflammatory properties. It can help reduce inflammation, 
                support blood sugar control, and promote brain health¹². In Indian cuisine, pepper is used 
                to add flavor and heat to a variety of dishes, including curries, stews, and soups</p>
                
        </div>

        <div className="w-full flex flex-col h-fit box-border px-24 py-5 font-semibold">
          <span className="text-blue-700 my-3 font-normal bg-blue-100 px-3 py-[2px] capitalize w-fit rounded">
            Home <i className="fa fa-angle-right mx-2"></i>
            Products <i className="fa fa-angle-right mx-2"></i>
            Whole Spice <i className="fa fa-angle-right mx-2"></i>
            {param.name}
          </span>
            <h2 className="capitalize text-3xl">{param.name}</h2>
            <h3 className="capitalize text-green-600 text-2xl py-4 border-b-2 border-gray-300">in stock</h3>
            <h3 className="text-3xl text-blue-700 py-3">Rs.250</h3>
            <h4 className="line-through text-xl text-gray-500 border-b-2 border-gray-300 pb-4"> Rs.400 </h4>
            <div className="flex flex-col ">
                <h5 className="capitalize text-base py-5 text-gray-600">Choose quantity</h5>
                <form className="flex flex-row mb-6 pb-5 border-gray-300 border-b-2">
                {num.map((item)=>{
        return(
           <div className="flex justify-center py-1 px-2 bg-gray-200 rounded mr-2">
            <input type="radio" name="item" id={item} style={{accentColor:"blue"}}/>
            <label htmlFor={item} className="ml-1 text-gray-600 text-sm">{item}</label>
            </div>
        )
    })}
                </form>
                <div className="flex ">
                <span className="w-28 flex justify-between text-blue-600 rounded-full bg-gray-200" >
                    <button onClick={decUnit} className="px-4 text-lg">-</button>
                    <button className="text-xl py-2">{units}</button>
                    <button onClick={incUnit} className="px-4 text-lg">+</button></span>
                    
                    <button className="px-12 py-3 bg-blue-600 rounded-full mx-5 font-normal text-stone-50 text-base flex justify-center my-auto">
                      <img src={cart} className="w-5 my-auto mr-2" />Add to Cart</button>
                    </div>
            </div>
        </div>
    </div>
)




}export default ProductDetails;