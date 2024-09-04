import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Informed from "./routes/Informed";
import FormikForm from "./routes/Formik";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "informed",
    element: <Informed />,
  },
  {
    path: "formik",
    element: <FormikForm />,
  },
]);

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);