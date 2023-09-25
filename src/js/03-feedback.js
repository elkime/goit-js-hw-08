const feedbackForm = document.querySelector(".feedback-form");
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

feedbackForm.addEventListener("input", function () {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

document.addEventListener("DOMContentLoaded", function () {
    const storedData = localStorage.getItem("feedback-form-state");
    if (storedData) {
      const formData = JSON.parse(storedData);
      emailInput.value = formData.email;
      messageTextarea.value = formData.message;
    }
  });

  
  feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const formData = {
      email: emailInput.value,
      message: messageTextarea.value,
    };
  
    // Borra los datos del almacenamiento local
    localStorage.removeItem("feedback-form-state");
  
    // Emite el objeto con los valores del formulario a la consola
    console.log(formData);
  
    // Limpia los campos del formulario
    emailInput.value = "";
    messageTextarea.value = "";
  });

  
  import throttle from 'lodash/throttle';

const saveFormDataThrottled = throttle(function () {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}, 500); // 500 milisegundos = 0.5 segundos

feedbackForm.addEventListener("input", saveFormDataThrottled);

