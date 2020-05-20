
const loadJSON = require('./loadJSON.js');
const listCountries = require('./listCountries.js');
const renderCalendar = require('./renderCalendar.js');
const reloadHolidays = require('./reloadHolidays.js');
const currYear = document.getElementById('current-year');
const monthYear = document.getElementById('month-year');
const calendar = document.getElementById('calendar');
const back = document.getElementById('back');
const forward = document.getElementById('forward');
const select = document.getElementById('select');

/**
 * @description точка входа в приложение
 */
async function initApp () {
  const countries = (await loadJSON('https://calendarific.com/api/v2/countries?api_key=631278285f119bfde72d52baaf69b9621974c38b')).response.countries;
  const currCountry = await loadJSON('https://get.geojs.io/v1/ip/country.json');

  listCountries(select, currCountry, countries);
  select.addEventListener('change', async function () {
    reloadHolidays(select.value, monthYear.dataset.year);
  });

  renderCalendar('calendar', new Date().getFullYear(), new Date().getMonth());

  back.addEventListener('click', function () {
    renderCalendar('calendar', monthYear.dataset.year, Number(monthYear.dataset.month) - 1);
    reloadHolidays(select.value, monthYear.dataset.year);
  });

  forward.addEventListener('click', function () {
    renderCalendar('calendar', monthYear.dataset.year, Number(monthYear.dataset.month) + 1);
    reloadHolidays(select.value, monthYear.dataset.year);
  });

  calendar.addEventListener('change', function changeYear () {
    renderCalendar('calendar', currYear.value, Number(monthYear.dataset.month));
    reloadHolidays(select.value, monthYear.dataset.year);
  });
  reloadHolidays(select.value, monthYear.dataset.year);
}

initApp();
