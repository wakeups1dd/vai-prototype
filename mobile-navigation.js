// Mobile Navigation Enhancement for VAI-ai
(function() {
    'use strict';

    // Only initialize on mobile devices
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Create hamburger menu button
    function createHamburgerMenu() {
        if (!isMobile()) return;

        const sidebar = document.querySelector('.sidebar');
        if (!sidebar) return;

        // Create hamburger button
        const hamburger = document.createElement('button');
        hamburger.className = 'mobile-menu-toggle';
        hamburger.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        hamburger.setAttribute('aria-label', 'Toggle Menu');
        
        // Add styles for hamburger
        const style = document.createElement('style');
        style.textContent = `
            .mobile-menu-toggle {
                display: none;
                position: fixed;
                top: 1rem;
                left: 1rem;
                z-index: 1001;
                background: linear-gradient(135deg, #2d5aa0, #1e3c6e);
                border: none;
                border-radius: 8px;
                padding: 12px;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                transition: all 0.3s ease;
            }

            .mobile-menu-toggle:active {
                transform: scale(0.95);
            }

            .mobile-menu-toggle span {
                display: block;
                width: 25px;
                height: 3px;
                background: white;
                margin: 5px 0;
                transition: all 0.3s ease;
                border-radius: 2px;
            }

            .mobile-menu-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(8px, 8px);
            }

            .mobile-menu-toggle.active span:nth-child(2) {
                opacity: 0;
            }

            .mobile-menu-toggle.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -7px);
            }

            @media (max-width: 768px) {
                .mobile-menu-toggle {
                    display: block;
                }

                .sidebar {
                    position: fixed;
                    left: -100%;
                    top: 0;
                    height: 100vh;
                    z-index: 1000;
                    transition: left 0.3s ease;
                    width: 280px !important;
                    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
                }

                .sidebar.mobile-open {
                    left: 0;
                }

                .mobile-overlay {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 999;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .mobile-overlay.active {
                    display: block;
                    opacity: 1;
                }

                .main-content {
                    margin-left: 0 !important;
                }

                /* Make sidebar scrollable on mobile */
                .sidebar-content {
                    overflow-y: auto;
                    max-height: calc(100vh - 2rem);
                }
            }
        `;
        document.head.appendChild(style);

        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'mobile-overlay';

        // Insert elements
        document.body.insertBefore(hamburger, document.body.firstChild);
        document.body.insertBefore(overlay, document.body.firstChild);

        // Toggle menu
        function toggleMenu() {
            sidebar.classList.toggle('mobile-open');
            hamburger.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = sidebar.classList.contains('mobile-open') ? 'hidden' : '';
        }

        hamburger.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        // Close menu when clicking sidebar links
        const sidebarLinks = sidebar.querySelectorAll('button, a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                if (isMobile() && !this.classList.contains('mobile-menu-toggle')) {
                    setTimeout(() => {
                        if (sidebar.classList.contains('mobile-open')) {
                            toggleMenu();
                        }
                    }, 300);
                }
            });
        });

        // Handle resize
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
                if (!isMobile() && sidebar.classList.contains('mobile-open')) {
                    toggleMenu();
                }
            }, 250);
        });
    }

    // Touch swipe to close sidebar
    function initSwipeGesture() {
        if (!isMobile()) return;

        const sidebar = document.querySelector('.sidebar');
        if (!sidebar) return;

        let touchStartX = 0;
        let touchEndX = 0;

        sidebar.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        sidebar.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            if (touchStartX - touchEndX > 50) {
                // Swiped left - close menu
                if (sidebar.classList.contains('mobile-open')) {
                    const hamburger = document.querySelector('.mobile-menu-toggle');
                    const overlay = document.querySelector('.mobile-overlay');
                    sidebar.classList.remove('mobile-open');
                    hamburger.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        }
    }

    // Improve form inputs for mobile
    function optimizeMobileInputs() {
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            // Prevent zoom on input focus for iOS
            if (input.type !== 'file' && input.type !== 'checkbox' && input.type !== 'radio') {
                if (window.innerWidth <= 768) {
                    const currentFontSize = window.getComputedStyle(input).fontSize;
                    const fontSize = parseFloat(currentFontSize);
                    if (fontSize < 16) {
                        input.style.fontSize = '16px';
                    }
                }
            }
        });
    }

    // Smooth scroll for mobile
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const headerOffset = isMobile() ? 80 : 100;
                        const elementPosition = target.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    // Add mobile-specific viewport height fix
    function fixMobileViewportHeight() {
        const setViewportHeight = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        setViewportHeight();
        window.addEventListener('resize', setViewportHeight);
        window.addEventListener('orientationchange', setViewportHeight);
    }

    // Prevent pull-to-refresh on certain elements
    function preventPullToRefresh() {
        let lastTouchY = 0;
        let preventPullToRefresh = false;

        document.addEventListener('touchstart', function(e) {
            if (e.touches.length !== 1) return;
            lastTouchY = e.touches[0].clientY;
            preventPullToRefresh = window.pageYOffset === 0;
        }, { passive: false });

        document.addEventListener('touchmove', function(e) {
            const touchY = e.touches[0].clientY;
            const touchYDelta = touchY - lastTouchY;
            lastTouchY = touchY;

            if (preventPullToRefresh) {
                if (touchYDelta > 0) {
                    e.preventDefault();
                    return;
                }
                preventPullToRefresh = false;
            }
        }, { passive: false });
    }

    // Initialize all mobile features
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                createHamburgerMenu();
                initSwipeGesture();
                optimizeMobileInputs();
                initSmoothScroll();
                fixMobileViewportHeight();
                preventPullToRefresh();
            });
        } else {
            createHamburgerMenu();
            initSwipeGesture();
            optimizeMobileInputs();
            initSmoothScroll();
            fixMobileViewportHeight();
            preventPullToRefresh();
        }
    }

    // Run initialization
    init();
})();
