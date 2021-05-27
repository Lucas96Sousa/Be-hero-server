const request = require("supertest");
const app = require("../../src/app");

const connection = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new ong", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "APDS",
        email: "teste@show.com",
        whatsapp: "11 84444444",
        city: "Sao Paulo",
        uf: "SP",
      });

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
