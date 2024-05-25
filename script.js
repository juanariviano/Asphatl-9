const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('resp-nav');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();  

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const terms = document.getElementById('terms').checked;

    
    let valid = true;
    let errorMessage = '';

    
    if (name.trim() === '') {
        valid = false;
        errorMessage += 'Name is required.\n';
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        valid = false;
        errorMessage += 'Please enter a valid email address.\n';
    }

    
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dob)) {
        valid = false;
        errorMessage += 'Date of Birth must be in YYYY-MM-DD format.\n';
    }

    
    if (gender === '') {
        valid = false;
        errorMessage += 'Please select your gender.\n';
    }

    
    if (!terms) {
        valid = false;
        errorMessage += 'You must agree to the terms and conditions.\n';
    }


    if (!valid) {
        alert(errorMessage);
    } else {
        alert('Form submitted successfully!');
    }
});
