document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-movies-form');
  newItemForm.addEventListener('submit', dealWithSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
});

const dealWithSubmit = function (event) {
  event.preventDefault();

  //find movies list
  //append result of create functiom
const movieListItem = createMovieListItem(event.target);
const movieList = document.querySelector('#movie-list');
movieList.classList.add('new-movie-list')
movieList.appendChild(movieListItem);

}


const createMovieListItem = function(form) {
const movieListItem = document.createElement('li');
movieListItem.classList.add('movie-list-items');

const title = document.createElement('h2');
title.textContent = form.title.value;
movieListItem.appendChild(title);

const director = document.createElement('h3');
director.textContent = form.director.value;
movieListItem.appendChild(director);

const certificate = document.createElement('h3');
certificate.textContent = form.certificate.value;
movieListItem.appendChild(certificate);

const category = document.createElement('h3');
category.textContent = form.category.value;
movieListItem.appendChild(category);


form.reset()
return movieListItem

}

const handleDeleteAllClick = function (event) {
  const readingList = document.querySelector('#movie-list');
  readingList.innerHTML = '';
}
