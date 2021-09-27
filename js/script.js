'use strict';

document.addEventListener('DOMContentLoaded', function () {
  let allCards = document.querySelectorAll('.content__card');
  let parrent = document.querySelector('.content__cards');

  // Сортировка по возрастанию цены
  document.querySelector('.navbar').addEventListener('click', sortUp);

  function sortUp(e) {
    if (e.target.id === 'up') {
      let sortAllCards = [...allCards].sort(function (a, b) {
        return a.dataset['price'] - b.dataset['price'];
      });
      sortAllCards.forEach(function (elem) {
        parrent.append(elem);
      });
    } else {
      return false;
    };
  };

  // Сортировка по убыванию цены
  document.querySelector('.navbar').addEventListener('click', sortDown);

  function sortDown(e) {
    if (e.target.id === 'down') {
      let sortAllCards = [...allCards].sort(function (a, b) {
        return b.dataset['price'] - a.dataset['price'];
      });
      sortAllCards.forEach(function (elem) {
        parrent.append(elem);
      });
    } else {
      return false;
    };
  };

  // Сортировка по рейтингу
  document.querySelector('.navbar').addEventListener('click', sortRating);

  function sortRating(e) {
    if (e.target.id === 'rating') {
      let sortAllCards = [...allCards].sort(function (a, b) {
        return b.dataset['rating'] - a.dataset['rating'];
      });
      sortAllCards.forEach(function (elem) {
        parrent.append(elem);
      });
    } else {
      return false;
    };
  };

  // Фильтрация по цвету
  document.querySelector('.navbar__color').addEventListener('click', sortColor);

  function sortColor(e) {
    console.log(e);
    if (e.target.id == 'black') {
      [...allCards].filter(function (elem) {
        if (elem.dataset['color'] != 'black') {
          elem.classList.toggle('has-active');
          return true;
        };
      });
    };

    if (e.target.id == 'pink') {
      let sortColorCards = [...allCards].filter(function (elem) {
        if (elem.dataset['color'] != 'pink') {
          elem.classList.toggle('has-active');
          return true;
        };
      });
    };

    if (e.target.id == 'gray') {
      let sortColorCards = [...allCards].filter(function (elem) {
        if (elem.dataset['color'] != 'gray') {
          elem.classList.toggle('has-active');
          return true;
        };
      });
    };

    if (e.target.id == 'green') {
      let sortColorCards = [...allCards].filter(function (elem) {
        if (elem.dataset['color'] !== 'green') {
          elem.classList.toggle('has-active');
          return true;
        };
      });
    };
  };
});