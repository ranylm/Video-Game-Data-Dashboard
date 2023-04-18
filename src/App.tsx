import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
  return (
    <div className="w-full flex justify-center bg-slate-100">
      <div className="App flex justify-center w-5/6 my-24">
        <NavBar />
        <div className="mainContent w-5/6">
          <Routes>
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
