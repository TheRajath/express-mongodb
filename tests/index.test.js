const mongoose = require("mongoose");
const request = require("supertest");
const index = require("../index");

/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');
});

/* Closing database connection after each test. */
afterEach(async () => {
    await mongoose.connection.close();
});

describe("GET /products", () => {
    it("should return all products", async () => {
        const res = await request(index).get("/products");
        expect(res.statusCode).toBe(200);
    });
});
