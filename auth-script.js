// Authentication System
// User Database (localStorage)

// Default users
const defaultUsers = [
    {
        username: 'student',
        password: 'student123',
        fullName: 'Demo Student',
        email: 'student@vai-ai.com',
        role: 'student',
        createdAt: new Date().toISOString()
    },
    {
        username: 'teacher',
        password: 'teacher123',
        fullName: 'Demo Teacher',
        email: 'teacher@vai-ai.com',
        role: 'teacher',
        createdAt: new Date().toISOString()
    },
    {
        username: 'admin',
        password: 'admin123',
        fullName: 'System Admin',
        email: 'admin@vai-ai.com',
        role: 'admin',
        createdAt: new Date().toISOString()
    }
];

// Initialize users in localStorage
function initializeUsers() {
    if (!localStorage.getItem('vai_users')) {
        localStorage.setItem('vai_users', JSON.stringify(defaultUsers));
    }
}

// Get all users
function getUsers() {
    return JSON.parse(localStorage.getItem('vai_users') || '[]');
}

// Add user
function addUser(user) {
    const users = getUsers();
    users.push(user);
    localStorage.setItem('vai_users', JSON.stringify(users));
}

// Find user by username
function findUser(username) {
    const users = getUsers();
    return users.find(u => u.username === username);
}

// Validate credentials
function validateCredentials(username, password) {
    const user = findUser(username);
    if (user && user.password === password) {
        return user;
    }
    return null;
}

// Save session
function saveSession(user) {
    const session = {
        username: user.username,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        loginTime: new Date().toISOString()
    };
    localStorage.setItem('vai_session', JSON.stringify(session));
    sessionStorage.setItem('vai_logged_in', 'true');
}

// Get session
function getSession() {
    return JSON.parse(localStorage.getItem('vai_session') || 'null');
}

// Clear session
function clearSession() {
    localStorage.removeItem('vai_session');
    sessionStorage.removeItem('vai_logged_in');
}

// Check if logged in
function isLoggedIn() {
    return sessionStorage.getItem('vai_logged_in') === 'true' && getSession() !== null;
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.getElementById('authNotification');
    if (notification) {
        notification.textContent = message;
        notification.className = `auth-notification ${type} show`;
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 4000);
    }
}

// Toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const showIcon = document.getElementById('showIcon');
    const hideIcon = document.getElementById('hideIcon');
    
    if (passwordInput && showIcon && hideIcon) {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            showIcon.style.display = 'none';
            hideIcon.style.display = 'block';
        } else {
            passwordInput.type = 'password';
            showIcon.style.display = 'block';
            hideIcon.style.display = 'none';
        }
    }
}

// Fill demo credentials
function fillDemoCredentials(username, password) {
    const uField = document.getElementById('username');
    const pField = document.getElementById('password');
    if (uField) uField.value = username;
    if (pField) pField.value = password;
    showNotification(`Demo credentials filled for: ${username}`, 'info');
}

// Login form handler
const loginFormEl = document.getElementById('loginForm');
if (loginFormEl) {
    loginFormEl.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('rememberMe') ? document.getElementById('rememberMe').checked : false;
        
        // Show loading
        const btnText = document.querySelector('.btn-text');
        const btnLoader = document.querySelector('.btn-loader');
        if (btnText) btnText.style.display = 'none';
        if (btnLoader) btnLoader.style.display = 'block';
        
        // Simulate network delay
        setTimeout(() => {
            const user = validateCredentials(username, password);
            
            if (btnText) btnText.style.display = 'block';
            if (btnLoader) btnLoader.style.display = 'none';
            
            if (user) {
                saveSession(user);
                
                if (rememberMe) {
                    localStorage.setItem('vai_remember', 'true');
                }
                
                showNotification(`Welcome back, ${user.fullName}!`, 'success');
                
                // Redirect to platform
                setTimeout(() => {
                    window.location.href = (user.role === 'admin' || user.role === 'teacher') ? 'admin.html' : 'app.html';
                }, 800);
            } else {
                showNotification('Invalid username or password!', 'error');
            }
        }, 800);
    });
}

// Show signup modal
function showSignup() {
    const el = document.getElementById('signupModal');
    if (el) el.classList.add('active');
}

// Close signup modal
function closeSignup() {
    const el = document.getElementById('signupModal');
    if (el) el.classList.remove('active');
    const form = document.getElementById('signupForm');
    if (form) form.reset();
}

// Signup form handler
const signupFormEl = document.getElementById('signupForm');
if (signupFormEl) {
    signupFormEl.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullName = document.getElementById('signupFullName').value.trim();
        const username = document.getElementById('signupUsername').value.trim();
        const email = document.getElementById('signupEmail').value.trim();
        const password = document.getElementById('signupPassword').value;
        const role = document.getElementById('signupRole') ? document.getElementById('signupRole').value : 'student';
        
        // Check if username already exists
        if (findUser(username)) {
            showNotification('Username already taken!', 'error');
            return;
        }
        
        // Validate password length
        if (password.length < 6) {
            showNotification('Password must be at least 6 characters!', 'error');
            return;
        }
        
        // Create new user
        const newUser = {
            username: username,
            password: password,
            fullName: fullName,
            email: email,
            role: role,
            createdAt: new Date().toISOString()
        };
        
        addUser(newUser);
        closeSignup();
        
        showNotification('Account created successfully! Please login.', 'success');
        
        // Fill login form
        if (document.getElementById('username')) document.getElementById('username').value = username;
        if (document.getElementById('password')) document.getElementById('password').value = password;
    });
}

// Show forgot password modal
function showForgotPassword() {
    const el = document.getElementById('forgotPasswordModal');
    if (el) el.classList.add('active');
}

// Close forgot password modal
function closeForgotPassword() {
    const el = document.getElementById('forgotPasswordModal');
    if (el) el.classList.remove('active');
    const form = document.getElementById('forgotPasswordForm');
    if (form) form.reset();
}

// Forgot password form handler
const forgotPasswordFormEl = document.getElementById('forgotPasswordForm');
if (forgotPasswordFormEl) {
    forgotPasswordFormEl.addEventListener('submit', function(e) {
        e.preventDefault();
        closeForgotPassword();
        showNotification('Password reset link sent to your email!', 'success');
    });
}

// Close modals on outside click
window.addEventListener('click', function(e) {
    const signupModal = document.getElementById('signupModal');
    const forgotModal = document.getElementById('forgotPasswordModal');
    
    if (signupModal && e.target === signupModal) {
        closeSignup();
    }
    if (forgotModal && e.target === forgotModal) {
        closeForgotPassword();
    }
});

// Initialize on page load
initializeUsers();

// Check if already logged in on login page
const isAuthPage = window.location.pathname.includes('login') || window.location.href.includes('login.html');
if (isAuthPage && isLoggedIn()) {
    const session = getSession();
    if (session) {
        showNotification(`Already logged in as ${session.fullName}`, 'info');
        setTimeout(() => {
            window.location.href = (session.role === 'admin' || session.role === 'teacher') ? 'admin.html' : 'app.html';
        }, 1200);
    }
}
