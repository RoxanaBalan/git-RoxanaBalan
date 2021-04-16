// 6. Build a promise that rejects with an error. Log the error. (Promise.catch())

new Promise((resolve, reject) => {
  reject('eroare!');
})
  .catch((error) => console.error(error))
  .then(() => { throw new Error('fake error') })
  .catch((error) => console.error(error));