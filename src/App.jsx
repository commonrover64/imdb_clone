import "./App.css";
import { Route, Routes } from "react-router-dom";
import WatchList from "./Pages/WatchList";
import PageNotFound from "./components/PageNotFound";
import Home from "./Pages/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/watchList" element={<WatchList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
