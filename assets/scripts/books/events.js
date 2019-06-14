
const api = require('./api.js')
const ui = require('./ui.js')

const deleteBooks = (event) => {
  const bookId = $(event.target).data('id')
  event.preventDefault()
  api.deleteBooks(bookId)
    // .then(ui.) name to be added from ui
    // .catch(ui.) name to be added from ui
}

module.exports = {
deleteBooks
}
