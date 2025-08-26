document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.animate-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once it's visible
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.2 // Triggers when 20% of the element is visible
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});