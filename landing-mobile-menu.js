/* ==========================================
   MOBILE HAMBURGER MENU - JavaScript
   Handles toggle, smooth scrolling, and accessibility
   ========================================== */

(function() {
    'use strict';

    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        initMobileMenu();
    });

    function initMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        const navLinkItems = document.querySelectorAll('.nav-links a');

        if (!hamburger || !navLinks) {
            console.warn('Mobile menu elements not found');
            return;
        }

        // Toggle menu on hamburger click
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });

        // Close menu when clicking on a nav link
        navLinkItems.forEach(function(link) {
            link.addEventListener('click', function(e) {
                // If it's an anchor link (starts with #), handle smooth scroll
                if (this.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    closeMenu();
                    
                    // Smooth scroll to target after menu closes
                    setTimeout(function() {
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                            const targetPosition = targetElement.offsetTop - 20; // Small offset for spacing
                            window.scrollTo({
                                top: targetPosition,
                                behavior: 'smooth'
                            });
                        }
                    }, 300);
                } else {
                    // External link, just close menu
                    closeMenu();
                }
            });
        });

        // Close menu when clicking on overlay (body)
        document.addEventListener('click', function(e) {
            const isClickInsideMenu = navLinks.contains(e.target);
            const isClickOnHamburger = hamburger.contains(e.target);
            
            if (!isClickInsideMenu && !isClickOnHamburger && navLinks.classList.contains('active')) {
                closeMenu();
            }
        });

        // Close menu on ESC key press
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                closeMenu();
                hamburger.focus(); // Return focus to hamburger
            }
        });

        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                // Close menu if window is resized to desktop size
                if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
                    closeMenu();
                }
            }, 250);
        });

        // Prevent body scroll when menu is open (mobile Safari fix)
        let scrollPosition = 0;
        function preventBodyScroll(enable) {
            if (enable) {
                scrollPosition = window.pageYOffset;
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.top = `-${scrollPosition}px`;
                document.body.style.width = '100%';
            } else {
                document.body.style.removeProperty('overflow');
                document.body.style.removeProperty('position');
                document.body.style.removeProperty('top');
                document.body.style.removeProperty('width');
                window.scrollTo(0, scrollPosition);
            }
        }

        // Toggle menu function
        function toggleMenu() {
            const isActive = navLinks.classList.contains('active');
            
            if (isActive) {
                closeMenu();
            } else {
                openMenu();
            }
        }

        // Open menu function
        function openMenu() {
            hamburger.classList.add('active');
            navLinks.classList.add('active');
            document.body.classList.add('menu-open');
            hamburger.setAttribute('aria-expanded', 'true');
            
            // Prevent body scroll on mobile
            if (window.innerWidth <= 768) {
                preventBodyScroll(true);
            }

            // Trap focus within menu
            trapFocus(navLinks);
        }

        // Close menu function
        function closeMenu() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
            hamburger.setAttribute('aria-expanded', 'false');
            
            // Re-enable body scroll
            if (window.innerWidth <= 768) {
                preventBodyScroll(false);
            }
        }

        // Trap focus within menu for accessibility
        function trapFocus(element) {
            const focusableElements = element.querySelectorAll(
                'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled])'
            );
            const firstFocusable = focusableElements[0];
            const lastFocusable = focusableElements[focusableElements.length - 1];

            element.addEventListener('keydown', function(e) {
                if (e.key !== 'Tab') return;

                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        e.preventDefault();
                        lastFocusable.focus();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        e.preventDefault();
                        firstFocusable.focus();
                    }
                }
            });
        }

        // Set initial ARIA attributes
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-controls', 'navLinks');
        hamburger.setAttribute('aria-label', 'Toggle navigation menu');
    }

    // Smooth scroll polyfill for older browsers
    function smoothScrollPolyfill() {
        if (!('scrollBehavior' in document.documentElement.style)) {
            const links = document.querySelectorAll('a[href^="#"]');
            links.forEach(function(link) {
                link.addEventListener('click', function(e) {
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    e.preventDefault();
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        const targetPosition = targetElement.offsetTop - 20; // Small offset for spacing
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }
    }

    // Initialize smooth scroll polyfill
    smoothScrollPolyfill();

})();

/* ==========================================
   CONSOLE MESSAGE
   ========================================== */
console.log('%c🍔 Mobile Hamburger Menu Loaded', 'color: #2D5AA0; font-weight: bold; font-size: 14px;');
console.log('%cFeatures: Touch-optimized, Accessible, Smooth animations', 'color: #666; font-size: 12px;');
