/**
 * @description производит AJAX-запросы
 * @param {string} path путь запроса
 * @returns {Promise} промис с содержимым запрошенного файла
 */
function loadJSON (path) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.onload = () => resolve(JSON.parse(xhr.responseText));
    xhr.send(null);
  });
}

module.exports = loadJSON;
