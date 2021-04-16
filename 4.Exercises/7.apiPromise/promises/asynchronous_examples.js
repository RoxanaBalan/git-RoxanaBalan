//  I. CALLBACKS

function getUserInfo(userId, callback) {
// ->  this function retrieves the user information from DB. 
// ->  is just an example, not a working function.
  const userInfo = fetch(`database_url/${userId}`);
  callback(userInfo);
}

getUserInfo('12', (error, data) => {
// -> callbacks usually have error as first parameter and data as second parameter
  if (error) {
    console.log(error); 
  } else {
    console.log(data);
  }
});

console.log('ceva');
console.log('cev2');
console.log('cev3');

///////////////////////////////////////////////////////


//  II. PROMISES 
 
getUserInfo('12')
  .then((userInfo) => console.log(userInfo))
  .then(() => getUserAddress('12'))
  .then((userAddress) => console.log(userAddress))
  .then(() => getUserFriends('12'))
  .then((userFriends) => console.log(userFriends))
  .then(() => console.log('ceva4'));

console.log('ceva');
console.log('ceva2');
console.log('ceva3');

///////////////////////////////////////////////////////

//  II. ASYNC / AWAIT 

async function main() {
  const userInfo = await getUserInfo('12');
  console.log(userInfo);

  const userAddress = await getUserAddress('12');
  console.log(userAddress);

  console.log('ceva4');
}

main(); 

console.log('ceva');
console.log('ceva2');
console.log('ceva3');

///////////////////////////////////////////////////////

////////////////////////////////////////////////// 
// ERRORS

// I.
getUserInfo('12', (error, data) => {
// -> callbacks usually have error as first parameter and data as second parameter
  if (error) {
    console.log(error); 
  } else {
    console.log(data);
  }
});


// II.
async function main() {
  try {
  const userInfo = await getUserInfo('12');
  console.log(userInfo);

  const userAddress = await getUserAddress('12');
  console.log(userAddress);

  console.log('ceva4');
  
  } catch(error) {
    console.log(error);
    throw error;
  }
}


