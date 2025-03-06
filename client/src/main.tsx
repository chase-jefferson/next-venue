import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Home from "./pages/Home.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import UserProfile from "./pages/UserProfile.tsx";
import CreateEvent from "./pages/CreateEventPage.tsx";
import EventDetails from "./pages/EventDetailsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",  // ✅ Remove the leading slash here
        element: <Login />,
      },
      {
        path: "register",  // ✅ Remove the leading slash here
        element: <Register />,
      },
      {
        path: "CreateEvent",  // ✅ Same here, no leading slash
        element: <CreateEvent />,
      },
      {
        path: "EventDetails",  // ✅ Same here, no leading slash
        element: <EventDetails />,
      },
      {
        path: "profile",  // ✅ Same here, no leading slash
        element: (
          <UserProfile
            user={{
              name: "",
              username: "",
              email: "",
              profilePicture: "",
            }}
            rsvps={[]}
          />
        ),
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
