const formEl = document.querySelector('.form');
console.dir(formEl);

formEl.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmit(evt) {
  evt.preventDefault();
  let delayForm = formEl.elements.delay.value;
  let stepForm = formEl.elements.dalay.value;
  let amountEl = formEl.elements.dalay.value;
}
