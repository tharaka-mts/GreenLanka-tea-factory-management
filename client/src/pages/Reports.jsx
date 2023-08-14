import React from 'react'
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

const Reports = () => {
  const { currentColor } = useStateContext();
  return (
    <div>

      <div class="min-h-screen  flex flex-wrap items-center  justify-center  ">

        <div class="p-16 flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center  container ">
          <div class="mt-12 py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full sm:w-full bg-gray-200 max-w-sm overflow-hidden shadow-lg mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl ">
            <h1 style={{ color: currentColor }} class="font-semibold xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl text-center">Green Lanka Tea Estate</h1>

            <div class="text-center mt-3">

              <div className="bg-gray-200  m-3 p-6 rounded-2xl ">

                <p className="text-center font-semibold xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-xl">LKR 2,987,234</p>
                <p className="text-center text-gray-500 mt-3 text-lg">Total weight of Tea Leaves</p>
              </div>

              <div class="text-center m-3 p-4 ">
                <p className="text-center font-semibold xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-xl">LKR 1,692,175</p>
                <p className="text-center text-gray-500 mt-3 text-lg">Total Payment for Tea Pluckers</p>
              </div>

            </div>

            <Link to='/greenLankaReport'>
              <button style={{ color: currentColor }} class="w-full mt-8 mb-3 py-2 font-semibold text-xl bg-gray-100 hover:shadow-xl duration-200 hover:bg-gray-100">See More</button>
            </Link>
          </div>

          <div class="xl:max-w-[4%] lg:max-w-[2%] md:max-w-[1%] sm:w-full"></div>

          <div style={{ backgroundColor: currentColor }} class="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full sm:w-full z-30 max-w-sm overflow-hidden shadow-lg mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
            <h1 style={{ fontWeight: 'bold' }} class="font-semibold xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl text-center text-gray-800  font-semibold text-center">Total</h1>
            <div class="text-center py-12 px-7">
              <h1 style={{ fontWeight: 'bold' }} class="text-white text-center font-semibold xl:text-4xl lg:text-2xl md:text-xl sm:text-xl text-xl">LKR 2,258,517</h1>
              <p class="text-gray-600  mt-2">Net Profit</p>
            </div>
            <div class="h-px bg-white"></div>
            <div class="text-center mt-3">

              <div className="dark:text-gray-200  m-3 p-4 rounded-2xl ">


                <p className="text-center font-semibold xl:text-2xl lg:text-2xl md:text-xl sm:text-xl text-xl text-gray-200">LKR 5,261,571</p>
                <p className="text-center text-gray-600 mt-1 text-lg">Income</p>
              </div>

              <div class="text-center">
                <p className="text-center font-semibold xl:text-2xl lg:text-2xl md:text-xl sm:text-xl text-xl text-gray-200">LKR 3,003,054</p>
                <p className="text-center text-gray-600 mt-1 text-lg">Expense</p>
              </div>


            </div>
            <Link to='/fullReport'>
              <button style={{ color: currentColor }} class="w-full mt-8 mb-3 py-2 font-semibold text-xl bg-gray-200 hover:shadow-xl duration-200 hover:bg-white">See More</button>
            </Link>
          </div>

          <div class="xl:max-w-[4%] lg:max-w-[2%] md:max-w-[1%] sm:w-full"></div>

          <div class="mt-12 py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full sm:w-full bg-gray-200 max-w-sm overflow-hidden shadow-lg mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
            <h1 style={{ color: currentColor }} class="font-semibold xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl text-center">Outside Tea Estates</h1>

            <div class="text-center mt-3">

              <div className="bg-gray-200  m-3 p-10 rounded-2xl ">

                <p className="text-center font-semibold xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-xl">LKR 2,987,234</p>
                <p className="text-center text-gray-500 mt-3 text-lg">Total weight of Tea Leaves</p>
              </div>

              <div class="text-center m-3 p-4 ">
                <p className="text-center font-semibold xl:text-3xl lg:text-2xl md:text-xl sm:text-xl text-xl">LKR 1,692,175</p>
                <p className="text-center text-gray-500 mt-3 text-lg">Total Payment for Tea Estates</p>
              </div>

            </div>

            <Link to='/outsideReport'>
              <button style={{ color: currentColor }} class="w-full mt-8 mb-3 py-2 font-semibold text-xl bg-gray-100 hover:shadow-xl duration-200 hover:bg-gray-100">See More</button>
            </Link>
          </div>

          {/* <div class="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full sm:w-full bg-gray-200 z-30 max-w-sm overflow-hidden shadow-lg mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
            <h1  style={{ color: currentColor, fontWeight: 'bold' }} class="font-semibold xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl text-center">Outside Tea Estates</h1>
            <div class="text-center py-10 px-7">
              <h1 style={{ fontWeight: 'bold' }} class="text-gray-700 mt-4 xl:text-4xl lg:text-2xl md:text-xl sm:text-xl text-xl font-black">LKR 963,458</h1>
              <p class="text-gray-500  mt-2">Net Profit</p>
            </div>
            <div class="h-px bg-gray-300"></div>
            <div class="text-center mt-3">

              <div className="bg-gray-200  m-3 p-4 rounded-2xl ">

                <p className="text-center font-semibold xl:text-2xl lg:text-2xl md:text-xl sm:text-xl text-xl">LKR 2,274,337</p>
                <p className="text-center text-gray-500 mt-1 text-lg">Income</p>
              </div>

              <div class="text-center  ">
                <p className="text-center font-semibold xl:text-2xl lg:text-2xl md:text-xl sm:text-xl text-xl">LKR 1,310,879</p>
                <p className="text-center text-gray-500 mt-1 text-lg">Expense</p>
              </div>

            </div>
            <Link to='/outsideReport'>
              <button style={{ color: currentColor }} class="w-full mt-8 mb-3 py-2 font-semibold text-xl bg-gray-100 hover:shadow-xl duration-200 hover:bg-gray-100">See More</button>
            </Link>
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default Reports;




