/**
 * @description отрисовывает календарь
 * @param {Object} id контейнер для календаря
 * @param {number} year год, на котором открыт календарь
 * @param {Object} month месяц, на котором открыт календарь
 */
function renderCalendar (id, year, month) {
  const currYear = document.getElementById('current-year');
  const tbody = document.getElementById('tbody');
  const monthYear = document.getElementById('month-year');

  const monthLastD = new Date(year, month + 1, 0).getDate();
  const today = new Date(year, month, monthLastD);
  const monthLastWD = new Date(today.getFullYear(), today.getMonth(), monthLastD).getDay();
  const monthFirstWD = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  let table = '<tr>';
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  currYear.defaultValue = new Date().getFullYear();

  if (monthFirstWD !== 0) {
    for (let i = 1; i < monthFirstWD; i++) table += '<td>';
  } else {
    for (let i = 0; i < 6; i++) table += '<td>';
  }
  for (let i = 1; i <= monthLastD; i++) {
    if (i === new Date().getDate() && today.getFullYear() === new Date().getFullYear() && today.getMonth() === new Date().getMonth()) {
      table += `<td id="today" data-date='${today.getFullYear()}-${today.getMonth() + 1}-${i}'>` + i;
    } else {
      table += `<td data-date='${today.getFullYear()}-${today.getMonth() + 1}-${i}'>` + i;
    }
    if (new Date(today.getFullYear(), today.getMonth(), i).getDay() === 0) {
      table += '<tr>';
    }
  }

  for (let i = monthLastWD; i < 7; i++) table += '<td></td>';
  tbody.innerHTML = table;
  monthYear.innerHTML = months[today.getMonth()] + ' ' + today.getFullYear();
  monthYear.dataset.month = today.getMonth();
  monthYear.dataset.year = today.getFullYear();
  if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {
    tbody.innerHTML += '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>';
  }
}

module.exports = renderCalendar;
