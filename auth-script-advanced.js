// Advanced Authentication System with Email Whitelist for Schools
// ================================================================

// Global variable to store selected role
let selectedRole = null;

// ==================== SCHOOL CONFIGURATION ====================
// IMPORTANT: Configure these settings for your school
// =============================================================

// School Information
const schoolConfig = {
    schoolName: 'VAI-ai Education Platform',
    academicYear: '2025-2026',
    adminEmail: 'admin@yourschool.edu',
    allowPublicRegistration: false,
    requireAdminApproval: false, // Set to false to allow instant access
    adminAccessCode: 'SCHOOL2026'
};

// AUTHORIZED EMAIL WHITELIST
// Only these emails can login to the system
// =============================================================

const authorizedStudentEmails = [
    // Demo accounts
    'student@demo.com',
    'student1@demo.com',
    'student2@demo.com',
    'school@vai-demo.com',  // School Demo Account
    
    // Add your school's student emails here
    'test@test.com',
    'demo@student.com',
];

const authorizedAdminEmails = [
    // Demo accounts
    'admin@vai-ai.com',
    'admin@demo.com',
    
    // Add your school's admin emails here
];

const authorizedTeacherEmails = [
    // Demo accounts
    'teacher@demo.com',
    
    // Add your school's teacher emails here
];

// ==================== AUTHORIZATION FUNCTIONS ====================

function isEmailAuthorized(email, role) {
    email = email.toLowerCase().trim();
    
    // Always allow demo account
    if (email === 'school@vai-demo.com') {
        return true;
    }
    
    if (role === 'student') {
        return authorizedStudentEmails.some(e => e.toLowerCase() === email);
    } else if (role === 'admin') {
        return authorizedAdminEmails.some(e => e.toLowerCase() === email) || 
               authorizedTeacherEmails.some(e => e.toLowerCase() === email);
    }
    return false;
}

// ==================== ROLE SELECTION ====================

function selectRole(role) {
    selectedRole = role;
    
    document.getElementById('roleSelection').style.display = 'none';
    document.getElementById('authTabs').style.display = 'flex';
    document.getElementById('loginTab').style.display = 'block';
    document.getElementById('loginTab').classList.add('active');
    
    const roleName = role === 'student' ? 'Student' : 'Admin';
    const roleIcon = role === 'student' ? '🎓' : '👨‍💼';
    
    document.getElementById('currentRoleBadge').innerHTML = `${roleIcon} ${roleName} Login`;
    document.getElementById('currentRoleBadgeRegister').innerHTML = `${roleIcon} ${roleName} Registration`;
    
    const schoolInfo = document.createElement('div');
    schoolInfo.className = 'school-info-banner';
    schoolInfo.innerHTML = `
        <div class="school-badge">
            <strong>${schoolConfig.schoolName}</strong>
            <span>Academic Year ${schoolConfig.academicYear}</span>
        </div>
    `;
    
    const loginTab = document.getElementById('loginTab');
    if (!loginTab.querySelector('.school-info-banner')) {
        loginTab.insertBefore(schoolInfo, loginTab.firstChild);
    }
    
    const registerTab = document.querySelectorAll('.auth-tab')[1];
    
    if (!schoolConfig.allowPublicRegistration) {
        registerTab.style.display = 'none';
        
        const existingNotice = loginTab.querySelector('.access-request-notice');
        if (!existingNotice) {
            const notice = document.createElement('div');
            notice.className = 'access-request-notice';
            notice.innerHTML = `
                <div class="notice-icon">🔒</div>
                <h4>Authorized Access Only</h4>
                <p>This platform is restricted to ${schoolConfig.schoolName} students and staff.</p>
                <p><strong>Don't have an account?</strong></p>
                <p>Contact your school administrator:</p>
                <p class="admin-contact">📧 ${schoolConfig.adminEmail}</p>
                <div class="notice-footer">
                    <small>⚠️ Only pre-approved email addresses can access this system</small>
                </div>
            `;
            loginTab.appendChild(notice);
        }
    }
    
    if (role === 'admin') {
        document.getElementById('classFieldGroup').style.display = 'none';
        document.getElementById('adminCodeGroup').style.display = 'block';
        document.getElementById('registerClass').removeAttribute('required');
        document.getElementById('adminCode').setAttribute('required', 'required');
    } else {
        document.getElementById('classFieldGroup').style.display = 'block';
        document.getElementById('adminCodeGroup').style.display = 'none';
        document.getElementById('registerClass').setAttribute('required', 'required');
        document.getElementById('adminCode').removeAttribute('required');
    }
}

function backToRoleSelection() {
    selectedRole = null;
    
    document.getElementById('authTabs').style.display = 'none';
    document.getElementById('loginTab').style.display = 'none';
    document.getElementById('registerTab').style.display = 'none';
    document.getElementById('roleSelection').style.display = 'block';
    
    document.getElementById('loginForm').reset();
    document.getElementById('registerForm').reset();
    
    const notices = document.querySelectorAll('.access-request-notice, .school-info-banner');
    notices.forEach(notice => notice.remove());
}

