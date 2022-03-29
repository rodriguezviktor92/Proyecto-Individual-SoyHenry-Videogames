import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createVideoGame } from "../../redux/actions";
import css from "./CreateVideoGame.module.css";

const validate = (input, videogame) => {
  console.log(input);
  console.log(videogame);
  if (input === "genres" || input === "platforms") {
    console.log(!!videogame[input].length);
    return !!videogame[input].length;
  } else if (input === "rating") {
    return videogame[input] >= 1 && videogame[input] < 5 ? true : false;
  } else {
    return videogame[input];
  }
};

function CreateVideoGame() {
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  const dispacth = useDispatch();

  const videogameInitialValues = {
    name: "",
    description: "",
    released: "",
    rating: "",
    genres: [],
    platforms: [],
    background_image: "",
  };
  const [videogame, setVideogame] = useState(videogameInitialValues);
  const errorsInitialValue = {
    name: { validity: false, msg: "Name is required" },
    description: { validity: false, msg: "Description is required" },
    released: { validity: false, msg: "Released is Required" },
    rating: { validity: false, msg: "Valid Range 1-5" },
    genres: { validity: false, msg: "Genres is Required" },
    platforms: { validity: false, msg: "Platforms is Required" },
    background_image: { validity: false, msg: "Image is Required" },
  };

  const [errors, setErrors] = useState(errorsInitialValue);

  const handleChangge = (event) => {
    setVideogame({
      ...videogame,
      [event.target.name]: event.target.value,
    });

    if (
      validate(event.target.name, {
        ...videogame,
        [event.target.name]: event.target.value,
      })
    ) {
      setErrors({
        ...errors,
        [event.target.name]: {
          validity: true,
          //msg: `${event.target.name} is required`,
          msg: errors[event.target.name].msg,
        },
      });
    } else {
      setErrors({
        ...errors,
        [event.target.name]: {
          validity: false,
          //msg: `${event.target.name} is required`,
          msg: errors[event.target.name].msg,
        },
      });
    }
    console.log(errors);
  };

  const handleSelect = (event) => {
    //console.log(event.target[event.target.selectedIndex].text);
    if (event.target.value !== "title") {
      if (
        videogame[event.target.name].some(
          (element) => element.id === event.target.value
        )
      ) {
        alert(`${event.target.name} duplicated`);
      } else {
        setVideogame({
          ...videogame,
          [event.target.name]: [
            ...videogame[event.target.name],
            {
              id: event.target.value,
              name: event.target[event.target.selectedIndex].text,
            },
          ],
        });

        if (
          validate(event.target.name, {
            ...videogame,
            [event.target.name]: event.target.value,
          })
        ) {
          setErrors({
            ...errors,
            [event.target.name]: {
              validity: true,
              msg: `${event.target.name} is required`,
            },
          });
        } else {
          setErrors({
            ...errors,
            [event.target.name]: {
              validity: false,
              msg: `${event.target.name} is required`,
            },
          });
        }
      }
    }
  };

  const handleDelete = (type, id) => {
    setVideogame({
      ...videogame,
      [type]: videogame[type].filter((element) => element.id !== id),
    });

    if (
      validate(type, {
        ...videogame,
        [type]: videogame[type].filter((element) => element.id !== id),
      })
    ) {
      setErrors({
        ...errors,
        [type]: {
          validity: true,
          msg: `${type} is required`,
        },
      });
    } else {
      setErrors({
        ...errors,
        [type]: {
          validity: false,
          msg: `${type} is required`,
        },
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      errors.name.validity &&
      errors.description.validity &&
      errors.released.validity &&
      errors.rating.validity &&
      errors.genres.validity &&
      errors.platforms.validity &&
      errors.background_image.validity
    ) {
      const create = await dispacth(createVideoGame(videogame));

      if (create.data.success) {
        alert("Videogame Create");
        setVideogame({
          name: "",
          description: "",
          released: "",
          rating: "",
          genres: [],
          platforms: [],
          background_image: "",
        });
        event.target.reset();
      } else {
        alert(create.data.err);
      }
    } else {
      alert("Error check form fields");
    }
  };

  return (
    <div className={css.content}>
      <div className={css.contentForm}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChangge}
              className={!errors.name.validity ? css.err : undefined}
            />
            {!errors.name.validity && <p>{errors.name.msg}</p>}
          </div>
          <div>
            <label>Description: </label>
            <input
              type="text"
              name="description"
              required
              onChange={handleChangge}
              className={!errors.name.validity ? css.err : undefined}
            />
            {!errors.description.validity && <p>{errors.description.msg}</p>}
          </div>
          <div>
            <label>Released</label>
            <input
              type="date"
              name="released"
              id=""
              required
              onChange={handleChangge}
              className={!errors.name.validity ? css.err : undefined}
            />
            {!errors.released.validity && <p>{errors.released.msg}</p>}
          </div>
          <div>
            <label>Rating</label>
            <input
              type="number"
              name="rating"
              id=""
              required
              onChange={handleChangge}
              className={!errors.name.validity ? css.err : undefined}
            />
            {!errors.rating.validity && <p>{errors.rating.msg}</p>}
          </div>
          <div>
            <label>Genres</label>
            <select
              name="genres"
              required
              onChange={handleSelect}
              className={!errors.name.validity ? css.err : undefined}
            >
              <option value="title">Select VideoGame Genres</option>
              {genres.length === 0 ? (
                <option value="">Loading...</option>
              ) : (
                genres?.map((genre) => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))
              )}
            </select>
            {!errors.genres.validity && <p>{errors.genres.msg}</p>}

            <ul>
              {!videogame.genres.length ? (
                <span>Selected Genres:</span>
              ) : (
                videogame.genres.map((genre) => (
                  <li
                    key={genre.id}
                    onClick={() => handleDelete("genres", genre.id)}
                  >
                    {genre.name}
                  </li>
                ))
              )}
            </ul>
          </div>
          <div>
            <label>Platforms</label>
            <select
              name="platforms"
              required
              onChange={handleSelect}
              className={!errors.name.validity ? css.err : undefined}
            >
              <option value="title">Select VideoGame Platforms</option>
              {platforms.length === 0 ? (
                <option>Loading...</option>
              ) : (
                platforms.map((platform) => (
                  <option key={platform.id} value={platform.id}>
                    {platform.name}
                  </option>
                ))
              )}
            </select>
            {!errors.platforms.validity && <p>{errors.platforms.msg}</p>}
            <ul>
              {!videogame.platforms.length ? (
                <span>Selected Platforms:</span>
              ) : (
                videogame.platforms.map((platform) => (
                  <li
                    key={platform.id}
                    onClick={() => handleDelete("platforms", platform.id)}
                  >
                    {platform.name}
                  </li>
                ))
              )}
            </ul>
          </div>
          <div>
            <label>Background Image</label>
            <input
              type="url"
              name="background_image"
              id=""
              required
              onChange={handleChangge}
              className={!errors.name.validity ? css.err : undefined}
            />
            {!errors.background_image.validity && (
              <p>{errors.background_image.msg}</p>
            )}
          </div>
          <input type="submit" value="Create" />
        </form>
      </div>
    </div>
  );
}

export default CreateVideoGame;
