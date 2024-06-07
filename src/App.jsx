/** @format */

import "./App.css";
import mobiles from "./mobiles.json";
import Product from "./Product.jsx";
import { createContext, useEffect, useState } from "react";

export const MobilesContext = createContext();

function App() {
  let [data, setData] = useState(mobiles);
  let [totalPrice, setTotal] = useState(0);
  let [totalnum, setTotalnum] = useState(0);

  useEffect(() => {
    let sum = 0;
    let num = 0;
    data.forEach((ele, idx) => {
      sum += ele.quantity * ele.price;
      num += ele.quantity;
    });
    setTotal(sum);
    setTotalnum(num);
  }, [data]);

  function decQunat(i) {
    // console.log("decccc");

    let tm = [...data];

    if (tm[i].quantity > 1) {
      tm[i].quantity -= 1;
      setData(tm);
    } else {
      removePhone(i);
    }
  }

  function incQunat(i) {
    // console.log("inccc");

    let tm = [...data];
    tm[i].quantity += 1;
    setData(tm);
  }

  function removePhone(index) {
    let tm = data.filter((ele, idx) => {
      if (idx != index) return ele;
    });

    setData(tm);
  }

  return (
    // <MobilesContext.Provider value={{ data, setData } }>
    <div className='container pb-16'>
      <nav className='bg-cyan-500 p-1 flex justify-around items-center'>
        <h1 className='text-4xl font-medium'>useReducer</h1>
        <div className='relative p-3'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/1413/1413908.png'
            alt=''
            className='w-16'
          />
          <div className='absolute top-2 right-0 bg-cyan-200 min-w-8 min-h-8 rounded-full text-center '>
            <p className='text-2xl font-medium'>{totalnum}</p>
          </div>
        </div>
      </nav>
      <div className='cartDisplay flex flex-col justify-center items-center gap-6 my-6'>
        {data.map((ele, index) => {
          return (
            <Product
              key={index}
              mob={ele}
              dec={decQunat}
              inc={incQunat}
              idx={index}
              rem={removePhone}
            />
          );
        })}
      </div>
      <hr className='border-2' />
      <div className='flex mt-4 font-medium text-2xl items-center lg:w-1/3 md:w-1/2 w-full justify-between mx-auto bg-gray-300 py-1 px-2 '>
        <div className='text-3xl '>
          <p>Total</p>
        </div>
        <div className='bg-green-400 py-1 px-3 rounded-xl'>
          <p>${totalPrice}</p>
        </div>
      </div>
      <div className='mx-auto w-fit my-4'>
        <button
          className='border-2 border-blue-600 rounded-md bg-blue-300 px-2 py-1 text-medium text-red-600 hover:text-red-700 hover:bg-blue-400 m-auto'
          onClick={() => setData([])}
        >
          Clear Cart
        </button>
      </div>
    </div>
    // </MobilesContext.Provider>
  );
}

export default App;
