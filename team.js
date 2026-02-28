/**
 * Team Page - Premium Interactions
 * Subtle tilt effect on cards + mobile nav
 * Respects prefers-reduced-motion
 */

(function() {
    'use strict';

    // ==================
    // REDUCED MOTION CHECK
    // ==================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ==================
    // MOBILE NAVIGATION
    // ==================
    const menuIcon = document.querySelector('.ri-menu-line');
    const closeIcon = document.querySelector('.ri-close-line');
    const subnav = document.querySelector('.subnav');

    if (menuIcon && subnav) {
        menuIcon.addEventListener('click', function() {
            subnav.style.top = '0%';
        });
    }

    if (closeIcon && subnav) {
        closeIcon.addEventListener('click', function() {
            subnav.style.top = '-109%';
        });
    }

    // ==================
    // SUBTLE TILT EFFECT
    // ==================
    if (prefersReducedMotion) {
        console.log('Tilt effect disabled: User prefers reduced motion');
        return;
    }

    const tiltCards = document.querySelectorAll('.team-card[data-tilt]');

    if (!tiltCards.length) return;

    // Tilt configuration
    const config = {
        maxTilt: 4,        // Max tilt in degrees (very subtle)
        perspective: 1000,  // Perspective value
        scale: 1.02,        // Scale on hover
        speed: 400,         // Transition speed in ms
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    };

    /**
     * Handle mouse move for tilt effect
     */
    function handleMouseMove(e) {
        const card = this;
        const rect = card.getBoundingClientRect();
        const cardWidth = rect.width;
        const cardHeight = rect.height;

        // Calculate mouse position relative to card center
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Calculate tilt (inverted for natural feel)
        const tiltX = ((mouseY / cardHeight) - 0.5) * config.maxTilt * -1;
        const tiltY = ((mouseX / cardWidth) - 0.5) * config.maxTilt;

        // Apply transform
        card.style.transform = `
            perspective(${config.perspective}px)
            rotateX(${tiltX}deg)
            rotateY(${tiltY}deg)
            scale3d(${config.scale}, ${config.scale}, ${config.scale})
        `;
    }

    /**
     * Handle mouse enter
     */
    function handleMouseEnter() {
        this.style.transition = `transform ${config.speed}ms ${config.easing}`;
    }

    /**
     * Handle mouse leave - reset transform
     */
    function handleMouseLeave() {
        this.style.transition = `transform ${config.speed}ms ${config.easing}`;
        this.style.transform = `
            perspective(${config.perspective}px)
            rotateX(0deg)
            rotateY(0deg)
            scale3d(1, 1, 1)
        `;
    }

    // Attach event listeners to each card
    tiltCards.forEach(card => {
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
    });

    // ==================
    // SCROLL REVEAL (optional subtle fade-in)
    // ==================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = entry.target.style.transform || 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Set initial state and observe cards
    tiltCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
        revealObserver.observe(card);
    });

})();
