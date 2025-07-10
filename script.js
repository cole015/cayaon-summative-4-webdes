document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;

        usernameInput.classList.remove('is-invalid');
        passwordInput.classList.remove('is-invalid');

        if (usernameInput.value.trim() === '') {
            usernameInput.classList.add('is-invalid');
            isValid = false;
        }

        if (passwordInput.value.trim() === '') {
            passwordInput.classList.add('is-invalid');
            isValid = false;
        }

        if (isValid) {
            alert('Login successful!');
        } else {
            alert('Please fill in both username and password fields.');
        }
    });
});
