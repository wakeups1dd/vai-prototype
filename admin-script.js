// Admin Dashboard Script

// Load data
function loadDashboardData() {
    const users = JSON.parse(localStorage.getItem('vai_users') || '[]');
    const logins = JSON.parse(localStorage.getItem('vai_logins') || '[]');
    const session = JSON.parse(localStorage.getItem('vai_session'));
    
    // Set admin name
    if (session) {
        document.getElementById('adminName').textContent = session.fullName;
    }
    
    // Calculate stats
    const students = users.filter(u => u.role === 'student');
    const today = new Date().toDateString();
    const activeToday = logins.filter(l => new Date(l.timestamp).toDateString() === today).length;
    
    document.getElementById('totalStudents').textContent = students.length;
    document.getElementById('activeToday').textContent = activeToday;
    document.getElementById('totalLogins').textContent = logins.length;
    
    // Class breakdown
    renderClassBreakdown(students);
    
    // Recent activity
    renderRecentActivity(logins);
    
    // Update time
    updateTime();
    setInterval(updateTime, 1000);
}

function renderClassBreakdown(students) {
    const classCounts = {};
    for (let i = 5; i <= 10; i++) {
        classCounts[i] = students.filter(s => s.class == i).length;
    }
    
    const total = students.length || 1;
    const container = document.getElementById('classBreakdown');
    container.innerHTML = '';
    
    Object.entries(classCounts).forEach(([cls, count]) => {
        const percentage = (count / total) * 100;
        const bar = document.createElement('div');
        bar.className = 'class-bar';
        bar.innerHTML = `
            <div class="class-label">${cls}th Class</div>
            <div class="bar-container">
                <div class="bar-fill" style="width: ${percentage}%">
                    ${count} student${count !== 1 ? 's' : ''}
                </div>
            </div>
        `;
        container.appendChild(bar);
    });
}

function renderRecentActivity(logins) {
    const container = document.getElementById('recentActivity');
    const recent = logins.slice(-10).reverse();
    
    container.innerHTML = recent.length === 0 
        ? '<p style="color: var(--text-medium); text-align: center;">No activity yet</p>'
        : recent.map(login => `
            <div class="activity-item">
                <div class="activity-time">${formatTime(login.timestamp)}</div>
                <div class="activity-content">
                    <div class="activity-user">${login.fullName}</div>
                    <div style="font-size: 0.85rem; color: var(--text-medium);">
                        Logged in • Class ${login.class}
                    </div>
                </div>
            </div>
        `).join('');
}

function formatTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    
    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
    return date.toLocaleDateString();
}

function updateTime() {
    const now = new Date();
    document.getElementById('currentTime').textContent = now.toLocaleTimeString();
}

// Section switching
function showAdminSection(section) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.admin-section').forEach(sec => sec.classList.remove('active'));
    
    event.target.classList.add('active');
    
    const titles = {
        dashboard: 'Dashboard',
        students: 'Students',
        classes: 'Classes',
        activity: 'Activity Logs',
        users: 'All Users'
    };
    
    document.getElementById('pageTitle').textContent = titles[section];
    document.getElementById(`${section}Section`).classList.add('active');
    
    if (section === 'students') loadStudents();
    if (section === 'classes') loadClasses();
    if (section === 'activity') loadActivity();
    if (section === 'users') loadUsers();
}

// Load students
function loadStudents() {
    const users = JSON.parse(localStorage.getItem('vai_users') || '[]');
    const students = users.filter(u => u.role === 'student');
    
    const table = document.getElementById('studentsTable');
    table.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Class</th>
                    <th>Registered</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                ${students.map(s => `
                    <tr>
                        <td><strong>${s.fullName}</strong></td>
                        <td>${s.email}</td>
                        <td><span class="status-badge" style="background: rgba(45,90,160,0.1); color: var(--primary);">${s.class}th</span></td>
                        <td>${new Date(s.createdAt).toLocaleDateString()}</td>
                        <td><span class="status-badge status-active">Active</span></td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Filter students
function filterStudents() {
    const classFilter = document.getElementById('classFilter').value;
    const users = JSON.parse(localStorage.getItem('vai_users') || '[]');
    let students = users.filter(u => u.role === 'student');
    
    if (classFilter) {
        students = students.filter(s => s.class == classFilter);
    }
    
    const table = document.getElementById('studentsTable');
    table.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Class</th>
                    <th>Registered</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                ${students.map(s => `
                    <tr>
                        <td><strong>${s.fullName}</strong></td>
                        <td>${s.email}</td>
                        <td><span class="status-badge" style="background: rgba(45,90,160,0.1); color: var(--primary);">${s.class}th</span></td>
                        <td>${new Date(s.createdAt).toLocaleDateString()}</td>
                        <td><span class="status-badge status-active">Active</span></td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Load classes
function loadClasses() {
    const users = JSON.parse(localStorage.getItem('vai_users') || '[]');
    const students = users.filter(u => u.role === 'student');
    
    const container = document.getElementById('classesGrid');
    container.innerHTML = '';
    
    for (let cls = 5; cls <= 10; cls++) {
        const classStudents = students.filter(s => s.class == cls);
        const logins = JSON.parse(localStorage.getItem('vai_logins') || '[]');
        const classLogins = logins.filter(l => l.class == cls);
        
        const card = document.createElement('div');
        card.className = 'class-card';
        card.innerHTML = `
            <h3>${cls}th Standard</h3>
            <div class="class-stat">
                <span>Total Students:</span>
                <strong>${classStudents.length}</strong>
            </div>
            <div class="class-stat">
                <span>Total Logins:</span>
                <strong>${classLogins.length}</strong>
            </div>
            <div class="class-stat">
                <span>Active Today:</span>
                <strong>${classLogins.filter(l => new Date(l.timestamp).toDateString() === new Date().toDateString()).length}</strong>
            </div>
        `;
        container.appendChild(card);
    }
}

// Load activity
function loadActivity() {
    const logins = JSON.parse(localStorage.getItem('vai_logins') || '[]');
    
    const table = document.getElementById('activityTable');
    table.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Time</th>
                    <th>User</th>
                    <th>Email</th>
                    <th>Class</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                ${logins.slice().reverse().map(l => `
                    <tr>
                        <td>${new Date(l.timestamp).toLocaleString()}</td>
                        <td><strong>${l.fullName}</strong></td>
                        <td>${l.email}</td>
                        <td><span class="status-badge" style="background: rgba(45,90,160,0.1); color: var(--primary);">${l.class}</span></td>
                        <td><span class="status-badge status-active">${l.role}</span></td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Load all users
function loadUsers() {
    const users = JSON.parse(localStorage.getItem('vai_users') || '[]');
    
    const table = document.getElementById('usersTable');
    table.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Class</th>
                    <th>Registered</th>
                </tr>
            </thead>
            <tbody>
                ${users.map(u => `
                    <tr>
                        <td><strong>${u.fullName}</strong></td>
                        <td>${u.email}</td>
                        <td><span class="status-badge status-active">${u.role}</span></td>
                        <td>${u.class || 'N/A'}</td>
                        <td>${new Date(u.createdAt).toLocaleDateString()}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function refreshData() {
    loadDashboardData();
    showNotification('Data refreshed!', 'success');
}

function adminLogout() {
    if (confirm('Logout from admin panel?')) {
        localStorage.removeItem('vai_session');
        sessionStorage.removeItem('vai_logged_in');
        window.location.href = 'index.html';
    }
}

function showNotification(message, type) {
    // Simple alert for now
    alert(message);
}

// Initialize
loadDashboardData();
