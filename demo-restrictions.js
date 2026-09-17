// ==================== DEMO ACCOUNT RESTRICTIONS ====================
// This script adds restrictions for school demo accounts
// Include this AFTER auth-script.js and BEFORE main script.js

// Demo restriction state
const demoRestrictions = {
    initialized: false,
    notificationShown: false
};

// Initialize demo restrictions on page load
function initializeDemoRestrictions() {
    if (demoRestrictions.initialized) return;
    
    const session = getSession();
    if (session && session.isDemoAccount) {
        showDemoWelcomeMessage();
        applyVideoRestrictions();
        applyQuestionLimits();
        applyTimetableRestrictions();
        addSubscribeToViewOverlays();
    }
    
    demoRestrictions.initialized = true;
}

// Show welcome message for demo users
function showDemoWelcomeMessage() {
    if (demoRestrictions.notificationShown) return;
    
    const session = getSession();
    const remaining = getRemainingQuestions();
    
    const welcomeDiv = document.createElement('div');
    welcomeDiv.className = 'demo-welcome-banner';
    welcomeDiv.innerHTML = `
        <div class="demo-welcome-content">
            <span class="demo-icon">🎓</span>
            <div class="demo-text">
                <strong>Welcome to VAI-ai Demo!</strong>
                <p>You have ${remaining} questions remaining. Science, History, and Geography content available.</p>
            </div>
            <button onclick="closeDemoWelcome()" class="demo-close">×</button>
        </div>
    `;
    
    document.body.insertBefore(welcomeDiv, document.body.firstChild);
    demoRestrictions.notificationShown = true;
    
    // Auto-hide after 8 seconds
    setTimeout(() => {
        closeDemoWelcome();
    }, 8000);
}

function closeDemoWelcome() {
    const banner = document.querySelector('.demo-welcome-banner');
    if (banner) {
        banner.style.animation = 'slideUp 0.3s ease-out';
        setTimeout(() => banner.remove(), 300);
    }
}

// Apply video restrictions for demo account
function applyVideoRestrictions() {
    const session = getSession();
    if (!session || !session.isDemoAccount) return;
    
    const allowedSubjects = session.allowedSubjects || [];
    
    // Override the showChapterVideo function
    const originalShowChapterVideo = window.showChapterVideo;
    window.showChapterVideo = function(chapter) {
        const currentSubject = currentState.subject;
        
        if (!allowedSubjects.includes(currentSubject)) {
            showSubscribeModal('video', currentSubject);
            return;
        }
        
        // Check if chapter has video
        const chapterData = chaptersData[currentSubject];
        const chapterInfo = chapterData.find(c => c.number === chapter);
        
        if (!chapterInfo || (!chapterInfo.videoId && !chapterInfo.videoPath)) {
            showSubscribeModal('video', currentSubject);
            return;
        }
        
        // Call original function
        if (originalShowChapterVideo) {
            originalShowChapterVideo.call(this, chapter);
        }
    };
}

// Apply question limits for demo account
function applyQuestionLimits() {
    const session = getSession();
    if (!session || !session.isDemoAccount) return;
    
    // Override the sendMessage function
    const originalSendMessage = window.sendMessage;
    window.sendMessage = async function() {
        if (!hasQuestionsRemaining()) {
            showQuestionLimitModal();
            return;
        }
        
        // Call original function
        if (originalSendMessage) {
            const result = await originalSendMessage.call(this);
            
            // Increment question count after successful send
            if (result !== false) {
                incrementQuestionCount();
                updateQuestionCounter();
            }
            
            return result;
        }
    };
    
    // Add question counter to UI
    addQuestionCounter();
}

// Add question counter display
function addQuestionCounter() {
    const session = getSession();
    if (!session || !session.isDemoAccount) return;
    
    const remaining = getRemainingQuestions();
    
    const counterDiv = document.createElement('div');
    counterDiv.id = 'demo-question-counter';
    counterDiv.className = 'demo-question-counter';
    counterDiv.innerHTML = `
        <span class="counter-icon">💬</span>
        <span class="counter-text">Questions: <strong id="remaining-count">${remaining}</strong>/${session.questionLimit}</span>
    `;
    
    // Add to chat section if it exists
    const chatSection = document.getElementById('askAI');
    if (chatSection) {
        chatSection.insertBefore(counterDiv, chatSection.firstChild);
    }
}

// Update question counter
function updateQuestionCounter() {
    const remaining = getRemainingQuestions();
    const counterElement = document.getElementById('remaining-count');
    
    if (counterElement) {
        counterElement.textContent = remaining;
        
        // Add warning class if running low
        const counter = document.getElementById('demo-question-counter');
        if (counter) {
            if (remaining <= 2) {
                counter.classList.add('warning');
            }
            if (remaining === 0) {
                counter.classList.add('depleted');
            }
        }
    }
}

// Apply timetable restrictions
function applyTimetableRestrictions() {
    const session = getSession();
    if (!session || !session.isDemoAccount) return;
    
    // Override the generateTimetable function
    const originalGenerateTimetable = window.generateTimetable;
    window.generateTimetable = function() {
        if (hasTimetableGenerated()) {
            showTimetableAlreadyGeneratedModal();
            return;
        }
        
        // Call original function
        if (originalGenerateTimetable) {
            const result = originalGenerateTimetable.call(this);
            
            // Mark as generated
            markTimetableGenerated();
            
            return result;
        }
    };
}

