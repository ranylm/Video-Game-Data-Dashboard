import { Route, Routes } from "react-router-dom";
import FavoritesLists from "./pages/FavoritesLists";
import NavBar from "./components/NavBar/NavBar";
import SearchPage from "./pages/SearchPage";
import Dashboard from "./pages/Dashboard";
import * as Toast from "@radix-ui/react-toast";
import React from "react";

function App() {
  return (
    <div className="w-full flex justify-center bg-slate-100 min-h-screen">
      <div className="App flex justify-center w-11/12 my-20">
        <NavBar />
        <div className="mainContent w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/lists" element={<FavoritesLists />} />
          </Routes>
        </div>
      </div>
      <Toast.Viewport className="absolute bottom-5 right-5 ToastViewport" />
    </div>
  );
}

export default App;
