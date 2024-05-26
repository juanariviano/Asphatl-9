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
    if (name.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email format.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Date of Birth validation
    const dob = document.getElementById('dob').value;
    const dobError = document.getElementById('dobError');
    if (dob === "") {
        dobError.textContent = "Date of Birth is required.";
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
    }
}
