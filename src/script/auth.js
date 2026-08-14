const BASE_URL = 'http://localhost:3000/api/user';

// sign in
const signInForm = document.getElementById('signInForm');
if (signInForm) {
  signInForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(signInForm).entries());
    
    try {
      const response = await fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert('Welcome back!');
      } else {
        alert('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
}

// sign up
const signUpForm = document.getElementById('signUpForm');
if (signUpForm) {
  signUpForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(signUpForm).entries());
    
    if (payload.password !== payload.passwordMatch) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert('Account created successfully! Please sign in.');
        window.location.href = './signin.html';
      } else {
        alert('Failed to create account.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
}

// forgot password
const forgotPasswordForm = document.getElementById('forgotPasswordForm');
if (forgotPasswordForm) {
  forgotPasswordForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(forgotPasswordForm).entries());
    
    try {
      const response = await fetch(`${BASE_URL}/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert('Password successfully updated!');
        window.location.href = './signin.html';
      } else {
        alert('Data does not match our records.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
}