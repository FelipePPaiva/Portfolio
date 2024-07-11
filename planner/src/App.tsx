import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { CreateTripePage } from "./pages/create-trip";
import { TripDetailsPages } from "./pages/trip-detais";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripePage/>,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPages />,
  },
]);

export function App(){
  return(
    <RouterProvider router={router} />
  )
}