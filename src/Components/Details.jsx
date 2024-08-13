import React from "react";
import { useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import cart from '../Assets/Images/icons/cart.png'
import axios from "axios";
import Loading from "./Loading";
import home from "../Assets/home.module.css"



function ProductDetails(){
  
    let param=useParams();

    const [units, setUnits] = useState(1); 
    const [prod,getprod]=useState({});
    const [qty,getqty]=useState([]);
    const [stock,setstock]=useState([])
    const [ind,getind]=useState([])
    const [num,getnum]=useState([]);
    const [selectedOption, setSelectedOption] = useState();
    const [price,setprice]=useState([])  
    const [item,setitem]=useState(false)
    const [login ,setlog]=useState(false)
    
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



useEffect(()=>{
  axios.get(`/product/${param.id}`,{withCredentials:true})
  .then((res)=>{getprod(res.data);
    const q=res.data.quantity;
    const s=res.data.stock;
    const pr=res.data.price;
  getqty(q.split(":"))
  getnum(pr.split(":"))
  setstock(s.split(":"))
  setSelectedOption(q.split(":")[0])
  setprice(pr.split(":")[0])
  getind(s.split(":")[0])
  
  })
  .catch((e)=>{
    console.error(e.message)
  })
},[])

const qty_price=(index)=>{
  setprice(num[index])
  setSelectedOption(qty[index])
  getind(stock[index])
  
}
const qty2_price=(index)=>{
  setprice(num[index])
  setSelectedOption(qty[index]+"e")
  getind(stock[index])
  
}

async function add_cart(){
  try{
  await axios.get(`/cart/${String(prod.name)}/${units}/${selectedOption}`,{withCredentials:true})
  .then((res)=>{
    if(res.data.status=='ok'){
      setitem(true)
      setTimeout(()=>{
      setitem(false)
    },2000)
    }
    else{}
    
  })
  .catch((e)=>{
    console.error(e.message)
    if(e.message==="Request failed with status code 500"){
      setlog(true)
      setTimeout(()=>{
      setlog(false)
    },2000)
    }
  })
  }
  catch(e){
    console.error(e)
  }
}



return(
    <div className="w-screen h-fit flex box-border py-5 px-3 md:px-10 pt-24">
      {selectedOption? <div></div>:<Loading/>}
        <div className="w-full flex flex-col box-border md:px-10">
            <div className="bg-cover bg-center rounded-xl w-full h-96" id="main" style={{backgroundImage:`url(${prod.img1})`}}></div>
            <div className={"w-full h-fit flex md:overflow-visible overflow-scroll" + home.category}>
              <img src={prod.img1} onClick={()=>{document.getElementById("main").style.backgroundImage=`url(${prod.img1})`}} className="w-fit h-20 my-3 mx-2 rounded"></img>
              <img src={prod.img2} onClick={()=>{document.getElementById("main").style.backgroundImage=`url(${prod.img2})`}} className="w-fit h-20 my-3 mx-2 rounded"></img>
              <img src={prod.img3} onClick={()=>{document.getElementById("main").style.backgroundImage=`url(${prod.img3})`}} className="w-fit h-20 my-3 mx-2 rounded"></img>
            </div>

            <div className="w-full flex-col h-fit box-border px-3 py-5 font-semibold flex md:hidden">
          
          
            <h2 className="capitalize text-3xl flex justify-between">{prod.name}</h2>
            
            {stock.reduce((acc, value) => acc + Number(value), 0) && +ind>0 ? <h3 className="capitalize text-green-600 text-2xl py-4 border-b-2 border-gray-300">in stock
              {+prod.percentage ? <p className=" text-green-600 font-normal text-base">{+prod.percentage}% Discount on this product</p>:<p className="float-right text-sm"></p>}
            </h3> 
            : <h3 className="capitalize text-red-600 text-2xl py-4 border-b-2 border-gray-300">Out of stock</h3>}
            {stock.reduce((acc, value) => acc + Number(value), 0) ? <div>
            <h3 className="text-3xl flex text-blue-700 py-3">₹ {Math.ceil((price - (+prod.percentage ? +price * +prod.percentage/100:0)-(+price * +prod.tax/100)))} <p className="text-base mt-auto ml-1"> + ₹ {Math.ceil(((+price * +prod.tax/100)))} tax</p></h3>
            {+prod.percentage  ? <h4 className="line-through text-xl text-gray-500  pb-2">₹ {price } </h4>: <h4 ></h4>}
            </div>: <h3 className="text-3xl text-blue-700 py-3">Currently unavailable</h3>}
            {stock.reduce((acc, value) => acc + Number(value), 0) ? <div className="flex flex-col ">
                <h5 className="capitalize text-base py-5 text-gray-600">Choose quantity</h5>



                <div className="flex flex-row mb-6 pb-5 border-gray-300 border-b-2">

                {qty.map((item,index)=>{

        return(
          <label htmlFor={item} onClick={()=>{qty2_price(index)}} className={"flex justify-center py-1 px-4  rounded mr-3 text-[15px] border-2"+(selectedOption===item?" text-white bg-blue-600 border-blue-600":" text-gray-600 bg-transparent border-gray-600")}>{item + prod.si_unit}
          <input type="radio" name="item" hidden checked={selectedOption===item+'e'} id={item+"e"}/></label>
        )
    })}
                </div>


              {+ind>0 ? 
                <div className="flex justify-between">
                <span className="w-fit flex justify-between text-blue-600 rounded-full bg-gray-200" >
                    <button type="button" onClick={decUnit} className="px-4 text-lg">-</button>
                    <button className="text-xl py-2">{units}</button>
                    <button type="button" onClick={incUnit} className="px-4 text-lg">+</button></span>
                    
                    <button onClick={add_cart} className="px-5 py-3 overflow-hidden relative bg-blue-600 rounded-full font-normal text-stone-50 text-base flex justify-center my-auto">
                      <div  className={"whitespace-nowrap duration-700 text-center pt-2 text-lg overflow-hidden rounded-full top-0 absolute " + (item ? " w-52 h-12 bg-green-600": "")+ (login ? " w-52 h-12 bg-red-700":'')+(!login&&!item?" w-0 h-0":"")} >{item? "✔ Item added":""} {login?"✘ Login to Add":''}</div>
                      <img src={cart} className="w-5 my-auto mr-2" />Add to Cart</button>
                    </div>
              : <div></div>}
                
                    
            </div> : <div></div>}
        </div>


            <h3 className="capitalize text-4xl mt-8 font-medium">More Information</h3>
            <h4 className="capitalize text-xl py-4">units</h4>
            <p className="text-base text-gray-500">{qty.map((q,index)=>(
              <React.Fragment key={index}>
              {q} {prod.si_unit}
              {index !== stock.length - 1 && ', '}
            </React.Fragment>
            ))}</p>
            <h4 className="capitalize text-xl py-4">Shelf Life</h4>
            <p className="taxt-base text-gray-500">{prod.shelf_life}</p>
            <h4 className="capitalize text-xl py-4">country of origin</h4>
            <p className="taxt-base text-gray-500">india</p>
            <h4 className="capitalize text-xl py-4">Seller Details</h4>
            <p className="taxt-base text-gray-500">{prod.seller_detail}</p>
            <h4 className="capitalize text-xl py-4">FSSAI Licence</h4>
            <p className="taxt-base text-gray-500">{prod.fssai_info}</p>
            <h4 className="capitalize text-xl py-4">Key Features</h4>
            <p className="taxt-base text-gray-500">{prod.key_features}</p>
            <h4 className="capitalize text-xl py-4">Description</h4>
            <p className="taxt-base text-gray-500">{prod.description}</p>
            <h4 className="capitalize text-xl py-4">Customer Care</h4>
            <p className="taxt-base text-gray-500">{prod.customer_care}</p>
                
        </div>

        <div className="w-full flex-col h-fit box-border px-24 py-5 font-semibold hidden md:flex">
          <span className="text-blue-700 my-3 font-normal bg-blue-100 px-3 py-[2px] capitalize w-fit rounded">
            Home <i className="fa fa-angle-right mx-2"></i>
            Products <i className="fa fa-angle-right mx-2"></i>
            {prod.category} <i className="fa fa-angle-right mx-2"></i>
            {prod.name}
          </span>
          
            <h2 className="capitalize text-3xl flex justify-between">{prod.name}</h2>
            
            {stock.reduce((acc, value) => acc + Number(value), 0) && +ind>0 ? <h3 className="capitalize text-green-600 text-2xl py-4 border-b-2 border-gray-300">in stock
              {+prod.percentage ? <p className="float-right text-green-600 font-normal text-base">{+prod.percentage}% Discount on this product</p>:<p className="float-right text-sm"></p>}
            </h3> 
            : <h3 className="capitalize text-red-600 text-2xl py-4 border-b-2 border-gray-300">Out of stock</h3>}
            {stock.reduce((acc, value) => acc + Number(value), 0) ? <div>
            <h3 className="text-3xl flex text-blue-700 py-3">₹ {Math.ceil((price - (+prod.percentage ? +price * +prod.percentage/100:0)-(+price * +prod.tax/100)))} <p className="text-base mt-auto ml-1"> + ₹ {Math.ceil(+price * +prod.tax/100)} tax</p></h3>
            {+prod.percentage  ? <h4 className="line-through text-xl text-gray-500  pb-2">₹ {price } </h4>: <h4 ></h4>}
            </div>: <h3 className="text-3xl text-blue-700 py-3">Currently unavailable</h3>}
            {stock.reduce((acc, value) => acc + Number(value), 0) ? <div className="flex flex-col ">
                <h5 className="capitalize text-base py-5 text-gray-600">Choose quantity</h5>



                <div className="flex flex-row mb-6 pb-5 border-gray-300 border-b-2">

                {qty.map((item,index)=>{

        return(
          <label htmlFor={item} onClick={()=>{qty_price(index)}} className={"flex justify-center py-1 px-4  rounded mr-3 text-[15px] border-2"+(selectedOption===item?" text-white bg-blue-600 border-blue-600":" text-gray-600 bg-transparent border-gray-600")}>{item + prod.si_unit}
          <input type="radio" name="item" hidden checked={selectedOption===item} id={item}/></label>
        )
    })}
                </div>


              {+ind>0 ? 
                <div className="flex ">
                <span className="w-28 flex justify-between text-blue-600 rounded-full bg-gray-200" >
                    <button type="button" onClick={decUnit} className="px-4 text-lg">-</button>
                    <button className="text-xl py-2">{units}</button>
                    <button type="button" onClick={incUnit} className="px-4 text-lg">+</button></span>
                    
                    <button onClick={add_cart} className="px-12 py-3 overflow-hidden relative bg-blue-600 rounded-full mx-5 font-normal text-stone-50 text-base flex justify-center my-auto">
                      <div className={"whitespace-nowrap duration-500 text-center pt-2 text-lg overflow-hidden rounded-full top-0 absolute" + (item ? " w-52 h-12 bg-green-600": "") +  (login ? " w-52 h-12 bg-red-700":'')+(!login&&!item?" w-0 h-0":"")} >{item? "✔ Item added":""} {login?"✘ Login to Add":''}</div>
                      <img src={cart} className="w-5 my-auto mr-2" />Add to Cart</button>
                    </div>
              : <div></div>}
                
                    
            </div> : <div></div>}
        </div>
    </div>
)




}export default ProductDetails;