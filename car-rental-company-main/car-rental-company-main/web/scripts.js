$(document).ready(function() {
    const $registrationForm = $('#registrationForm');

    if ($registrationForm.length) {
        $registrationForm.on('submit', function(event) {
            event.preventDefault();
            const fullName = $('#fullname').val();
            const email = $('#email').val();
            const password = $('#password').val();
            const confirmPassword = $('#confirm-password').val();

            if (password !== confirmPassword) {
                alert("Passwords do not match. Please try again.");
                return;
            }

            const user = {
                fullName: fullName,
                email: email,
                password: password
            };

            localStorage.setItem('user', JSON.stringify(user));

            alert("Registration successful!");

            $registrationForm.trigger('reset');
        });
    }

    const $loginForm = $('#loginForm');

    if ($loginForm.length) {
        $loginForm.on('submit', function(event) {
            event.preventDefault();
            const email = $('#username').val();
            const password = $('#password').val();

            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (!storedUser) {
                alert("No user found. Please register first.");
                return;
            }

            if (email === storedUser.email && password === storedUser.password) {
                alert(`Welcome, ${storedUser.fullName}!`);
            } else {
                alert("Invalid credentials. Please try again.");
            }

            $loginForm.trigger('reset');
        });
    }
});
