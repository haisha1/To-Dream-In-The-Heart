console.log('start 1');

setTimeout(() => {
  console.log('timeout1 4');

  Promise.resolve().then(() => {
    console.log('promise inside timeout1 5');
  });

  setTimeout(() => {
    console.log('timeout inside timeout1 7');
  }, 0);

}, 0);

Promise.resolve().then(() => {
  console.log('promise1 3');
  setTimeout(() => {
    console.log('timeout inside promise1 6');
  }, 0);
});

console.log('end 2');
