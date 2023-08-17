import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { ecomPieChartDataProduction1, ecomPieChartDataProduction2, ecomPieChartDataProduction3 } from '../data/dummy';
import { Pie, FourBarChart } from '../components';
import '../index.css';

const ViewProduction = () => {
  const { currentColor } = useStateContext();
  return (
    <div className=" md:m-10">

      <div style={{ backgroundColor: currentColor }} className="md:m-4 md:p-8 rounded-3xl">
        <h1 style={{ fontWeight: 'bold' }} className="mt-4 text-white font-semibold text-3xl text-center">Comparison of Total Production with Last Three Months</h1>

        <div className="flex-wrap gap-10 m-4 justify-left">
          <div className="w-full md:w-full bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
            <div className="flex justify-between items-center gap-2">
              
            </div>
            <div className="mt-12 w-full">
            <FourBarChart width="full" height="400px" />
            </div>
          </div>

          <h1 style={{ fontWeight: 'bold' }} className="mt-12 text-white font-semibold text-3xl text-center">Comparison Accepted and Rejected Tea Leaves Weight</h1>
          <div className="mt-4 w-full md:w-full bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
            <div className="flex  gap-10 m-4 justify-left">
              <spam className="w-1/3">
              <h1 className="text-black font-semibold text-2xl text-center font-bold" style={{ color: currentColor, fontWeight: 'bold' }}>May</h1>
              <Pie id="pie-chart1" data={ecomPieChartDataProduction1} legendVisiblity={true}/>
              </spam>
              <spam className="w-1/3">
              <h1 className="text-black font-semibold text-2xl text-center" style={{ color: currentColor, fontWeight: 'bold' }}>June</h1>
              <Pie id="pie-chart2" data={ecomPieChartDataProduction2} legendVisiblity={true} />
              </spam>
              <spam className="w-1/3">
              <h1 className="text-black font-semibold text-2xl text-center" style={{ color: currentColor, fontWeight: 'bold' }}>July</h1>
              <Pie id="pie-chart3" data={ecomPieChartDataProduction3} legendVisiblity={true} />
              </spam>
            </div>
          </div>

        </div>
      </div>


    </div >
  )
}

export default ViewProduction

