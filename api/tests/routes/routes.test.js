var supertest = require("supertest-as-promised")(
  require("../../../client/src/app")
);
var expect = require("chai").expect;
var model = require("../models/model");

describe("Routes", function () {
  beforeEach(function () {
    model.reset();
  });
});
