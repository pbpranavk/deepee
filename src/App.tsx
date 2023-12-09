import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "home/Home.Server";
import { Investment } from "investment/Investment.Server";
import { Journey } from "journey/Journey.Server";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/investment/:journeyId",
    element: <Investment />,
  },
  {
    path: "/journey",
    element: <Journey />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
