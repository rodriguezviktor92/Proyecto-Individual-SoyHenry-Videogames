import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing";
import LeftBar from "./components/LeftBar/LeftBar";
import GameContent from "./components/GameContent/GameContent";
import css from "./App.module.css";
import { useDispatch } from "react-redux";
import {
  getAllVideogames,
  getAllGenres,
  getAllPlatforms,
  setLoading,
} from "./redux/actions";
import GameDetail from "./components/GameDetail/GameDetail";
import CreateVideoGame from "./components/CreateVideoGame/CreateVideoGame";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllVideogames());
    dispatch(getAllGenres());
    dispatch(getAllPlatforms());
    dispatch(setLoading(true));
  }, []);

  return (
    <div className={css.App}>
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
        <Route
          path="/videogame/:videoGameId"
          element={
            <>
              <Nav />
              <GameDetail />
            </>
          }
        />
        <Route
          exact
          path="/videogame/create"
          element={
            <>
              <Nav />
              <CreateVideoGame />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <h1>404 Pagine Not Found</h1>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
