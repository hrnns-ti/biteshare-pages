const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async function(event) {
  event.preventDefault(); 

  const formData = new FormData(contactForm);
  const payload = Object.fromEntries(formData.entries()); 

  console.log("Data yang akan dikirim:", payload);

  const endpoint = 'http://localhost:3000/api/contact/send'; 

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload) 
    });

    if (response.ok) {
      alert('Yeay! your message has sent successfully.');
      contactForm.reset();
    } else {
      alert('Ouch, it failed. try to check it again.');
    }
  } catch (error) {
    console.error('Connection error:', error);
    alert('Network failed.');
  }
});