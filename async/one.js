for (let index = 0; index < 10; index++) {
  const printTimeout = setTimeout(() => {
    console.log(index);
  }, index * 2000);
  if (index === 5) {
    clearTimeout(printTimeout);
  }
}
