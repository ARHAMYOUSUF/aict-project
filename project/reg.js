function welCome(){
alert('Welcome to "Register and Login" page of ARTISAN BAKEHOUSE.');
}const users = [];

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

   
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

   
    if (username && email && password) {
      
        if (users.some(user => user.username === username)) {
            showMessage('Username already taken. Please choose another.', 'error');
        } else {
           
            users.push({ username, email, password });
            showMessage('Account successfully created. You can now login.', 'success');
            document.getElementById('registerForm').reset();
        }
    } else {
        showMessage('Please fill in all fields.', 'error');
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

   
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

   
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        showMessage('Successfully logged in. Welcome to the bakery!', 'success');
    } else {
        showMessage('Invalid username or password. Please try again.', 'error');
    }
});


function showMessage(message, type) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.className = 'message ' + type;
}