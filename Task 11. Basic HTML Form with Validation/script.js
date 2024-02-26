const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');
const errorDiv = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];
    
    if (nameInput.value.trim() === '') {
        messages.push('Name is required');
    }
    if (passwordInput.value.trim() === '') {
        messages.push('Password is required');
    }

    if (messages.length > 0) {
        e.preventDefault(); 
        errorDiv.innerText = messages.join(', ');
    }
});
