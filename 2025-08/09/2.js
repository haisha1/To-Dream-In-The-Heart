console.log('script start1');

setTimeout(() => {
  console.log('timeout1 6');
  Promise.resolve().then(() => {
    console.log('promise inside timeout1 7');
    return Promise.resolve().then(() => {
      console.log('nested promise inside timeout1 8');
    });
  }).then(() => {
    console.log('then after nested promise inside timeout1 9');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('promise1 3');
  return Promise.resolve().then(() => {
    console.log('nested promise1 4');
  });
}).then(() => {
  console.log('promise2 5');
});

console.log('script end2');
