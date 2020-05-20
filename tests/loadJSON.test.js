const loadJSON = require('../src/loadJSON.js');

test('test correct loading of JSON', async() => {
    expect((await loadJSON('https://calendarific.com/api/v2/holidays?&api_key=631278285f119bfde72d52baaf69b9621974c38b&country=ru&year=2020')).response.holidays[0].name).toBe("New Year's Day");
 
})
