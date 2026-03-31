$(document).ready(function() {
    // Initialize Owl Carousel for Products
    $('.product-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,  
        center: false,
        slideBy: 1,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                stagePadding: 50
            },
            600: {
                items: 2,
                nav: true,
                dots: true,
                stagePadding: 40
            },
            1000: {
                items: 3,
                nav: true,
                dots: true,
                stagePadding: 30
            },
            1200: {
                items: 4,
                nav: true,
                dots: true,
                stagePadding: 20
            }
        }
    });

    // Bootstrap 5 Carousel for Hero Section - No custom JavaScript needed
    // Bootstrap 5 automatically handles carousel functionality

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
