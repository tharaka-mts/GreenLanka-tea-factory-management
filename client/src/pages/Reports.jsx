import React from 'react'

const Reports = () => {
  return (
    <div>

      <div class="min-h-screen  bg-gray-200  flex flex-wrap items-center  justify-center  ">

        <div class="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center  container   ">
          <div class="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-[28%] sm:w-full bg-white z-30">
            <h1 class="text-emerald-400 font-semibold text-4xl text-center">Green Lanka Tea Estate</h1>
            <div class="text-center py-4 px-7">
              <h1 class="text-gray-700 mt-4  text-4xl font-black">LKR 555,059</h1>
              <p class="text-gray-500  mt-2">Net Income</p>
            </div>
            <div class="h-px bg-gray-300"></div>
            <div class="text-center mt-3">

              <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl ">

                <p className="text-center font-semibold text-3xl">LKR 987,234</p>
                <p className="text-center text-gray-500 mt-1 text-lg">Income</p>
              </div>

              <div class="text-center  ">
                <p className="text-center font-semibold text-3xl">LKR 432,175</p>
                <p className="text-center text-gray-500 mt-1 text-lg">Expense</p>
              </div>

            </div>
            <button class="w-full mt-8 mb-3 py-2 text-emerald-400 font-semibold text-xl bg-gray-200 hover:shadow-xl duration-200 hover:bg-white">See More</button>
          </div>

          <div class="md:max-w-[5%] sm:w-full bg-gray-200"></div>

          <div class="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-[28%] sm:w-full bg-emerald-400 transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl">
            <h1 class="text-gray-800  font-semibold text-4xl text-center">Total</h1>
            <div class="text-center py-4 px-7">
              <h1 class="text-white mt-4  text-4xl font-black">LKR 895,922</h1>
              <p class="text-gray-600  mt-2">Net Income</p>
            </div>
            <div class="h-px bg-white"></div>
            <div class="text-center mt-3">

              <div className="dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl ">


                <p className="text-center font-semibold text-3xl text-gray-200">LKR 1,431,384</p>
                <p className="text-center text-gray-600 mt-1 text-lg">Income</p>
              </div>

              <div class="text-center py-4 px-7">
                <p className="text-center font-semibold text-3xl text-gray-200">LKR 535,462</p>
                <p className="text-center text-gray-600 mt-1 text-lg">Expense</p>
              </div>


            </div>
            <button class="w-full mt-8 mb-3 py-2 text-emerald-400 font-semibold text-xl bg-gray-200 hover:shadow-xl duration-200 hover:bg-white">See More</button>
          </div>

          <div class="md:max-w-[5%] sm:w-full bg-gray-200"></div>

          <div class="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-[28%] sm:w-full bg-white z-30">
            <h1 class="text-emerald-400 font-semibold text-4xl text-center">Outside Tea Estates</h1>
            <div class="text-center py-4 px-7">
              <h1 class="text-gray-700 mt-4  text-4xl font-black">LKR 340,863</h1>
              <p class="text-gray-500  mt-2">Net Income</p>
            </div>
            <div class="h-px bg-gray-300"></div>
            <div class="text-center mt-3">

              <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl ">

                <p className="text-center font-semibold text-3xl">LKR 444,150</p>
                <p className="text-center text-gray-500 mt-1 text-lg">Income</p>
              </div>

              <div class="text-center  ">
                <p className="text-center font-semibold text-3xl">LKR 103,287</p>
                <p className="text-center text-gray-500 mt-1 text-lg">Expense</p>
              </div>

            </div>
            <button class="w-full mt-8 mb-3 py-2 text-emerald-400 font-semibold text-xl bg-gray-200 hover:shadow-xl duration-200 hover:bg-white">See More</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Reports;




