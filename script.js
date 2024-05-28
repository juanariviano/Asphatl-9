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

function validateForm() {
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (name.length <= 10) {
        nameError.textContent = "Name must be more than 10 words.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Email must end with @gmail.com.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Date of Birth validation
    const dob = document.getElementById('dob').value;
    const dobError = document.getElementById('dobError');
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(dob).getFullYear();
    if (dob === "" || (currentYear - birthYear) < 17) {
        dobError.textContent = "You must be at least 17 years old.";
        isValid = false;
    } else {
        dobError.textContent = "";
    }

    // Gender validation
    const gender = document.getElementById('gender').value;
    const genderError = document.getElementById('genderError');
    if (gender === "") {
        genderError.textContent = "Please select a gender.";
        isValid = false;
    } else {
        genderError.textContent = "";
    }

    // Terms and Conditions validation
    const terms = document.getElementById('terms').checked;
    const termsError = document.getElementById('termsError');
    if (!terms) {
        alert("You must agree to the terms and conditions.");
        isValid = false;
    } else {
        termsError.textContent = "";
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        return false;
    } else {
        alert('Form submitted successfully!');
        resetFormFields(); // Reset the form
    }
}

function resetFormFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('terms').checked = false;
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('dobError').textContent = '';
    document.getElementById('genderError').textContent = '';
    document.getElementById('termsError').textContent = '';
}

