import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

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
  let delayForm = Number(formEl.elements.delay.value);

  let stepForm = Number(formEl.elements.step.value);
  let amountEl = Number(formEl.elements.amount.value);

  if (delayForm <= 0 || stepForm <= 0 || amountEl <= 0) {
  }
  for (let i = 0; i < amountEl; i += 1) {
    createPromise(i + 1, delayForm + i * stepForm)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
