import { handleAddTrip } from './app';

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ message: "Trip added successfully", trips: [] })
    })
);

test("handleAddTrip should call fetch with correct data", async () => {
    document.body.innerHTML = `
        <input id="location" value="London" />
        <input id="start-date" value="2025-06-01" />
        <input id="end-date" value="2025-06-10" />
    `;

    await handleAddTrip();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("http://localhost:8081/addTrip", expect.any(Object));
});
