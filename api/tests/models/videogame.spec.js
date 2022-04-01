const { Videogame, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Videogame model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Videogame.create({
          name: null,
          description: "test",
          released: "2022-03-26",
          rating: 4.5,
          genres: [1, 2, 3],
          platforms: [5],
          background_image:
            "https://images.gnwcdn.com/2022/articles/2022-03-11-17-06/elden-ring-walkthrough-8042-1647018411119.jpg/EG11/resize/1200x-1/elden-ring-walkthrough-8042-1647018411119.jpg",
        })
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should throw an error if description is null", (done) => {
        Videogame.create({
          name: "Nuevo juego",
          description: null,
          released: "2022-03-26",
          rating: 4.5,
          genres: [1, 2, 3],
          platforms: [5],
          background_image:
            "https://images.gnwcdn.com/2022/articles/2022-03-11-17-06/elden-ring-walkthrough-8042-1647018411119.jpg/EG11/resize/1200x-1/elden-ring-walkthrough-8042-1647018411119.jpg",
        })
          .then(() => done(new Error("It requires a valid description")))
          .catch(() => done());
      });
      it("should throw an error if released is null", (done) => {
        Videogame.create({
          name: "Nuevo juego",
          description: "test",
          released: null,
          rating: 4.5,
          genres: [1, 2, 3],
          platforms: [5],
          background_image:
            "https://images.gnwcdn.com/2022/articles/2022-03-11-17-06/elden-ring-walkthrough-8042-1647018411119.jpg/EG11/resize/1200x-1/elden-ring-walkthrough-8042-1647018411119.jpg",
        })
          .then(() => done(new Error("It requires a valid released")))
          .catch(() => done());
      });

      it("should throw an error if rating is null", (done) => {
        Videogame.create({
          name: "Nuevo juego",
          description: "test",
          released: "2022-03-26",
          rating: null,
          genres: [1, 2, 3],
          platforms: [5],
          background_image:
            "https://images.gnwcdn.com/2022/articles/2022-03-11-17-06/elden-ring-walkthrough-8042-1647018411119.jpg/EG11/resize/1200x-1/elden-ring-walkthrough-8042-1647018411119.jpg",
        })
          .then(() => done(new Error("It requires a valid released")))
          .catch(() => done());
      });

      xit("should throw an error if genres is null", (done) => {
        Videogame.create({
          name: "Nuevo juego",
          description: "test",
          released: "2022-03-26",
          rating: 4.5,
          genres: null,
          platforms: [5],
          background_image:
            "https://images.gnwcdn.com/2022/articles/2022-03-11-17-06/elden-ring-walkthrough-8042-1647018411119.jpg/EG11/resize/1200x-1/elden-ring-walkthrough-8042-1647018411119.jpg",
        })
          .then(() => done(new Error("It requires a valid released")))
          .catch(() => done());
      });

      xit("should throw an error if platforms is null", (done) => {
        Videogame.create({
          name: "Nuevo juego",
          description: "test",
          released: "2022-03-26",
          rating: 4.5,
          genres: [1, 2, 3],
          platforms: null,
          background_image:
            "https://images.gnwcdn.com/2022/articles/2022-03-11-17-06/elden-ring-walkthrough-8042-1647018411119.jpg/EG11/resize/1200x-1/elden-ring-walkthrough-8042-1647018411119.jpg",
        })
          .then(() => done(new Error("It requires a valid released")))
          .catch(() => done());
      });
      /* it('should work when its a valid name', () => {
        Recipe.create({ name: 'Super Mario Bros' });
      }); */
    });
  });
});
