// JavaScript for hover animations on images
document.addEventListener('DOMContentLoaded', function() {
    const serviceImages = document.querySelectorAll('.service-image');
    const productImages = document.querySelectorAll('.product-image');

    serviceImages.forEach(image => {
        image.addEventListener('mouseover', function() {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.2s';
        });

        image.addEventListener('mouseout', function() {
            image.style.transform = 'scale(1)';
        });
    });

    productImages.forEach(image => {
        image.addEventListener('mouseover', function() {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.2s';
        });

        image.addEventListener('mouseout', function() {
            image.style.transform = 'scale(1)';
        });
    });
});
