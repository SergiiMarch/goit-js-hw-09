const ulEl = document.querySelector('.form-js');

const markup = `  <form class="feedback-form" autocomplete="off">
<label>
  Email
  <input type="email" name="email" autofocus />
</label>
<label>
  Message
  <textarea name="message" rows="8"></textarea>
</label>
<button type="submit">Submit</button>
</form>; `;
ulEl.insertAdjacentHTML('beforeend', markup);

const formEl = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

const LOCAL_KEY = 'feedback-form-state';

function initForm() {
  let persistedFilter = localStorage.getItem(LOCAL_KEY);
  if (persistedFilter) {
    persistedFilter = JSON.parse(persistedFilter);
    formEl.elements.email.value = persistedFilter.email || '';
    formEl.elements.message.value = persistedFilter.message || '';

    formData = persistedFilter;
  }
}

initForm();

formEl.addEventListener('input', handlerGetComment);

function handlerGetComment(e) {
  e.preventDefault();
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

formEl.addEventListener('submit', e => {
  e.preventDefault();
  const { email, message } = formData;

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }
  console.log('formData:', formData);

  localStorage.removeItem(LOCAL_KEY);
  formEl.reset();
  formData = {
    email: '',
    message: '',
  };
});
