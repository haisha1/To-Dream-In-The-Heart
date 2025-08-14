async function alpha() {
  console.log('alpha start 2');
  await beta();
  console.log('alpha end 8');
}

async function beta() {
  console.log('beta start 3');
  await Promise.resolve();
  console.log('beta end 6');
}

console.log('script start 1');

setTimeout(() => {
  console.log('timeout1 10');
  Promise.resolve().then(() => {
    console.log('promise inside timeout1 11');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('promise1 5');
  return Promise.resolve().then(() => {
    console.log('inner promise1 7');
  });
}).then(() => {
  console.log('promise2 9');
});

alpha();

setTimeout(() => {
  console.log('timeout2 12');
}, 0);

console.log('script end 4');
