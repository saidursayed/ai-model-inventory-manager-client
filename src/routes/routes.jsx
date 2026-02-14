import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AllModels from "../pages/AllModels/AllModels";
import AddModel from "../pages/AddModel/AddModel";
import ModelDetails from "../pages/ModelDetails/ModelDetails";
import UpdateModel from "../pages/UpdateModel/UpdateModel";
import MyModels from "../pages/MyModels/MyModels";
import MyPurchasedModel from "../pages/MyPurchasedModel/MyPurchasedModel";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: "/models",
            element: <AllModels></AllModels>
        },
        {
            path: "/add-model",
            element: <AddModel></AddModel>
        },
        {
            path: "/models/:id",
            element: <ModelDetails></ModelDetails>
        },
        {
            path: "/update-model/:id",
            element: <UpdateModel></UpdateModel>
        },
        {
            path: "/my-models",
            element: <MyModels></MyModels>
        },
        {
            path: "/my-purchased-models",
            element: <MyPurchasedModel></MyPurchasedModel>
        }
    ]
  },
]);
export default router;