import React from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./components/HeaderComponent";
import { BodyComponent } from "./components/BodyComponent";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { ErrorPage } from "./components/ErrorPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Applayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
