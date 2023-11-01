import { GoDot } from 'react-icons/go';
import { Link } from 'react-router-dom';

import { Stacked, Pie, LineChart, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData, recentTea } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import viewWeight from './ViewWeight.jsx';



const Home = () => {

  const { currentColor, currentMode } = useStateContext();

  

  return (
    <div className="my-16">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div  className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Today's Production</p>
              <p className="text-3xl">1,027 KG</p>
            </div>
          </div>
          <div className="mt-6">
            <Link
              to='/viewWeight'
              style={{ backgroundColor: currentColor }}
              className=" text-lg text-white p-3 w-auto hover:drop-shadow-xl hover:bg-gray-200 rounded-[10px]"
            >
              Show
            </Link>
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <Link to='/attendance'>
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-lg opacity-0.9 rounded-[15px]  p-4 hover:drop-shadow-xl"
              >
                {item.title}
              </button>
              </Link>
              <p className="mt-3">
                <span className="text-lg text-gray-500 font-semibold">Total : {item.total}</span>
              </p>
              <p className="text-lg text-gray-400  mt-1">Present : {item.present}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Income Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoDot />
                </span>
                <span>Income</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">LKR 93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    10%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Income</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">LKR 48,487</p>

                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
              </div>
              <div className="mt-10">
              <Link
              to='/reports'
              style={{ backgroundColor: currentColor }}
              className=" text-lg text-white p-3 w-auto hover:drop-shadow-xl hover:bg-gray-200 rounded-[10px]"
            >
              Show More
            </Link>
              </div>
            </div>
            <div>
              <Stacked currentMode={currentMode} width="320px" height="360px" />
            </div>
          </div>
        </div>
        <div>
          <div
            className=" rounded-2xl md:w-400 p-4 m-3 bg-white text-gray-500 dark:text-gray-200 dark:bg-secondary-dark-bg"
          >

            <div className="flex justify-between items-center mt-3">
              <p className="font-semibold text-lg">Rate for Raw Tea Leaves :</p>
              <div>
                <p className="text-md font-semibold ">LKR 350.50</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-3">
              <p className="font-semibold text-lg">Rate for Grade A Production :</p>
              <div>
                <p className="text-md font-semibold ">LKR 3050.50</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-3">
              <p className="font-semibold text-lg">Rate for Grade B Production :</p>
              <div>
                <p className="text-md font-semibold ">LKR 350.50</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-3">
              <p className="font-semibold text-lg">Rate for Grade C Production :</p>
              <div>
                <p className="text-md font-semibold ">LKR 350.50</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-3">
              <p className="font-semibold text-lg">Rate for Grade D Production :</p>
              <div>
                <p className="text-md font-semibold ">LKR 350.50</p>
              </div>
            </div>


            <div className="flex justify-around mt-8">
              <button className='text-lg p-3 w-auto hover:drop-shadow-xl text-white hover:bg-gray-200 rounded-[10px]' style={{ backgroundColor: currentColor }} >Accept</button>
              <button className='text-lg p-3 w-auto hover:drop-shadow-xl text-white hover:bg-gray-200 rounded-[10px]' style={{ backgroundColor: '#f56565' }} >Decline</button>
            </div>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">LKR 3.52M</p>
              <p className="text-gray-400">Monthly profit</p>
            </div>

            <div className="w-40">
              <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Recent Tea Production</p>
          </div>
          <div className="mt-10 w-72 md:w-400">
            {recentTea.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div className='mt-3'>
                    <p className="text-md font-semibold">{item.title}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor} mt-3`}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-5">
            <Link
              to='/production'
              style={{ backgroundColor: currentColor }}
              className=" text-lg text-white p-3 w-auto hover:drop-shadow-xl hover:bg-gray-200 rounded-[10px]"
            >
              Show More
            </Link>
            </div>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
          <div className="gap-2 mb-10">
            <p className="text-xl font-semibold">Sales Overview</p>
          </div>
          <div className="md:w-full overflow-auto">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
