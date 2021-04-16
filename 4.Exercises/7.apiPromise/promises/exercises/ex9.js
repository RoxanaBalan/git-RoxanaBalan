// 9. Get all users from https://60623f0b0133350017fd0e29.mockapi.io/users and display their names in HTML.
// I.
fetch('https://60623f0b0133350017fd0e29.mockapi.io/users')
  .then((response) => response.json())
  .then((data) => console.log(data));


// II.
async function getData() {
  const response = await fetch('https://60623f0b0133350017fd0e29.mockapi.io/users');
  const object = await response.json();
  console.log(object);
}

getData();

// III.
async function getData(url) {
  const response = await fetch(url);
  const object = await response.json();
  return(object);
}

async function main() {
  const response = await getData('https://60623f0b0133350017fd0e29.mockapi.io/users')
  console.log(response)
}

main();

