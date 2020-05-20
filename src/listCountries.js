/**
 * @description создает выпадающий список стран, в котором по умолчанию выбрана страна, в которой находится пользователь
 * @param {Object} select выпадающий список для стран
 * @param {Object} currCountry страна пользователя
 * @param {Object[]} countries массив всех стран
 */
function listCountries (select, currCountry, countries) {
  for (const country of countries) {
    country.code = country['iso-3166'];
    if (currCountry.name === country.country_name) {
      select.insertAdjacentHTML('beforeend', `<option value='${country.code}' style="background-image:url(dist/png/${(country.code).toLowerCase()}.png)" selected>${country.country_name}</option>`);
    } else {
      select.insertAdjacentHTML('beforeend', `<option value='${country.code}' style="background-image:url(dist/png/${(country.code).toLowerCase()}.png)">${country.country_name}</option>`);
    }
  }
}

module.exports = listCountries;
