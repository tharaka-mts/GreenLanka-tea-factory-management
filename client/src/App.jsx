import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Layout from "./Layout";
import {
  Home,
  Reports,
  Production,
  Attendance,
  Manage,
  MyTeam,
  Settings,
  Login,
  GreenLankaReport,
  OutsideReport,
  FullReport,
  ViewAttendance,
  AttendanceHistory,
  ViewProduction,
  UserProfilePage,
  AddUser,
  AddSalaryDetails,
  SalaryReport,
  ViewWeight,
  ChangePassword,
  ChangeProfilePicture,
} from "./pages";

import TeaRate from "./pages/Manager/TeaRate";
import AddExpenses from "./pages/Manager/AddExpenses";
import QualityCheck from "./pages/Manager/QualityCheck";

const App = () => {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/reports",
          element: <Reports />,
        },
        {
          path: "/attendance",
          element: <Attendance />,
        },
        {
          path: "/production",
          element: <Production />,
        },
        {
          path: "/manage",
          element: <Manage />,
        },
        {
          path: "/myteam",
          element: <MyTeam />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/greenLankaReport",
          element: <GreenLankaReport />,
        },
        {
          path: "/outsideReport",
          element: <OutsideReport />,
        },
        {
          path: "/fullReport",
          element: <FullReport />,
        },
        {
          path: "/ViewAttendance",
          element: <ViewAttendance />,
        },
        {
          path: "/AttendanceHistory",
          element: <AttendanceHistory />,
        },
        {
          path: "/ViewProduction",
          element: <ViewProduction />,
        },
        {
          path: "/salary",
          element: <SalaryReport />,
        },
        {
          path: "/UserProfilePage",
          element: <UserProfilePage />,
        },
        {
          path: "/AddUser",
          element: <AddUser />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/AddSalaryDetails",
          element: <AddSalaryDetails />,
        },
        {
          path: "/Manager/TeaRate",
          element: <TeaRate />,
        },
        {
          path: "/Manager/AddExpenses",
          element: <AddExpenses />,
        },
        {
          path: "/Manager/QualityCheck",
          element: <QualityCheck />,
        },
        {
          path: "/ChangePassword",
          element: <ChangePassword />,
        },
        {
          path: "/ChangeProfilePicture",
          element: <  ChangeProfilePicture />,
        },
        {
          path: "/AddSalaryDetails",
          element: <AddSalaryDetails />,
        },
        {
          path: "/ViewWeight",
          element: <ViewWeight />,
        },


      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/ViewWeight",
      element: <ViewWeight />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
