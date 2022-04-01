import React from "react";
import { screen, render } from "@testing-library/react";
import CreateVideoGame from "../components/CreateVideoGame/CreateVideoGame";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

describe("Contet", () => {
  const state = {
    platforms: [
      {
        id: 4,
        name: "PC",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 187,
        name: "PlayStation 5",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 1,
        name: "Xbox One",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 18,
        name: "PlayStation 4",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 186,
        name: "Xbox Series S/X",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 7,
        name: "Nintendo Switch",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 3,
        name: "iOS",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 21,
        name: "Android",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 8,
        name: "Nintendo 3DS",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 9,
        name: "Nintendo DS",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 13,
        name: "Nintendo DSi",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 5,
        name: "macOS",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 6,
        name: "Linux",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 14,
        name: "Xbox 360",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 80,
        name: "Xbox",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 16,
        name: "PlayStation 3",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 15,
        name: "PlayStation 2",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 27,
        name: "PlayStation",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 19,
        name: "PS Vita",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 17,
        name: "PSP",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 10,
        name: "Wii U",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 11,
        name: "Wii",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 105,
        name: "GameCube",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 83,
        name: "Nintendo 64",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 24,
        name: "Game Boy Advance",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 43,
        name: "Game Boy Color",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 26,
        name: "Game Boy",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 79,
        name: "SNES",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 49,
        name: "NES",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 55,
        name: "Classic Macintosh",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 41,
        name: "Apple II",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 166,
        name: "Commodore / Amiga",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 28,
        name: "Atari 7800",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 31,
        name: "Atari 5200",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 23,
        name: "Atari 2600",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 22,
        name: "Atari Flashback",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 25,
        name: "Atari 8-bit",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 34,
        name: "Atari ST",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 46,
        name: "Atari Lynx",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 50,
        name: "Atari XEGS",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 167,
        name: "Genesis",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 107,
        name: "SEGA Saturn",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 119,
        name: "SEGA CD",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 117,
        name: "SEGA 32X",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 74,
        name: "SEGA Master System",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 106,
        name: "Dreamcast",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 111,
        name: "3DO",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 112,
        name: "Jaguar",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 77,
        name: "Game Gear",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 12,
        name: "Neo Geo",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
      {
        id: 171,
        name: "Web",
        createdAt: "2022-03-19T20:21:42.129Z",
        updatedAt: "2022-03-19T20:21:42.129Z",
      },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        createdAt: "2022-03-29T04:47:56.769Z",
        updatedAt: "2022-03-29T04:47:56.769Z",
      },
      {
        id: 51,
        name: "Indie",
        image_background:
          "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        createdAt: "2022-03-29T04:47:56.769Z",
        updatedAt: "2022-03-29T04:47:56.769Z",
      },
      {
        id: 3,
        name: "Adventure",
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        createdAt: "2022-03-29T04:47:56.769Z",
        updatedAt: "2022-03-29T04:47:56.769Z",
      },
      {
        id: 5,
        name: "RPG",
        image_background:
          "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg",
        createdAt: "2022-03-29T04:47:56.769Z",
        updatedAt: "2022-03-29T04:47:56.769Z",
      },
      {
        id: 10,
        name: "Strategy",
        image_background:
          "https://media.rawg.io/media/games/260/26023c855f1769a93411d6a7ea084632.jpeg",
        createdAt: "2022-03-29T04:47:56.769Z",
        updatedAt: "2022-03-29T04:47:56.769Z",
      },
      {
        id: 2,
        name: "Shooter",
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        createdAt: "2022-03-29T04:47:56.769Z",
        updatedAt: "2022-03-29T04:47:56.769Z",
      },
      {
        id: 40,
        name: "Casual",
        image_background:
          "https://media.rawg.io/media/screenshots/e70/e7009d889b38df2a16f78859a7343308.jpg",
        createdAt: "2022-03-29T04:47:56.769Z",
        updatedAt: "2022-03-29T04:47:56.769Z",
      },
      {
        id: 14,
        name: "Simulation",
        image_background:
          "https://media.rawg.io/media/games/174/1743b3dd185bda4a7be349347d4064df.jpg",
        createdAt: "2022-03-29T04:47:56.769Z",
        updatedAt: "2022-03-29T04:47:56.769Z",
      },
      {
        id: 7,
        name: "Puzzle",
        image_background:
          "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
        createdAt: "2022-03-29T04:47:56.769Z",
        updatedAt: "2022-03-29T04:47:56.769Z",
      },
      {
        id: 11,
        name: "Arcade",
        image_background:
          "https://media.rawg.io/media/games/a5a/a5abaa1b5cc1567b026fa3aa9fbd828e.jpg",
        createdAt: "2022-03-29T04:47:56.769Z",
        updatedAt: "2022-03-29T04:47:56.769Z",
      },
      {
        id: 83,
        name: "Platformer",
        image_background:
          "https://media.rawg.io/media/games/569/569ea25d2b56bd05c7fa309ddabe81ff.jpg",
        createdAt: "2022-03-29T04:47:56.769Z",
        updatedAt: "2022-03-29T04:47:56.769Z",
      },
      {
        id: 1,
        name: "Racing",
        image_background:
          "https://media.rawg.io/media/games/8f3/8f306808c45a4dbe0cd698e0b142af08.jpg",
        createdAt: "2022-03-29T04:47:56.769Z",
        updatedAt: "2022-03-29T04:47:56.769Z",
      },
      {
        id: 59,
        name: "Massively Multiplayer",
        image_background:
          "https://media.rawg.io/media/screenshots/6d3/6d367773c06886535620f2d7fb1cb866.jpg",
        createdAt: "2022-03-29T04:47:56.769Z",
        updatedAt: "2022-03-29T04:47:56.769Z",
      },
      {
        id: 15,
        name: "Sports",
        image_background:
          "https://media.rawg.io/media/games/13e/13e742faac74170516bb4279035506ef.jpg",
        createdAt: "2022-03-29T04:47:56.769Z",
        updatedAt: "2022-03-29T04:47:56.769Z",
      },
      {
        id: 6,
        name: "Fighting",
        image_background:
          "https://media.rawg.io/media/games/3fa/3fa41498f81741b063b5e8c653090186.jpg",
        createdAt: "2022-03-29T04:47:56.769Z",
        updatedAt: "2022-03-29T04:47:56.769Z",
      },
      {
        id: 19,
        name: "Family",
        image_background:
          "https://media.rawg.io/media/games/9a1/9a18c226cf379272c698f26d2b79b3da.jpg",
        createdAt: "2022-03-29T04:47:56.769Z",
        updatedAt: "2022-03-29T04:47:56.769Z",
      },
      {
        id: 28,
        name: "Board Games",
        image_background:
          "https://media.rawg.io/media/screenshots/ce7/ce7d6b1018d907d7a1e2addd87079c95.jpeg",
        createdAt: "2022-03-29T04:47:56.769Z",
        updatedAt: "2022-03-29T04:47:56.769Z",
      },
      {
        id: 34,
        name: "Educational",
        image_background:
          "https://media.rawg.io/media/screenshots/ad6/ad683211916758f37ddf0bb382001cdb.jpg",
        createdAt: "2022-03-29T04:47:56.769Z",
        updatedAt: "2022-03-29T04:47:56.769Z",
      },
      {
        id: 17,
        name: "Card",
        image_background:
          "https://media.rawg.io/media/games/431/4317e294e88e4c9d77327693b15f499a.jpg",
        createdAt: "2022-03-29T04:47:56.769Z",
        updatedAt: "2022-03-29T04:47:56.769Z",
      },
    ],
  };
  const mockStore = configureStore([thunk]);

  describe("Form:", () => {
    let videogame;
    let store = mockStore(state);
    beforeEach(() => {
      videogame = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/characters/create"]}>
            <CreateVideoGame />
          </MemoryRouter>
        </Provider>
      );
    });

    it("Debería renderizar un form", () => {
      expect(videogame.find("form")).toHaveLength(1);
    });

    it('Debería renderizar un label con el texto "Name: "', () => {
      expect(videogame.find("label").at(0).text()).toEqual("Name: ");
    });

    it('Debería renderizar un input con la propiedad "name" igual a "name"', () => {
      expect(videogame.find('input[name="name"]')).toHaveLength(1);
    });

    it('Debería renderizar un label con el texto "Description: "', () => {
      expect(videogame.find("label").at(1).text()).toEqual("Description: ");
    });

    it('Debería renderizar un input con la propiedad "name" igual a "description"', () => {
      expect(videogame.find('input[name="description"]')).toHaveLength(1);
    });

    it('Debería renderizar un label con el texto "Released: "', () => {
      expect(videogame.find("label").at(2).text()).toEqual("Released: ");
    });

    it('Debería renderizar un input con la propiedad "name" igual a "released"', () => {
      expect(videogame.find('input[name="released"]')).toHaveLength(1);
    });

    it('Debería renderizar un label con el texto "Rating: "', () => {
      expect(videogame.find("label").at(3).text()).toEqual("Rating: ");
    });

    it('Debería renderizar un input con la propiedad "name" igual a "rating"', () => {
      expect(videogame.find('input[name="rating"]')).toHaveLength(1);
    });

    it('Debería renderizar un label con el texto "Genres: "', () => {
      expect(videogame.find("label").at(4).text()).toEqual("Genres: ");
    });

    it('Debería renderizar un input con la propiedad "name" igual a "genres"', () => {
      expect(videogame.find('select[name="genres"]')).toHaveLength(1);
    });

    it('Debería renderizar un label con el texto "Platforms: "', () => {
      expect(videogame.find("label").at(5).text()).toEqual("Platforms: ");
    });

    it('Debería renderizar un input con la propiedad "name" igual a "platforms"', () => {
      expect(videogame.find('select[name="platforms"]')).toHaveLength(1);
    });

    it('Debería renderizar un label con el texto "Background Image: "', () => {
      expect(videogame.find("label").at(6).text()).toEqual(
        "Background Image: "
      );
    });

    it('Debería renderizar un input con la propiedad "name" igual a "background_image"', () => {
      expect(videogame.find('input[name="background_image"]')).toHaveLength(1);
    });

    it('Debería renderizar un input con "type" igual a "submit" y con texto "Create"', () => {
      expect(videogame.find('button[type="submit"]')).toHaveLength(1);
      expect(videogame.find("button").at(0).text()).toEqual("Create");
    });
  });
});
