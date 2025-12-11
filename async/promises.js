//CONCEPT 1 : Creating a Promise

const { resolve } = require("path");

// const promise1 = new Promise((resolve, reject) => {
//   //do some async operation

//   setTimeout(() => {
//     console.log("promise execution");
//     resolve("promise resolved");
//   }, 1000);
// });

// promise1.then((data) => {
//   console.log(data);
// });

//CONCEPT 2 : Chaining Promises

// new Promise((resolve, reject) => {
//   //do some async operation
//   const error = true;

//   if (error) {
//     reject("something went wrong");
//   } else {
//     resolve({ username: "himanshu", message: "I am alive" });
//   }
// })
//   .then((data) => {
//     console.log(data);
//     return data.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("promise is either resolved or rejected"); // executes in both cases
//   });

//CONCEPT 3 - promises can be handled using async/await

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve("Promise resolved successfully");
    } else {
      reject("Promise rejected");
    }
  }, 5000);
});

const consumePromise = async () => {
  try {
    const response = await promise3;
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

consumePromise();
