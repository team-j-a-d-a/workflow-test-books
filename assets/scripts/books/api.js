
const config = require('../config')

const deleteBooks = function (id) {
  return $.agax({
    url: config.apiUrl + '/books/' + id,
    method: 'DELETE'
  })
}

module.exports = {
  deleteBooks
}
