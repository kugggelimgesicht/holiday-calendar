/**
 * @description добавляет праздники в календарь
 * @param {Object[]} holidays массив праздников
 */
function addHolidays (holidays) {
  const description = document.getElementById('description');
  const tds = document.getElementsByTagName('td');
  for (let i = 0; i < tds.length; i++) {
    if (tds[i].hasAttribute('data-date')) {
      tds[i].classList.remove(...tds[i].classList);
      holidays.forEach(holiday => {
        function getDescription () {
          description.innerHTML = holiday.description;
        }
        if (new Date(holiday.date.iso).toLocaleDateString() === new Date(tds[i].getAttribute('data-date')).toLocaleDateString()) {
          tds[i].addEventListener('click', getDescription);

          if (holiday.type[0] === 'Local holiday') {
            tds[i].classList.add('local');
          } else if (holiday.type[0] === 'Religious holiday') {
            tds[i].classList.add('religious');
          } else if (holiday.type[0] === 'National holiday') {
            tds[i].classList.add('national');
          } else if (holiday.type[0] === 'Observance') {
            tds[i].classList.add('observance');
          } else {
            tds[i].classList.add('religious');
          }
        }
      });
    }
  }
}

module.exports = addHolidays;
