// 10. Create a new user by sending a POST request to the backend server. 
//     Log the received http status code and the id of the newly created user.
//     (POST https://60623f0b0133350017fd0e29.mockapi.io/users).


const newUser = {};

async function writeData() {
  const response = await fetch(
    'https://60623f0b0133350017fd0e29.mockapi.io/users', 
    {
      method: 'POST',
      body: JSON.stringify(newUser),
    }
  );

  const object = await response.json();
  console.log(object);
}

writeData();

