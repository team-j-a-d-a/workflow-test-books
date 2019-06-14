'use strict'

const onIndexSuccess = function (responseData) {
  // log the information we get back from the API so we know how we can
  // interact with it.
  console.log(responseData)

  // empty book-display element so we can replace whatever was there with the
  // books we get back from the API
  $('#book-display').html('')

  // loop through API response data
  responseData.books.forEach(book => {
    // build HTML element with data
    const bookHTML = (`
      <h4>Title: ${book.title}</h4>
      <p>Author: ${book.author}</p>
      <p>ID: ${book.id}</p>
      <br>
    `)

    // append bookHTML to our book-display element
    $('#book-display').append(bookHTML)
  })
}

const onShowSuccess = function (responseData) {
  // log the information we get back from the API so we know how we can
  // interact with it.
  console.log(responseData)

  // build HTML element with data for one book
  const bookHTML = (`
    <h4>Title: ${responseData.book.title}</h4>
    <p>Author: ${responseData.book.author}</p>
    <br>
  `)

  // replace whatever was in the book-display element with our bookHTML
  $('#book-display').html(bookHTML)

  // reset all forms
  $('form').trigger('reset')
}

const onDestroySuccess = function () {
  // add success message to our delete-book-message element
  $('#delete-book-message').html('Book successfully deleted!')

  // empty out the book-display element in case it was displaying information
  // about the book we just deleted, replace with a message for the user to get
  // all the books again.
  $('#book-display').html('Books have changed! Click "Get All Books" again to see all the books')

  // add class for success messaging
  $('#delete-book-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#delete-book-message').html('')
    $('#delete-book-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

const onUpdateSuccess = function (responseData) {
  // add success message to our update-book-message element
  $('#update-book-message').html('You successfully updated the book')

  // empty out the book-display element in case it was displaying information
  // about the book we just updated, replace with a message for the user to get
  // all the books again.
  $('#book-display').html('Books have changed! Click "Get All Books" again to see all the books.')

  // add class for success messaging
  $('#update-book-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#update-book-message').html('')
    $('#update-book-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

const onCreateSuccess = function () {
  // add success message to content
  $('#create-book-message').html('You created a new book!')

  // check if the book-display element is NOT just an empty string
  if (!($('#book-display').html() === '')) {
    // if the element is NOT empty it is probably displaying the book
    // information, but we just created a new book!
    // we can add a message to let the users know they should request all of
    // the books again to see the newly created book included
    $('#book-display').html('Books have changed! Click "Get All Books" again to see all the books.')
  }
  // $('#book-display').html('')

  // add class for success messaging
  $('#create-book-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#create-book-message').html('')
    $('#create-book-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

const onError = function (err) {
  // log the error for debugging purposes
  console.error(err)

  // display a message to the user to let them know what they were doing did
  // not work correctly
  $('#error-message').html('Something went wrong, please try again.')

  // add class for error messaging
  $('#error-message').addClass('failure')

  // use setTimeout to allow the error message to stay for 5 seconds before
  // the message is replaced with '' and the 'failure' class is removed
  setTimeout(() => {
    $('#error-message').html('')
    $('#error-message').removeClass('failure')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

module.exports = {
  onIndexSuccess,
  onShowSuccess,
  onDestroySuccess,
  onUpdateSuccess,
  onCreateSuccess,
  onError
}
