import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  deleteVideoGame,
  getVideogame,
  resetVideogame,
  setLoading,
} from "../../redux/actions/index";
import GameNotFound from "../GameNotFound/GameNotFound";
import Loading from "../Loading/Loading";
import css from "./GameDetail.module.css";

const GameDetail = () => {
  const { videoGameId } = useParams();
  const dispatch = useDispatch();
  const videogame = useSelector((state) => state.videogame);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(getVideogame(videoGameId));

    return () => {
      dispatch(resetVideogame());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = async (videoGameId) => {
    const deleted = await dispatch(deleteVideoGame(videoGameId));
    if (deleted.data.success) {
      alert("Videogame Delete");
    } else {
      alert(deleted.data.err);
    }
  };

  return (
    <>
      {videogame.id ? (
        <div
          className={css.gameDetail}
          style={{
            backgroundImage: `radial-gradient(closest-side at center center, transparent, rgb(21, 21, 21)),  url(${videogame.background_image})`,
          }}
        >
          <div className={css.top}>
            <h1>Back</h1>

            <button
              onClick={() => {
                handleClick(videoGameId);
              }}
            >
              Delete
            </button>
          </div>

          <div className={css.left}>
            <div className={css.title}>
              <h1>{videogame.name}</h1>
            </div>
            <div className={css.detail}>
              <div>
                <h3>Released</h3>
                <span>{videogame.released}</span>
              </div>
              <div>
                <h3>Platforms</h3>
                {videogame.platforms ? (
                  videogame.platforms.map((platform) => (
                    <span>{platform.name} </span>
                  ))
                ) : (
                  <span>Not found platforms</span>
                )}
              </div>
              <div>
                <h3>Genres</h3>
                {videogame.genres ? (
                  videogame.genres.map((genre) => <span>{genre.name} </span>)
                ) : (
                  <span>Not found genres</span>
                )}
              </div>
              <div>
                <h3>Rating</h3>
                <span>{videogame.rating}</span>
              </div>
            </div>
          </div>

          <div className={css.rigth}>
            <div>
              <img src={videogame.background_image} alt="" />
            </div>
            <div className={css.description}>
              <h2>Description</h2>
              <span>{videogame.description}</span>
            </div>
          </div>
        </div>
      ) : loading ? (
        <Loading />
      ) : (
        <GameNotFound />
      )}
    </>
  );
};

export default GameDetail;
