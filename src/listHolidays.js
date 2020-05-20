/**
 * @description формирует список праздников, переданных вторым аргументом
 * @param {Object} ol пустой список
 * @param {Object[]} holidays массив праздников
 */
function listHolidays (ol, holidays) {
  ol.innerHTML = '';
  for (const holiday of holidays) {
    ol.insertAdjacentHTML('beforeend', `<li>${holiday.name}, ${new Date(holiday.date.iso).toLocaleDateString()}</li>`);
  }
}

module.exports = listHolidays;
