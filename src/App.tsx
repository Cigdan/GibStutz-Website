import Header from "./layout/Header";
import LandingPage from "./components/landingPage/LandingPage";
import RefsContext from "./context/RefsContext";
import { useRef, useState } from "react";
import Sidebar from "./layout/Sidebar";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const refs = [
    { 
      name: "home",
      ref: useRef<HTMLDivElement>(null),
    },
    {
      name: "stats",
      ref: useRef<HTMLDivElement>(null),
    },
    {
      name: "team",
      ref: useRef<HTMLDivElement>(null),
    },
    {
      name: "accomplishments",
      ref: useRef<HTMLDivElement>(null),
    },
  ];
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header isSidebarOpen={[isSidebarOpen, setIsSidebarOpen]} />
          <Sidebar isSidebarOpen={[isSidebarOpen, setIsSidebarOpen]} />
          <LandingPage />
        </>
      ),
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    }
  ]);

  return (
    <RefsContext.Provider value={{ refs, currentSection, setCurrentSection }}>
      <RouterProvider router={router} />
    </RefsContext.Provider>
  );
}

export default App;
