import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaCamera } from "react-icons/fa";
import ViewAttendance from "./ViewAttendance";
import ViewSalaryHistory from "./ViewSalaryHistory";
import Leaves from "./Leaves";
import ViewSalaryReport from "./ViewSalaryReport";
import { getUserDetails } from "../api/getDetails";
import { useStateContext } from "../contexts/ContextProvider";

const UserProfilePage = () => {
  const { currentColor, currentMode } = useStateContext();

  const [activeTab, setActiveTab] = useState("attendance");
  const [isEditingPhoto, setIsEditingPhoto] = useState(false);

  const [userDetails, setUserDetails] = useState({});

  const userId = window.localStorage.getItem("userID");

  useEffect(() => {
    async function fetchUserDetails() {
      const userDetailsData = await getUserDetails(userId);

      if (userDetailsData) {
        setUserDetails(userDetailsData);
      }
    }

    fetchUserDetails();
  }, [userId]);
  // console.log(userId); // testing

  const TabContent = () => {
    switch (activeTab) {
      case "attendance":
        return <ViewAttendance />;
      case "salaryHistory":
        return <ViewSalaryHistory />;
      case "salaryReport":
        return <ViewSalaryReport />;
      case "Leave":
        return <Leaves />;
      default:
        return null;
    }
  };

  const handleEditPhoto = () => {
    // Placeholder function for editing the photo
    setIsEditingPhoto(!isEditingPhoto);
    console.log("Edit photo clicked");
  };

  return (
    <div className="p-4">
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex items-center mb-4">
          <div className=" rounded-full overflow-hidden relative">
            <img
              className="rounded-full h-36 w-36"
              src={`http://localhost:3005/${userDetails.image}`} // Provide the path to the avatar image
              alt="User's avatar"
            />
            <button
              onClick={handleEditPhoto}
              className="absolute bottom-0 right-0 left-16 bg-green-500 p-2 rounded-full shadow-md"
            >
              <FaCamera className="text-white" />
            </button>
          </div>
          <div className="ml-4">
            <div>
              <h1 className="text-xl font-semibold">
                {userDetails.firstname} {userDetails.lastname}
              </h1>

              <p className="text-gray-600">{userDetails.type}</p>
              <p className="text-gray-600">{userDetails.mobile}</p>
              <p className="text-gray-600">{userDetails.address}</p>
              <p className="text-gray-600">{userDetails.email}</p>
            </div>

            <div className="mt-2">
              <Link to={`/update-details/${userDetails._id}`} className="flex">
                <FaEdit className="text-green-500 text-2xl cursor-pointer" />

                <h3 className="ml-2">Edit Pofile</h3>
              </Link>
            </div>

            <div></div>

            {userDetails.type === "Admin" ? (
              <div></div>
            ) : (
              <button
                type="submit"
                className="w-full  text-white p-2 rounded-md items-right "
                style={{
                  backgroundColor: currentColor,
                  transition: "background-color 0.3s",
                }}
              >
                Request a Leave
              </button>
            )}
          </div>
        </div>
        <div className="border-b border-gray-300 pb-4 bg-green-100 color-green-600 text-center items-center">
          <ul className="flex space-x-4 text-center items-center justify-center">
            <li
              className={`cursor-pointer ${
                activeTab === "attendance" &&
                "font-semibold border-b-2 border-green-500"
              }`}
              onClick={() => setActiveTab("attendance")}
            >
              View Attendance
            </li>
            <li
              className={`cursor-pointer ${
                activeTab === "salaryHistory" &&
                "font-semibold border-b-2 border-green-500"
              }`}
              onClick={() => setActiveTab("salaryHistory")}
            >
              Salary History
            </li>
            <li
              className={`cursor-pointer ${
                activeTab === "salaryReport" &&
                "font-semibold border-b-2 border-green-500"
              }`}
              onClick={() => setActiveTab("salaryReport")}
            >
              Salary Report
            </li>
            <li
              className={`cursor-pointer ${
                activeTab === "Leave" &&
                "font-semibold border-b-2 border-green-500"
              }`}
              onClick={() => setActiveTab("Leave")}
            >
              Leave
            </li>
          </ul>
        </div>
        <TabContent />
      </div>
    </div>
  );
};

export default UserProfilePage;
