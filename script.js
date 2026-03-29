// Simple JavaScript for basic interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple hero slider (if needed in future)
    let currentSlide = 0;
    const slides = [
        'images/home-banner-cement-plant.jpg',
        'images/home-banner-oil-gas.jpg',
        'images/home-banner-plant.jpg',
        'images/home-banner-powerplant.jpg',
        'images/home-banner-refinery.jpg'
    ];

    // Optional: Auto-rotate hero background
    function changeHeroBackground() {
        const heroSlide = document.querySelector('.hero-slide');
        if (heroSlide) {
            currentSlide = (currentSlide + 1) % slides.length;
            heroSlide.style.backgroundImage = `url('${slides[currentSlide]}')`;
        }
    }

    // Uncomment below for auto-rotating hero background every 5 seconds
    // setInterval(changeHeroBackground, 5000);

    // Add some animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.product-card, .feature-card, .customer-logo');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Brochure button click handler
    const brochureBtn = document.querySelector('.brochure-btn');
    if (brochureBtn) {
        brochureBtn.addEventListener('click', function() {
            // You can add brochure download functionality here
            alert('Brochure download functionality would be implemented here');
        });
    }

    // Read more button click handler
    const readMoreBtn = document.querySelector('.read-more-btn');
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function() {
            // You can add navigation to about page or expand content here
            alert('Read more functionality would navigate to about page or expand content');
        });
    }
});
