// 4. Build two function that both returns promises and display the resolved value only for the one that completes first. 
// (Promise.race())


function readFromMainDB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('I\'m first'), 2000);
  });
}

function readFromBackupDB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('I\'m second'), 3000);
  });
}


const mainDb = readFromMainDB();
const backupDb = readFromBackupDB();


Promise.race([mainDb, backupDb])
  .then((response) => console.log(response));