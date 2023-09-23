const end = 'Mon Sep 24 2023 23:58:00 ';

document.querySelector('.event').innerHTML = end;
const input = document.querySelectorAll('input');
const timer = () => {
  let now = new Date();
  const endDate = new Date(end);

  const diffrence = (endDate - now) / 1000;
  if (diffrence < 0) return;
  input[0].value = Math.floor(diffrence / 3600 / 24);
  input[1].value = Math.floor((diffrence / 3600) % 24);
  input[2].value = Math.floor((diffrence / 60) % 60);
  input[3].value = Math.floor(diffrence % 60);
};
timer();

const interval = setInterval(() => {
  timer();
}, 1000);

/**
 * 1 day=24 hour
 * 1hr=60min
 * 60min=3600sec
 */
