

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-up');

    window.addEventListener('scroll', function() {
        elements.forEach(function(element) {
            let position = element.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if (position < windowHeight - 100) {
                console.log('Adding active class to:', element);
                element.classList.add('active');
            }
        });
    });
});

