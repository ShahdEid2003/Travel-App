const request = require('supertest');
const app = require('../server/server'); // تأكد من أن المسار صحيح

describe("API Tests", () => {
    test("GET /getTrips should return status 200", async () => {
        const response = await request(app).get('/getTrips');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    test("POST /addTrip should add a trip", async () => {
        const newTrip = {
            location: "Paris",
            startDate: "2025-03-15",
            endDate: "2025-03-20"
        };

        const response = await request(app)
            .post('/addTrip')
            .send(newTrip);

        expect(response.statusCode).toBe(200);
        expect(response.body.trips.length).toBeGreaterThan(0);
        expect(response.body.trips[0].location).toBe("Paris");
    });
});
