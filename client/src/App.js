import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing";
import LeftBar from "./components/LeftBar/LeftBar";
import GameContent from "./components/GameContent/GameContent";
import "./App.css";
import { useDispatch } from "react-redux";
import { getAllVideogames } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllVideogames());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/home"
          element={
            <>
              <Nav />
              <LeftBar />
              <GameContent />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
