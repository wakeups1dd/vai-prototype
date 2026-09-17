// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and other elements
document.querySelectorAll('.feature-card, .about-content, .cta-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Session awareness for landing page navbar
function checkLandingSession() {
    const sessionStr = localStorage.getItem('vai_session');
    const navActions = document.getElementById('navActions');
    if (sessionStr && navActions) {
        try {
            const session = JSON.parse(sessionStr);
            const targetUrl = (session.role === 'admin' || session.role === 'teacher') ? 'admin.html' : 'app.html';
            const firstName = (session.fullName || session.name || 'Scholar').split(' ')[0];
            navActions.innerHTML = `
                <div class="user-greeting-pill">
                    <span class="avatar-dot"></span>
                    <span class="user-name">Hi, ${firstName}</span>
                </div>
                <a href="${targetUrl}" class="btn-primary-cta">Enter Cockpit →</a>
                <button onclick="logoutLanding()" class="btn-ghost-signin" style="padding: 6px 14px; font-size: 0.85rem; border: none; background: transparent; cursor: pointer;">Sign Out</button>
            `;
        } catch (e) {
            console.error('Session parse error:', e);
        }
    }
}

function logoutLanding() {
    localStorage.removeItem('vai_session');
    sessionStorage.removeItem('vai_logged_in');
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', checkLandingSession);
