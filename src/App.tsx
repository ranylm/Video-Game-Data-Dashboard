import { Route, Routes } from "react-router-dom";
import FavoritesLists from "./components/FavoritesLists/FavoritesLists";
import NavBar from "./components/NavBar/NavBar";
import SearchPage from "./components/SearchPage/SearchPage";
import * as Toast from "@radix-ui/react-toast";

function App() {
  return (
    <div className="w-full flex justify-center bg-slate-100 min-h-screen">
      <div className="App flex justify-center w-5/6 my-20">
        <NavBar />
        <div className="mainContent w-5/6">
          <Routes>
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