// ==================== USER MANAGEMENT ====================

const defaultUsers = [
    { 
        email: 'student@demo.com', 
        password: 'student123', 
        fullName: 'Demo Student', 
        class: '10', 
        role: 'student', 
        createdAt: new Date().toISOString(),
        authorized: true
    },
    { 
        email: 'teacher@demo.com', 
        password: 'teacher123', 
        fullName: 'Demo Teacher', 
        class: 'All', 
        role: 'teacher', 
        createdAt: new Date().toISOString(),
        authorized: true
    },
    { 
        email: 'admin@vai-ai.com', 
        password: 'admin123', 
        fullName: 'System Admin', 
        class: 'Admin', 
        role: 'admin', 
        createdAt: new Date().toISOString(),
        authorized: true
    },
    {
        email: 'school@vai-demo.com',
        password: 'School@2024',
        fullName: 'School Demo User',
        class: '10',
        role: 'school_demo',
        createdAt: new Date().toISOString(),
        authorized: true,
        isDemoAccount: true,
        questionLimit: 5,
        questionsAsked: 0,
        timetableGenerated: false,
        allowedSubjects: ['History', 'Geography', 'Science']
    }
];

function initializeUsers() {
    if (!localStorage.getItem('vai_users')) {
        localStorage.setItem('vai_users', JSON.stringify(defaultUsers));
    } else {
        // Check if school demo user exists, if not add it
        const users = getUsers();
        const schoolDemoExists = users.find(u => u.email === 'school@vai-demo.com');
        if (!schoolDemoExists) {
            const demoUser = defaultUsers.find(u => u.email === 'school@vai-demo.com');
            if (demoUser) {
                users.push(demoUser);
                localStorage.setItem('vai_users', JSON.stringify(users));
            }
        }
    }
}

function getUsers() {
    return JSON.parse(localStorage.getItem('vai_users') || '[]');
}

function addUser(user) {
    const users = getUsers();
    users.push(user);
    localStorage.setItem('vai_users', JSON.stringify(users));
}

function findUserByEmail(email) {
    return getUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
}

function saveSession(user) {
    const session = {
        email: user.email,
        fullName: user.fullName,
        class: user.class,
        role: user.role,
        loginTime: new Date().toISOString()
    };
    
    // Preserve demo account specific properties
    if (user.isDemoAccount) {
        session.isDemoAccount = true;
        session.questionLimit = user.questionLimit || 5;
        session.questionsAsked = user.questionsAsked || 0;
        session.timetableGenerated = user.timetableGenerated || false;
        session.allowedSubjects = user.allowedSubjects || [];
    }
    
    localStorage.setItem('vai_session', JSON.stringify(session));
    sessionStorage.setItem('vai_logged_in', 'true');
    
    trackLogin(session);
}

function trackLogin(session) {
    const logins = JSON.parse(localStorage.getItem('vai_logins') || '[]');
    logins.push({
        ...session,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('vai_logins', JSON.stringify(logins));
}

function getSession() {
    return JSON.parse(localStorage.getItem('vai_session') || 'null');
}

function clearSession() {
    localStorage.removeItem('vai_session');
    sessionStorage.removeItem('vai_logged_in');
}

function isLoggedIn() {
    return sessionStorage.getItem('vai_logged_in') === 'true' && getSession() !== null;
}

function showNotification(message, type = 'info') {
    const notification = document.getElementById('authNotification');
    notification.textContent = message;
    notification.className = `auth-notification ${type} show`;
    setTimeout(() => notification.classList.remove('show'), 5000);
}

// ==================== TAB SWITCHING ====================

function switchTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => {
        c.classList.remove('active');
        c.style.display = 'none';
    });
    
    if (tab === 'login') {
        document.querySelectorAll('.auth-tab')[0].classList.add('active');
        document.getElementById('loginTab').classList.add('active');
        document.getElementById('loginTab').style.display = 'block';
    } else {
        document.querySelectorAll('.auth-tab')[1].classList.add('active');
        document.getElementById('registerTab').classList.add('active');
        document.getElementById('registerTab').style.display = 'block';
    }
}

// ==================== PASSWORD TOGGLE ====================

function togglePasswordField(fieldId) {
    const field = document.getElementById(fieldId);
    field.type = field.type === 'password' ? 'text' : 'password';
}

