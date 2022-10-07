const emailInput = document.querySelector('.email-form__input');
const submitBtn = document.querySelector('.email-form__submit-btn');
const formMessage = document.querySelector('.email-form__message');

const EMAIL_REGEX =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submitBtn.addEventListener('click', e => {
	e.preventDefault();
	const emailValue = emailInput.value;
	if (emailValue === '') {
		emailInput.classList.add('error');
		formMessage.innerText = 'Cannot be empty';
	} else if (!EMAIL_REGEX.test(emailValue)) {
		emailInput.classList.add('error');
		formMessage.innerText = 'Please provide a valid email';
	} else {
		emailInput.classList.remove('error');
		emailInput.value = '';
		formMessage.innerText = '';
	}
});
