// // SEARCH FUNCTION code for caraccess.html and fluid.html
document.getElementById('searchButton').addEventListener('click', function () {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  let found = false;

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    if (text.includes(query)) {
      card.parentElement.style.display = 'block'; // Show card
      found = true;
    } else {
      card.parentElement.style.display = 'none'; // Hide card
    }
  });

  // Show/hide "No results" message
  document.getElementById('noResults').style.display = found ? 'none' : 'block';
});

// RESET FUNCTION
document.getElementById('resetButton').addEventListener('click', function () {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.parentElement.style.display = 'block';
  });

  // Clear search input and hide "No results"
  document.getElementById('searchInput').value = '';
  document.getElementById('noResults').style.display = 'none';
});
