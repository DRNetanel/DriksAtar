// JavaScript for the sprinkler business landing page

document.addEventListener('DOMContentLoaded', function() {
    // Back to top button functionality
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    // Mobile menu toggle functionality
    const createMobileMenu = () => {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        
        // Create mobile menu button
        const mobileMenuBtn = document.createElement('div');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        
        // Insert before nav
        header.insertBefore(mobileMenuBtn, nav);
        
        // Add toggle class on click
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
    };
    
    // Only create mobile menu if screen width is below 768px
    if (window.innerWidth < 768) {
        createMobileMenu();
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth < 768 && !document.querySelector('.mobile-menu-btn')) {
            createMobileMenu();
        } else if (window.innerWidth >= 768 && document.querySelector('.mobile-menu-btn')) {
            document.querySelector('.mobile-menu-btn').remove();
            document.querySelector('nav').classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (document.querySelector('nav.active')) {
                    document.querySelector('nav').classList.remove('active');
                    document.querySelector('.mobile-menu-btn').classList.remove('active');
                }
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // Show success message (in a real implementation, this would send data to a server)
            const formContainer = contactForm.parentElement;
            formContainer.innerHTML = `
                <div class="success-message">
                    <i class="fas fa-check-circle"></i>
                    <h3>תודה על פנייתך!</h3>
                    <p>הודעתך התקבלה בהצלחה. ניצור איתך קשר בהקדם.</p>
                </div>
            `;
        });
    }
    
    // Add scroll animation for elements
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service-card, .project-card, .about-image, .about-text');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Add animation class to CSS elements
    const addAnimationClasses = () => {
        const serviceCards = document.querySelectorAll('.service-card');
        const projectCards = document.querySelectorAll('.project-card');
        const aboutImage = document.querySelector('.about-image');
        const aboutText = document.querySelector('.about-text');
        
        [...serviceCards, ...projectCards, aboutImage, aboutText].forEach((element, index) => {
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = `all 0.5s ease ${index * 0.1}s`;
            }
        });
    };
    
    addAnimationClasses();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Run once on page load
    animateOnScroll();
});
