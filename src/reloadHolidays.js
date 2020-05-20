
const loadJSON = require('./loadJSON.js');
const listHolidays = require('./listHolidays.js');
const addHolidays = require('./addHolidays.js');

/**
 * @description функция перегружает список праздников в соответствии с выбранной страной и годом
 * @param {string} country выбранная страна
 * @param {number} year выбранный год
 */
async function reloadHolidays (country, year) {
  const description = document.getElementById('description');
  description.innerHTML = '';
  const ol = document.getElementById('holidays');
  const holidays = (await loadJSON(`https://calendarific.com/api/v2/holidays?&api_key=631278285f119bfde72d52baaf69b9621974c38b&country=${country}&year=${year}`)).response.holidays;
  listHolidays(ol, holidays);
  addHolidays(holidays);
}

module.exports = reloadHolidays;
