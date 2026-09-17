// Enhanced Mobile Navigation for VAI-ai - Sidebar Focus
(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        mobileBreakpoint: 768,
        menuAnimationDuration: 300,
        swipeThreshold: 50,
        enableSwipeGestures: true,
        enableKeyboardShortcuts: true
    };

    // State
    let isMenuOpen = false;
    let touchStartX = 0;
    let touchStartY = 0;
    let isSwiping = false;

    // Helper: Check if mobile
    function isMobile() {
        return window.innerWidth <= CONFIG.mobileBreakpoint;
    }

    // Helper: Get elements
    function getElements() {
        return {
            sidebar: document.querySelector('.sidebar, aside, nav.sidebar, .sidebar-content'),
            body: document.body,
            mainContent: document.querySelector('.main-content, main')
        };
    }

    // Create hamburger menu button
    function createHamburgerMenu() {
        // Check if already exists
        if (document.querySelector('.mobile-menu-toggle')) {
            return;
        }

        const hamburger = document.createElement('button');
        hamburger.className = 'mobile-menu-toggle';
        hamburger.setAttribute('aria-label', 'Toggle Navigation Menu');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;

        // Add to DOM
        document.body.insertBefore(hamburger, document.body.firstChild);

        // Add click event
        hamburger.addEventListener('click', toggleMenu);

        return hamburger;
    }

    // Create overlay
    function createOverlay() {
        // Check if already exists
        if (document.querySelector('.mobile-overlay')) {
            return;
        }

        const overlay = document.createElement('div');
        overlay.className = 'mobile-overlay';
        overlay.setAttribute('aria-hidden', 'true');

        // Add to DOM
        document.body.insertBefore(overlay, document.body.firstChild);

        // Add click event
        overlay.addEventListener('click', closeMenu);

        return overlay;
    }

    // Toggle menu
    function toggleMenu(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    // Open menu
    function openMenu() {
        const { sidebar } = getElements();
        const hamburger = document.querySelector('.mobile-menu-toggle');
        const overlay = document.querySelector('.mobile-overlay');

        if (!sidebar || !hamburger || !overlay) return;

        // Update state
        isMenuOpen = true;

        // Add classes
        sidebar.classList.add('mobile-open');
        hamburger.classList.add('active');
        overlay.classList.add('active');

        // Update aria
        hamburger.setAttribute('aria-expanded', 'true');
        sidebar.setAttribute('aria-hidden', 'false');

        // Prevent body scroll
        document.body.style.overflow = 'hidden';

        // Focus first focusable element in sidebar
        setTimeout(() => {
            const firstButton = sidebar.querySelector('button, a');
            if (firstButton) {
                firstButton.focus();
            }
        }, CONFIG.menuAnimationDuration);

        // Announce to screen readers
        announceToScreenReader('Navigation menu opened');
    }

    // Close menu
    function closeMenu() {
        const { sidebar } = getElements();
        const hamburger = document.querySelector('.mobile-menu-toggle');
        const overlay = document.querySelector('.mobile-overlay');

        if (!sidebar || !hamburger || !overlay) return;

        // Update state
        isMenuOpen = false;

        // Remove classes
        sidebar.classList.remove('mobile-open');
        hamburger.classList.remove('active');
        overlay.classList.remove('active');

        // Update aria
        hamburger.setAttribute('aria-expanded', 'false');
        sidebar.setAttribute('aria-hidden', 'true');

        // Restore body scroll
        document.body.style.overflow = '';

        // Return focus to hamburger
        hamburger.focus();

        // Announce to screen readers
        announceToScreenReader('Navigation menu closed');
    }

    // Auto-close menu when clicking navigation items
    function setupAutoClose() {
        const { sidebar } = getElements();
        if (!sidebar) return;

        // Get all navigation buttons and links
        const navItems = sidebar.querySelectorAll('button:not(.mobile-menu-toggle), a');

        navItems.forEach(item => {
            item.addEventListener('click', function(e) {
                // Don't close if it's the logout button or has a submenu
                const isLogoutButton = this.getAttribute('onclick')?.includes('logout');
                const hasSubmenu = this.classList.contains('has-submenu');
                
                if (!isLogoutButton && !hasSubmenu && isMobile() && isMenuOpen) {
                    // Small delay to allow the click action to complete
                    setTimeout(() => {
                        closeMenu();
                    }, 150);
                }
            });
        });
    }

    // Swipe gesture support
    function setupSwipeGestures() {
        if (!CONFIG.enableSwipeGestures) return;

        const { sidebar } = getElements();
        const overlay = document.querySelector('.mobile-overlay');

        if (!sidebar) return;

        // Touch start
        sidebar.addEventListener('touchstart', handleTouchStart, { passive: true });
        if (overlay) {
            overlay.addEventListener('touchstart', handleTouchStart, { passive: true });
        }

        // Touch move
        sidebar.addEventListener('touchmove', handleTouchMove, { passive: false });

        // Touch end
        sidebar.addEventListener('touchend', handleTouchEnd, { passive: true });
        if (overlay) {
            overlay.addEventListener('touchend', handleTouchEnd, { passive: true });
        }
    }

    function handleTouchStart(e) {
        if (!isMobile() || !isMenuOpen) return;

        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        isSwiping = false;
    }

    function handleTouchMove(e) {
        if (!isMobile() || !isMenuOpen) return;

        const touchCurrentX = e.touches[0].clientX;
        const touchCurrentY = e.touches[0].clientY;
        const deltaX = touchStartX - touchCurrentX;
        const deltaY = Math.abs(touchStartY - touchCurrentY);

        // Determine if horizontal swipe
        if (Math.abs(deltaX) > 10 && deltaY < 30) {
            isSwiping = true;

            // Prevent vertical scroll while swiping
            if (deltaX > 0) {
                e.preventDefault();
            }
        }
    }

    function handleTouchEnd(e) {
        if (!isMobile() || !isMenuOpen || !isSwiping) return;

        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchStartX - touchEndX;

        // Swipe left to close (threshold: 50px)
        if (deltaX > CONFIG.swipeThreshold) {
            closeMenu();
        }

        isSwiping = false;
    }

    // Keyboard shortcuts
    function setupKeyboardShortcuts() {
        if (!CONFIG.enableKeyboardShortcuts) return;

        document.addEventListener('keydown', function(e) {
            if (!isMobile()) return;

            // Escape key closes menu
            if (e.key === 'Escape' && isMenuOpen) {
                e.preventDefault();
                closeMenu();
            }

            // Ctrl/Cmd + M toggles menu
            if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
                e.preventDefault();
                toggleMenu();
            }
        });

        // Trap focus inside menu when open
        document.addEventListener('keydown', trapFocus);
    }

    function trapFocus(e) {
        if (!isMenuOpen || e.key !== 'Tab') return;

        const { sidebar } = getElements();
        if (!sidebar) return;

        const focusableElements = sidebar.querySelectorAll(
            'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled])'
        );

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            }
        } else {
            // Tab
            if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    }

    // Handle window resize
    function setupResizeHandler() {
        let resizeTimeout;

        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            
            resizeTimeout = setTimeout(function() {
                // Close menu if resized to desktop
                if (!isMobile() && isMenuOpen) {
                    closeMenu();
                }

                // Update hamburger visibility
                updateHamburgerVisibility();
            }, 250);
        });
    }

    function updateHamburgerVisibility() {
        const hamburger = document.querySelector('.mobile-menu-toggle');
        if (!hamburger) return;

        if (isMobile()) {
            hamburger.style.display = 'flex';
        } else {
            hamburger.style.display = 'none';
        }
    }

    // Prevent iOS zoom on input focus
    function preventIOSZoom() {
        const inputs = document.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            if (input.type === 'file' || input.type === 'checkbox' || input.type === 'radio') {
                return;
            }

            // Ensure minimum 16px font size on iOS to prevent zoom
            const computedStyle = window.getComputedStyle(input);
            const fontSize = parseFloat(computedStyle.fontSize);

            if (fontSize < 16 && isMobile()) {
                input.style.fontSize = '16px';
            }
        });
    }

    // Fix viewport height for mobile browsers
    function fixViewportHeight() {
        function setVH() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }

        setVH();
        window.addEventListener('resize', setVH);
        window.addEventListener('orientationchange', setVH);
    }

    // Announce to screen readers
    function announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
        announcement.textContent = message;

        document.body.appendChild(announcement);

        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }

    // Add improved button touch feedback
    function enhanceButtonFeedback() {
        const { sidebar } = getElements();
        if (!sidebar) return;

        const buttons = sidebar.querySelectorAll('button, .nav-button, a.button');

        buttons.forEach(button => {
            // Add ripple effect on touch
            button.addEventListener('touchstart', function(e) {
                if (!isMobile()) return;

                this.style.transform = 'scale(0.97)';
            }, { passive: true });

            button.addEventListener('touchend', function(e) {
                if (!isMobile()) return;

                this.style.transform = '';
            }, { passive: true });

            button.addEventListener('touchcancel', function(e) {
                this.style.transform = '';
            }, { passive: true });
        });
    }

    // Smooth scroll for anchor links
    function setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '#!') return;

                const target = document.querySelector(href);
                if (!target) return;

                e.preventDefault();

                const headerOffset = isMobile() ? 80 : 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close menu if open
                if (isMobile() && isMenuOpen) {
                    setTimeout(closeMenu, 300);
                }
            });
        });
    }

    // Add loading state
    function showLoading() {
        const { sidebar } = getElements();
        if (!sidebar) return;

        sidebar.style.opacity = '0.6';
        sidebar.style.pointerEvents = 'none';
    }

    function hideLoading() {
        const { sidebar } = getElements();
        if (!sidebar) return;

        sidebar.style.opacity = '';
        sidebar.style.pointerEvents = '';
    }

    // Performance: Debounce function
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Initialize everything
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeFeatures);
        } else {
            initializeFeatures();
        }
    }

    function initializeFeatures() {
        console.log('🚀 Initializing Enhanced Mobile Navigation...');

        // Create UI elements
        createHamburgerMenu();
        createOverlay();

        // Setup features
        setupAutoClose();
        setupSwipeGestures();
        setupKeyboardShortcuts();
        setupResizeHandler();
        setupSmoothScroll();

        // Enhancements
        preventIOSZoom();
        fixViewportHeight();
        enhanceButtonFeedback();

        // Initial visibility update
        updateHamburgerVisibility();

        console.log('✅ Mobile Navigation Ready!');
    }

    // Public API (if needed)
    window.MobileNav = {
        open: openMenu,
        close: closeMenu,
        toggle: toggleMenu,
        isOpen: () => isMenuOpen
    };

    // Start initialization
    init();

})();
