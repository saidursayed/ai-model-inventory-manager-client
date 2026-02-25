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
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch(
            "https://ai-model-inventory-manager-server-eight.vercel.app/latest-models",
          ),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/models",
        element: <AllModels></AllModels>,
        loader: () =>
          fetch(
            "https://ai-model-inventory-manager-server-eight.vercel.app/models",
          ),
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
        loader: ({ params }) =>
          fetch(
            `https://ai-model-inventory-manager-server-eight.vercel.app/models/${params.id}`,
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
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
export default router;
