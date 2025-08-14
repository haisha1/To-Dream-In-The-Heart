console.log('script start');

async function a() {
  console.log('a start');
  await b();
  console.log('a end');
}

async function b() {
  console.log('b start');
  await Promise.reject('err in b').catch(err => {
    console.log(err);
  });
  console.log('b end');
}

setTimeout(() => {
  console.log('timeout1');
  Promise.resolve().then(() => {
    console.log('promise inside timeout1');
    throw new Error('err inside promise');
  }).catch(e => {
    console.log('catch inside promise', e.message);
  });
}, 0);

a();

Promise.resolve().then(() => {
  console.log('promise1');
}).then(() => {
  console.log('promise2');
});

console.log('script end');
