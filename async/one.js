/*for (let index = 0; index < 10; index++) {
  const printTimeout = setTimeout(() => {
    console.log(index);
  }, index * 2000);
  if (index === 5) {
    clearTimeout(printTimeout);
  }
}*/

// This code sets up 10 timeouts to print the index value every 2 seconds.
//  However, when the index reaches 5, it clears the timeout for that specific index, so 5 will not be printed.

// const helper = function () {
//   console.log("Helper function called");
// };

// setTimeout(helper, 3000);
// setInterval(helper, 3000);

const helper = function () {
  console.log("Helper function called");
};

const intervalTimeout = setInterval(helper, 1000);
// clearInterval(intervalTimeout);