// ==================== LOGIN HANDLER ====================

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value.trim().toLowerCase();
            const password = document.getElementById('loginPassword').value;
            
            // Check if email is authorized for the selected role
            if (!isEmailAuthorized(email, selectedRole)) {
                showNotification(
                    `⚠️ This email is not authorized for ${selectedRole} access. Contact ${schoolConfig.adminEmail} for assistance.`, 
                    'error'
                );
                return;
            }
            
            const btnText = this.querySelector('.btn-text');
            const btnLoader = this.querySelector('.btn-loader');
            btnText.style.display = 'none';
            btnLoader.style.display = 'block';
            
            setTimeout(() => {
                const user = findUserByEmail(email);
                
                btnText.style.display = 'block';
                btnLoader.style.display = 'none';
                
                if (user && user.password === password) {
                    // Validate role matches selection
                    // Allow demo account to login through student portal
                    if (user.role === 'school_demo' || user.isDemoAccount) {
                        // Demo account can login through student portal
                        saveSession(user);
                        showNotification(`✅ Welcome to demo! You have ${user.questionLimit || 5} questions available.`, 'success');
                        
                        setTimeout(() => {
                            window.location.href = 'app.html';
                        }, 1000);
                        return;
                    }
                    
                    if (selectedRole === 'admin' && user.role !== 'admin' && user.role !== 'teacher') {
                        showNotification('This account is not an admin/teacher account. Please login as student.', 'error');
                        return;
                    }
                    if (selectedRole === 'student' && (user.role === 'admin' || user.role === 'teacher')) {
                        showNotification('Admin/Teacher accounts must login through Admin portal.', 'error');
                        return;
                    }
                    
                    saveSession(user);
                    showNotification(`✅ Welcome back, ${user.fullName}!`, 'success');
                    
                        setTimeout(() => {
                            if (user.role === 'admin' || user.role === 'teacher') {
                                window.location.href = 'admin.html';
                            } else {
                                window.location.href = 'app.html';
                            }
                        }, 1000);
                } else {
                    showNotification('❌ Invalid email or password!', 'error');
                }
            }, 800);
        });
    }
});

// ==================== REGISTRATION HANDLER ====================

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = document.getElementById('registerFullName').value.trim();
            const email = document.getElementById('registerEmail').value.trim().toLowerCase();
            const password = document.getElementById('registerPassword').value;
            
            if (!isEmailAuthorized(email, selectedRole)) {
                showNotification(
                    `⚠️ This email is not authorized. Only ${schoolConfig.schoolName} email addresses can register. Contact ${schoolConfig.adminEmail} for access.`, 
                    'error'
                );
                return;
            }
            
            if (findUserByEmail(email)) {
                showNotification('❌ Email already registered!', 'error');
                return;
            }
            
            if (password.length < 6) {
                showNotification('❌ Password must be at least 6 characters!', 'error');
                return;
            }
            
            let userRole = 'student';
            let userClass = '10';
            
            if (selectedRole === 'admin') {
                const adminCode = document.getElementById('adminCode').value.trim();
                
                if (adminCode !== schoolConfig.adminAccessCode) {
                    showNotification('❌ Invalid admin access code!', 'error');
                    return;
                }
                
                userRole = 'admin';
                userClass = 'Admin';
            } else {
                userClass = document.getElementById('registerClass').value;
                if (!userClass) {
                    showNotification('❌ Please select your class!', 'error');
                    return;
                }
            }
            
            const newUser = {
                email,
                password,
                fullName,
                class: userClass,
                role: userRole,
                createdAt: new Date().toISOString(),
                authorized: true
            };
            
            addUser(newUser);
            showNotification('✅ Account created successfully!', 'success');
            
            setTimeout(() => {
                document.getElementById('loginEmail').value = email;
                document.getElementById('loginPassword').value = password;
                switchTab('login');
            }, 1500);
        });
    }
});

// ==================== GOOGLE LOGIN ====================

function handleGoogleLogin() {
    showNotification('Google Sign-In is not configured. Please use email/password login.', 'info');
}

function handleGoogleSignup() {
    handleGoogleLogin();
}

// ==================== SCHOOL DEMO ====================

function loginWithSchoolDemo() {
    // Auto-fill school demo credentials and login
    document.getElementById('loginEmail').value = 'school@vai-demo.com';
    document.getElementById('loginPassword').value = 'School@2024';
    
    // Show login form
    selectRole('student');
    
    // Show notification
    setTimeout(() => {
        showNotification('🏫 School Demo credentials loaded. Click Sign In to continue.', 'info');
    }, 500);
}

function fillSchoolDemoCredentials() {
    document.getElementById('loginEmail').value = 'school@vai-demo.com';
    document.getElementById('loginPassword').value = 'School@2024';
    showNotification('🏫 School Demo credentials filled. Limited to 5 questions.', 'info');
}

// ==================== INITIALIZATION ====================

initializeUsers();

// Check if already logged in on login page
const isAdvAuthPage = window.location.pathname.includes('login') || window.location.href.includes('login.html');
if (isAdvAuthPage && isLoggedIn()) {
    const session = getSession();
    if (session) {
        if (session.role === 'admin' || session.role === 'teacher') {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'app.html';
        }
    }
}
