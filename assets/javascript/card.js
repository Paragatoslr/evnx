const products = [
    {
        name: 'HJC CL-17 CAPTAIN AMERICA (SHELL)',
        price: '$350.5',
        image: './assets/images/helmet2.png'
    },
    {
        name: 'ZEUS Z-806 NEW SUPERTECH II50 MATT',
        price: '$350.5',
        image: './assets/images/helmet3.png'
    },
    {
        name: 'ARAI TOUR CROSS 3',
        price: '$350.5',
        image: './assets/images/helmet4.png'
    }
];

// Function to generate product cards
function generateProductCards() {
    const cardContainer = document.getElementById('cardContainer'); // Container for cards

    products.forEach(product => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card ';
        cardElement.innerHTML = `
            <div class="flex-1">
                <a href="#">
                    <h5 class="prdctn mb-2 text-gray-400">${product.name.replace('<br>', ' ')}</h5>
                </a>
                <p class="prdctprc mb-3 font-normal text-2xl font-bold">${product.price}</p>
                <a href="#" class="buybtn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded">
                    BUY NOW
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                </a>
            </div>
            <div class="image-container ml-4">
                <img src="${product.image}" alt="Helmet" class="helmet-image flex object-cover rounded-lg"/>
            </div>
        `;
        cardContainer.appendChild(cardElement);
    });
}

// Call the function to generate cards
generateProductCards();

// Add scrolling functionality for carousel buttons
const cardContainer = document.getElementById('cardContainer');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

prevButton.addEventListener('click', () => {
    cardContainer.scrollLeft -= 300; // Scroll left by 300px (adjust as needed)
});

nextButton.addEventListener('click', () => {
    cardContainer.scrollLeft += 300; // Scroll right by 300px (adjust as needed)
});
