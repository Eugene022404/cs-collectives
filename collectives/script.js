// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle SHOP NOW button click
    const shopNowButton = document.querySelector('.cta-button');
    if (shopNowButton) {
        shopNowButton.addEventListener('click', function() {
            window.location.href = 'shop.html';
        });
    }

    // Handle Shop navigation link click
    const shopNavLink = document.querySelector('nav a[href="#shop"]');
    if (shopNavLink) {
        shopNavLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            window.location.href = 'shop.html';
        });
    }
});
