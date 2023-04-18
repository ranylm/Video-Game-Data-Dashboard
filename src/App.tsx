import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App flex">
      <NavBar></NavBar>
      <div className="mainContent w-5/6">
        <Routes>
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
