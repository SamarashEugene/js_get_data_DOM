'use strict';

const population = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let totalCount = 0;

for (let i = 0; i < population.length; i++) {
  totalCount += +population[i].innerText.split(',').join('');
}

const average = totalCount / population.length;

totalPopulation.innerHTML = totalCount.toLocaleString('en-US');
averagePopulation.innerHTML = Math.round(average).toLocaleString('en-US');
