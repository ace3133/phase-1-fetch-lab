function fetchBooks() {
  // Return the fetch promise
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json()) // Parse JSON response
    .then(data => renderBooks(data)); // Pass the data to renderBooks
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
    .catch(error => console.error('Error fetching books:', error)); // Handle any fetch errors
});
