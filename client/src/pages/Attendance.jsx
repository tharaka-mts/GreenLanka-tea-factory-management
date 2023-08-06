import React from 'react'
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

const Attendance = () => {
  const { currentColor } = useStateContext();
  return (
    <div>

      <div class="min-h-screen  bg-gray-200  flex flex-wrap items-center  justify-center  ">

        <div class="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center  container">

          <div class="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-[22%] sm:w-full bg-white z-30">
            <h1 style={{ color: currentColor }} class="mt-4 font-semibold text-4xl text-center">Managers</h1>

            <div class="text-center mt-3">
              <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-2 rounded-2xl ">
                <p className="text-center font-semibold text-2xl">Present</p>
                <p className="text-center font-semibold text-2xl mt-3 ">00</p>
              </div>

              <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-2 rounded-2xl ">
                <p className="text-center font-semibold text-2xl">Absent</p>
                <p className="text-center font-semibold text-2xl mt-3 ">00</p>
              </div>
            </div>

            <Link to='/ViewAttendance'>
              <button style={{ color: currentColor }} class="w-full mt-6 mb-3 py-2 font-semibold text-xl bg-gray-200 hover:shadow-xl duration-200 hover:bg-gray-100">More Details</button>
            </Link>
            <Link to='/AttendanceHistory'>
              <button style={{ color: currentColor }} class="w-full mt-4 mb-3 py-2 font-semibold text-xl bg-gray-200 hover:shadow-xl duration-200 hover:bg-gray-100">View History</button>
            </Link>
          </div>

          <div class="md:max-w-[5%] sm:w-full bg-gray-200"></div>

          <div class="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-[22%] sm:w-full bg-white z-30">
            <h1 style={{ color: currentColor }} class="mt-4 font-semibold text-4xl text-center">Supervisors</h1>

            <div class="text-center mt-3">
              <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-2 rounded-2xl ">
                <p className="text-center font-semibold text-2xl">Present</p>
                <p className="text-center font-semibold text-2xl mt-3 ">00</p>
              </div>

              <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-2 rounded-2xl ">
                <p className="text-center font-semibold text-2xl">Absent</p>
                <p className="text-center font-semibold text-2xl mt-3 ">00</p>
              </div>
            </div>

            <Link to='/ViewAttendance'>
              <button style={{ color: currentColor }} class="w-full mt-6 mb-3 py-2 font-semibold text-xl bg-gray-200 hover:shadow-xl duration-200 hover:bg-gray-100">More Details</button>
            </Link>
            <Link to='/AttendanceHistory'>
              <button style={{ color: currentColor }} class="w-full mt-4 mb-3 py-2 font-semibold text-xl bg-gray-200 hover:shadow-xl duration-200 hover:bg-gray-100">View History</button>
            </Link>
          </div>

          <div class="md:max-w-[5%] sm:w-full bg-gray-200"></div>

          <div class="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-[22%] sm:w-full bg-white z-30">
            <h1 style={{ color: currentColor }} class="mt-4 font-semibold text-4xl text-center">Employees</h1>

            <div class="text-center mt-3">
              <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-2 rounded-2xl ">
                <p className="text-center font-semibold text-2xl">Present</p>
                <p className="text-center font-semibold text-2xl mt-3 ">00</p>
              </div>

              <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-2 rounded-2xl ">
                <p className="text-center font-semibold text-2xl">Absent</p>
                <p className="text-center font-semibold text-2xl mt-3 ">00</p>
              </div>
            </div>

            <Link to='/ViewAttendance'>
              <button style={{ color: currentColor }} class="w-full mt-6 mb-3 py-2 font-semibold text-xl bg-gray-200 hover:shadow-xl duration-200 hover:bg-gray-100">More Details</button>
            </Link>
            <Link to='/AttendanceHistory'>
              <button style={{ color: currentColor }} class="w-full mt-4 mb-3 py-2 font-semibold text-xl bg-gray-200 hover:shadow-xl duration-200 hover:bg-gray-100">View History</button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Attendance;