// 1. Build a HTML digital clock with a stop button. When pressing "stop", the clock will freeze. Time format: "h21:m00:s05"

const div = document.querySelector('#clock');
const button = document.querySelector('#stop');

const interval = setInterval(
  () => {
    const date = new Date();
    const time = `h${date.getHours().toString().padStart(2, 0)}:m${date.getMinutes().toString().padStart(2, 0)}:s${date.getSeconds().toString().padStart(2, 0)}`;
    div.innerText = time + '\n';
  },
  1000
);


button.addEventListener('click', () => {
  clearInterval(interval);
});