function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('active');
}

// Variable to track the current scroll position
let currentScroll = 0;

function scrollGallery(direction) {
    const gallery = document.querySelector('.image-gallery');
    const imgWidth = gallery.querySelector('img').offsetWidth + 20; // Account for image width plus margin
    currentScroll += imgWidth * direction;

    // Check boundaries to prevent scrolling past available images
    const maxScroll = gallery.scrollWidth - gallery.offsetWidth;
    if (currentScroll < 0) {
        currentScroll = 0;
    } else if (currentScroll > maxScroll) {
        currentScroll = maxScroll;
    }

    gallery.style.transform = `translateX(-${currentScroll}px)`;
}

// Function to display the description when an image is clicked
function showImage(description) {
    const descriptionElement = document.getElementById('image-description');
    descriptionElement.innerText = description;
}

// Function for random travel tips
document.getElementById('random-tip-btn').addEventListener('click', () => {
    const tips = [
        'Always carry a warm cloak; Skyrim can be chilly!',
        'Be prepared for dragon encounters—carry a weapon!',
        'Explore side quests; they often lead to hidden treasures!',
        'Don\'t forget to visit the local taverns for unique stories!',
        'Stock up on potions before heading into the wilderness!'
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById('random-tip').innerText = randomTip;
});
