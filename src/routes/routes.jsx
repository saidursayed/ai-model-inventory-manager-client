import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AllModels from "../pages/AllModels/AllModels";
import AddModel from "../pages/AddModel/AddModel";
import ModelDetails from "../pages/ModelDetails/ModelDetails";
import UpdateModel from "../pages/UpdateModel/UpdateModel";
import MyModels from "../pages/MyModels/MyModels";
import MyPurchasedModel from "../pages/MyPurchasedModel/MyPurchasedModel";
import Login from "../pages/Auth/Login";
import Registration from "../pages/Auth/Registration";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('http://localhost:3000/latest-models')
      },
      {
        path: "/models",
        element: <AllModels></AllModels>,
        loader: () => fetch('http://localhost:3000/models')
      },
      {
        path: "/add-model",
        element: (
          <PrivateRoute>
            <AddModel></AddModel>
          </PrivateRoute>
        ),
        
      },
      {
        path: "/models/:id",
        element: (
          <PrivateRoute>
            <ModelDetails></ModelDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-model/:id",
        element: (
          <PrivateRoute>
            <UpdateModel></UpdateModel>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-models",
        element: (
          <PrivateRoute>
            <MyModels></MyModels>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-purchased-models",
        element: (
          <PrivateRoute>
            <MyPurchasedModel></MyPurchasedModel>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
]);
export default router;
