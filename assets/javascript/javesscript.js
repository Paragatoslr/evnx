// Array of image sources
const images = [
    './assets/images/helmet1.png',
    './assets/images/helmet2.png', // Add your other image paths here
    './assets/images/helmet3.png'  // Add more images as needed
];

let currentIndex = 0; // Start with the first image

// Get references to the image element and buttons
const helmetImage = document.getElementById('helmetImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to update the image
function updateImage() {
    helmetImage.src = images[currentIndex];
}

// Event listener for the previous button
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1; // Loop to last image if at the start
    updateImage();
});

// Event listener for the next button
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0; // Loop to first image if at the end
    updateImage();
});

// Initialize the first image
updateImage();


// Currcency

// Function to change the currency when an option is selected
function changeCurrency(currency) {
    document.getElementById("selectedCurrency").textContent = currency;
}
