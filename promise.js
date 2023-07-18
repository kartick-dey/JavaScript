
// Consume promise

const promise = login();
console.log('promise:', promise);
promise
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log('error:', error);
  })
  .finally(function () {
    console.log('Promise executed successfully');
  });

console.log('End');

// Promise creation for login
function login() {
  const promise = new Promise(function (resolve, reject) {
    if (!validCred()) {
      const err = new Error('Invalid credentials');
      setTimeout(function () {
        resolve(err);
      }, 5000);
    }

    setTimeout(function () {
      resolve({ success: true });
    }, 5000);
  });
  return promise;
}

function validCred() {
  return true;
}
