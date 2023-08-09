import React from 'react'
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

const Reports = () => {
  const { currentColor} = useStateContext();
  return (
    <div>

      <div class="min-h-screen  flex flex-wrap items-center  justify-center  ">

        <div class="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center  container   ">
          <div class="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-[28%] sm:w-full bg-white z-30">
            <h1 style={{ color: currentColor }} class="font-semibold text-4xl text-center">Green Lanka Tea Estate</h1>
            <div class="text-center py-4 px-7">
              <h1 class="text-gray-700 mt-4  text-4xl font-black">LKR 1,295,059</h1>
              <p class="text-gray-500  mt-2">Net Profit</p>
            </div>
            <div class="h-px bg-gray-300"></div>
            <div class="text-center mt-3">

              <div className="bg-white  m-3 p-4 rounded-2xl ">

                <p className="text-center font-semibold text-2xl">LKR 2,987,234</p>
                <p className="text-center text-gray-500 mt-1 text-lg">Income</p>
              </div>

              <div class="text-center  ">
                <p className="text-center font-semibold text-2xl">LKR 1,692,175</p>
                <p className="text-center text-gray-500 mt-1 text-lg">Expense</p>
              </div>

            </div>

            <Link to='/greenLankaReport'>
              <button style={{ color: currentColor }} class="w-full mt-8 mb-3 py-2 font-semibold text-xl bg-gray-200 hover:shadow-xl duration-200 hover:bg-gray-100">See More</button>
            </Link>
          </div>

          <div class="md:max-w-[5%] sm:w-full"></div>

          <div style={{ backgroundColor: currentColor }} class="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-[28%] sm:w-full transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl">
            <h1 class="text-gray-800  font-semibold text-4xl text-center">Total</h1>
            <div class="text-center py-4 px-7">
              <h1 class="text-white mt-4  text-4xl font-black">LKR 2,258,517</h1>
              <p class="text-gray-600  mt-2">Net Profit</p>
            </div>
            <div class="h-px bg-white"></div>
            <div class="text-center mt-3">

              <div className="dark:text-gray-200  m-3 p-4 rounded-2xl ">


                <p className="text-center font-semibold text-2xl text-gray-200">LKR 5,261,571</p>
                <p className="text-center text-gray-600 mt-1 text-lg">Income</p>
              </div>

              <div class="text-center py-4 px-7">
                <p className="text-center font-semibold text-2xl text-gray-200">LKR 3,003,054</p>
                <p className="text-center text-gray-600 mt-1 text-lg">Expense</p>
              </div>


            </div>
            <Link to='/fullReport'>
              <button  style={{ color: currentColor }} class="w-full mt-8 mb-3 py-2 font-semibold text-xl bg-gray-200 hover:shadow-xl duration-200 hover:bg-white">See More</button>
            </Link>
          </div>

          <div class="md:max-w-[5%] sm:w-full"></div>

          <div class="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-[28%] sm:w-full bg-white z-30">
            <h1  style={{ color: currentColor }} class="font-semibold text-4xl text-center">Outside Tea Estates</h1>
            <div class="text-center py-4 px-7">
              <h1 class="text-gray-700 mt-4  text-4xl font-black">LKR 963,458</h1>
              <p class="text-gray-500  mt-2">Net Profit</p>
            </div>
            <div class="h-px bg-gray-300"></div>
            <div class="text-center mt-3">

              <div className="bg-white  m-3 p-4 rounded-2xl ">

                <p className="text-center font-semibold text-2xl">LKR 2,274,337</p>
                <p className="text-center text-gray-500 mt-1 text-lg">Income</p>
              </div>

              <div class="text-center  ">
                <p className="text-center font-semibold text-2xl">LKR 1,310,879</p>
                <p className="text-center text-gray-500 mt-1 text-lg">Expense</p>
              </div>

            </div>
            <Link to='/outsideReport'>
              <button style={{ color: currentColor }} class="w-full mt-8 mb-3 py-2 font-semibold text-xl bg-gray-200 hover:shadow-xl duration-200 hover:bg-gray-100">See More</button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Reports;




