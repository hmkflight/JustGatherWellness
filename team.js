/**
 * Team Page - Parallax Effect
 * Lightweight parallax for background layers
 * Respects prefers-reduced-motion
 */

(function() {
    'use strict';

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        console.log('Parallax disabled: User prefers reduced motion');
        return;
    }

    // Get all parallax elements
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    if (!parallaxElements.length) return;

    let ticking = false;
    let scrollY = 0;

    /**
     * Update parallax positions
     */
    function updateParallax() {
        parallaxElements.forEach(el => {
            const speed = parseFloat(el.dataset.parallax) || 0.1;
            const yOffset = scrollY * speed;
            el.style.transform = `translateY(${yOffset}px)`;
        });
        ticking = false;
    }

    /**
     * Handle scroll events with requestAnimationFrame
     */
    function onScroll() {
        scrollY = window.pageYOffset || document.documentElement.scrollTop;

        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    // Initialize
    window.addEventListener('scroll', onScroll, { passive: true });

    // Initial call to set positions
    onScroll();

    // Mobile menu toggle (reuse from main site)
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

})();
