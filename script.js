// script.js
document.addEventListener('DOMContentLoaded', function () {
    const welcomeMessage = document.getElementById('welcome');

    // Hide the welcome message after 4 seconds
    setTimeout(function () {
        welcomeMessage.style.opacity = 0; // Fade out
        showImageAndButton(); // Reveal image and button
        document.body.classList.add('loaded'); // Add the 'loaded' class
    }, 3000);
});

function showImageAndButton() {
    const image = document.createElement('img');
    image.src = 'taylor.png'; // Replace with your Taylor Swift image
    image.alt = 'Taylor Swift';
    image.className = 'site-image';
    document.body.appendChild(image);

    const button = document.createElement('button');
    button.textContent = 'SLAP🤚';
    button.className = 'dlap-button';
    
    button.addEventListener('click', function () {
        
        // Handle button click (you can add your desired functionality here)
        changeImage(); // Change the image
        showMessage(); // Show the "You did well" message
    });
    document.body.appendChild(button);
}

function changeImage() {
    const image = document.querySelector('.site-image'); // Get the existing image element
    image.src = 'cry.png'; // Replace with the path to your new image
    image.alt = 'New Image'; // Set an appropriate alt text for accessibility
}

function showMessage() {
    const message = document.createElement('div');
    message.textContent = 'You did well. '; // Existing message
    message.textContent += 'So proud of you, buddy!'; // New message
    message.className = 'success-message'; // Add a CSS class for styling
    document.body.appendChild(message);
}