// Add "Subscribe to View" overlays for restricted content
function addSubscribeToViewOverlays() {
    const session = getSession();
    if (!session || !session.isDemoAccount) return;
    
    // Add overlays to restricted subjects
    setTimeout(() => {
        const subjectCards = document.querySelectorAll('.subject-card');
        const allowedSubjects = session.allowedSubjects || [];
        
        subjectCards.forEach(card => {
            const subjectName = card.getAttribute('data-subject') || card.textContent.trim();
            
            if (!allowedSubjects.includes(subjectName)) {
                card.classList.add('restricted-content');
                
                const overlay = document.createElement('div');
                overlay.className = 'subscribe-overlay';
                overlay.innerHTML = `
                    <div class="subscribe-content">
                        <span class="subscribe-icon">🔒</span>
                        <p>Subscribe to View</p>
                        <button onclick="showSubscribeModal('subject', '${subjectName}')" class="subscribe-btn">
                            Upgrade Access
                        </button>
                    </div>
                `;
                
                card.appendChild(overlay);
                
                // Disable click for restricted subjects
                card.onclick = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    showSubscribeModal('subject', subjectName);
                };
            }
        });
    }, 500);
}

// Show subscribe modal
function showSubscribeModal(contentType, contentName) {
    const modal = document.createElement('div');
    modal.className = 'demo-modal';
    modal.innerHTML = `
        <div class="demo-modal-content">
            <button class="demo-modal-close" onclick="this.parentElement.parentElement.remove()">×</button>
            <div class="demo-modal-icon">🔒</div>
            <h2>Premium Content</h2>
            <p>Access to <strong>${contentName}</strong> ${contentType} requires a full subscription.</p>
            <p class="demo-note">Demo accounts have limited access to History, Geography, and Science content only.</p>
            <div class="demo-modal-actions">
                <button onclick="this.closest('.demo-modal').remove()" class="btn-secondary">Close</button>
                <button onclick="showContactInfo()" class="btn-primary">Contact for Upgrade</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    setTimeout(() => modal.classList.add('active'), 10);
}

// Show question limit modal
function showQuestionLimitModal() {
    const modal = document.createElement('div');
    modal.className = 'demo-modal';
    modal.innerHTML = `
        <div class="demo-modal-content">
            <button class="demo-modal-close" onclick="this.parentElement.parentElement.remove()">×</button>
            <div class="demo-modal-icon">💬</div>
            <h2>Question Limit Reached</h2>
            <p>You've used all <strong>5 questions</strong> available in the demo account.</p>
            <p class="demo-note">Upgrade to unlimited questions and full platform access.</p>
            <div class="demo-modal-actions">
                <button onclick="this.closest('.demo-modal').remove()" class="btn-secondary">Close</button>
                <button onclick="showContactInfo()" class="btn-primary">Upgrade Now</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    setTimeout(() => modal.classList.add('active'), 10);
}

// Show timetable already generated modal
function showTimetableAlreadyGeneratedModal() {
    const modal = document.createElement('div');
    modal.className = 'demo-modal';
    modal.innerHTML = `
        <div class="demo-modal-content">
            <button class="demo-modal-close" onclick="this.parentElement.parentElement.remove()">×</button>
            <div class="demo-modal-icon">📅</div>
            <h2>Timetable Already Generated</h2>
            <p>Demo accounts can generate the timetable <strong>only once</strong>.</p>
            <p class="demo-note">Your timetable has been saved. Upgrade for unlimited timetable generations and customization.</p>
            <div class="demo-modal-actions">
                <button onclick="this.closest('.demo-modal').remove()" class="btn-secondary">Close</button>
                <button onclick="showContactInfo()" class="btn-primary">Learn More</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    setTimeout(() => modal.classList.add('active'), 10);
}

// Show contact information
function showContactInfo() {
    // Close any existing modals
    document.querySelectorAll('.demo-modal').forEach(m => m.remove());
    
    const modal = document.createElement('div');
    modal.className = 'demo-modal';
    modal.innerHTML = `
        <div class="demo-modal-content">
            <button class="demo-modal-close" onclick="this.parentElement.parentElement.remove()">×</button>
            <div class="demo-modal-icon">📧</div>
            <h2>Contact Us for Full Access</h2>
            <div class="contact-info">
                <p><strong>Email:</strong> info@vai-ai.com</p>
                <p><strong>Phone:</strong> +91 XXX XXX XXXX</p>
                <p><strong>Website:</strong> www.vai-ai.com</p>
            </div>
            <p class="demo-note">We'll help you unlock the full potential of VAI-ai for your institution.</p>
            <div class="demo-modal-actions">
                <button onclick="this.closest('.demo-modal').remove()" class="btn-primary">Close</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    setTimeout(() => modal.classList.add('active'), 10);
}

// Initialize restrictions when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDemoRestrictions);
} else {
    initializeDemoRestrictions();
}

// Also initialize on page show (for back button)
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        initializeDemoRestrictions();
    }
});
