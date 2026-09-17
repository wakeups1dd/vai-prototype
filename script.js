// ==================== APPLICATION STATE ====================

let currentState = {
    standard: null,
    subject: null,
    chapter: null
};

// Image upload variables
let currentImage = null;

let chatState = {
    messages: [],
    context: {
        standard: '',
        subject: '',
        chapter: ''
    }
};

// ==================== CHAPTER DATA ====================
// Video IDs from Google Drive - Replace with your actual video IDs
// Format: https://drive.google.com/file/d/VIDEO_ID/preview

const chaptersData = {
    'Science': [
        { number: 1, title: 'Chapter 1 Introduction to Science', videoId: '1ECEiTl-uhtHCfuLHtXzijbBlw2CsVKg-', videoPath: 'https://drive.google.com/file/d/1ECEiTl-uhtHCfuLHtXzijbBlw2CsVKg-/view?usp=drive_link' },
        { number: 2, title: 'Chapter 2 Matter and Its Properties', videoId: 'YOUR_VIDEO_ID_2' },
        { number: 3, title: 'Chapter 3 Forces and Motion', videoId: 'YOUR_VIDEO_ID_3' },
        { number: 4, title: 'Chapter 4 Energy and Work', videoId: 'YOUR_VIDEO_ID_4' },
        { number: 5, title: 'Chapter 5 Light and Sound', videoId: 'YOUR_VIDEO_ID_5' },
        { number: 6, title: 'Chapter 6 Heat and Temperature', videoId: 'YOUR_VIDEO_ID_6' },
        { number: 7, title: 'Chapter 7 Electricity and Magnetism', videoId: 'YOUR_VIDEO_ID_7' },
        { number: 8, title: 'Chapter 8 Chemical Reactions', videoId: 'YOUR_VIDEO_ID_8' },
        { number: 9, title: 'Chapter 9 Living Organisms', videoId: 'YOUR_VIDEO_ID_9' },
        { number: 10, title: 'Chapter 10 Environmental Science', videoId: 'YOUR_VIDEO_ID_10' }
    ],
    'History': [
        { number: 1, title: 'Chapter 1 Ancient Civilizations', videoId: '1V07fQpqvE8iffQY0XuXkxtz-wrQtUyO_', videoPath: 'https://drive.google.com/file/d/1V07fQpqvE8iffQY0XuXkxtz-wrQtUyO_/view?usp=drive_link' },
        { number: 2, title: 'Chapter 2 Medieval Period', videoId: null, videoPath: null },
        { number: 3, title: 'Chapter 3 Renaissance Era', videoId: null, videoPath: null },
        { number: 4, title: 'Chapter 4 Age of Exploration', videoId: null, videoPath: null },
        { number: 5, title: 'Chapter 5 Industrial Revolution', videoId: null, videoPath: 'subject/class 10/history/History chapter 5.mp4' },
        { number: 6, title: 'Chapter 6 World Wars', videoId: null, videoPath: null },
        { number: 7, title: 'Chapter 7 Independence Movements', videoId: null, videoPath: null },
        { number: 8, title: 'Chapter 8 Modern India', videoId: null, videoPath: null },
        { number: 9, title: 'Chapter 9 Cold War Era', videoId: null, videoPath: null },
        { number: 10, title: 'Chapter 10 Contemporary History', videoId: null, videoPath: null }
    ],
    'Civics': [
        { number: 1, title: 'Chapter 1 Introduction to Civics', videoId: 'YOUR_VIDEO_ID_21' },
        { number: 2, title: 'Chapter 2 Indian Constitution', videoId: 'YOUR_VIDEO_ID_22' },
        { number: 3, title: 'Chapter 3 Fundamental Rights', videoId: 'YOUR_VIDEO_ID_23' },
        { number: 4, title: 'Chapter 4 Fundamental Duties', videoId: 'YOUR_VIDEO_ID_24' },
        { number: 5, title: 'Chapter 5 Directive Principles', videoId: 'YOUR_VIDEO_ID_25' },
        { number: 6, title: 'Chapter 6 Union Government', videoId: 'YOUR_VIDEO_ID_26' },
        { number: 7, title: 'Chapter 7 State Government', videoId: 'YOUR_VIDEO_ID_27' },
        { number: 8, title: 'Chapter 8 Local Government', videoId: 'YOUR_VIDEO_ID_28' },
        { number: 9, title: 'Chapter 9 Judiciary System', videoId: 'YOUR_VIDEO_ID_29' },
        { number: 10, title: 'Chapter 10 Democracy and Elections', videoId: 'YOUR_VIDEO_ID_30' }
    ],
    'Geography': [
        { number: 1, title: 'Chapter 1 Earth and Solar System', videoId: '1ikwEObpKSO-GVL9UKHc3lhch8mxvtYhd', videoPath: 'https://drive.google.com/file/d/1ikwEObpKSO-GVL9UKHc3lhch8mxvtYhd/view?usp=drive_link' },
        { number: 2, title: 'Chapter 2 Continents and Oceans', videoId: 'YOUR_VIDEO_ID_32' },
        { number: 3, title: 'Chapter 3 Mountains and Plateaus', videoId: 'YOUR_VIDEO_ID_33' },
        { number: 4, title: 'Chapter 4 Rivers and Lakes', videoId: 'YOUR_VIDEO_ID_34' },
        { number: 5, title: 'Chapter 5 Climate and Weather', videoId: 'YOUR_VIDEO_ID_35' },
        { number: 6, title: 'Chapter 6 Natural Resources', videoId: 'YOUR_VIDEO_ID_36' },
        { number: 7, title: 'Chapter 7 Agriculture', videoId: 'YOUR_VIDEO_ID_37' },
        { number: 8, title: 'Chapter 8 Industries', videoId: 'YOUR_VIDEO_ID_38' },
        { number: 9, title: 'Chapter 9 Transportation', videoId: 'YOUR_VIDEO_ID_39' },
        { number: 10, title: 'Chapter 10 Map Reading', videoId: 'YOUR_VIDEO_ID_40' }
    ],
    'Hindi': [
        { number: 1, title: 'Chapter 1 Hindi Varnamala', videoId: 'YOUR_VIDEO_ID_41' },
        { number: 2, title: 'Chapter 2 Swar aur Vyanjan', videoId: 'YOUR_VIDEO_ID_42' },
        { number: 3, title: 'Chapter 3 Shabd Rachna', videoId: 'YOUR_VIDEO_ID_43' },
        { number: 4, title: 'Chapter 4 Vakya Rachna', videoId: 'YOUR_VIDEO_ID_44' },
        { number: 5, title: 'Chapter 5 Kahani Lekhan', videoId: 'YOUR_VIDEO_ID_45' },
        { number: 6, title: 'Chapter 6 Kavita Paath', videoId: 'YOUR_VIDEO_ID_46' },
        { number: 7, title: 'Chapter 7 Vyakaran', videoId: 'YOUR_VIDEO_ID_47' },
        { number: 8, title: 'Chapter 8 Muhavare', videoId: 'YOUR_VIDEO_ID_48' },
        { number: 9, title: 'Chapter 9 Patra Lekhan', videoId: 'YOUR_VIDEO_ID_49' },
        { number: 10, title: 'Chapter 10 Nibandh Lekhan', videoId: 'YOUR_VIDEO_ID_50' }
    ],
    'Marathi': [
        { number: 1, title: 'Chapter 1 Marathi Varnamala', videoId: 'YOUR_VIDEO_ID_51' },
        { number: 2, title: 'Chapter 2 Swar ani Vyanjan', videoId: 'YOUR_VIDEO_ID_52' },
        { number: 3, title: 'Chapter 3 Shabd Rachana', videoId: 'YOUR_VIDEO_ID_53' },
        { number: 4, title: 'Chapter 4 Vakya Rachana', videoId: 'YOUR_VIDEO_ID_54' },
        { number: 5, title: 'Chapter 5 Goshta Lekhan', videoId: 'YOUR_VIDEO_ID_55' },
        { number: 6, title: 'Chapter 6 Kavita Vachan', videoId: 'YOUR_VIDEO_ID_56' },
        { number: 7, title: 'Chapter 7 Vyakaran', videoId: 'YOUR_VIDEO_ID_57' },
        { number: 8, title: 'Chapter 8 Vhavatya', videoId: 'YOUR_VIDEO_ID_58' },
        { number: 9, title: 'Chapter 9 Patra Lekhan', videoId: 'YOUR_VIDEO_ID_59' },
        { number: 10, title: 'Chapter 10 Nibandh Lekhan', videoId: 'YOUR_VIDEO_ID_60' }
    ]
};

// ==================== PAGE NAVIGATION ====================

function navigateToMain() {
    document.getElementById('landingPage').classList.remove('active');
    document.getElementById('mainPage').classList.add('active');
}

function navigateToLanding() {
    window.location.href = 'index.html';
}

function showSection(sectionId) {
    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Add active class to clicked nav item
    event.target.closest('.nav-item').classList.add('active');

    // Hide all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Reset to standards view when selecting "Select Section"
    if (sectionId === 'selectSection') {
        showStandards();
    }
}

// ==================== VIDEO SECTION FUNCTIONS ====================

function showStandards() {
    document.getElementById('standardsView').style.display = 'block';
    document.getElementById('subjectsView').style.display = 'none';
    document.getElementById('chaptersView').style.display = 'none';
    document.getElementById('videoView').style.display = 'none';
    currentState.standard = null;
    currentState.subject = null;
    currentState.chapter = null;
}

function showSubjects(standard) {
    currentState.standard = standard;
    document.getElementById('standardsView').style.display = 'none';
    document.getElementById('subjectsView').style.display = 'block';
    document.getElementById('currentStandard').textContent = `${standard}th Standard`;
}

function showSubjectsView() {
    document.getElementById('standardsView').style.display = 'none';
    document.getElementById('subjectsView').style.display = 'block';
    document.getElementById('chaptersView').style.display = 'none';
    document.getElementById('videoView').style.display = 'none';
    currentState.subject = null;
    currentState.chapter = null;
}

function showChapters(subject) {
    currentState.subject = subject;
    document.getElementById('subjectsView').style.display = 'none';
    document.getElementById('chaptersView').style.display = 'block';
    document.getElementById('currentSubject').textContent = subject;

    // Populate chapters list
    const chaptersList = document.getElementById('chaptersList');
    chaptersList.innerHTML = '';

    const chapters = chaptersData[subject];
    chapters.forEach(chapter => {
        const chapterItem = document.createElement('button');
        chapterItem.className = 'chapter-item';
        chapterItem.onclick = () => showVideo(chapter);

        chapterItem.innerHTML = `
            <div class="chapter-number">Ch ${chapter.number}</div>
            <div class="chapter-title">${chapter.title}</div>
        `;

        chaptersList.appendChild(chapterItem);
    });
}

function showChaptersView() {
    document.getElementById('standardsView').style.display = 'none';
    document.getElementById('subjectsView').style.display = 'none';
    document.getElementById('chaptersView').style.display = 'block';
    document.getElementById('videoView').style.display = 'none';
    currentState.chapter = null;
}

function showVideo(chapter) {
    currentState.chapter = chapter;
    document.getElementById('chaptersView').style.display = 'none';
    document.getElementById('videoView').style.display = 'block';
    document.getElementById('currentChapter').textContent = chapter.title;
    document.getElementById('videoTitle').textContent = chapter.title;

    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');
    const videoIframe = document.getElementById('videoIframe');
    const noVideoMessage = document.getElementById('noVideoMessage');

    // Hide all video elements first
    videoPlayer.style.display = 'none';
    videoIframe.style.display = 'none';
    noVideoMessage.style.display = 'none';

    // Check if Google Drive video ID exists (prioritize iframe for Google Drive)
    if (chapter.videoId && chapter.videoId !== 'YOUR_VIDEO_ID_' + chapter.number && chapter.videoId !== null) {
        // Use iframe for Google Drive videos
        videoIframe.src = `https://drive.google.com/file/d/${chapter.videoId}/preview`;
        videoIframe.style.display = 'block';

        // Show notification
        if (typeof showNotification === 'function') {
            showNotification(`Loading: ${chapter.title}`, 'info');
        }
    }
    // Check if it's a Google Drive link in videoPath
    else if (chapter.videoPath && chapter.videoPath.includes('drive.google.com')) {
        // Extract video ID from Google Drive URL and use iframe
        const match = chapter.videoPath.match(/\/d\/([^\/]+)/);
        if (match && match[1]) {
            videoIframe.src = `https://drive.google.com/file/d/${match[1]}/preview`;
            videoIframe.style.display = 'block';

            if (typeof showNotification === 'function') {
                showNotification(`Loading: ${chapter.title}`, 'info');
            }
        } else {
            noVideoMessage.style.display = 'block';
            if (typeof showNotification === 'function') {
                showNotification('Invalid Google Drive URL format', 'error');
            }
        }
    }
    // Check if local video path exists
    else if (chapter.videoPath) {
        // Use HTML5 video player for local videos
        videoSource.src = chapter.videoPath;
        videoPlayer.load();
        videoPlayer.style.display = 'block';

        // Show notification
        if (typeof showNotification === 'function') {
            showNotification(`Loading: ${chapter.title}`, 'info');
        }
    }
    // No video available
    else {
        noVideoMessage.style.display = 'block';

        if (typeof showNotification === 'function') {
            showNotification('Video not available for this chapter', 'error');
        }
    }

    // Initialize chapter-specific chatbot
    initializeChapterChat(chapter, currentState.subject, currentState.standard);
}

// ==================== CHAT FUNCTIONS ====================

function updateChatContext() {
    const standard = document.getElementById('chatStandard').value;
    const subject = document.getElementById('chatSubject').value;
    const chapter = document.getElementById('chatChapter').value;

    chatState.context = { standard, subject, chapter };

    let contextText = 'General Questions';
    const parts = [];

    if (standard) parts.push(`${standard}th Standard`);
    if (subject) parts.push(subject);
    if (chapter) parts.push(chapter);

    if (parts.length > 0) {
        contextText = parts.join(' - ');
    }

    document.getElementById('chatContext').textContent = contextText;
}

function loadChatChapters() {
    const subject = document.getElementById('chatSubject').value;
    const chapterSelect = document.getElementById('chatChapter');

    if (!subject) {
        chapterSelect.disabled = true;
        chapterSelect.innerHTML = '<option value="">Select Subject First</option>';
        return;
    }

    chapterSelect.disabled = false;
    chapterSelect.innerHTML = '<option value="">Any Chapter</option>';

    const chapters = chaptersData[subject];
    chapters.forEach(chapter => {
        const option = document.createElement('option');
        option.value = chapter.title;
        option.textContent = chapter.title;
        chapterSelect.appendChild(option);
    });
}

function clearChatFilters() {
    document.getElementById('chatStandard').value = '';
    document.getElementById('chatSubject').value = '';
    document.getElementById('chatChapter').value = '';
    document.getElementById('chatChapter').disabled = true;
    document.getElementById('chatChapter').innerHTML = '<option value="">Select Subject First</option>';
    updateChatContext();
}

function startNewChat() {
    chatState.messages = [];
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.innerHTML = `
        <div class="welcome-message">
            <div class="welcome-icon">🤖</div>
            <h3>Hello! I'm your AI Teaching Assistant</h3>
            <p>Ask me anything about your studies. I'm here to help you understand concepts, solve problems, and clarify doubts!</p>
            <div class="example-questions">
                <p class="example-label">Try asking:</p>
                <button class="example-btn" onclick="setQuestion('Explain the water cycle')">Explain the water cycle</button>
                <button class="example-btn" onclick="setQuestion('What is photosynthesis?')">What is photosynthesis?</button>
                <button class="example-btn" onclick="setQuestion('Help me with fractions')">Help me with fractions</button>
            </div>
        </div>
    `;
}

function setQuestion(question) {
    document.getElementById('chatInput').value = question;
    document.getElementById('chatInput').focus();
}

function handleChatKeydown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

function autoResizeTextarea(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

// ==================== IMAGE UPLOAD FUNCTIONS ====================

function handleImageSelect(event) {
    console.log('handleImageSelect called');
    const file = event.target.files[0];

    if (!file) {
        console.log('No file selected');
        return;
    }

    console.log('File selected:', file.name, 'Size:', file.size, 'Type:', file.type);

    // Validate file type
    if (!file.type.startsWith('image/')) {
        alert('Please select an image file (PNG, JPG, JPEG, etc.)');
        return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
        alert('Image too large! Please use an image smaller than 5MB.');
        return;
    }

    // Read the file
    const reader = new FileReader();

    reader.onload = function (e) {
        currentImage = e.target.result;
        console.log('Image loaded, length:', currentImage.length);

        // Show preview
        document.getElementById('imagePreview').src = currentImage;
        document.getElementById('imagePreviewContainer').style.display = 'block';

        console.log('Preview displayed');
    };

    reader.onerror = function (error) {
        console.error('Error reading file:', error);
        alert('Error reading image file');
    };

    reader.readAsDataURL(file);
}

function clearImage() {
    console.log('Clearing image');
    currentImage = null;
    document.getElementById('imagePreview').src = '';
    document.getElementById('imagePreviewContainer').style.display = 'none';
    document.getElementById('imageInput').value = '';
}

function addMessageWithImage(text, role, imageData) {
    console.log('Adding message with image');
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${role}`;

    const time = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });

    let bubbleContent = '';
    if (text) {
        bubbleContent += `<div style="margin-bottom: 0.5rem;">${escapeHtml(text)}</div>`;
    }
    bubbleContent += `<img src="${imageData}" style="max-width: 100%; max-height: 300px; border-radius: 8px; cursor: pointer;" onclick="window.open('${imageData}', '_blank')">`;

    messageDiv.innerHTML = `
        <div class="message-bubble" style="max-width: 75%; padding: 1rem;">
            ${bubbleContent}
        </div>
        <div class="message-time">${time}</div>
    `;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Store in history
    chatState.messages.push({
        role,
        content: text || '[Image uploaded]'
    });
}

async function callAPIWithImage(userMessage, imageData) {
    console.log('callAPIWithImage called');
    const config = getAPIConfig();
    const { standard, subject, chapter } = chatState.context;

    // Build system prompt
    let systemPrompt = 'You are a helpful AI teaching assistant for students from 5th to 10th standard. Analyze images carefully and provide clear, educational explanations.';

    if (standard || subject || chapter) {
        systemPrompt += '\n\nContext: ';
        if (standard) systemPrompt += `Student is in ${standard}th standard. `;
        if (subject) systemPrompt += `Subject: ${subject}. `;
        if (chapter) systemPrompt += `Chapter: ${chapter}. `;
    }

    console.log('Sending request to OpenRouter...');

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${config.API_KEY}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': window.location.href,
            'X-Title': 'VAI-ai Teaching Assistant'
        },
        body: JSON.stringify({
            model: 'openai/gpt-4o',
            messages: [
                {
                    role: 'system',
                    content: systemPrompt
                },
                {
                    role: 'user',
                    content: [
                        {
                            type: 'text',
                            text: userMessage
                        },
                        {
                            type: 'image_url',
                            image_url: {
                                url: imageData
                            }
                        }
                    ]
                }
            ],
            max_tokens: 1000
        })
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    console.log('API response received successfully');

    return data.choices[0].message.content;
}

// ==================== SEND MESSAGE (UPDATED WITH IMAGE SUPPORT) ====================

async function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();

    console.log('sendMessage called, message:', message, 'currentImage:', !!currentImage);

    // Must have either message or image
    if (!message && !currentImage) {
        console.log('Nothing to send');
        return;
    }

    // Check if API is configured
    if (!isAPIConfigured()) {
        alert('⚠️ API key not configured!\n\nPlease add your OpenRouter API key in config.js file.');
        return;
    }

    // Store image reference before clearing
    const imageToSend = currentImage;

    // Clear input immediately
    input.value = '';
    input.style.height = 'auto';

    // Clear image preview IMMEDIATELY (so user needs to upload again for next message)
    if (currentImage) {
        clearImage();
    }

    // Remove welcome message if exists
    const welcomeMessage = document.querySelector('.welcome-message');
    if (welcomeMessage) {
        welcomeMessage.remove();
    }

    // Add user message
    if (imageToSend) {
        console.log('Adding message with image');
        addMessageWithImage(message || 'What is in this image?', 'user', imageToSend);
    } else {
        console.log('Adding text-only message');
        addMessage(message, 'user');
    }

    // Show typing indicator
    showTypingIndicator();

    // Send to API
    try {
        let response;

        if (imageToSend) {
            console.log('Calling API with image...');
            response = await callAPIWithImage(
                message || 'What is in this image? Explain it clearly for a student.',
                imageToSend
            );
        } else {
            console.log('Calling API with text only...');
            response = await callOpenRouter(message);
        }

        removeTypingIndicator();
        addMessage(response, 'assistant');
        console.log('Response added to chat');

    } catch (error) {
        removeTypingIndicator();
        addMessage('❌ Sorry, there was an error processing your request. Please try again.', 'assistant');
        console.error('Error in sendMessage:', error);
    }
}

// ==================== ORIGINAL CHAT FUNCTIONS ====================

function addMessage(text, role) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${role}`;

    const time = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });

    // Process text for math rendering
    const processedText = processMathInText(text);

    messageDiv.innerHTML = `
        <div class="message-bubble">${processedText}</div>
        <div class="message-time">${time}</div>
    `;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Render math using KaTeX
    setTimeout(() => renderMathInMessage(messageDiv), 100);

    // Store in chat history
    chatState.messages.push({ role, content: text });
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message message-assistant';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

async function callOpenRouter(userMessage) {
    const config = getAPIConfig();
    const { standard, subject, chapter } = chatState.context;

    // Build system prompt with context
    let systemPrompt = config.SYSTEM_PROMPT;

    if (standard || subject || chapter) {
        systemPrompt += '\n\nContext: ';
        if (standard) systemPrompt += `Student is in ${standard}th standard. `;
        if (subject) systemPrompt += `Current subject: ${subject}. `;
        if (chapter) systemPrompt += `Current chapter: ${chapter}. `;
        systemPrompt += 'Please tailor your response to this context.';
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${config.API_KEY}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': window.location.href,
            'X-Title': 'VAI-ai Virtual Teaching Assistant'
        },
        body: JSON.stringify({
            model: config.MODEL,
            messages: [
                { role: 'system', content: systemPrompt },
                ...chatState.messages.slice(-10).map(msg => ({
                    role: msg.role,
                    content: msg.content
                })),
                { role: 'user', content: userMessage }
            ]
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'API request failed');
    }

    const data = await response.json();
    return data.choices[0].message.content;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML.replace(/\n/g, '<br>');
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', function () {
    console.log('VAI-ai Application Initialized');

    // Check if API is configured
    if (!isAPIConfigured()) {
        console.warn('API key not configured. Please update config.js with your OpenRouter API key.');
    } else {
        console.log('API configured successfully');
    }
});
// ==================== CHAPTER CHATBOT FUNCTIONS ====================

// Chapter chatbot state
let chapterChatState = {
    messages: [],
    currentChapter: null,
    currentSubject: null,
    currentStandard: null
};

// Initialize chapter chat when video is shown
function initializeChapterChat(chapter, subject, standard) {
    chapterChatState.currentChapter = chapter;
    chapterChatState.currentSubject = subject;
    chapterChatState.currentStandard = standard;
    chapterChatState.messages = [];

    // Clear chat messages
    const chatMessages = document.getElementById('chapterChatMessages');
    chatMessages.innerHTML = `
        <div class="chapter-welcome-message">
            <div class="welcome-bot-icon">🎓</div>
            <p>Hi! I'm here to help you understand "${chapter.title}". Ask me anything about the video you just watched!</p>
        </div>
    `;

    // Clear input
    document.getElementById('chapterChatInput').value = '';
}

// Handle keydown in chapter chat
function handleChapterChatKeydown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendChapterMessage();
    }
}

// Auto-resize chapter textarea
function autoResizeChapterTextarea(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

// Send chapter message
async function sendChapterMessage() {
    const input = document.getElementById('chapterChatInput');
    const message = input.value.trim();

    if (!message) return;

    // Check if API is configured
    if (!isAPIConfigured()) {
        alert('⚠️ API key not configured!\n\nPlease add your OpenRouter API key in config.js file.');
        return;
    }

    // Clear input
    input.value = '';
    input.style.height = 'auto';

    // Remove welcome message if exists
    const welcomeMessage = document.querySelector('.chapter-welcome-message');
    if (welcomeMessage) {
        welcomeMessage.remove();
    }

    // Add user message
    addChapterMessage(message, 'user');

    // Show typing indicator
    showChapterTypingIndicator();

    try {
        const response = await callChapterAPI(message);
        removeChapterTypingIndicator();
        addChapterMessage(response, 'assistant');
    } catch (error) {
        removeChapterTypingIndicator();
        addChapterMessage('❌ Sorry, there was an error. Please try again.', 'assistant');
        console.error('Chapter chat error:', error);
    }
}

// Add message to chapter chat
function addChapterMessage(text, role) {
    const chatMessages = document.getElementById('chapterChatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chapter-message chapter-message-${role}`;

    const time = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });

    messageDiv.innerHTML = `
        <div class="chapter-message-bubble">${escapeHtml(text)}</div>
        <div class="chapter-message-time">${time}</div>
    `;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Store in chat history
    chapterChatState.messages.push({ role, content: text });
}

// Show typing indicator for chapter chat
function showChapterTypingIndicator() {
    const chatMessages = document.getElementById('chapterChatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chapter-message chapter-message-assistant';
    typingDiv.id = 'chapterTypingIndicator';
    typingDiv.innerHTML = `
        <div class="chapter-typing-indicator">
            <div class="chapter-typing-dot"></div>
            <div class="chapter-typing-dot"></div>
            <div class="chapter-typing-dot"></div>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Remove typing indicator for chapter chat
function removeChapterTypingIndicator() {
    const typingIndicator = document.getElementById('chapterTypingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Call API for chapter-specific questions
async function callChapterAPI(userMessage) {
    const config = getAPIConfig();
    const { currentChapter, currentSubject, currentStandard } = chapterChatState;

    // Build enhanced system prompt with video-specific context
    let systemPrompt = `You are an expert AI teaching assistant specializing in ${currentSubject} for Class ${currentStandard} students.

CURRENT VIDEO CONTEXT:
- Chapter: ${currentChapter.title}
- Subject: ${currentSubject}
- Class: ${currentStandard}th Standard
- Video Content: The student just watched an educational video about this chapter

YOUR ROLE:
1. Answer questions ONLY about "${currentChapter.title}" from the video they just watched
2. Assume the video covered the core concepts, key points, important facts, and examples related to this chapter
3. Provide detailed explanations about the chapter content as if you know what was in the video
4. Use appropriate terminology for ${currentStandard}th standard level
5. Give examples, breakdowns, and step-by-step explanations when needed
6. Help with homework, exam preparation, and concept clarification for this specific chapter

RESPONSE GUIDELINES:
- Be specific and educational
- Use simple language suitable for Class ${currentStandard}
- Provide examples and practical applications
- Break down complex concepts into simpler parts
- Encourage critical thinking
- Reference "the video" naturally when appropriate

RESTRICTIONS:
- If asked about other chapters, topics, or subjects, politely say: "I can only help with questions about '${currentChapter.title}'. For other topics, please watch the relevant video first or use the main chat section."
- Stay focused on ${currentSubject} content for ${currentStandard}th standard
- Don't provide answers to direct exam questions, but help understand concepts

Remember: You're helping them understand the video content they just watched about ${currentChapter.title}.`;

    // Store message in history
    chapterChatState.messages.push({
        role: 'user',
        content: userMessage
    });

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${config.API_KEY}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': window.location.href,
            'X-Title': 'VAI-ai Chapter Assistant'
        },
        body: JSON.stringify({
            model: config.MODEL,
            messages: [
                { role: 'system', content: systemPrompt },
                ...chapterChatState.messages.slice(-8).map(msg => ({
                    role: msg.role,
                    content: msg.content
                }))
            ],
            max_tokens: 1000,
            temperature: 0.7
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'API request failed');
    }

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;

    // Store assistant response
    chapterChatState.messages.push({
        role: 'assistant',
        content: assistantMessage
    });

    return assistantMessage;
}

// ==================== RESPONSIVE CHAT FUNCTIONS ==================== //

// Toggle chat sidebar (mobile)
function toggleChatSidebar() {
    const sidebar = document.getElementById('chatSidebar');
    const overlay = document.getElementById('chatSidebarOverlay');

    if (!sidebar) return;

    const isOpen = sidebar.classList.contains('open');

    if (isOpen) {
        // Close sidebar
        sidebar.classList.remove('open');
        if (overlay) {
            overlay.classList.remove('active');
        }
    } else {
        // Open sidebar
        sidebar.classList.add('open');

        // Create overlay if doesn't exist
        if (!overlay) {
            const newOverlay = document.createElement('div');
            newOverlay.className = 'sidebar-overlay';
            newOverlay.id = 'chatSidebarOverlay';
            newOverlay.onclick = toggleChatSidebar;
            document.body.appendChild(newOverlay);
            setTimeout(() => newOverlay.classList.add('active'), 10);
        } else {
            overlay.classList.add('active');
        }
    }
}

// Toggle fullscreen mode
function toggleChatFullscreen() {
    const container = document.getElementById('chatContainer');
    const btn = document.getElementById('fullscreenToggle');

    if (!container) return;

    const isFullscreen = container.classList.contains('fullscreen');

    if (isFullscreen) {
        // Exit fullscreen
        container.classList.remove('fullscreen');
        if (btn) {
            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/>
                </svg>
            `;
            btn.title = 'Fullscreen';
        }
    } else {
        // Enter fullscreen
        container.classList.add('fullscreen');
        if (btn) {
            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3"/>
                </svg>
            `;
            btn.title = 'Exit Fullscreen';
        }
    }
}

// Close sidebar when clicking outside (mobile)
document.addEventListener('click', function (event) {
    const sidebar = document.getElementById('chatSidebar');
    const toggleBtn = document.getElementById('sidebarToggleBtn');
    const headerToggle = document.querySelector('.header-toggle-btn');

    if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('open')) {
        if (!sidebar.contains(event.target) &&
            !toggleBtn?.contains(event.target) &&
            !headerToggle?.contains(event.target)) {
            toggleChatSidebar();
        }
    }
});

// Handle window resize
let chatResizeTimer;
window.addEventListener('resize', function () {
    clearTimeout(chatResizeTimer);
    chatResizeTimer = setTimeout(function () {
        // Close sidebar if switching to desktop view
        if (window.innerWidth > 768) {
            const sidebar = document.getElementById('chatSidebar');
            const overlay = document.getElementById('chatSidebarOverlay');
            if (sidebar) sidebar.classList.remove('open');
            if (overlay) overlay.classList.remove('active');
        }
    }, 250);
});

// Handle escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        // Close sidebar if open
        const sidebar = document.getElementById('chatSidebar');
        if (sidebar && sidebar.classList.contains('open')) {
            toggleChatSidebar();
        }

        // Exit fullscreen if active
        const container = document.getElementById('chatContainer');
        if (container && container.classList.contains('fullscreen')) {
            toggleChatFullscreen();
        }
    }
});


// ==================== MATH RENDERING FUNCTIONS (FIXED) ====================

// Function to process and render math in text
function processMathInText(text) {
    // Escape HTML first but preserve math
    const escaped = escapeHtml(text);

    // Convert LaTeX delimiters to HTML spans for KaTeX
    let processed = escaped;

    // Handle display math: \[ ... \] or $$ ... $$
    processed = processed.replace(/\\\[([\s\S]*?)\\\]/g, (match, p1) => {
        return `<span class="math-display">\\[${p1}\\]</span>`;
    });
    processed = processed.replace(/\$\$([\s\S]*?)\$\$/g, (match, p1) => {
        return `<span class="math-display">$$${p1}$$</span>`;
    });

    // Handle inline math: \( ... \) or $ ... $
    processed = processed.replace(/\\\(([\s\S]*?)\\\)/g, (match, p1) => {
        return `<span class="math-inline">\\(${p1}\\)</span>`;
    });
    processed = processed.replace(/\$([^\$\n]+?)\$/g, (match, p1) => {
        return `<span class="math-inline">$${p1}$</span>`;
    });

    return processed;
}

// Function to render all math in an element using KaTeX
function renderMathInMessage(element) {
    // Wait for KaTeX to load
    if (!window.katex) {
        console.warn('KaTeX not loaded yet');
        return;
    }

    try {
        // Find and render all math elements
        const mathInline = element.querySelectorAll('.math-inline');
        const mathDisplay = element.querySelectorAll('.math-display');

        mathInline.forEach(el => {
            try {
                let tex = el.textContent;
                // Remove delimiters
                tex = tex.replace(/^\\\(/, '').replace(/\\\)$/, '');
                tex = tex.replace(/^\$/, '').replace(/\$$/, '');

                katex.render(tex, el, {
                    displayMode: false,
                    throwOnError: false,
                    strict: false
                });
            } catch (e) {
                console.warn('Inline math error:', e);
            }
        });

        mathDisplay.forEach(el => {
            try {
                let tex = el.textContent;
                // Remove delimiters
                tex = tex.replace(/^\\\[/, '').replace(/\\\]$/, '');
                tex = tex.replace(/^\$\$/, '').replace(/\$\$$/, '');

                katex.render(tex, el, {
                    displayMode: true,
                    throwOnError: false,
                    strict: false
                });
            } catch (e) {
                console.warn('Display math error:', e);
            }
        });
    } catch (error) {
        console.warn('Math rendering error:', error);
    }
}

// ==================== CREATE ROUTINE JAVASCRIPT ====================

// State Management
const routineState = {
    type: null, // 'ai' or 'manual'
    standard: null,
    duration: null,
    startDate: null,
    endDate: null,
    examDates: [],
    timetable: null,
    alarms: [],
    currentStep: 1
};

// ==================== ROUTINE TYPE SELECTION ====================

function selectRoutineType(type) {
    routineState.type = type;
    document.getElementById('routineTypeSelection').style.display = 'none';

    if (type === 'ai') {
        document.getElementById('aiTimetableCreator').style.display = 'block';
        // Initialize with first exam date
        addExamDate();
    } else {
        document.getElementById('manualTimetableCreator').style.display = 'block';
    }
}

function backToRoutineSelection() {
    // Hide all sections
    document.getElementById('aiTimetableCreator').style.display = 'none';
    document.getElementById('manualTimetableCreator').style.display = 'none';
    document.getElementById('timetableDisplay').style.display = 'none';
    document.getElementById('timetableLoading').style.display = 'none';

    // Show selection
    document.getElementById('routineTypeSelection').style.display = 'block';

    // Reset state
    routineState.type = null;
    routineState.standard = null;
    routineState.duration = null;
    routineState.currentStep = 1;
}

// ==================== AI TIMETABLE CREATOR ====================

function selectStandard(standard) {
    routineState.standard = standard;

    // Update UI
    document.querySelectorAll('.standard-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');

    // Move to next step
    setTimeout(() => {
        document.getElementById('aiStep1').classList.remove('active');
        document.getElementById('aiStep2').classList.add('active');
        routineState.currentStep = 2;
    }, 300);
}

function selectDuration(months) {
    routineState.duration = months;

    // Update UI
    document.querySelectorAll('.duration-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.closest('.duration-btn').classList.add('selected');

    // Move to next step
    setTimeout(() => {
        document.getElementById('aiStep2').classList.remove('active');
        document.getElementById('aiStep3').classList.add('active');
        routineState.currentStep = 3;
    }, 300);
}

function toggleExamInput() {
    const examInputType = document.querySelector('input[name="examInputType"]:checked').value;

    if (examInputType === 'examDates') {
        document.getElementById('examDatesInput').style.display = 'block';
        document.getElementById('endDateInput').style.display = 'none';
    } else {
        document.getElementById('examDatesInput').style.display = 'none';
        document.getElementById('endDateInput').style.display = 'block';
    }
}

function addExamDate() {
    const examDatesList = document.getElementById('examDatesList');
    const examId = Date.now();

    const examItem = document.createElement('div');
    examItem.className = 'exam-date-item';
    examItem.id = `exam-${examId}`;
    examItem.innerHTML = `
        <input type="text" placeholder="Exam Name (e.g., Math Final)" class="exam-name" />
        <input type="date" class="exam-date" />
        <button class="remove-exam-btn" onclick="removeExamDate('${examId}')">Remove</button>
    `;

    examDatesList.appendChild(examItem);
}

function removeExamDate(examId) {
    const examItem = document.getElementById(`exam-${examId}`);
    if (examItem) {
        examItem.remove();
    }
}

async function generateAITimetable() {
    // Validate inputs
    const startDate = document.getElementById('startDate').value;
    if (!startDate) {
        alert('Please select a start date!');
        return;
    }

    routineState.startDate = startDate;

    // Get exam dates or end date
    const examInputType = document.querySelector('input[name="examInputType"]:checked').value;

    if (examInputType === 'examDates') {
        // Collect exam dates
        const examItems = document.querySelectorAll('.exam-date-item');
        routineState.examDates = [];

        examItems.forEach(item => {
            const name = item.querySelector('.exam-name').value;
            const date = item.querySelector('.exam-date').value;
            if (name && date) {
                routineState.examDates.push({ name, date });
            }
        });

        if (routineState.examDates.length === 0) {
            alert('Please add at least one exam!');
            return;
        }
    } else {
        routineState.endDate = document.getElementById('endDate').value;
        if (!routineState.endDate) {
            alert('Please select an end date!');
            return;
        }
    }

    // Show loading
    document.getElementById('aiTimetableCreator').style.display = 'none';
    document.getElementById('timetableLoading').style.display = 'block';

    // Simulate AI generation with progress
    await simulateAIGeneration();

    // Generate timetable
    const timetable = await generateTimetableData();
    routineState.timetable = timetable;

    // Display timetable
    displayTimetable(timetable);
}

async function simulateAIGeneration() {
    const steps = [
        { text: '📊 Analyzing exam dates...', duration: 1000 },
        { text: '📚 Loading curriculum data...', duration: 1200 },
        { text: '🧮 Calculating optimal study periods...', duration: 1500 },
        { text: '⏰ Distributing topics evenly...', duration: 1300 },
        { text: '✨ Generating your personalized timetable...', duration: 1800 }
    ];

    const loadingSteps = document.getElementById('loadingSteps');
    const progressFill = document.getElementById('progressFill');
    const progressPercentage = document.getElementById('progressPercentage');

    let totalProgress = 0;

    for (let i = 0; i < steps.length; i++) {
        const step = steps[i];

        // Add step text
        loadingSteps.innerHTML = `<div class="loading-step">${step.text}</div>`;

        // Animate progress
        const progressIncrement = 100 / steps.length;
        const startProgress = totalProgress;
        const endProgress = Math.min(totalProgress + progressIncrement, 100);

        await animateProgress(startProgress, endProgress, step.duration);
        totalProgress = endProgress;
    }
}

function animateProgress(start, end, duration) {
    return new Promise(resolve => {
        const startTime = Date.now();
        const progressFill = document.getElementById('progressFill');
        const progressPercentage = document.getElementById('progressPercentage');

        function update() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(start + (end - start) * (elapsed / duration), end);

            progressFill.style.width = `${progress}%`;
            progressPercentage.textContent = `${Math.round(progress)}%`;

            if (elapsed < duration) {
                requestAnimationFrame(update);
            } else {
                resolve();
            }
        }

        update();
    });
}

async function generateTimetableData() {
    // This would call your AI API in production
    // For now, generating structured data

    const subjects = getSubjectsForStandard(routineState.standard);
    const startDate = new Date(routineState.startDate);
    const durationDays = routineState.duration * 30;

    const timetable = [];

    // Generate daily schedule
    for (let day = 0; day < durationDays; day++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(currentDate.getDate() + day);

        // Skip Sundays
        if (currentDate.getDay() === 0) continue;

        const dailySchedule = {
            date: currentDate.toISOString().split('T')[0],
            day: currentDate.toLocaleDateString('en-US', { weekday: 'long' }),
            slots: [
                {
                    time: '06:00 - 07:00',
                    subject: 'Morning Revision',
                    topic: 'Review previous day topics',
                    type: 'revision'
                },
                {
                    time: '07:00 - 08:30',
                    subject: subjects[day % subjects.length].name,
                    topic: `Chapter ${Math.floor(day / subjects.length) + 1}`,
                    type: 'study'
                },
                {
                    time: '08:30 - 09:00',
                    subject: 'Break',
                    topic: 'Breakfast & Rest',
                    type: 'break'
                },
                {
                    time: '16:00 - 17:30',
                    subject: subjects[(day + 1) % subjects.length].name,
                    topic: `Practice Problems`,
                    type: 'practice'
                },
                {
                    time: '20:00 - 21:00',
                    subject: 'Self Study',
                    topic: 'Complete assignments',
                    type: 'homework'
                }
            ]
        };

        timetable.push(dailySchedule);
    }

    return timetable;
}

function getSubjectsForStandard(standard) {
    const allSubjects = [
        { name: 'Mathematics', color: '#3b82f6' },
        { name: 'Science', color: '#10b981' },
        { name: 'English', color: '#f59e0b' },
        { name: 'History', color: '#8b5cf6' },
        { name: 'Geography', color: '#06b6d4' },
        { name: 'Hindi/Marathi', color: '#ef4444' }
    ];

    return allSubjects;
}

// ==================== MANUAL TIMETABLE CREATOR ====================

function createManualTimetable() {
    const standard = document.getElementById('manualStandard').value;
    const duration = document.getElementById('manualDuration').value;
    const startDate = document.getElementById('manualStartDate').value;

    if (!standard || !duration || !startDate) {
        alert('Please fill all fields!');
        return;
    }

    routineState.standard = parseInt(standard);
    routineState.duration = parseInt(duration);
    routineState.startDate = startDate;
    routineState.type = 'manual';

    // Generate empty timetable for manual editing
    const timetable = generateEmptyTimetable();
    routineState.timetable = timetable;

    displayTimetable(timetable);
}

function generateEmptyTimetable() {
    const startDate = new Date(routineState.startDate);
    const durationDays = routineState.duration * 30;

    const timetable = [];

    for (let day = 0; day < durationDays; day++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(currentDate.getDate() + day);

        if (currentDate.getDay() === 0) continue;

        const dailySchedule = {
            date: currentDate.toISOString().split('T')[0],
            day: currentDate.toLocaleDateString('en-US', { weekday: 'long' }),
            slots: [
                { time: '06:00 - 07:00', subject: '', topic: '', type: 'study' },
                { time: '07:00 - 08:30', subject: '', topic: '', type: 'study' },
                { time: '16:00 - 17:30', subject: '', topic: '', type: 'study' },
                { time: '20:00 - 21:00', subject: '', topic: '', type: 'study' }
            ]
        };

        timetable.push(dailySchedule);
    }

    return timetable;
}

// ==================== TIMETABLE DISPLAY ====================

function displayTimetable(timetable) {
    document.getElementById('timetableLoading').style.display = 'none';
    document.getElementById('manualTimetableCreator').style.display = 'none';
    document.getElementById('timetableDisplay').style.display = 'block';

    // Update title
    document.getElementById('timetableTitle').textContent =
        `${routineState.standard}th Standard - ${routineState.duration} Month Study Plan`;

    // Initialize task completion status if not exists
    if (!routineState.taskCompletion) {
        routineState.taskCompletion = {};
        timetable.forEach((day, dayIndex) => {
            routineState.taskCompletion[dayIndex] = {};
            day.slots.forEach((slot, slotIndex) => {
                routineState.taskCompletion[dayIndex][slotIndex] = false;
            });
        });
    }

    // Generate day blocks instead of table
    const container = document.getElementById('timetableTable');
    container.innerHTML = '';

    // Create overall progress bar
    const totalTasks = timetable.reduce((sum, day) => sum + day.slots.length, 0);
    const completedTasks = Object.values(routineState.taskCompletion).reduce((sum, day) =>
        sum + Object.values(day).filter(completed => completed).length, 0);
    const overallProgress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    const progressBar = document.createElement('div');
    progressBar.className = 'overall-progress-container';
    progressBar.innerHTML = `
        <div class="overall-progress-header">
            <h4>📊 Overall Progress</h4>
            <span class="progress-percentage">${overallProgress}% Complete</span>
        </div>
        <div class="overall-progress-bar">
            <div class="overall-progress-fill" style="width: ${overallProgress}%"></div>
        </div>
        <div class="progress-stats">
            <span>✅ ${completedTasks} / ${totalTasks} tasks completed</span>
        </div>
    `;
    container.appendChild(progressBar);

    // Create day blocks grid
    const dayBlocksGrid = document.createElement('div');
    dayBlocksGrid.className = 'day-blocks-grid';

    timetable.forEach((day, dayIndex) => {
        const dayBlock = createDayBlock(day, dayIndex, timetable);
        dayBlocksGrid.appendChild(dayBlock);
    });

    container.appendChild(dayBlocksGrid);

    // Generate default alarms
    generateDefaultAlarms(timetable);
}

function createDayBlock(day, dayIndex, timetable) {
    const totalSlots = day.slots.length;
    const completedSlots = Object.values(routineState.taskCompletion[dayIndex] || {}).filter(c => c).length;
    const progress = totalSlots > 0 ? Math.round((completedSlots / totalSlots) * 100) : 0;

    const dayBlock = document.createElement('div');
    dayBlock.className = 'day-block';
    dayBlock.onclick = () => toggleDayExpansion(dayIndex);

    dayBlock.innerHTML = `
        <div class="day-block-header">
            <div class="day-block-title">
                <h4>Day ${dayIndex + 1}</h4>
                <p class="day-date">${formatDate(day.date)}</p>
                <p class="day-name">${day.day}</p>
            </div>
            <div class="circular-progress" data-progress="${progress}">
                <svg class="progress-ring" width="60" height="60">
                    <circle class="progress-ring-circle-bg" cx="30" cy="30" r="26" />
                    <circle class="progress-ring-circle" cx="30" cy="30" r="26" 
                            style="stroke-dashoffset: ${163 - (163 * progress / 100)}" />
                </svg>
                <div class="progress-text">${progress}%</div>
            </div>
        </div>
        <div class="day-block-stats">
            <span>📚 ${totalSlots} tasks</span>
            <span>✅ ${completedSlots} done</span>
        </div>
        <div class="day-block-content" id="dayContent${dayIndex}" style="display: none;">
            ${createDaySchedule(day, dayIndex)}
        </div>
    `;

    return dayBlock;
}

function createDaySchedule(day, dayIndex) {
    let scheduleHTML = '<div class="day-schedule">';

    day.slots.forEach((slot, slotIndex) => {
        const isCompleted = routineState.taskCompletion[dayIndex]?.[slotIndex] || false;
        scheduleHTML += `
            <div class="schedule-item ${isCompleted ? 'completed' : ''}">
                <div class="schedule-checkbox-wrapper">
                    <input type="checkbox" 
                           id="task-${dayIndex}-${slotIndex}" 
                           ${isCompleted ? 'checked' : ''}
                           onchange="toggleTaskCompletion(${dayIndex}, ${slotIndex})"
                           onclick="event.stopPropagation()">
                    <label for="task-${dayIndex}-${slotIndex}" onclick="event.stopPropagation()"></label>
                </div>
                <div class="schedule-details">
                    <div class="schedule-time">${slot.time}</div>
                    <div class="schedule-subject">
                        <span class="subject-badge">${getTypeEmoji(slot.type)}</span>
                        <span class="subject-name editable" onclick="editCell(${dayIndex}, ${slotIndex}, 'subject'); event.stopPropagation();">
                            ${slot.subject || 'Click to edit'}
                        </span>
                    </div>
                    <div class="schedule-topic editable" onclick="editCell(${dayIndex}, ${slotIndex}, 'topic'); event.stopPropagation();">
                        ${slot.topic || 'Click to edit topic'}
                    </div>
                </div>
            </div>
        `;
    });

    scheduleHTML += '</div>';
    return scheduleHTML;
}

function toggleDayExpansion(dayIndex) {
    const content = document.getElementById(`dayContent${dayIndex}`);
    const allContents = document.querySelectorAll('.day-block-content');

    // Close all other expanded days
    allContents.forEach((c, idx) => {
        if (c.id !== `dayContent${dayIndex}`) {
            c.style.display = 'none';
            c.closest('.day-block').classList.remove('expanded');
        }
    });

    // Toggle current day
    if (content.style.display === 'none') {
        content.style.display = 'block';
        content.closest('.day-block').classList.add('expanded');
    } else {
        content.style.display = 'none';
        content.closest('.day-block').classList.remove('expanded');
    }
}

function toggleTaskCompletion(dayIndex, slotIndex) {
    if (!routineState.taskCompletion[dayIndex]) {
        routineState.taskCompletion[dayIndex] = {};
    }

    routineState.taskCompletion[dayIndex][slotIndex] =
        !routineState.taskCompletion[dayIndex][slotIndex];

    // Update the UI
    displayTimetable(routineState.timetable);
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function getTypeEmoji(type) {
    const types = {
        'study': '📚 Study',
        'revision': '🔄 Revision',
        'practice': '✍️ Practice',
        'break': '☕ Break',
        'homework': '📝 Homework'
    };
    return types[type] || '📚 Study';
}

function editCell(dayIndex, slotIndex, field) {
    const currentValue = routineState.timetable[dayIndex].slots[slotIndex][field];
    const newValue = prompt(`Edit ${field}:`, currentValue);

    if (newValue !== null) {
        routineState.timetable[dayIndex].slots[slotIndex][field] = newValue;
        displayTimetable(routineState.timetable);
    }
}

// ==================== ALARMS ====================

function generateDefaultAlarms(timetable) {
    // Create alarms for first week
    const alarms = [];
    const firstWeek = timetable.slice(0, 7);

    firstWeek.forEach(day => {
        day.slots.forEach(slot => {
            if (slot.type !== 'break' && slot.subject) {
                alarms.push({
                    id: Date.now() + Math.random(),
                    date: day.date,
                    time: slot.time.split(' - ')[0],
                    subject: slot.subject,
                    topic: slot.topic,
                    active: true
                });
            }
        });
    });

    routineState.alarms = alarms;
    displayAlarms();
    updateTodayAlarms();
}

function displayAlarms() {
    const alarmsList = document.getElementById('alarmsList');
    alarmsList.innerHTML = '';

    if (routineState.alarms.length === 0) {
        alarmsList.innerHTML = '<p style="text-align: center; color: var(--text-medium);">No alarms set. Click "Add Alarm" to create one.</p>';
        return;
    }

    routineState.alarms.forEach(alarm => {
        const alarmItem = document.createElement('div');
        alarmItem.className = 'alarm-item';
        alarmItem.innerHTML = `
            <div class="alarm-info">
                <div class="alarm-icon">⏰</div>
                <div class="alarm-details">
                    <h5>${alarm.subject} - ${alarm.topic}</h5>
                    <p>${formatDate(alarm.date)} at ${alarm.time}</p>
                </div>
            </div>
            <div class="alarm-actions">
                <div class="alarm-toggle ${alarm.active ? 'active' : ''}" onclick="toggleAlarm('${alarm.id}')">
                    <div class="alarm-toggle-slider"></div>
                </div>
                <button class="delete-alarm-btn" onclick="deleteAlarm('${alarm.id}')">Delete</button>
            </div>
        `;
        alarmsList.appendChild(alarmItem);
    });
}

function addAlarm() {
    const date = prompt('Enter date (YYYY-MM-DD):');
    const time = prompt('Enter time (HH:MM):');
    const subject = prompt('Enter subject:');
    const topic = prompt('Enter topic:');

    if (date && time && subject) {
        routineState.alarms.push({
            id: Date.now() + Math.random(),
            date,
            time,
            subject,
            topic: topic || '',
            active: true
        });

        displayAlarms();
        updateTodayAlarms();
    }
}

function toggleAlarm(alarmId) {
    const alarm = routineState.alarms.find(a => a.id == alarmId);
    if (alarm) {
        alarm.active = !alarm.active;
        displayAlarms();
        updateTodayAlarms();
    }
}

function deleteAlarm(alarmId) {
    routineState.alarms = routineState.alarms.filter(a => a.id != alarmId);
    displayAlarms();
    updateTodayAlarms();
}

function updateTodayAlarms() {
    const today = new Date().toISOString().split('T')[0];
    const todayAlarms = routineState.alarms.filter(a => a.date === today && a.active);

    const todayAlarmsList = document.getElementById('todayAlarms');
    todayAlarmsList.innerHTML = '';

    if (todayAlarms.length === 0) {
        todayAlarmsList.innerHTML = '<p style="text-align: center; color: var(--text-medium);">No study sessions scheduled for today.</p>';
        return;
    }

    todayAlarms.forEach(alarm => {
        const alarmItem = document.createElement('div');
        alarmItem.className = 'today-alarm-item';
        alarmItem.innerHTML = `
            <h5>⏰ ${alarm.time} - ${alarm.subject}</h5>
            <p>${alarm.topic}</p>
        `;
        todayAlarmsList.appendChild(alarmItem);
    });
}

// ==================== ACTIONS ====================

function printTimetable() {
    window.print();
}

function downloadTimetable() {
    // Convert timetable to CSV
    let csv = 'Date,Day,Time,Subject,Topic,Type\n';

    routineState.timetable.forEach(day => {
        day.slots.forEach(slot => {
            csv += `${day.date},${day.day},${slot.time},${slot.subject},${slot.topic},${slot.type}\n`;
        });
    });

    // Download
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Study_Timetable_${routineState.standard}th_Standard.csv`;
    a.click();
}

function saveToPortal() {
    // Save timetable to local storage
    localStorage.setItem('studentTimetable', JSON.stringify(routineState));
    alert('✅ Timetable saved to your portal!');
    updateTodayAlarms();
}

// Initialize today's alarms on page load
document.addEventListener('DOMContentLoaded', function () {
    const savedTimetable = localStorage.getItem('studentTimetable');
    if (savedTimetable) {
        routineState = Object.assign(routineState, JSON.parse(savedTimetable));
        updateTodayAlarms();
    }
});


// ==================== MHT-CET MOCK TEST JAVASCRIPT ====================

// Mock Test State
const mockTestState = {
    subject: null,
    questions: [],
    currentQuestion: 0,
    answers: {},
    markedForReview: new Set(),
    startTime: null,
    endTime: null,
    timerInterval: null,
    timeRemaining: 90 * 60 // 90 minutes in seconds
};

// Question Bank Templates for AI Generation
const questionTemplates = {
    physics: {
        topics: ['Mechanics', 'Thermodynamics', 'Optics', 'Electricity', 'Magnetism', 'Modern Physics', 'Waves', 'Kinematics'],
        concepts: {
            'Mechanics': ['Newtons Laws', 'Work Energy', 'Momentum', 'Rotational Motion', 'Gravitation'],
            'Thermodynamics': ['Laws of Thermodynamics', 'Heat Transfer', 'Kinetic Theory', 'Entropy'],
            'Optics': ['Reflection', 'Refraction', 'Lens', 'Mirror', 'Wave Optics'],
            'Electricity': ['Coulombs Law', 'Electric Field', 'Potential', 'Capacitance', 'Current'],
            'Magnetism': ['Magnetic Field', 'Force on Moving Charges', 'Electromagnetic Induction'],
            'Modern Physics': ['Photoelectric Effect', 'Atomic Structure', 'Radioactivity', 'Nuclear Reactions'],
            'Waves': ['Sound Waves', 'Electromagnetic Waves', 'Doppler Effect', 'Interference'],
            'Kinematics': ['Motion in Straight Line', 'Motion in Plane', 'Projectile Motion', 'Relative Motion']
        }
    },
    chemistry: {
        topics: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Coordination Chemistry', 'Analytical Chemistry'],
        concepts: {
            'Organic Chemistry': ['Hydrocarbons', 'Alcohols', 'Aldehydes', 'Carboxylic Acids', 'Amines', 'Polymers'],
            'Inorganic Chemistry': ['Periodic Table', 'Chemical Bonding', 'p-Block Elements', 'd-Block Elements', 'Coordination Compounds'],
            'Physical Chemistry': ['Thermodynamics', 'Electrochemistry', 'Chemical Kinetics', 'Solutions', 'Surface Chemistry'],
            'Coordination Chemistry': ['Ligands', 'Crystal Field Theory', 'Nomenclature', 'Isomerism'],
            'Analytical Chemistry': ['Qualitative Analysis', 'Quantitative Analysis', 'Spectroscopy', 'Chromatography']
        }
    },
    mathematics: {
        topics: ['Algebra', 'Calculus', 'Trigonometry', 'Coordinate Geometry', 'Vectors', 'Probability', 'Statistics', 'Complex Numbers'],
        concepts: {
            'Algebra': ['Quadratic Equations', 'Sequences and Series', 'Binomial Theorem', 'Permutations', 'Matrices'],
            'Calculus': ['Limits', 'Differentiation', 'Integration', 'Differential Equations', 'Applications'],
            'Trigonometry': ['Ratios', 'Identities', 'Equations', 'Inverse Functions', 'Heights and Distances'],
            'Coordinate Geometry': ['Straight Lines', 'Circles', 'Parabola', 'Ellipse', 'Hyperbola'],
            'Vectors': ['Vector Algebra', 'Dot Product', 'Cross Product', '3D Geometry'],
            'Probability': ['Basic Concepts', 'Conditional Probability', 'Bayes Theorem', 'Random Variables'],
            'Statistics': ['Mean', 'Median', 'Mode', 'Standard Deviation', 'Correlation'],
            'Complex Numbers': ['Operations', 'Argand Plane', 'De Moivres Theorem', 'Roots']
        }
    }
};

// ==================== SUBJECT SELECTION ====================

function selectMockSubject(subject) {
    mockTestState.subject = subject;

    // Show loading
    document.getElementById('mockTestSubjectSelection').style.display = 'none';
    document.getElementById('mockTestLoading').style.display = 'block';

    // Update loading subject
    const subjectNames = {
        'physics': 'Physics',
        'chemistry': 'Chemistry',
        'mathematics': 'Mathematics'
    };
    document.getElementById('mockLoadingSubject').textContent = `Generating ${subjectNames[subject]} Questions...`;

    // Simulate AI generation with progress
    generateMockTestQuestions(subject);
}

// ==================== AI QUESTION GENERATION ====================

async function generateMockTestQuestions(subject) {
    // Simulate loading with progress
    await animateMockProgress(0, 100, 3000);

    // Generate 50 questions
    const questions = [];
    const templates = questionTemplates[subject];

    for (let i = 0; i < 50; i++) {
        const topic = templates.topics[i % templates.topics.length];
        const concepts = templates.concepts[topic];
        const concept = concepts[Math.floor(Math.random() * concepts.length)];

        const question = await generateSingleQuestion(subject, topic, concept, i + 1);
        questions.push(question);
    }

    mockTestState.questions = questions;
    mockTestState.answers = {};
    mockTestState.markedForReview = new Set();
    mockTestState.currentQuestion = 0;

    // Start exam
    startMockExam();
}

async function generateSingleQuestion(subject, topic, concept, number) {
    // In production, this would call your AI API
    // For now, generating structured questions

    const questionText = await generateQuestionText(subject, topic, concept, number);
    const options = await generateOptions(subject, concept, questionText);

    const questionData = {
        id: number,
        subject: subject,
        topic: topic,
        concept: concept,
        question: questionText,
        options: options,
        correctAnswer: 0, // First option is correct
        difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)],
        marks: 2
    };

    // Shuffle options so correct isn't always first
    shuffleOptions(questionData);

    return questionData;
}

async function generateQuestionText(subject, topic, concept, number) {
    // Comprehensive question bank with real, solvable problems
    const questions = {
        physics: {
            // MECHANICS
            'Newtons Laws': [
                'A force of 10 N acts on a body of mass 2 kg. What is the acceleration produced?',
                'Two forces of 3 N and 4 N act on a body at right angles. Find the resultant force.',
                'A body of mass 5 kg is moving with velocity 10 m/s. Calculate its momentum.',
                'A 1000 kg car accelerates from rest to 20 m/s in 10 seconds. What is the net force acting on it?'
            ],
            'Work Energy': [
                'A force of 5 N moves a body through 10 m. Calculate the work done.',
                'A body of mass 2 kg falls freely from height 5 m. Find its kinetic energy just before hitting ground. (g=10 m/s²)',
                'A spring with spring constant 100 N/m is compressed by 0.2 m. Calculate the potential energy stored.',
                'A 50 kg mass is lifted to height 10 m. Calculate the work done against gravity. (g=10 m/s²)'
            ],
            'Momentum': [
                'A 0.5 kg ball moving at 10 m/s collides with a wall and bounces back at 8 m/s. Find the change in momentum.',
                'Two bodies of masses 2 kg and 3 kg moving at 4 m/s and 2 m/s respectively collide. If they stick together, find final velocity.',
                'A 1200 kg car moving at 15 m/s stops in 3 seconds. Calculate the braking force.',
                'A bullet of mass 20 g moving at 500 m/s penetrates a wooden block and stops. Find the impulse.'
            ],
            'Rotational Motion': [
                'A disc of radius 0.5 m rotates at 60 rpm. Calculate its angular velocity in rad/s.',
                'A flywheel has moment of inertia 5 kg·m². If angular acceleration is 2 rad/s², find the torque.',
                'A wheel completes 10 revolutions in 4 seconds. Calculate its angular velocity.',
                'A solid sphere of radius 0.1 m and mass 2 kg rolls without slipping. Find its moment of inertia.'
            ],
            'Gravitation': [
                'Calculate the gravitational force between two masses of 10 kg and 20 kg separated by 2 m. (G = 6.67×10⁻¹¹ N·m²/kg²)',
                'At what height above Earth\'s surface does gravity become one-fourth? (Earth radius = 6400 km)',
                'Calculate the orbital velocity of a satellite at height 400 km above Earth. (R=6400 km, g=10 m/s²)',
                'Find the escape velocity from Earth\'s surface. (R=6400 km, g=10 m/s²)'
            ],

            // THERMODYNAMICS
            'Laws of Thermodynamics': [
                'A gas absorbs 500 J of heat and does 300 J of work. Calculate the change in internal energy.',
                'An ideal gas expands isothermally. If heat absorbed is 400 J, find work done.',
                'In a Carnot engine, temperature of source is 500 K and sink is 300 K. Calculate efficiency.',
                'A refrigerator removes 600 J from cold reservoir and releases 800 J to hot reservoir. Find coefficient of performance.'
            ],
            'Heat Transfer': [
                '100 g of water at 30°C is heated to 80°C. Calculate heat absorbed. (Specific heat = 4.2 J/g°C)',
                'A metal rod of length 2 m, area 0.01 m², thermal conductivity 200 W/m·K has temperature difference 50°C. Find heat flow rate.',
                '500 g of ice at 0°C is converted to water at 0°C. Calculate heat required. (Latent heat = 334 J/g)',
                'A body loses heat at rate 10 J/s when temperature difference is 50°C. Find thermal resistance.'
            ],
            'Kinetic Theory': [
                'Calculate RMS velocity of oxygen molecules at 27°C. (M=32 g/mol, R=8.31 J/mol·K)',
                'A gas at 300 K has pressure 1 atm. If temperature increases to 600 K at constant volume, find new pressure.',
                'Mean free path of gas molecules is 2×10⁻⁷ m. If number density doubles, find new mean free path.',
                'Calculate average kinetic energy per molecule of gas at 300 K. (k=1.38×10⁻²³ J/K)'
            ],

            // OPTICS
            'Reflection': [
                'An object is placed 30 cm from a concave mirror of focal length 20 cm. Find the image distance.',
                'A convex mirror has focal length 15 cm. Object is at 10 cm. Calculate magnification.',
                'Two plane mirrors are inclined at 60°. Find number of images formed.',
                'A concave mirror produces real image twice the size of object. If focal length is 20 cm, find object distance.'
            ],
            'Refraction': [
                'Light travels from air (n=1) to glass (n=1.5) at incident angle 30°. Find refraction angle.',
                'Critical angle for glass-air interface is 42°. Calculate refractive index of glass.',
                'A glass slab of thickness 6 cm and refractive index 1.5 causes lateral displacement of 2 cm. Find incident angle.',
                'Light takes 2 ns to travel through 30 cm of medium. Calculate refractive index. (c=3×10⁸ m/s)'
            ],
            'Lens': [
                'A convex lens of focal length 20 cm forms image at 60 cm. Find object distance.',
                'Two lenses of power +2D and -1D are placed in contact. Find focal length of combination.',
                'A lens has focal length 10 cm in air. When immersed in water (n=1.33), find new focal length. (n_glass=1.5)',
                'Object is at 15 cm from lens of focal length 10 cm. Calculate magnification.'
            ],
            'Mirror': [
                'An object is placed 30 cm from a concave mirror of focal length 20 cm. Find the image distance.',
                'A convex mirror has radius of curvature 40 cm. An object is placed 30 cm from it. Find image distance.',
                'Concave mirror forms image of same size as object. If focal length is 15 cm, find object distance.',
                'A concave mirror has focal length 10 cm. Where should object be placed to get virtual magnified image?'
            ],
            'Wave Optics': [
                'In Young\'s double slit experiment, distance between slits is 0.5 mm and screen distance is 1 m. Find fringe width for wavelength 600 nm.',
                'Two coherent sources of wavelength 500 nm produce interference pattern. Path difference for 5th bright fringe is:',
                'In diffraction at single slit, first minimum occurs at angle 30°. If slit width is 1 μm, find wavelength.',
                'Condition for constructive interference is path difference equals:'
            ],
            'Interference': [
                'In Young\'s experiment, fringe width is 0.4 mm. If wavelength changes from 600 nm to 400 nm, new fringe width is:',
                'Two waves of equal amplitude a interfere constructively. Resultant amplitude is:',
                'For destructive interference, phase difference between waves should be:',
                'Third dark fringe in interference pattern corresponds to path difference of:'
            ],

            // ELECTRICITY
            'Coulombs Law': [
                'Two charges of +2 μC and +3 μC are 0.3 m apart. Calculate force between them. (k=9×10⁹ N·m²/C²)',
                'Force between two charges separated by distance r is F. If distance becomes 2r, find new force.',
                'Three charges +q, +q, -2q are at vertices of equilateral triangle of side a. Find net force on -2q.',
                'Two identical charges separated by 1 m repel with force 9 N. Find magnitude of each charge. (k=9×10⁹)'
            ],
            'Electric Field': [
                'Calculate electric field at distance 0.3 m from charge +5 μC. (k=9×10⁹ N·m²/C²)',
                'A charge of -2 μC experiences force 6×10⁻³ N in electric field. Find field strength.',
                'Electric field intensity at point between two equal opposite charges separated by 2 m is 4000 N/C. Find charge magnitude.',
                'A dipole of moment 2×10⁻⁸ C·m is in field 5×10⁴ N/C at angle 30°. Calculate torque.'
            ],
            'Potential': [
                'Calculate electric potential at 0.5 m from charge +10 μC. (k=9×10⁹ N·m²/C²)',
                'Potential difference between two points is 100 V. If charge of 2 C moves between them, find work done.',
                'Two charges +4 μC and -4 μC are 0.6 m apart. Find potential at midpoint.',
                'Electron moves through potential difference 100 V. Calculate gain in kinetic energy. (e=1.6×10⁻¹⁹ C)'
            ],
            'Capacitance': [
                'A capacitor of 5 μF is charged to 100 V. Calculate charge stored.',
                'Energy stored in 10 μF capacitor charged to 200 V is:',
                'Three capacitors of 2 μF, 3 μF, 4 μF are in series. Find equivalent capacitance.',
                'Parallel plate capacitor has area 0.01 m², separation 1 mm, dielectric constant 5. Calculate capacitance. (ε₀=8.85×10⁻¹² F/m)'
            ],
            'Current': [
                'A current of 2 A flows through resistor for 5 minutes. Calculate charge transferred.',
                'A wire of resistance 10 Ω carries current 3 A. Find power dissipated.',
                'Two resistors of 4 Ω and 6 Ω are connected in parallel across 12 V. Find total current.',
                'A cell of emf 12 V and internal resistance 0.5 Ω supplies current 2 A. Find terminal voltage.'
            ],

            // MAGNETISM
            'Magnetic Field': [
                'A charge of 5 μC moves at 1000 m/s perpendicular to magnetic field 0.2 T. Calculate force.',
                'Magnetic field at center of circular coil of radius 0.1 m carrying current 2 A is: (μ₀=4π×10⁻⁷ T·m/A)',
                'Two parallel wires 0.1 m apart carry currents 5 A and 3 A in same direction. Find force per unit length.',
                'Magnetic field at distance 0.05 m from long straight wire carrying 10 A current is:'
            ],
            'Force on Moving Charges': [
                'Electron moving at 10⁶ m/s enters field 0.01 T at right angles. Find radius of circular path. (e/m=1.76×10¹¹ C/kg)',
                'Proton enters magnetic field 0.5 T with velocity 10⁵ m/s at 30°. Calculate force. (e=1.6×10⁻¹⁹ C)',
                'A conductor of length 0.5 m carrying current 8 A is placed perpendicular to field 0.2 T. Find force.',
                'Charged particle of charge 2 μC, mass 10⁻⁶ kg moves in circular path of radius 0.1 m in field 0.5 T. Find velocity.'
            ],
            'Electromagnetic Induction': [
                'Magnetic flux through coil changes from 0.1 Wb to 0.5 Wb in 0.2 s. Calculate induced emf.',
                'A coil of 100 turns and area 0.05 m² rotates at 60 rpm in field 0.2 T. Find maximum emf.',
                'A rod of length 0.5 m moves at 10 m/s perpendicular to field 0.4 T. Calculate induced emf.',
                'Self inductance of coil is 2 H. If current changes at rate 5 A/s, find induced emf.'
            ],

            // MODERN PHYSICS
            'Photoelectric Effect': [
                'Work function of metal is 2 eV. Light of wavelength 400 nm is incident. Find maximum KE of photoelectrons. (h=6.63×10⁻³⁴ J·s, c=3×10⁸ m/s)',
                'Threshold frequency for metal is 5×10¹⁴ Hz. Calculate work function in eV. (h=6.63×10⁻³⁴ J·s, 1 eV=1.6×10⁻¹⁹ J)',
                'Light of frequency 6×10¹⁴ Hz ejects electrons with maximum velocity 4×10⁵ m/s. Find work function. (m=9.1×10⁻³¹ kg)',
                'Stopping potential for photoelectrons is 2 V. Calculate maximum kinetic energy in eV.'
            ],
            'Atomic Structure': [
                'Calculate energy of electron in first Bohr orbit of hydrogen. (E₁ = -13.6 eV)',
                'Electron transitions from n=3 to n=2 in hydrogen. Calculate wavelength of emitted photon. (R=1.097×10⁷ m⁻¹)',
                'Radius of first Bohr orbit is 0.53 Å. Find radius of third orbit.',
                'Energy required to remove electron from ground state of hydrogen atom is:'
            ],
            'Radioactivity': [
                'Half-life of radioactive substance is 10 days. What fraction remains after 30 days?',
                'Decay constant of isotope is 0.693 per year. Calculate half-life.',
                'Initially 10⁸ nuclei, after 3 half-lives, how many remain?',
                'Activity of sample reduces to 1/16th in 80 days. Find half-life.'
            ],
            'Nuclear Reactions': [
                'In nuclear fission, mass defect of 0.1 u is converted to energy. Calculate energy released. (1 u = 931 MeV)',
                'Binding energy per nucleon of Fe-56 is 8.8 MeV. Total binding energy of nucleus is:',
                'In fusion reaction 2H + 3H → 4He + n, energy released is 17.6 MeV. Mass defect in u is:',
                'Calculate Q-value of reaction if mass defect is 0.005 u. (c² = 931 MeV/u)'
            ],

            // WAVES
            'Sound Waves': [
                'Speed of sound in air is 340 m/s. Calculate wavelength of sound of frequency 680 Hz.',
                'Two waves of frequencies 256 Hz and 260 Hz produce beats. Calculate beat frequency.',
                'A closed organ pipe produces fundamental frequency 250 Hz. Length of pipe is: (v=340 m/s)',
                'Intensity level increases by 20 dB. By what factor does intensity increase?'
            ],
            'Electromagnetic Waves': [
                'Calculate energy of photon of wavelength 600 nm. (h=6.63×10⁻³⁴ J·s, c=3×10⁸ m/s)',
                'Radio waves of frequency 1 MHz travel in air. Find wavelength. (c=3×10⁸ m/s)',
                'X-rays have wavelength 0.1 nm. Calculate frequency.',
                'Energy of photon is 2 eV. Find its wavelength.'
            ],
            'Doppler Effect': [
                'Source of frequency 500 Hz moves toward stationary observer at 34 m/s. Find observed frequency. (v=340 m/s)',
                'Observer moves away from stationary source at 17 m/s. Source frequency is 1000 Hz. Find observed frequency. (v=340 m/s)',
                'Source and observer both move toward each other at 20 m/s. Source frequency 600 Hz. Find observed frequency. (v=340 m/s)',
                'Apparent frequency is 10% more than actual. If source moves toward observer at speed v_s, find v_s/v ratio.'
            ],

            // KINEMATICS
            'Motion in Straight Line': [
                'A car accelerates from 10 m/s to 30 m/s in 5 seconds. Calculate acceleration.',
                'A body starts from rest with acceleration 2 m/s². Find velocity after 10 seconds.',
                'A stone is dropped from height 80 m. Find time to reach ground. (g=10 m/s²)',
                'A particle has initial velocity 20 m/s and acceleration -4 m/s². Find distance before stopping.'
            ],
            'Motion in Plane': [
                'A projectile is fired at 50 m/s at angle 37°. Calculate maximum height. (g=10 m/s², sin37°=0.6)',
                'Range of projectile is R when fired at 30°. Find range at 60° with same speed.',
                'Time of flight of projectile is 6 s. Calculate maximum height. (g=10 m/s²)',
                'Horizontal range of projectile is 100 m when fired at 45°. Find initial velocity. (g=10 m/s²)'
            ],
            'Projectile Motion': [
                'A ball is thrown horizontally from height 20 m with speed 15 m/s. Find horizontal distance traveled. (g=10 m/s²)',
                'Projectile reaches maximum height H in time t. What is its initial velocity?',
                'Two projectiles are fired at angles 30° and 60° with same speed. Compare their ranges.',
                'A projectile is fired at 40 m/s at 30°. Find horizontal and vertical components of velocity.'
            ],
            'Relative Motion': [
                'Two trains move in opposite directions at 60 km/h and 40 km/h. Find relative velocity.',
                'Swimmer swims at 5 m/s in still water. River flows at 3 m/s. To cross perpendicularly, find direction to swim.',
                'Two cars A and B move at 80 km/h and 60 km/h in same direction. Find relative velocity of A w.r.t B.',
                'Rain appears to fall vertically to person moving at 5 m/s. Actual rain velocity is 10 m/s at angle θ. Find θ.'
            ]
        },

        chemistry: {
            // ORGANIC CHEMISTRY
            'Hydrocarbons': [
                'Which of the following is an unsaturated hydrocarbon?',
                'The general formula for alkanes is CₙH₂ₙ₊₂. What is the formula for pentane?',
                'Which reaction converts alkenes to alkanes?',
                'Number of structural isomers of C₅H₁₂ is:'
            ],
            'Alcohols': [
                'Oxidation of primary alcohol gives:',
                'Lucas test is used to distinguish between:',
                'Dehydration of ethanol at 170°C gives:',
                'Which alcohol is resistant to oxidation?'
            ],
            'Aldehydes': [
                'Fehling\'s test is positive for:',
                'Reduction of aldehyde with LiAlH₄ gives:',
                'Aldol condensation involves:',
                'Formaldehyde reacts with ammonia to form:'
            ],
            'Carboxylic Acids': [
                'Acetic acid reacts with PCl₅ to give:',
                'Decarboxylation of sodium acetate gives:',
                'pKa of acetic acid is approximately:',
                'Esterification of ethanoic acid with ethanol in presence of H₂SO₄ gives:'
            ],
            'Amines': [
                'Carbylamine reaction is given by:',
                'Basicity order of amines in aqueous solution:',
                'Diazotization of aniline gives:',
                'Gabriel phthalimide synthesis is used to prepare:'
            ],
            'Polymers': [
                'Nylon-6,6 is an example of:',
                'Natural rubber is polymer of:',
                'Teflon is polymer of:',
                'Bakelite is formed by condensation of:'
            ],

            // INORGANIC CHEMISTRY
            'Periodic Table': [
                'Elements in the same group have similar properties because they have:',
                'The atomic radius generally decreases across a period due to:',
                'Which element has the highest electronegativity?',
                'Ionization energy increases across period because:'
            ],
            'Chemical Bonding': [
                'In NH₃ molecule, hybridization of nitrogen is:',
                'Which molecule has zero dipole moment?',
                'Bond order of O₂ molecule is:',
                'Number of sigma and pi bonds in C₂H₂ are:'
            ],
            'p-Block Elements': [
                'Nitrogen does not form pentahalides due to:',
                'Ozone depletes by reaction with:',
                'Most abundant noble gas in atmosphere is:',
                'Phosphorus has oxidation state +5 in:'
            ],
            'd-Block Elements': [
                'Transition metals show variable oxidation states because:',
                'Color in transition metal compounds is due to:',
                'K₂Cr₂O₇ in acidic medium acts as:',
                'Most stable oxidation state of manganese is:'
            ],
            'Coordination Compounds': [
                'IUPAC name of [Fe(CN)₆]⁴⁻ is:',
                'Crystal field splitting in octahedral complex:',
                'Coordination number of Ni in [Ni(CO)₄] is:',
                'Which ligand causes maximum crystal field splitting?'
            ],

            // PHYSICAL CHEMISTRY
            'Thermodynamics': [
                'For exothermic reaction, ΔH is:',
                'Entropy of universe in spontaneous process:',
                'Gibbs free energy at equilibrium is:',
                'For reaction N₂ + 3H₂ → 2NH₃, ΔH = -92 kJ. Heat released when 2 moles N₂ react is:'
            ],
            'Electrochemistry': [
                'Standard electrode potential of hydrogen electrode is:',
                'In electrolytic cell, reduction occurs at:',
                'Nernst equation relates electrode potential with:',
                'Equivalent conductance of strong electrolyte at infinite dilution:'
            ],
            'Chemical Kinetics': [
                'Rate constant of first order reaction has unit:',
                'Half-life of first order reaction is independent of:',
                'Activation energy of reaction is:',
                'For reaction A → B, rate = k[A]². Order of reaction is:'
            ],
            'Solutions': [
                'Molality of solution is defined as:',
                'Raoult\'s law is applicable to:',
                'Osmotic pressure is colligative property because it depends on:',
                'Depression in freezing point of 0.1 M NaCl solution is: (Kf = 1.86 K kg/mol)'
            ],
            'Surface Chemistry': [
                'Adsorption is accompanied by:',
                'Tyndall effect is shown by:',
                'Emulsifying agent in emulsion:',
                'Brownian motion in colloids is due to:'
            ],

            // ANALYTICAL CHEMISTRY
            'Qualitative Analysis': [
                'White precipitate of AgCl is soluble in:',
                'Brown ring test is used for detection of:',
                'Flame test for sodium gives:',
                'Group reagent for Group II cations is:'
            ],
            'Quantitative Analysis': [
                'In volumetric analysis, indicator used for HCl-NaOH titration is:',
                'Oxidation number of Mn in KMnO₄ is:',
                'Equivalent weight of H₂SO₄ is:',
                'In iodometric titration, iodine is:'
            ],
            'Spectroscopy': [
                'UV spectroscopy is based on:',
                'IR spectroscopy is useful for identifying:',
                'NMR spectroscopy gives information about:',
                'Mass spectrometry determines:'
            ],
            'Chromatography': [
                'Rf value in TLC is:',
                'Stationary phase in column chromatography:',
                'HPLC stands for:',
                'Gas chromatography is best suited for:'
            ]
        },

        mathematics: {
            // ALGEBRA
            'Quadratic Equations': [
                'Find the roots of the equation x² - 5x + 6 = 0',
                'The sum of roots of ax² + bx + c = 0 is given by:',
                'If one root of x² - 6x + k = 0 is 2, find k.',
                'For equation x² + 3x - 4 = 0, product of roots is:'
            ],
            'Sequences and Series': [
                'Sum of first n natural numbers is:',
                'nth term of A.P. with first term a and common difference d is:',
                'Sum of infinite G.P. with first term a and common ratio r (|r|<1) is:',
                'If 2, x, 8 are in G.P., find x.'
            ],
            'Binomial Theorem': [
                'Expansion of (1+x)ⁿ is given by:',
                'Middle term in expansion of (x+y)⁶ is:',
                'General term in (a+b)ⁿ is:',
                'Find coefficient of x³ in (1+2x)⁵'
            ],
            'Permutations': [
                'Number of ways to arrange 5 books on shelf is:',
                'Number of 3-digit numbers from digits 1,2,3,4,5 without repetition:',
                'Value of ⁿPᵣ is:',
                'If ⁿP₃ = 60, find n.'
            ],
            'Matrices': [
                'If A is 2×3 matrix and B is 3×2 matrix, order of AB is:',
                'Determinant of identity matrix is:',
                'If A is invertible matrix, then |A⁻¹| equals:',
                'Transpose of (AB) is:'
            ],

            // CALCULUS
            'Limits': [
                'Value of lim(x→0) (sin x)/x is:',
                'lim(x→∞) (1 + 1/x)ˣ equals:',
                'lim(x→0) (eˣ - 1)/x is:',
                'lim(x→0) (1 - cos x)/x² equals:'
            ],
            'Differentiation': [
                'Find dy/dx if y = x³ + 2x² + 5',
                'The derivative of sin(x) is:',
                'If y = eˣ, then dy/dx equals:',
                'd/dx(x²sinx) equals:'
            ],
            'Integration': [
                'Integral of x² dx is:',
                '∫(1/x) dx equals:',
                '∫eˣ dx is:',
                '∫cos x dx equals:'
            ],
            'Differential Equations': [
                'Order of differential equation dy/dx = x² + y is:',
                'Degree of (d²y/dx²)³ + (dy/dx)² = 0 is:',
                'General solution of dy/dx = 0 is:',
                'Integrating factor of dy/dx + Py = Q is:'
            ],
            'Applications': [
                'Slope of tangent to curve y = x² at x = 2 is:',
                'Maximum value of sin x is:',
                'For which value of x, function f(x) = x² - 4x + 5 has minimum:',
                'Area under curve y = x from x = 0 to x = 2 is:'
            ],

            // TRIGONOMETRY
            'Ratios': [
                'Value of sin 30° is:',
                'tan 45° equals:',
                'cos 60° is:',
                'sin² θ + cos² θ equals:'
            ],
            'Identities': [
                'tan θ is equal to:',
                'sec² θ - tan² θ equals:',
                '1 + cot² θ is:',
                'sin(A+B) equals:'
            ],
            'Equations': [
                'General solution of sin θ = 0 is:',
                'Principal value of tan⁻¹(1) is:',
                'If sin θ = 1/2, then θ equals:',
                'Solutions of cos θ = -1 are:'
            ],
            'Inverse Functions': [
                'Domain of sin⁻¹ x is:',
                'Range of cos⁻¹ x is:',
                'tan⁻¹(0) equals:',
                'sin⁻¹(sin π/6) is:'
            ],
            'Heights and Distances': [
                'From top of 100 m tower, angle of depression of object is 30°. Distance of object from tower base is:',
                'If height of tower is h and angle of elevation from point d meters away is 45°, then h equals:',
                'Angle of elevation of sun when shadow of pole equals its height is:',
                'Man walks 10 m toward tower, angle changes from 30° to 60°. Height of tower is:'
            ],

            // COORDINATE GEOMETRY
            'Straight Lines': [
                'Slope of line joining (1,2) and (3,6) is:',
                'Equation of line with slope 2 and y-intercept 3 is:',
                'Distance between points (0,0) and (3,4) is:',
                'Lines y = 2x + 1 and y = 2x - 3 are:'
            ],
            'Circles': [
                'Equation of circle with center (0,0) and radius r is:',
                'Center of circle x² + y² - 4x - 6y + 9 = 0 is:',
                'Radius of circle (x-2)² + (y-3)² = 25 is:',
                'Circle with diameter endpoints (0,0) and (2,4) has equation:'
            ],
            'Parabola': [
                'Standard equation of parabola with focus (a,0) and directrix x = -a is:',
                'Vertex of parabola y² = 4ax is:',
                'Focus of parabola y² = 8x is:',
                'Equation of axis of parabola y² = 4ax is:'
            ],
            'Ellipse': [
                'Equation of ellipse with major axis 2a and minor axis 2b is:',
                'Eccentricity of ellipse is less than:',
                'For ellipse x²/25 + y²/16 = 1, length of major axis is:',
                'Sum of focal distances of any point on ellipse equals:'
            ],
            'Hyperbola': [
                'Standard equation of hyperbola is:',
                'Eccentricity of hyperbola is greater than:',
                'Asymptotes of rectangular hyperbola xy = c² are:',
                'For hyperbola x²/a² - y²/b² = 1, foci are at:'
            ],

            // VECTORS
            'Vector Algebra': [
                'If a and b are vectors, then a + b equals:',
                'Zero vector has magnitude:',
                'Unit vector in direction of a is:',
                'Position vector of point (3,4) is:'
            ],
            'Dot Product': [
                'If a·b = 0, then vectors are:',
                'a·a equals:',
                'Dot product is maximum when angle between vectors is:',
                'Work done W = F·s is example of:'
            ],
            'Cross Product': [
                'a×b is perpendicular to:',
                'If a×b = 0, then vectors are:',
                'Magnitude of a×b when angle is 90° is:',
                'i×j equals:'
            ],
            '3D Geometry': [
                'Distance between points (1,2,3) and (4,6,8) is:',
                'Direction cosines l, m, n satisfy:',
                'Equation of plane passing through (a,b,c) and perpendicular to vector (l,m,n) is:',
                'Angle between two planes is:'
            ],

            // PROBABILITY
            'Basic Concepts': [
                'Probability of sure event is:',
                'If P(A) = 0.4 and P(B) = 0.3, and A, B are independent, then P(A∩B) equals:',
                'For mutually exclusive events A and B, P(A∪B) equals:',
                'Probability of impossible event is:'
            ],
            'Conditional Probability': [
                'P(A|B) is defined as:',
                'If A and B are independent, then P(A|B) equals:',
                'P(A∩B) equals:',
                'Formula for P(A∪B) is:'
            ],
            'Bayes Theorem': [
                'Bayes theorem gives:',
                'If events A₁, A₂, ..., Aₙ form partition and B is any event, then P(Aᵢ|B) equals:',
                'Law of total probability states:',
                'Prior and posterior probabilities are related by:'
            ],
            'Random Variables': [
                'Expected value of discrete random variable X is:',
                'Variance of random variable is:',
                'If X and Y are independent, then E(XY) equals:',
                'Standard deviation σ is:'
            ],

            // STATISTICS
            'Mean': [
                'Arithmetic mean of n observations is:',
                'For frequency distribution, mean equals:',
                'Geometric mean of a and b is:',
                'Harmonic mean of n numbers is:'
            ],
            'Median': [
                'For odd number of observations, median is:',
                'For even number of observations, median is:',
                'In frequency distribution, median class is:',
                'Median of 3,1,5,7,9 is:'
            ],
            'Mode': [
                'Mode is:',
                'For grouped data, mode formula uses:',
                'A distribution can have:',
                'For normal distribution, mean, median, mode are:'
            ],
            'Standard Deviation': [
                'Standard deviation is square root of:',
                'For data 2,4,6,8, standard deviation is:',
                'If each observation is multiplied by k, standard deviation becomes:',
                'Coefficient of variation is:'
            ],
            'Correlation': [
                'Correlation coefficient r lies between:',
                'If r = 1, correlation is:',
                'If r = 0, variables are:',
                'Covariance formula is:'
            ],

            // COMPLEX NUMBERS
            'Operations': [
                'If z = a + ib, then conjugate z̄ equals:',
                'Modulus of z = 3 + 4i is:',
                'i² equals:',
                'Product of z and z̄ is:'
            ],
            'Argand Plane': [
                'In Argand plane, x-axis represents:',
                'Argument of complex number is:',
                'Polar form of z = r(cos θ + i sin θ) can be written as:',
                'If |z| = 1, then z lies on:'
            ],
            'De Moivres Theorem': [
                'According to De Moivre\'s theorem, (cos θ + i sin θ)ⁿ equals:',
                'nth roots of unity are:',
                'Sum of nth roots of unity is:',
                'Product of nth roots of unity is:'
            ],
            'Roots': [
                'Cube roots of unity are:',
                'If ω is cube root of unity, then 1 + ω + ω² equals:',
                'Square roots of i are:',
                'Number of nth roots of a complex number is:'
            ]
        }
    };

    const subjectQuestions = questions[subject];
    const conceptQuestions = subjectQuestions[concept] || [];

    if (conceptQuestions.length > 0) {
        return conceptQuestions[number % conceptQuestions.length];
    }

    // Fallback with more specific placeholder
    return `Solve this ${concept} problem from ${topic}: Given the standard conditions, calculate the required value.`;
}

async function generateOptions(subject, concept, questionText) {
    // Generate appropriate options based on subject and concept
    const optionSets = {
        physics: {
            // MECHANICS
            'Newtons Laws': ['5 m/s²', '10 m/s²', '2.5 m/s²', '20 m/s²'],
            'Work Energy': ['50 J', '100 J', '25 J', '200 J'],
            'Momentum': ['50 kg·m/s', '100 kg·m/s', '9 kg·m/s', '18 kg·m/s'],
            'Rotational Motion': ['6.28 rad/s', '3.14 rad/s', '1.57 rad/s', '12.56 rad/s'],
            'Gravitation': ['3.33×10⁻⁹ N', '6.67×10⁻⁹ N', '1.11×10⁻⁹ N', '13.34×10⁻⁹ N'],

            // THERMODYNAMICS
            'Laws of Thermodynamics': ['200 J', '500 J', '300 J', '100 J'],
            'Heat Transfer': ['167 kJ', '334 kJ', '21 kJ', '50 kJ'],
            'Kinetic Theory': ['483 m/s', '517 m/s', '450 m/s', '600 m/s'],
            'Entropy': ['Increases', 'Decreases', 'Remains constant', 'Becomes zero'],

            // OPTICS
            'Reflection': ['-60 cm', '-30 cm', '-15 cm', '-45 cm'],
            'Refraction': ['19.5°', '30°', '42°', '28°'],
            'Lens': ['30 cm', '60 cm', '15 cm', '45 cm'],
            'Mirror': ['-60 cm', '-20 cm', '-30 cm', '-10 cm'],
            'Wave Optics': ['1.2 mm', '0.6 mm', '2.4 mm', '0.3 mm'],
            'Interference': ['0.267 mm', '0.4 mm', '0.6 mm', '0.8 mm'],
            'Mirror': ['-10 cm', '-20 cm', '-30 cm', '-40 cm'],
            'Wave Optics': ['5×10⁻⁷ m', '6×10⁻⁷ m', '4×10⁻⁷ m', '7×10⁻⁷ m'],

            // ELECTRICITY
            'Coulombs Law': ['0.6 N', '0.3 N', '0.9 N', '1.2 N'],
            'Electric Field': ['5×10⁵ N/C', '10×10⁵ N/C', '2.5×10⁵ N/C', '3×10⁵ N/C'],
            'Potential': ['1.8×10⁵ V', '9×10⁴ V', '4.5×10⁴ V', '2.7×10⁵ V'],
            'Capacitance': ['500 μC', '1000 μC', '250 μC', '750 μC'],
            'Current': ['600 C', '300 C', '900 C', '1200 C'],

            // MAGNETISM
            'Magnetic Field': ['10 μN', '5 μN', '20 μN', '15 μN'],
            'Force on Moving Charges': ['1.26×10⁻⁵ T', '6.28×10⁻⁶ T', '2.51×10⁻⁵ T', '3.14×10⁻⁶ T'],
            'Electromagnetic Induction': ['2 V', '4 V', '1 V', '8 V'],

            // MODERN PHYSICS
            'Photoelectric Effect': ['0.5 eV', '1.1 eV', '2.0 eV', '3.1 eV'],
            'Atomic Structure': ['-13.6 eV', '-3.4 eV', '-1.51 eV', '-0.85 eV'],
            'Radioactivity': ['1/8', '1/4', '1/16', '1/2'],
            'Nuclear Reactions': ['931 MeV', '1862 MeV', '465 MeV', '233 MeV'],

            // WAVES
            'Sound Waves': ['0.5 m', '1 m', '0.25 m', '2 m'],
            'Electromagnetic Waves': ['3.31×10⁻¹⁹ J', '6.63×10⁻¹⁹ J', '1.66×10⁻¹⁹ J', '9.95×10⁻¹⁹ J'],
            'Doppler Effect': ['550 Hz', '500 Hz', '600 Hz', '450 Hz'],
            'Interference': ['Constructive', 'Destructive', 'Partially constructive', 'No interference'],

            // KINEMATICS
            'Motion in Straight Line': ['4 m/s²', '2 m/s²', '8 m/s²', '6 m/s²'],
            'Motion in Plane': ['125 m', '100 m', '75 m', '150 m'],
            'Projectile Motion': ['2 s', '4 s', '1 s', '8 s'],
            'Relative Motion': ['100 km/h', '20 km/h', '80 km/h', '140 km/h']
        },

        chemistry: {
            // ORGANIC CHEMISTRY
            'Hydrocarbons': ['Ethene (C₂H₄)', 'Methane (CH₄)', 'Ethane (C₂H₆)', 'Propane (C₃H₈)'],
            'Alcohols': ['Aldehyde', 'Ketone', 'Carboxylic acid', 'Ester'],
            'Aldehydes': ['Aldehydes', 'Ketones', 'Alcohols', 'Esters'],
            'Carboxylic Acids': ['Acetyl chloride (CH₃COCl)', 'Acetic anhydride', 'Ethyl acetate', 'Acetone'],
            'Amines': ['Primary amines', 'Secondary amines', 'Tertiary amines', 'All amines'],
            'Polymers': ['Condensation polymer', 'Addition polymer', 'Natural polymer', 'Copolymer'],

            // INORGANIC CHEMISTRY
            'Periodic Table': ['Same number of valence electrons', 'Same atomic mass', 'Same atomic number', 'Same period'],
            'Chemical Bonding': ['sp³', 'sp²', 'sp', 'sp³d'],
            'p-Block Elements': ['Absence of d-orbitals', 'Small size', 'High electronegativity', 'Low ionization energy'],
            'd-Block Elements': ['Variable oxidation states', 'Colored ions', 'Catalytic activity', 'All of these'],
            'Coordination Compounds': ['Hexacyanoferrate(II) ion', 'Ferrocyanide ion', 'Iron(II) hexacyanide', 'Hexaferrocyanide'],

            // PHYSICAL CHEMISTRY
            'Thermodynamics': ['Negative', 'Positive', 'Zero', 'Infinite'],
            'Electrochemistry': ['0 V', '+0.76 V', '-0.76 V', '+1.23 V'],
            'Chemical Kinetics': ['s⁻¹', 'mol L⁻¹ s⁻¹', 'mol⁻¹ L s⁻¹', 'dimensionless'],
            'Solutions': ['moles/kg solvent', 'moles/L solution', 'g/L', 'mol fraction'],
            'Surface Chemistry': ['Decrease in free energy', 'Increase in entropy', 'Exothermic process', 'Reversible process'],

            // ANALYTICAL CHEMISTRY
            'Qualitative Analysis': ['Ammonia solution', 'Nitric acid', 'Aqua regia', 'Hydrochloric acid'],
            'Quantitative Analysis': ['Phenolphthalein', 'Methyl orange', 'Litmus', 'Universal indicator'],
            'Spectroscopy': ['Electronic transitions', 'Vibrational transitions', 'Rotational transitions', 'Nuclear transitions'],
            'Chromatography': ['Distance moved by solute / Distance moved by solvent', 'Retention factor', 'Mobility ratio', 'All of these']
        },

        mathematics: {
            // ALGEBRA
            'Quadratic Equations': ['x = 2, 3', 'x = -2, -3', 'x = 2, -3', 'x = -2, 3'],
            'Sequences and Series': ['n(n+1)/2', 'n(n-1)/2', 'n²', '2n'],
            'Binomial Theorem': ['ⁿCᵣ aⁿ⁻ʳ bʳ', 'ⁿPᵣ aʳ bⁿ⁻ʳ', 'n! aʳ bⁿ⁻ʳ', 'ⁿCᵣ aʳ bⁿ⁻ʳ'],
            'Permutations': ['120', '60', '24', '720'],
            'Matrices': ['2×2', '3×3', '2×3', '3×2'],
            'Combinations': ['10', '20', '15', '5'],

            // CALCULUS
            'Limits': ['1', '0', '∞', 'e'],
            'Differentiation': ['3x² + 4x', '2x² + 4x', '3x² + 4', 'x³ + 2x'],
            'Integration': ['x³/3 + C', 'x⁴/4 + C', '3x² + C', 'x²/2 + C'],
            'Differential Equations': ['1', '2', '3', '0'],
            'Applications': ['4', '2', '8', '1'],

            // TRIGONOMETRY
            'Ratios': ['1/2', '1/√2', '√3/2', '1'],
            'Identities': ['sin θ/cos θ', 'cos θ/sin θ', '1/sin θ', '1/cos θ'],
            'Equations': ['nπ, n∈Z', '2nπ, n∈Z', '(2n+1)π/2, n∈Z', 'nπ/2, n∈Z'],
            'Inverse Functions': ['[-1, 1]', '[0, 1]', '[-∞, ∞]', '[0, π]'],
            'Heights and Distances': ['100√3 m', '50√3 m', '200 m', '100 m'],

            // COORDINATE GEOMETRY
            'Straight Lines': ['2', '1/2', '-2', '-1/2'],
            'Circles': ['x² + y² = r²', '(x-h)² + (y-k)² = r²', 'x² + y² = 1', 'x + y = r'],
            'Parabola': ['y² = 4ax', 'y² = 2ax', 'x² = 4ay', 'x² = 2ay'],
            'Ellipse': ['x²/a² + y²/b² = 1', 'x²/b² + y²/a² = 1', 'x² + y² = 1', 'xy = a²'],
            'Hyperbola': ['x²/a² - y²/b² = 1', 'x²/a² + y²/b² = 1', 'x² - y² = 1', 'xy = c²'],

            // VECTORS
            'Vector Algebra': ['a + b', 'a - b', 'b - a', '|a + b|'],
            'Dot Product': ['Perpendicular', 'Parallel', 'At 45°', 'At 60°'],
            'Cross Product': ['Both a and b', 'Only a', 'Only b', 'Neither a nor b'],
            '3D Geometry': ['√29', '√14', '√26', '√50'],

            // PROBABILITY
            'Basic Concepts': ['1', '0', '0.5', '∞'],
            'Conditional Probability': ['P(A∩B)/P(B)', 'P(A)×P(B)', 'P(A)+P(B)', 'P(A|B)×P(B)'],
            'Bayes Theorem': ['Posterior probability', 'Prior probability', 'Likelihood', 'Joint probability'],
            'Random Variables': ['E(X) = Σ x·P(x)', 'E(X) = ΣP(x)', 'E(X) = Σx²·P(x)', 'E(X) = 1/n Σx'],

            // STATISTICS
            'Mean': ['Σx/n', 'Σf·x/Σf', '(Σx)/n', 'All of these'],
            'Median': ['Middle value', 'Most frequent value', 'Average value', 'Extreme value'],
            'Mode': ['Most frequent value', 'Middle value', 'Average value', 'Least frequent value'],
            'Standard Deviation': ['√Variance', 'Variance', 'Mean', 'Range'],
            'Correlation': ['[-1, 1]', '[0, 1]', '[-∞, ∞]', '[0, ∞]'],

            // COMPLEX NUMBERS
            'Operations': ['a - ib', 'a + ib', '-a + ib', '-a - ib'],
            'Argand Plane': ['Real numbers', 'Imaginary numbers', 'Both real and imaginary', 'Neither'],
            'De Moivres Theorem': ['cos(nθ) + i sin(nθ)', 'cos(θ/n) + i sin(θ/n)', 'n(cos θ + i sin θ)', 'cos θ + i sin θ'],
            'Roots': ['1, ω, ω²', '1, -1, i', '1, i, -i', '1, 2, 3']
        }
    };

    // Get options for the specific concept
    const subjectOptions = optionSets[subject];
    if (subjectOptions && subjectOptions[concept]) {
        return subjectOptions[concept];
    }

    // Try to generate contextual options based on question text
    if (questionText) {
        // For numeric questions, generate reasonable options
        if (questionText.includes('Calculate') || questionText.includes('Find') || questionText.includes('What is')) {
            if (subject === 'physics') {
                return ['50 units', '100 units', '75 units', '25 units'];
            } else if (subject === 'chemistry') {
                return ['Option A', 'Option B', 'Option C', 'Option D'];
            } else if (subject === 'mathematics') {
                return ['10', '20', '15', '5'];
            }
        }
    }

    // Subject-specific default options
    const defaultOptions = {
        physics: ['Answer A', 'Answer B', 'Answer C', 'Answer D'],
        chemistry: ['Option A', 'Option B', 'Option C', 'Option D'],
        mathematics: ['Result A', 'Result B', 'Result C', 'Result D']
    };

    return defaultOptions[subject] || ['Option A', 'Option B', 'Option C', 'Option D'];
}

function shuffleOptions(questionData) {
    const options = questionData.options;
    const correct = options[questionData.correctAnswer];

    // Shuffle array
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }

    // Update correct answer index
    questionData.correctAnswer = options.indexOf(correct);
}

function animateMockProgress(start, end, duration) {
    return new Promise(resolve => {
        const startTime = Date.now();
        const progressFill = document.getElementById('mockProgressFill');
        const progressText = document.getElementById('mockProgressText');

        function update() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(start + (end - start) * (elapsed / duration), end);

            progressFill.style.width = `${progress}%`;
            progressText.textContent = `${Math.round(progress)}%`;

            if (elapsed < duration) {
                requestAnimationFrame(update);
            } else {
                resolve();
            }
        }

        update();
    });
}

// ==================== EXAM INTERFACE ====================

function startMockExam() {
    // Hide loading
    document.getElementById('mockTestLoading').style.display = 'none';

    // Show exam
    document.getElementById('mockTestExam').style.display = 'block';

    // Update title
    const subjectNames = {
        'physics': 'Physics',
        'chemistry': 'Chemistry',
        'mathematics': 'Mathematics'
    };
    document.getElementById('mockExamTitle').textContent = `${subjectNames[mockTestState.subject]} Mock Test`;

    // Generate question navigation
    generateQuestionNavigation();

    // Start timer
    startTimer();

    // Display first question
    displayQuestion(0);
}

function generateQuestionNavigation() {
    const navContainer = document.getElementById('mockQuestionNav');
    navContainer.innerHTML = '';

    for (let i = 0; i < mockTestState.questions.length; i++) {
        const btn = document.createElement('button');
        btn.className = 'question-nav-btn';
        btn.textContent = i + 1;
        btn.onclick = () => displayQuestion(i);
        navContainer.appendChild(btn);
    }
}

function updateQuestionNavigation() {
    const buttons = document.querySelectorAll('.question-nav-btn');

    buttons.forEach((btn, index) => {
        btn.classList.remove('answered', 'active', 'marked');

        if (index === mockTestState.currentQuestion) {
            btn.classList.add('active');
        }

        if (mockTestState.answers[index] !== undefined) {
            btn.classList.add('answered');
        }

        if (mockTestState.markedForReview.has(index)) {
            btn.classList.add('marked');
        }
    });
}

function displayQuestion(index) {
    mockTestState.currentQuestion = index;
    const question = mockTestState.questions[index];

    // Update question number
    document.getElementById('currentQuestionNumber').textContent = `Question ${index + 1}`;

    // Update question text
    document.getElementById('mockQuestionText').textContent = question.question;

    // Update options
    const optionsContainer = document.getElementById('mockOptions');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, i) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option-item';
        if (mockTestState.answers[index] === i) {
            optionDiv.classList.add('selected');
        }

        optionDiv.innerHTML = `
            <input type="radio" name="answer" class="option-radio" value="${i}" 
                   ${mockTestState.answers[index] === i ? 'checked' : ''}
                   onchange="selectAnswer(${i})">
            <span class="option-text">${String.fromCharCode(65 + i)}. ${option}</span>
        `;

        optionDiv.onclick = () => {
            const radio = optionDiv.querySelector('input[type="radio"]');
            radio.checked = true;
            selectAnswer(i);
        };

        optionsContainer.appendChild(optionDiv);
    });

    // Update navigation buttons
    document.getElementById('prevBtn').disabled = index === 0;
    document.getElementById('nextBtn').disabled = index === mockTestState.questions.length - 1;

    // Update stats
    updateStats();

    // Update navigation
    updateQuestionNavigation();
}

function selectAnswer(optionIndex) {
    mockTestState.answers[mockTestState.currentQuestion] = optionIndex;

    // Update UI
    document.querySelectorAll('.option-item').forEach((item, i) => {
        if (i === optionIndex) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });

    updateStats();
    updateQuestionNavigation();
}

function clearAnswer() {
    delete mockTestState.answers[mockTestState.currentQuestion];
    displayQuestion(mockTestState.currentQuestion);
}

function navigateQuestion(direction) {
    const newIndex = mockTestState.currentQuestion + direction;
    if (newIndex >= 0 && newIndex < mockTestState.questions.length) {
        displayQuestion(newIndex);
    }
}

function updateStats() {
    const answered = Object.keys(mockTestState.answers).length;
    const notAnswered = mockTestState.questions.length - answered;
    const marked = mockTestState.markedForReview.size;

    document.getElementById('answeredCount').textContent = answered;
    document.getElementById('notAnsweredCount').textContent = notAnswered;
    document.getElementById('markedCount').textContent = marked;
}

// ==================== TIMER ====================

function startTimer() {
    mockTestState.startTime = Date.now();
    mockTestState.timeRemaining = 90 * 60; // 90 minutes

    mockTestState.timerInterval = setInterval(() => {
        mockTestState.timeRemaining--;

        if (mockTestState.timeRemaining <= 0) {
            clearInterval(mockTestState.timerInterval);
            autoSubmitTest();
            return;
        }

        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(mockTestState.timeRemaining / 60);
    const seconds = mockTestState.timeRemaining % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('mockTimer').textContent = display;

    // Change color when time is low
    const timerElement = document.querySelector('.mock-exam-timer');
    if (mockTestState.timeRemaining < 300) { // Less than 5 minutes
        timerElement.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
    }
}

function autoSubmitTest() {
    alert('Time is up! Your test will be submitted automatically.');
    submitMockTest();
}

// ==================== SUBMIT TEST ====================

function submitMockTest() {
    // Confirm submission
    const answered = Object.keys(mockTestState.answers).length;
    const total = mockTestState.questions.length;

    if (answered < total) {
        const confirm = window.confirm(
            `You have answered ${answered} out of ${total} questions.\n\n` +
            `${total - answered} questions are not answered.\n\n` +
            `Do you want to submit?`
        );

        if (!confirm) return;
    }

    // Stop timer
    if (mockTestState.timerInterval) {
        clearInterval(mockTestState.timerInterval);
    }

    mockTestState.endTime = Date.now();

    // Calculate results
    calculateResults();
}

function calculateResults() {
    let correct = 0;
    let incorrect = 0;
    let skipped = 0;

    mockTestState.questions.forEach((question, index) => {
        const userAnswer = mockTestState.answers[index];

        if (userAnswer === undefined) {
            skipped++;
        } else if (userAnswer === question.correctAnswer) {
            correct++;
        } else {
            incorrect++;
        }
    });

    const score = correct * 2; // 2 marks per question
    const percentage = (score / 100) * 100;

    // Calculate time taken
    const timeTaken = mockTestState.endTime - mockTestState.startTime;
    const minutesTaken = Math.floor(timeTaken / 60000);
    const secondsTaken = Math.floor((timeTaken % 60000) / 1000);

    // Display results
    displayResults({
        score,
        percentage,
        correct,
        incorrect,
        skipped,
        timeTaken: `${minutesTaken}:${secondsTaken.toString().padStart(2, '0')}`
    });
}

function displayResults(results) {
    // Hide exam
    document.getElementById('mockTestExam').style.display = 'none';

    // Show results
    document.getElementById('mockTestResults').style.display = 'block';

    // Update subject
    const subjectNames = {
        'physics': 'Physics',
        'chemistry': 'Chemistry',
        'mathematics': 'Mathematics'
    };
    document.getElementById('resultsSubject').textContent = `${subjectNames[mockTestState.subject]} Mock Test`;

    // Animate score
    animateScore(results.score);

    // Update stats
    document.getElementById('correctAnswers').textContent = results.correct;
    document.getElementById('incorrectAnswers').textContent = results.incorrect;
    document.getElementById('skippedAnswers').textContent = results.skipped;
    document.getElementById('timeTaken').textContent = results.timeTaken;
}

function animateScore(finalScore) {
    const scoreElement = document.getElementById('scoreValue');
    const circle = document.getElementById('scoreCircle');
    const circumference = 2 * Math.PI * 90; // radius = 90

    let currentScore = 0;
    const duration = 2000;
    const startTime = Date.now();

    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        currentScore = Math.floor(finalScore * progress);
        scoreElement.textContent = currentScore;

        // Update circle
        const percentage = currentScore / 100;
        const offset = circumference * (1 - percentage);
        circle.style.strokeDashoffset = offset;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    update();
}

// ==================== RESULTS ACTIONS ====================

function reviewAnswers() {
    // Show exam with answers highlighted
    document.getElementById('mockTestResults').style.display = 'none';
    document.getElementById('mockTestExam').style.display = 'block';
    displayQuestion(0);

    // Highlight correct/incorrect answers
    // This would show which answers were right/wrong
}

function startNewMockTest() {
    // Reset state
    mockTestState.questions = [];
    mockTestState.answers = {};
    mockTestState.markedForReview.clear();
    mockTestState.currentQuestion = 0;
    mockTestState.startTime = null;
    mockTestState.endTime = null;

    if (mockTestState.timerInterval) {
        clearInterval(mockTestState.timerInterval);
    }

    // Show subject selection
    document.getElementById('mockTestResults').style.display = 'none';
    document.getElementById('mockTestSubjectSelection').style.display = 'block';
}

function downloadResults() {
    // Create results report
    const subjectNames = {
        'physics': 'Physics',
        'chemistry': 'Chemistry',
        'mathematics': 'Mathematics'
    };

    let csv = 'MHT-CET Mock Test Results\n\n';
    csv += `Subject: ${subjectNames[mockTestState.subject]}\n`;
    csv += `Date: ${new Date().toLocaleDateString()}\n\n`;
    csv += `Score: ${document.getElementById('scoreValue').textContent}/100\n`;
    csv += `Correct: ${document.getElementById('correctAnswers').textContent}\n`;
    csv += `Incorrect: ${document.getElementById('incorrectAnswers').textContent}\n`;
    csv += `Skipped: ${document.getElementById('skippedAnswers').textContent}\n`;
    csv += `Time: ${document.getElementById('timeTaken').textContent}\n\n`;

    csv += 'Question,Your Answer,Correct Answer,Result\n';

    mockTestState.questions.forEach((q, i) => {
        const userAnswer = mockTestState.answers[i];
        const result = userAnswer === q.correctAnswer ? 'Correct' :
            userAnswer === undefined ? 'Skipped' : 'Incorrect';

        csv += `${i + 1},${userAnswer !== undefined ? String.fromCharCode(65 + userAnswer) : '-'},${String.fromCharCode(65 + q.correctAnswer)},${result}\n`;
    });

    // Download
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `MHT-CET_${subjectNames[mockTestState.subject]}_Results.csv`;
    a.click();
}


// ==================== PAST PAPERS JAVASCRIPT ====================

// Past Papers Data (2015-2024)
const pastPapersData = [
    // 2024 - Only Physics and Mathematics available
    { year: 2024, subject: 'physics', type: 'question', title: 'Physics', questions: 50, marks: 100, size: '2.1 MB' },
    { year: 2024, subject: 'mathematics', type: 'question', title: 'Mathematics', questions: 50, marks: 100, size: '1.4 MB' },

    // 2023 - Only Physics and Mathematics available
    { year: 2023, subject: 'physics', type: 'question', title: 'Physics', questions: 50, marks: 100, size: '294 KB' },
    { year: 2023, subject: 'mathematics', type: 'question', title: 'Mathematics', questions: 50, marks: 100, size: '290 KB' },

    // 2022 - All 3 subjects available
    { year: 2022, subject: 'physics', type: 'question', title: 'Physics', questions: 50, marks: 100, size: '417 KB' },
    { year: 2022, subject: 'chemistry', type: 'question', title: 'Chemistry', questions: 50, marks: 100, size: '303 KB' },
    { year: 2022, subject: 'mathematics', type: 'question', title: 'Mathematics', questions: 50, marks: 100, size: '410 KB' },

    // 2021 - All 3 subjects available
    { year: 2021, subject: 'physics', type: 'question', title: 'Physics', questions: 50, marks: 100, size: '169 KB' },
    { year: 2021, subject: 'chemistry', type: 'question', title: 'Chemistry', questions: 50, marks: 100, size: '125 KB' },
    { year: 2021, subject: 'mathematics', type: 'question', title: 'Mathematics', questions: 50, marks: 100, size: '194 KB' },

    // 2020 - All 3 subjects available
    { year: 2020, subject: 'physics', type: 'question', title: 'Physics', questions: 50, marks: 100, size: '160 KB' },
    { year: 2020, subject: 'chemistry', type: 'question', title: 'Chemistry', questions: 50, marks: 100, size: '147 KB' },
    { year: 2020, subject: 'mathematics', type: 'question', title: 'Mathematics', questions: 50, marks: 100, size: '189 KB' }
];

// Initialize Past Papers on page load
document.addEventListener('DOMContentLoaded', function () {
    // Generate papers grid
    generatePapersGrid(pastPapersData);
});

// Generate Papers Grid
function generatePapersGrid(papers) {
    const grid = document.getElementById('papersGrid');
    if (!grid) return;

    grid.innerHTML = '';

    if (papers.length === 0) {
        grid.innerHTML = `
            <div class="papers-empty">
                <div class="papers-empty-icon">📄</div>
                <div class="papers-empty-text">No papers found</div>
                <div class="papers-empty-subtext">Try adjusting your filters</div>
            </div>
        `;
        return;
    }

    papers.forEach(paper => {
        const card = document.createElement('div');
        card.className = 'paper-card';

        const subjectIcons = {
            'physics': '⚛️',
            'chemistry': '🧪',
            'mathematics': '📐'
        };

        const typeLabel = paper.type === 'question' ? 'Question Paper' : 'Answer Key';
        const typeClass = paper.type === 'question' ? 'paper-badge' : 'paper-badge';

        card.innerHTML = `
            <div class="paper-header">
                <div class="paper-year">${paper.year}</div>
                <div class="${typeClass}">${typeLabel}</div>
            </div>
            <div class="paper-title">
                ${subjectIcons[paper.subject]} MHT-CET ${paper.title}
            </div>
            <div class="paper-meta">
                <div class="paper-meta-item">
                    <span>📝</span>
                    <span>${paper.questions} Questions</span>
                </div>
                <div class="paper-meta-item">
                    <span>📊</span>
                    <span>${paper.marks} Marks</span>
                </div>
                <div class="paper-meta-item">
                    <span>📦</span>
                    <span>${paper.size}</span>
                </div>
            </div>
            <div class="paper-description">
                Official MHT-CET ${paper.year} ${paper.title} ${typeLabel} in PDF format
            </div>
            <div class="paper-actions">
                <button class="paper-download-btn" onclick="downloadPaper('${paper.year}', '${paper.subject}', '${paper.type}')">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                    </svg>
                    Download
                </button>
                <button class="paper-view-btn" onclick="viewPaper('${paper.year}', '${paper.subject}', '${paper.type}')">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                </button>
            </div>
        `;

        grid.appendChild(card);
    });

    // Update total count
    document.getElementById('totalPapers').textContent = papers.length;
}

// Filter Papers
function filterPapers() {
    const yearFilter = document.getElementById('paperYear').value;
    const subjectFilter = document.getElementById('paperSubject').value;
    const typeFilter = document.getElementById('paperType').value;

    let filtered = pastPapersData.filter(paper => {
        const yearMatch = yearFilter === 'all' || paper.year == yearFilter;
        const subjectMatch = subjectFilter === 'all' || paper.subject === subjectFilter;
        const typeMatch = typeFilter === 'all' || paper.type === typeFilter;

        return yearMatch && subjectMatch && typeMatch;
    });

    generatePapersGrid(filtered);
}

// Reset Filters
function resetFilters() {
    document.getElementById('paperYear').value = 'all';
    document.getElementById('paperSubject').value = 'all';
    document.getElementById('paperType').value = 'all';
    generatePapersGrid(pastPapersData);
}

// Download Paper
function downloadPaper(year, subject, type) {
    // Increment download counter
    const downloadCount = document.getElementById('downloadCount');
    downloadCount.textContent = parseInt(downloadCount.textContent) + 1;

    // Get paper details
    const subjectNames = {
        'physics': 'Physics',
        'chemistry': 'Chemistry',
        'mathematics': 'Mathematics'
    };

    const typeLabel = type === 'question' ? 'Question Paper' : 'Answer Key';

    // Construct PDF URL - Local files in papers folder
    // Format: papers/2024/physics-question.pdf
    const pdfUrl = `papers/${year}/${subject}-${type}.pdf`;

    // Show downloading notification
    showNotification(`Downloading ${subjectNames[subject]} ${typeLabel} (${year})...`, 'success');

    // Create download link
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = `MHT-CET_${year}_${subjectNames[subject]}_${typeLabel}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Handle download errors
    setTimeout(() => {
        // Check if file exists by trying to fetch it
        fetch(pdfUrl, { method: 'HEAD' })
            .catch(() => {
                showNotification(`File not found! Please add: ${pdfUrl}`, 'error');
            });
    }, 100);
}

// View Paper
function viewPaper(year, subject, type) {
    const subjectNames = {
        'physics': 'Physics',
        'chemistry': 'Chemistry',
        'mathematics': 'Mathematics'
    };

    const typeLabel = type === 'question' ? 'Question Paper' : 'Answer Key';

    // Construct PDF URL - Local files
    const pdfUrl = `papers/${year}/${subject}-${type}.pdf`;

    // Open in new tab
    const newWindow = window.open(pdfUrl, '_blank');

    if (newWindow) {
        showNotification(`Opening ${subjectNames[subject]} ${typeLabel}...`, 'info');
    } else {
        showNotification('Please allow pop-ups to view the paper', 'error');
    }

    // Handle view errors
    setTimeout(() => {
        fetch(pdfUrl, { method: 'HEAD' })
            .catch(() => {
                showNotification(`File not found! Please add: ${pdfUrl}`, 'error');
            });
    }, 100);
}

// Bulk Download
function bulkDownload(type) {
    if (type === 'all') {
        if (confirm(`Download all ${pastPapersData.length} papers?\n\nTotal size: ~120 MB\n\nThis will download each paper individually.`)) {
            showNotification('Starting bulk download...', 'success');

            // Download all papers with delay to prevent browser blocking
            pastPapersData.forEach((paper, index) => {
                setTimeout(() => {
                    downloadPaper(paper.year, paper.subject, paper.type);
                }, index * 500); // 500ms delay between downloads
            });
        }
    } else if (type === 'year') {
        const year = prompt('Enter year (2015-2024):');
        if (year && year >= 2015 && year <= 2024) {
            const yearPapers = pastPapersData.filter(p => p.year == year);

            if (confirm(`Download ${yearPapers.length} papers from ${year}?`)) {
                showNotification(`Downloading ${year} papers...`, 'success');

                yearPapers.forEach((paper, index) => {
                    setTimeout(() => {
                        downloadPaper(paper.year, paper.subject, paper.type);
                    }, index * 500);
                });
            }
        } else if (year) {
            showNotification('Invalid year! Please enter a year between 2015 and 2024.', 'error');
        }
    } else if (type === 'subject') {
        const subject = prompt('Enter subject (physics/chemistry/mathematics):');
        if (subject) {
            const subjectLower = subject.toLowerCase();
            if (['physics', 'chemistry', 'mathematics'].includes(subjectLower)) {
                const subjectPapers = pastPapersData.filter(p => p.subject === subjectLower);

                if (confirm(`Download ${subjectPapers.length} ${subject} papers?`)) {
                    showNotification(`Downloading ${subject} papers...`, 'success');

                    subjectPapers.forEach((paper, index) => {
                        setTimeout(() => {
                            downloadPaper(paper.year, paper.subject, paper.type);
                        }, index * 500);
                    });
                }
            } else {
                showNotification('Invalid subject! Please enter physics, chemistry, or mathematics.', 'error');
            }
        }
    }
}

// Show notification function
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Style notification
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '1rem 1.5rem';
    notification.style.background = type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6';
    notification.style.color = 'white';
    notification.style.borderRadius = '12px';
    notification.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
    notification.style.zIndex = '10000';
    notification.style.animation = 'slideIn 0.3s ease';
    notification.style.fontWeight = '600';
    notification.style.maxWidth = '400px';
    notification.style.wordWrap = 'break-word';

    // Add to document
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}


// ==================== HISTORY VIDEOS JAVASCRIPT ====================

// Play Video
function playVideo(videoPath, videoTitle) {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');
    const modalTitle = document.getElementById('videoModalTitle');

    // Set video source
    videoSource.src = videoPath;
    videoPlayer.load();

    // Set title
    modalTitle.textContent = videoTitle;

    // Show modal
    modal.classList.add('active');

    // Play video
    videoPlayer.play();

    // Increment view counter
    const viewsElement = document.getElementById('videoViews');
    if (viewsElement) {
        const currentViews = parseInt(viewsElement.textContent) || 0;
        viewsElement.textContent = currentViews + 1;
    }

    // Show notification
    if (typeof showNotification === 'function') {
        showNotification(`Playing: ${videoTitle}`, 'info');
    }
}

// Close Video Modal
function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');

    // Pause video
    videoPlayer.pause();

    // Hide modal
    modal.classList.remove('active');

    // Reset video
    videoPlayer.currentTime = 0;
}

// Download Video
function downloadVideo(videoPath, fileName) {
    // Create download link
    const a = document.createElement('a');
    a.href = videoPath;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Show notification
    if (typeof showNotification === 'function') {
        showNotification(`Downloading: ${fileName}`, 'success');
    }
}

// Close modal on ESC key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeVideoModal();
    }
});


// ==================== MOCK TESTS NAVIGATION ====================

function showMockType(type) {
    const mockTypeSelection = document.getElementById('mockTypeSelection');
    const mhtCetSection = document.getElementById('mhtCetSection');
    const boardSection = document.getElementById('boardSection');

    mockTypeSelection.style.display = 'none';

    if (type === 'mhtcet') {
        mhtCetSection.style.display = 'block';
        boardSection.style.display = 'none';
    } else if (type === 'board') {
        boardSection.style.display = 'block';
        mhtCetSection.style.display = 'none';
    }
}

function backToMockTypes() {
    const mockTypeSelection = document.getElementById('mockTypeSelection');
    const mhtCetSection = document.getElementById('mhtCetSection');
    const boardSection = document.getElementById('boardSection');

    mockTypeSelection.style.display = 'block';
    mhtCetSection.style.display = 'none';
    boardSection.style.display = 'none';

    // Reset any ongoing tests
    const mockTestSubjectSelection = document.getElementById('mockTestSubjectSelection');
    const boardSubjectSelection = document.getElementById('boardSubjectSelection');

    if (mockTestSubjectSelection) mockTestSubjectSelection.style.display = 'block';
    if (boardSubjectSelection) boardSubjectSelection.style.display = 'block';

    // Hide test screens
    const mockTestExam = document.getElementById('mockTestExam');
    const boardExamPaper = document.getElementById('boardExamPaper');
    const mockTestResults = document.getElementById('mockTestResults');
    const boardExamResults = document.getElementById('boardExamResults');

    if (mockTestExam) mockTestExam.style.display = 'none';
    if (boardExamPaper) boardExamPaper.style.display = 'none';
    if (mockTestResults) mockTestResults.style.display = 'none';
    if (boardExamResults) boardExamResults.style.display = 'none';
}

// ==================== MAHARASHTRA BOARD EXAM ====================

let boardExamState = {
    subject: null,
    questions: [],
    answers: {},
    startTime: null,
    timerInterval: null,
    timeLimit: 7200 // 2 hours in seconds
};

// Board exam subjects configuration
const boardSubjectsConfig = {
    science1: {
        name: 'Science and Technology - Part 1',
        time: 7200, // 2 hours
        totalMarks: 40,
        sections: [
            { name: 'A', marks: 1, count: 4, type: 'mcq', description: 'Multiple Choice Questions (1 mark each)' },
            { name: 'B', marks: 2, count: 4, type: 'short', description: 'Short Answer Questions (2 marks each)' },
            { name: 'C', marks: 3, count: 4, type: 'medium', description: 'Medium Answer Questions (3 marks each)' },
            { name: 'D', marks: 4, count: 3, type: 'long', description: 'Long Answer Questions (4 marks each)' }
        ]
    },
    science2: {
        name: 'Science and Technology - Part 2',
        time: 7200,
        totalMarks: 40,
        sections: [
            { name: 'A', marks: 1, count: 4, type: 'mcq', description: 'Multiple Choice Questions (1 mark each)' },
            { name: 'B', marks: 2, count: 4, type: 'short', description: 'Short Answer Questions (2 marks each)' },
            { name: 'C', marks: 3, count: 4, type: 'medium', description: 'Medium Answer Questions (3 marks each)' },
            { name: 'D', marks: 4, count: 3, type: 'long', description: 'Long Answer Questions (4 marks each)' }
        ]
    },
    maths1: {
        name: 'Mathematics - Part 1 (Algebra)',
        time: 7200,
        totalMarks: 40,
        sections: [
            { name: 'A', marks: 1, count: 4, type: 'mcq', description: 'Multiple Choice Questions (1 mark each)' },
            { name: 'B', marks: 2, count: 4, type: 'short', description: 'Short Answer Questions (2 marks each)' },
            { name: 'C', marks: 3, count: 4, type: 'medium', description: 'Medium Answer Questions (3 marks each)' },
            { name: 'D', marks: 4, count: 3, type: 'long', description: 'Long Answer Questions (4 marks each)' }
        ]
    },
    maths2: {
        name: 'Mathematics - Part 2 (Geometry)',
        time: 7200,
        totalMarks: 40,
        sections: [
            { name: 'A', marks: 1, count: 4, type: 'mcq', description: 'Multiple Choice Questions (1 mark each)' },
            { name: 'B', marks: 2, count: 4, type: 'short', description: 'Short Answer Questions (2 marks each)' },
            { name: 'C', marks: 3, count: 4, type: 'medium', description: 'Medium Answer Questions (3 marks each)' },
            { name: 'D', marks: 4, count: 3, type: 'long', description: 'Long Answer Questions (4 marks each)' }
        ]
    },
    history: {
        name: 'History and Political Science',
        time: 7200,
        totalMarks: 40,
        sections: [
            { name: 'A', marks: 1, count: 4, type: 'mcq', description: 'Multiple Choice Questions (1 mark each)' },
            { name: 'B', marks: 2, count: 4, type: 'short', description: 'Short Answer Questions (2 marks each)' },
            { name: 'C', marks: 3, count: 4, type: 'medium', description: 'Medium Answer Questions (3 marks each)' },
            { name: 'D', marks: 4, count: 3, type: 'long', description: 'Long Answer Questions (4 marks each)' }
        ]
    },
    geography: {
        name: 'Geography',
        time: 7200,
        totalMarks: 40,
        sections: [
            { name: 'A', marks: 1, count: 4, type: 'mcq', description: 'Multiple Choice Questions (1 mark each)' },
            { name: 'B', marks: 2, count: 4, type: 'short', description: 'Short Answer Questions (2 marks each)' },
            { name: 'C', marks: 3, count: 4, type: 'medium', description: 'Medium Answer Questions (3 marks each)' },
            { name: 'D', marks: 4, count: 3, type: 'long', description: 'Long Answer Questions (4 marks each)' }
        ]
    },
    english: {
        name: 'English (First Language)',
        time: 10800, // 3 hours
        totalMarks: 80,
        sections: [
            { name: 'A', marks: 2, count: 10, type: 'mcq', description: 'Reading Comprehension (2 marks each)' },
            { name: 'B', marks: 3, count: 8, type: 'short', description: 'Grammar and Writing (3 marks each)' },
            { name: 'C', marks: 4, count: 6, type: 'medium', description: 'Writing Skills (4 marks each)' },
            { name: 'D', marks: 8, count: 2, type: 'long', description: 'Essay and Letter (8 marks each)' }
        ]
    },
    hindi: {
        name: 'Hindi (Second/Third Language)',
        time: 9000, // 2.5 hours
        totalMarks: 40,
        sections: [
            { name: 'A', marks: 1, count: 6, type: 'mcq', description: 'व्याकरण (1 अंक प्रत्येक)' },
            { name: 'B', marks: 2, count: 6, type: 'short', description: 'लघुउत्तरीय प्रश्न (2 अंक प्रत्येक)' },
            { name: 'C', marks: 4, count: 5, type: 'medium', description: 'दीर्घउत्तरीय प्रश्न (4 अंक प्रत्येक)' }
        ]
    },
    marathi: {
        name: 'Marathi (Second/Third Language)',
        time: 9000,
        totalMarks: 40,
        sections: [
            { name: 'A', marks: 1, count: 6, type: 'mcq', description: 'व्याकरण (1 गुण प्रत्येकी)' },
            { name: 'B', marks: 2, count: 6, type: 'short', description: 'लघुउत्तरी प्रश्न (2 गुण प्रत्येकी)' },
            { name: 'C', marks: 4, count: 5, type: 'medium', description: 'दीर्घउत्तरी प्रश्न (4 गुण प्रत्येकी)' }
        ]
    }
};

async function selectBoardSubject(subject) {
    boardExamState.subject = subject;
    const config = boardSubjectsConfig[subject];

    // Show loading
    document.getElementById('boardSubjectSelection').style.display = 'none';
    document.getElementById('boardExamLoading').style.display = 'flex';

    // Generate questions
    await generateBoardQuestions(subject, config);

    // Hide loading, show exam
    document.getElementById('boardExamLoading').style.display = 'none';
    document.getElementById('boardExamPaper').style.display = 'block';

    // Start timer
    startBoardTimer(config.time);
}

async function generateBoardQuestions(subject, config) {
    const questions = [];
    let questionNumber = 1;

    // Simulate progress
    const progressFill = document.getElementById('boardProgressFill');
    const progressText = document.getElementById('boardProgressText');
    const loadingSubject = document.getElementById('boardLoadingSubject');

    loadingSubject.textContent = config.name;

    for (let i = 0; i < config.sections.length; i++) {
        const section = config.sections[i];

        // Update progress
        const progress = Math.round(((i + 1) / config.sections.length) * 100);
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${progress}%`;

        for (let j = 0; j < section.count; j++) {
            // Generate question based on type
            const question = await generateBoardQuestion(subject, section, questionNumber);
            questions.push({
                ...question,
                section: section.name,
                marks: section.marks,
                number: questionNumber
            });
            questionNumber++;
        }

        // Small delay for effect
        await new Promise(resolve => setTimeout(resolve, 300));
    }

    boardExamState.questions = questions;
    renderBoardExam(config);
}

async function generateBoardQuestion(subject, section, number) {
    // Real Maharashtra Board Class 10 questions by subject
    const questionBanks = {
        science1: {
            mcq: [
                { text: "Which of the following is a renewable source of energy?", options: ["Coal", "Solar energy", "Petroleum", "Natural gas"], correctAnswer: "Solar energy" },
                { text: "What is the SI unit of electric current?", options: ["Volt", "Ampere", "Ohm", "Watt"], correctAnswer: "Ampere" },
                { text: "Which lens is used to correct myopia (short-sightedness)?", options: ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"], correctAnswer: "Concave lens" },
                { text: "The chemical formula of washing soda is:", options: ["Na₂CO₃", "NaHCO₃", "NaCl", "NaOH"], correctAnswer: "Na₂CO₃" }
            ],
            short: [
                "Define refraction of light. State the laws of refraction.",
                "Explain the difference between renewable and non-renewable sources of energy with examples.",
                "What is the function of the ciliary muscles in the human eye?",
                "Write the balanced chemical equation for the reaction between zinc and dilute hydrochloric acid."
            ],
            medium: [
                "Explain how a concave mirror can be used to obtain a magnified erect image of an object. Draw a ray diagram.",
                "Describe the structure and function of a neuron. Draw a labeled diagram.",
                "Explain the principle of working of an electric motor with the help of a labeled diagram.",
                "What is meant by 'sustainable development'? Suggest two ways to achieve sustainable development."
            ],
            long: [
                "Draw a neat labeled diagram of the human respiratory system. Explain the mechanism of breathing in humans.",
                "Explain the working of a simple electric generator with the help of a labeled diagram. State Fleming's right-hand rule.",
                "What is meant by resistance? State the factors on which the resistance of a conductor depends. Derive the expression for equivalent resistance when resistors are connected in series."
            ]
        },
        science2: {
            mcq: [
                { text: "Which hormone is responsible for regulation of blood sugar?", options: ["Insulin", "Thyroxine", "Adrenaline", "Growth hormone"], correctAnswer: "Insulin" },
                { text: "The process of converting atmospheric nitrogen into nitrogenous compounds is called:", options: ["Nitrogen cycle", "Nitrogen fixation", "Nitrification", "Denitrification"], correctAnswer: "Nitrogen fixation" },
                { text: "Which of the following is a biodegradable waste?", options: ["Plastic bags", "Glass bottles", "Fruit peels", "Aluminum cans"], correctAnswer: "Fruit peels" },
                { text: "The pH value of pure water is:", options: ["6", "7", "8", "9"], correctAnswer: "7" }
            ],
            short: [
                "What is meant by Tyndall effect? Give one example.",
                "Explain the process of budding in Hydra with a diagram.",
                "State two advantages of vegetative propagation.",
                "What are fossils? How do they help in evolution?"
            ],
            medium: [
                "Explain the structure and function of stomata. Draw a labeled diagram of a stomatal apparatus.",
                "Describe the process of photosynthesis. Write the chemical equation for photosynthesis.",
                "Explain how traits get expressed through the process of heredity. What is meant by dominant and recessive traits?",
                "What is meant by the ozone layer? How is it formed? Why is it important for life on Earth?"
            ],
            long: [
                "Draw a neat labeled diagram of the human digestive system. Explain the process of digestion of food in the small intestine.",
                "Explain the process of binary fission in Amoeba with the help of diagrams. State two differences between binary fission and multiple fission.",
                "What is meant by food chain and food web? Explain with examples. Why is there a progressive decrease in the amount of energy at successive trophic levels?"
            ]
        },
        maths1: {
            mcq: [
                { text: "If the sum of roots of a quadratic equation is 5 and product is 6, then the equation is:", options: ["x² - 5x + 6 = 0", "x² + 5x + 6 = 0", "x² - 5x - 6 = 0", "x² + 5x - 6 = 0"], correctAnswer: "x² - 5x + 6 = 0" },
                { text: "The nth term of an A.P. is given by aₙ = 3n + 2. What is the common difference?", options: ["2", "3", "5", "6"], correctAnswer: "3" },
                { text: "If sin θ = 3/5, then cos θ = ?", options: ["4/5", "3/4", "5/3", "5/4"], correctAnswer: "4/5" },
                { text: "The value of (sin²30° + cos²30°) is:", options: ["0", "1", "1/2", "√3/2"], correctAnswer: "1" }
            ],
            short: [
                "Find the roots of the quadratic equation x² - 7x + 12 = 0 by factorization method.",
                "Find the sum of first 20 terms of the A.P.: 3, 7, 11, 15, ...",
                "If tan θ = 4/3, find the value of sin θ and cos θ.",
                "Solve the pair of linear equations: 2x + 3y = 11 and 3x - 2y = 2"
            ],
            medium: [
                "Solve the quadratic equation 2x² - 5x + 3 = 0 using the quadratic formula. Verify your answer.",
                "The sum of first n terms of an A.P. is given by Sₙ = 3n² + 5n. Find the first term, common difference, and nth term.",
                "Prove that: (sin θ + cos θ)² + (sin θ - cos θ)² = 2",
                "Two numbers are in the ratio 3:4. If 5 is added to each number, the ratio becomes 4:5. Find the numbers."
            ],
            long: [
                "Derive the quadratic formula to solve ax² + bx + c = 0. Use it to solve the equation 3x² - 5x - 2 = 0.",
                "If the sum of first p terms of an A.P. is equal to the sum of first q terms, prove that the sum of first (p+q) terms is zero.",
                "A train travels 360 km at a uniform speed. If the speed had been 5 km/h more, it would have taken 1 hour less for the same journey. Find the speed of the train. Form the quadratic equation and solve it."
            ]
        },
        maths2: {
            mcq: [
                { text: "In a right-angled triangle, if one acute angle is 30°, the other acute angle is:", options: ["30°", "45°", "60°", "90°"], correctAnswer: "60°" },
                { text: "The distance between two parallel tangents to a circle of radius 5 cm is:", options: ["5 cm", "10 cm", "15 cm", "20 cm"], correctAnswer: "10 cm" },
                { text: "The number of tangents that can be drawn to a circle from an external point is:", options: ["0", "1", "2", "Infinite"], correctAnswer: "2" },
                { text: "If the co-ordinates of point A are (3, 4) and B are (6, 8), the mid-point of AB is:", options: ["(4.5, 6)", "(9, 12)", "(3, 4)", "(1.5, 2)"], correctAnswer: "(4.5, 6)" }
            ],
            short: [
                "State and prove the Pythagoras theorem.",
                "Find the distance between points A(2, 3) and B(5, 7).",
                "Prove that the tangent at any point of a circle is perpendicular to the radius through the point of contact.",
                "Find the area of a triangle whose vertices are A(1, 2), B(4, 6), and C(6, 14)."
            ],
            medium: [
                "Prove that in a right triangle, the square of the hypotenuse is equal to the sum of squares of the other two sides. Use this to solve: In triangle ABC, angle B = 90°, AB = 6 cm, BC = 8 cm. Find AC.",
                "Two circles of radii 5 cm and 3 cm intersect at two points and the distance between their centers is 4 cm. Find the length of the common chord.",
                "Prove that the lengths of tangents drawn from an external point to a circle are equal. Draw a diagram.",
                "Find the co-ordinates of the point which divides the line segment joining points A(2, 3) and B(5, 9) in the ratio 2:1 internally."
            ],
            long: [
                "State and prove Basic Proportionality Theorem (Thales theorem). Using this theorem, prove that a line drawn through the mid-point of one side of a triangle parallel to another side bisects the third side.",
                "Prove that the ratio of the areas of two similar triangles is equal to the square of the ratio of their corresponding sides. Apply this to solve: Two similar triangles have areas 16 cm² and 25 cm². If one side of the first triangle is 8 cm, find the corresponding side of the second triangle.",
                "Derive the formula for the area of a triangle using co-ordinates. Use it to find the area of triangle formed by points A(2, 3), B(5, 7), and C(8, 3). Also verify using the formula: Area = ½ |x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|"
            ]
        },
        history: {
            mcq: [
                { text: "The First World War was fought during:", options: ["1914-1918", "1939-1945", "1905-1911", "1920-1924"], correctAnswer: "1914-1918" },
                { text: "Who was the founder of the Indian National Congress?", options: ["Mahatma Gandhi", "A.O. Hume", "Bal Gangadhar Tilak", "Dadabhai Naoroji"], correctAnswer: "A.O. Hume" },
                { text: "The Non-Cooperation Movement was launched in:", options: ["1919", "1920", "1930", "1942"], correctAnswer: "1920" },
                { text: "The Indian Constitution was adopted on:", options: ["26 January 1950", "26 November 1949", "15 August 1947", "26 January 1949"], correctAnswer: "26 November 1949" }
            ],
            short: [
                "State any two causes of the First World War.",
                "What was the Jallianwala Bagh massacre? When did it occur?",
                "Write a short note on the Civil Disobedience Movement.",
                "What are Fundamental Rights? Name any four Fundamental Rights."
            ],
            medium: [
                "Explain the consequences of the First World War.",
                "Describe the role of Mahatma Gandhi in India's freedom struggle.",
                "What were the main features of the Government of India Act 1935?",
                "Explain the federal structure of the Indian government with the help of a diagram."
            ],
            long: [
                "Explain the causes, course, and consequences of the Second World War in detail.",
                "Describe in detail the role of various freedom fighters in India's struggle for independence. Name at least five prominent leaders and their contributions.",
                "Write a detailed note on the making of the Indian Constitution. Explain the composition and working of the Constituent Assembly. Mention the role of Dr. B.R. Ambedkar."
            ]
        },
        geography: {
            mcq: [
                { text: "The Tropic of Cancer passes through how many Indian states?", options: ["6", "7", "8", "9"], correctAnswer: "8" },
                { text: "Which is the longest river in India?", options: ["Ganga", "Godavari", "Brahmaputra", "Krishna"], correctAnswer: "Ganga" },
                { text: "The Western Ghats are an example of:", options: ["Fold mountains", "Block mountains", "Volcanic mountains", "Residual mountains"], correctAnswer: "Block mountains" },
                { text: "Black soil is most suitable for cultivation of:", options: ["Rice", "Wheat", "Cotton", "Tea"], correctAnswer: "Cotton" }
            ],
            short: [
                "Distinguish between the Western Coastal Plain and the Eastern Coastal Plain.",
                "Write a short note on the Indian monsoon system.",
                "What are the major types of soil found in India?",
                "State any two objectives of the National Water Policy."
            ],
            medium: [
                "Explain the formation of the Himalayas. Draw a diagram showing the physical divisions of India.",
                "Describe the factors affecting the climate of India in detail.",
                "Explain the distribution of rainfall in India with the help of an appropriate map.",
                "What is meant by soil erosion? Explain any three causes of soil erosion and suggest measures to prevent it."
            ],
            long: [
                "Describe the drainage system of India. Explain the characteristics of the Himalayan rivers and the Peninsular rivers. Draw a map showing the major river systems of India.",
                "Write a detailed note on the natural vegetation of India. Explain the different types of forests found in India and their distribution. How does climate affect vegetation?",
                "Explain the importance of water resources in India. What are the major sources of irrigation in India? Discuss the problems related to water resources and suggest solutions."
            ]
        },
        english: {
            mcq: [
                { text: "Choose the correct synonym for 'Abundant':", options: ["Scarce", "Plentiful", "Rare", "Limited"], correctAnswer: "Plentiful" },
                { text: "Identify the part of speech of the underlined word: 'She sings beautifully.'", options: ["Noun", "Verb", "Adverb", "Adjective"], correctAnswer: "Adverb" },
                { text: "Which of the following is a complex sentence?", options: ["I ran fast.", "She is smart and kind.", "Although it rained, we played.", "Run quickly!"], correctAnswer: "Although it rained, we played." },
                { text: "The passive voice of 'They are building a house' is:", options: ["A house is built by them", "A house was built by them", "A house is being built by them", "A house has been built by them"], correctAnswer: "A house is being built by them" }
            ],
            short: [
                "Read the following passage and answer: [Passage about nature conservation] What is the main idea of the passage?",
                "Write a short paragraph (5-6 sentences) on 'The Importance of Education'.",
                "Change the following into indirect speech: He said, 'I am going to school.'",
                "Fill in the blanks with appropriate prepositions: She is good ___ mathematics. He arrived ___ the station ___ time."
            ],
            medium: [
                "Read the following passage and answer the questions: [Comprehension passage] (a) Give a suitable title (b) Make notes (c) Write a summary",
                "Write a letter to your friend describing your recent visit to a historical place. (Word limit: 150 words)",
                "Write a paragraph on any one of the following: (a) My Favourite Book (b) A Visit to a Science Exhibition (c) Importance of Trees",
                "Complete the following story: It was a dark and stormy night. Suddenly, I heard a strange noise... (Continue in 150-200 words)"
            ],
            long: [
                "Write an essay (250-300 words) on any one of the following topics: (a) Digital India (b) Impact of Social Media on Youth (c) Climate Change and Its Effects",
                "Write a letter to the Editor of a newspaper expressing your views on 'The Increasing Use of Mobile Phones by Teenagers'. (Word limit: 250 words)",
                "Write a story based on the following outline: A boy finds a magic lamp... genie appears... three wishes... first wish for wealth... second for power... third wish... moral of the story. (250-300 words)",
                "You are the Head Boy/Girl of your school. Write a report on the Annual Sports Day celebration held in your school. Include details about chief guest, events, winners, etc. (250 words)"
            ]
        },
        hindi: {
            mcq: [
                { text: "'आकाश' का पर्यायवाची शब्द है:", options: ["धरती", "गगन", "पृथ्वी", "जल"], correctAnswer: "गगन" },
                { text: "'सुंदर' का विलोम शब्द है:", options: ["सुहाना", "कुरूप", "मनोहर", "आकर्षक"], correctAnswer: "कुरूप" },
                { text: "'राम ने फल खाया' में कर्ता है:", options: ["राम", "ने", "फल", "खाया"], correctAnswer: "राम" },
                { text: "'चरण' का अर्थ है:", options: ["सिर", "हाथ", "पैर", "मुख"], correctAnswer: "पैर" }
            ],
            short: [
                "संज्ञा किसे कहते हैं? उदाहरण सहित लिखिए।",
                "'परिश्रम का महत्व' विषय पर 5-6 वाक्य लिखिए।",
                "निम्नलिखित शब्दों के विलोम शब्द लिखिए: सुख, दिन, उत्थान, मित्र",
                "मुहावरे का अर्थ लिखकर वाक्य में प्रयोग कीजिए: 'आँखें खुलना'"
            ],
            medium: [
                "अपठित गद्यांश पढ़कर प्रश्नों के उत्तर दीजिए। [गद्यांश के बाद 3 प्रश्न]",
                "अपने प्रधानाचार्य को बीमारी के कारण अवकाश के लिए प्रार्थना पत्र लिखिए।",
                "'वृक्षारोपण का महत्व' विषय पर निबंध लिखिए। (शब्द सीमा: 150 शब्द)",
                "निम्नलिखित काव्यांश की व्याख्या कीजिए: [काव्यांश दिया जाएगा]"
            ],
            long: [
                "निम्नलिखित में से किसी एक विषय पर निबंध लिखिए: (क) स्वच्छ भारत अभियान (ख) विज्ञान के चमत्कार (ग) मेरा प्रिय खेल (शब्द सीमा: 250 शब्द)",
                "अपने मित्र को पत्र लिखिए जिसमें अपनी वार्षिक परीक्षा की तैयारी के बारे में बताइए। (शब्द सीमा: 200 शब्द)",
                "दिए गए संकेत बिंदुओं के आधार पर कहानी लिखिए: एक गरीब किसान... मेहनती... एक दिन खेत में बर्तन मिला... धन मिला... दान दिया... सीख। (200-250 शब्द)"
            ]
        },
        marathi: {
            mcq: [
                { text: "'आकाश' चा समानार्थी शब्द आहे:", options: ["पृथ्वी", "नभ", "जल", "वायू"], correctAnswer: "नभ" },
                { text: "'सुंदर' चा विरुद्धार्थी शब्द आहे:", options: ["सुंदर", "कुरुप", "मनोहर", "आकर्षक"], correctAnswer: "कुरुप" },
                { text: "'राम फळ खातो' या वाक्यात कर्ता कोण?", options: ["राम", "फळ", "खातो", "या"], correctAnswer: "राम" },
                { text: "'हात' म्हणजे:", options: ["पाय", "डोके", "हात", "तोंड"], correctAnswer: "हात" }
            ],
            short: [
                "नामाचे प्रकार उदाहरणासहित लिहा।",
                "'परिश्रमाचे महत्व' या विषयावर 5-6 वाक्ये लिहा।",
                "खालील शब्दांचे विरुद्धार्थी शब्द लिहा: सुख, दिवस, मित्र, उत्थान",
                "वाक्प्रचाराचा अर्थ लिहून वाक्यात उपयोग करा: 'डोळे उघडणे'"
            ],
            medium: [
                "अपठित गद्यांश वाचून प्रश्नांची उत्तरे लिहा। [गद्यांश व 3 प्रश्न]",
                "मुख्याध्यापकांना आजारपणामुळे रजा मागण्यासाठी अर्ज लिहा।",
                "'वृक्षारोपणाचे महत्व' या विषयावर निबंध लिहा। (शब्द मर्यादा: 150 शब्द)",
                "खालील काव्यपंक्तींचे भावार्थ लिहा: [काव्यपंक्ती दिल्या जातील]"
            ],
            long: [
                "खालीलपैकी कोणत्याही एका विषयावर निबंध लिहा: (अ) स्वच्छ भारत मोहीम (ब) विज्ञानाचे चमत्कार (क) माझा आवडता खेळ (शब्द मर्यादा: 250 शब्द)",
                "मित्राला पत्र लिहा ज्यात तुमच्या वार्षिक परीक्षेच्या तयारीबद्दल सांगा। (शब्द मर्यादा: 200 शब्द)",
                "दिलेल्या सूचना बिंदूंच्या आधारे कथा लिहा: एक गरीब शेतकरी... मेहनती... एक दिवशी शेतात भांडे सापडले... संपत्ती मिळाली... दान केले... शिकवण। (200-250 शब्द)"
            ]
        }
    };

    const subjectQuestions = questionBanks[subject];
    if (!subjectQuestions) {
        // Fallback to generic questions
        return {
            text: `Question ${number}: This is a question for ${boardSubjectsConfig[subject].name}.`,
            type: 'textarea'
        };
    }

    const questionsByType = subjectQuestions[section.type];
    if (!questionsByType) {
        return {
            text: `Question ${number}: Write your answer for this ${section.type} question.`,
            type: 'textarea'
        };
    }

    // Get question from the bank (cycle through if needed)
    const questionIndex = (number - 1) % questionsByType.length;
    const question = questionsByType[questionIndex];

    if (typeof question === 'string') {
        // Descriptive question
        return {
            text: question,
            type: 'textarea'
        };
    } else {
        // MCQ
        return question;
    }
}

function renderBoardExam(config) {
    // Set header info
    document.getElementById('boardSubjectName').textContent = config.name;
    document.getElementById('boardExamTime').textContent = formatTime(config.time);
    document.getElementById('boardTotalMarks').textContent = config.totalMarks;

    // Render questions by section
    const container = document.getElementById('boardQuestionsContainer');
    container.innerHTML = '';

    config.sections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'board-section';

        const sectionHeader = document.createElement('div');
        sectionHeader.className = 'board-section-header';
        sectionHeader.innerHTML = `
            <h3>Section ${section.name}</h3>
            <p>${section.description}</p>
        `;
        sectionDiv.appendChild(sectionHeader);

        // Get questions for this section
        const sectionQuestions = boardExamState.questions.filter(q => q.section === section.name);

        sectionQuestions.forEach(question => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'board-question';
            questionDiv.id = `board-question-${question.number}`;

            questionDiv.innerHTML = `
                <div class="board-question-header">
                    <span class="board-question-number">Q.${question.number}</span>
                    <span class="board-question-marks">[${question.marks} Mark${question.marks > 1 ? 's' : ''}]</span>
                </div>
                <div class="board-question-text">${question.text}</div>
                <div class="board-answer-area">
                    ${renderBoardAnswerInput(question)}
                </div>
            `;

            sectionDiv.appendChild(questionDiv);
        });

        container.appendChild(sectionDiv);
    });
}

function renderBoardAnswerInput(question) {
    if (question.options) {
        // MCQ
        return `
            <div class="board-options">
                ${question.options.map((opt, idx) => `
                    <label class="board-option">
                        <input type="radio" name="board-q${question.number}" value="${opt}" 
                            onchange="saveBoardAnswer(${question.number}, '${opt}')">
                        <span class="board-option-text">${opt}</span>
                    </label>
                `).join('')}
            </div>
        `;
    } else {
        // Text answer
        const rows = question.marks * 3; // More marks = more space
        return `
            <textarea class="board-answer-textarea" rows="${rows}" 
                placeholder="Write your answer here..."
                onchange="saveBoardAnswer(${question.number}, this.value)"></textarea>
        `;
    }
}

function saveBoardAnswer(questionNumber, answer) {
    boardExamState.answers[questionNumber] = answer;
}

function startBoardTimer(totalSeconds) {
    boardExamState.startTime = Date.now();
    boardExamState.timeLimit = totalSeconds;

    updateBoardTimer();

    boardExamState.timerInterval = setInterval(() => {
        updateBoardTimer();
    }, 1000);
}

function updateBoardTimer() {
    const elapsed = Math.floor((Date.now() - boardExamState.startTime) / 1000);
    const remaining = Math.max(0, boardExamState.timeLimit - elapsed);

    const hours = Math.floor(remaining / 3600);
    const minutes = Math.floor((remaining % 3600) / 60);
    const seconds = remaining % 60;

    const timerElement = document.getElementById('boardTimer');
    timerElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (remaining === 0) {
        clearInterval(boardExamState.timerInterval);
        submitBoardExam();
    }
}

async function submitBoardExam() {
    clearInterval(boardExamState.timerInterval);

    // Show loading
    showNotification('Evaluating your answers using AI...', 'info');

    const config = boardSubjectsConfig[boardExamState.subject];
    let totalScore = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let detailedResults = [];

    // Evaluate each question
    for (const question of boardExamState.questions) {
        const userAnswer = boardExamState.answers[question.number];
        let questionScore = 0;
        let feedback = '';
        let isCorrect = false;

        if (userAnswer) {
            if (question.correctAnswer) {
                // MCQ - exact match
                if (userAnswer === question.correctAnswer) {
                    questionScore = question.marks;
                    isCorrect = true;
                    correctAnswers++;
                    feedback = 'Correct answer!';
                } else {
                    incorrectAnswers++;
                    feedback = `Incorrect. Correct answer: ${question.correctAnswer}`;
                }
            } else {
                // Descriptive - Use AI evaluation
                try {
                    const evaluation = await evaluateDescriptiveAnswer(
                        question.text,
                        userAnswer,
                        question.marks,
                        boardExamState.subject
                    );
                    questionScore = evaluation.score;
                    feedback = evaluation.feedback;
                    isCorrect = questionScore >= (question.marks * 0.6); // 60% threshold
                    if (isCorrect) correctAnswers++;
                    else incorrectAnswers++;
                } catch (error) {
                    // Fallback to basic evaluation
                    const wordCount = userAnswer.trim().split(/\s+/).length;
                    const expectedWords = question.marks * 30;
                    const scorePercentage = Math.min(wordCount / expectedWords, 1);
                    questionScore = Math.round(question.marks * scorePercentage);
                    feedback = `Basic evaluation: ${questionScore}/${question.marks} marks based on answer length.`;
                    isCorrect = questionScore >= (question.marks * 0.6);
                    if (isCorrect) correctAnswers++;
                    else incorrectAnswers++;
                }
            }
            totalScore += questionScore;
        } else {
            incorrectAnswers++;
            feedback = 'Not attempted';
        }

        detailedResults.push({
            questionNumber: question.number,
            question: question.text,
            userAnswer: userAnswer || 'Not attempted',
            correctAnswer: question.correctAnswer || 'Evaluated answer',
            score: questionScore,
            maxMarks: question.marks,
            feedback: feedback,
            isCorrect: isCorrect,
            section: question.section
        });
    }

    // Store detailed results
    boardExamState.detailedResults = detailedResults;
    boardExamState.totalScore = totalScore;
    boardExamState.correctAnswers = correctAnswers;
    boardExamState.incorrectAnswers = incorrectAnswers;

    // Show results
    showBoardResults(totalScore, correctAnswers, incorrectAnswers, config);
    showNotification('Evaluation complete!', 'success');
}

async function evaluateDescriptiveAnswer(question, answer, maxMarks, subject) {
    // Check if API is configured
    if (!isAPIConfigured()) {
        throw new Error('API not configured');
    }

    const config = getAPIConfig();
    const subjectName = boardSubjectsConfig[subject].name;

    const systemPrompt = `You are an expert Maharashtra Board Class 10 examiner for ${subjectName}.

Your task is to evaluate student answers fairly and accurately according to Maharashtra Board marking scheme.

IMPORTANT RULES:
1. Award marks based on:
   - Correctness of content (50%)
   - Completeness of answer (30%)
   - Clarity and presentation (20%)

2. For ${maxMarks} marks question:
   - Expect comprehensive, detailed answer
   - Check for key points and concepts
   - Award partial marks for partially correct answers
   - Be fair but strict as per board standards

3. Provide:
   - Score out of ${maxMarks}
   - Brief feedback explaining the score
   - Mention what was good and what was missing

Return ONLY a JSON object with this exact structure:
{
  "score": <number 0-${maxMarks}>,
  "feedback": "<brief feedback explaining the marks>"
}`;

    const userPrompt = `Question: ${question}

Student's Answer: ${answer}

Evaluate this answer and provide score and feedback.`;

    try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${config.API_KEY}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': window.location.href,
                'X-Title': 'VAI-ai Board Exam Evaluator'
            },
            body: JSON.stringify({
                model: config.MODEL,
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userPrompt }
                ],
                max_tokens: 500,
                temperature: 0.3 // Lower temperature for consistent evaluation
            })
        });

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json();
        const content = data.choices[0].message.content;

        // Parse JSON response
        const cleanContent = content.replace(/```json|```/g, '').trim();
        const evaluation = JSON.parse(cleanContent);

        return {
            score: Math.min(evaluation.score, maxMarks), // Ensure score doesn't exceed max
            feedback: evaluation.feedback
        };
    } catch (error) {
        console.error('AI evaluation error:', error);
        throw error;
    }
}

function showBoardResults(score, correct, incorrect, config) {
    document.getElementById('boardExamPaper').style.display = 'none';
    document.getElementById('boardExamResults').style.display = 'block';

    const percentage = Math.round((score / config.totalMarks) * 100);
    const grade = getGrade(percentage);
    const timeTaken = formatTimeTaken(Date.now() - boardExamState.startTime);

    document.getElementById('boardResultSubject').textContent = config.name;
    document.getElementById('boardScoreValue').textContent = score;
    document.getElementById('boardScoreMax').textContent = config.totalMarks;
    document.getElementById('boardPercentage').textContent = `${percentage}%`;
    document.getElementById('boardGrade').textContent = grade;
    document.getElementById('boardCorrect').textContent = correct;
    document.getElementById('boardIncorrect').textContent = incorrect;
    document.getElementById('boardTimeTaken').textContent = timeTaken;

    // Section-wise performance
    renderSectionWiseResults(config);

    // Detailed answer review
    renderDetailedAnswerReview();
}

function renderSectionWiseResults(config) {
    const container = document.getElementById('boardSectionsGrid');
    container.innerHTML = '';

    config.sections.forEach(section => {
        const sectionQuestions = boardExamState.questions.filter(q => q.section === section.name);
        const sectionAnswered = sectionQuestions.filter(q => boardExamState.answers[q.number]).length;

        const card = document.createElement('div');
        card.className = 'board-result-card';
        card.innerHTML = `
            <h4>Section ${section.name}</h4>
            <div class="board-result-value">${sectionAnswered}/${sectionQuestions.length}</div>
            <div class="board-result-label">Questions Answered</div>
        `;
        container.appendChild(card);
    });
}

function retakeBoardExam() {
    selectBoardSubject(boardExamState.subject);
    boardExamState.answers = {};
}

function backToBoardSubjects() {
    document.getElementById('boardExamResults').style.display = 'none';
    document.getElementById('boardSubjectSelection').style.display = 'block';
    boardExamState = {
        subject: null,
        questions: [],
        answers: {},
        startTime: null,
        timerInterval: null,
        timeLimit: 7200
    };
}

function downloadBoardResults() {
    showNotification('Downloading your mark sheet...', 'success');
    // In a real app, this would generate and download a PDF
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
        return `${hours} Hour${hours > 1 ? 's' : ''}`;
    }
    return `${minutes} Minutes`;
}

function formatTimeTaken(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function getGrade(percentage) {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B+';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C';
    if (percentage >= 35) return 'D';
    return 'F';
}


function renderDetailedAnswerReview() {
    const container = document.getElementById('boardAnswersReview');
    if (!container || !boardExamState.detailedResults) return;

    container.innerHTML = `
        <h3>📝 Detailed Answer Review</h3>
        <p style="margin-bottom: 1.5rem; color: var(--text-medium);">
            Review each question with AI feedback and scores
        </p>
    `;

    boardExamState.detailedResults.forEach(result => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'answer-review-card';
        reviewCard.style.cssText = `
            background: var(--white);
            border: 2px solid ${result.isCorrect ? '#22c55e' : '#ef4444'};
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
        `;

        reviewCard.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; padding-bottom: 0.75rem; border-bottom: 1px solid rgba(45, 90, 160, 0.1);">
                <div>
                    <span style="font-weight: 700; color: var(--primary); font-size: 1rem;">
                        Question ${result.questionNumber}
                    </span>
                    <span style="margin-left: 1rem; padding: 0.3rem 0.75rem; background: rgba(249, 115, 22, 0.1); color: var(--accent); border-radius: 6px; font-size: 0.85rem; font-weight: 600;">
                        Section ${result.section}
                    </span>
                </div>
                <div style="text-align: right;">
                    <span style="font-size: 1.5rem; font-weight: 700; color: ${result.isCorrect ? '#22c55e' : '#ef4444'};">
                        ${result.score}/${result.maxMarks}
                    </span>
                    <div style="font-size: 0.85rem; color: var(--text-medium);">marks</div>
                </div>
            </div>
            
            <div style="margin-bottom: 1rem;">
                <div style="font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">Question:</div>
                <div style="color: var(--text-medium); line-height: 1.6;">${result.question}</div>
            </div>
            
            <div style="margin-bottom: 1rem;">
                <div style="font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">Your Answer:</div>
                <div style="padding: 1rem; background: rgba(45, 90, 160, 0.05); border-radius: 8px; color: var(--text-dark); line-height: 1.6;">
                    ${result.userAnswer}
                </div>
            </div>
            
            ${result.correctAnswer !== 'Evaluated answer' ? `
                <div style="margin-bottom: 1rem;">
                    <div style="font-weight: 600; color: #22c55e; margin-bottom: 0.5rem;">✓ Correct Answer:</div>
                    <div style="padding: 1rem; background: rgba(34, 197, 94, 0.05); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: 8px; color: var(--text-dark); line-height: 1.6;">
                        ${result.correctAnswer}
                    </div>
                </div>
            ` : ''}
            
            <div style="padding: 1rem; background: ${result.isCorrect ? 'rgba(34, 197, 94, 0.05)' : 'rgba(239, 68, 68, 0.05)'}; border-left: 4px solid ${result.isCorrect ? '#22c55e' : '#ef4444'}; border-radius: 8px;">
                <div style="font-weight: 600; color: ${result.isCorrect ? '#22c55e' : '#ef4444'}; margin-bottom: 0.5rem;">
                    ${result.isCorrect ? '✅ Feedback:' : '📌 Feedback:'}
                </div>
                <div style="color: var(--text-dark); line-height: 1.6;">
                    ${result.feedback}
                </div>
            </div>
        `;

        container.appendChild(reviewCard);
    });
}

function downloadBoardResults() {
    if (!boardExamState.detailedResults) {
        showNotification('No results to download', 'error');
        return;
    }

    const config = boardSubjectsConfig[boardExamState.subject];
    const percentage = Math.round((boardExamState.totalScore / config.totalMarks) * 100);
    const grade = getGrade(percentage);
    const timeTaken = formatTimeTaken(Date.now() - boardExamState.startTime);
    const date = new Date().toLocaleDateString('en-IN');

    let reportHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Maharashtra Board Exam Report</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; padding: 40px; background: #f5f5f5; }
        .container { max-width: 900px; margin: 0 auto; background: white; padding: 40px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .header { text-align: center; border-bottom: 3px double #2D5AA0; padding-bottom: 20px; margin-bottom: 30px; }
        .header h1 { color: #2D5AA0; font-size: 24px; margin-bottom: 5px; }
        .header h2 { color: #666; font-size: 18px; margin-bottom: 5px; }
        .header h3 { color: #F97316; font-size: 16px; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 30px; padding: 20px; background: #f8fafc; border-radius: 8px; }
        .info-item { padding: 10px; }
        .info-label { font-weight: 600; color: #666; font-size: 14px; }
        .info-value { color: #2D5AA0; font-size: 16px; font-weight: 700; margin-top: 5px; }
        .score-card { text-align: center; padding: 30px; background: linear-gradient(135deg, #2D5AA0 0%, #4A7AB8 100%); color: white; border-radius: 12px; margin-bottom: 30px; }
        .score-card .score { font-size: 48px; font-weight: 700; margin-bottom: 10px; }
        .score-card .percentage { font-size: 32px; margin-bottom: 10px; }
        .score-card .grade { font-size: 28px; padding: 10px 30px; background: rgba(255,255,255,0.2); border-radius: 8px; display: inline-block; }
        .section { margin-bottom: 30px; }
        .section h3 { color: #2D5AA0; font-size: 18px; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #2D5AA0; }
        .question-card { border: 2px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 20px; }
        .question-card.correct { border-color: #22c55e; background: #f0fdf4; }
        .question-card.incorrect { border-color: #ef4444; background: #fef2f2; }
        .question-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #e5e7eb; }
        .question-number { font-weight: 700; color: #2D5AA0; }
        .question-score { font-size: 20px; font-weight: 700; }
        .question-score.correct { color: #22c55e; }
        .question-score.incorrect { color: #ef4444; }
        .question-text { margin-bottom: 15px; line-height: 1.6; }
        .answer-box { padding: 15px; background: white; border-radius: 6px; margin-bottom: 15px; border-left: 4px solid #2D5AA0; }
        .answer-label { font-weight: 600; margin-bottom: 8px; color: #666; }
        .feedback { padding: 15px; border-radius: 6px; margin-top: 15px; }
        .feedback.correct { background: #d1fae5; border-left: 4px solid #22c55e; }
        .feedback.incorrect { background: #fee2e2; border-left: 4px solid #ef4444; }
        .footer { text-align: center; padding-top: 20px; border-top: 2px solid #e5e7eb; margin-top: 40px; color: #666; font-size: 14px; }
        @media print { body { padding: 20px; background: white; } .container { box-shadow: none; } }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडळ, पुणे</h1>
            <h2>Maharashtra State Board of Secondary and Higher Secondary Education, Pune</h2>
            <h3>SSC Examination - Class 10 - Performance Report</h3>
        </div>
        
        <div class="info-grid">
            <div class="info-item">
                <div class="info-label">Student Name:</div>
                <div class="info-value">VAI-ai Student</div>
            </div>
            <div class="info-item">
                <div class="info-label">Exam Date:</div>
                <div class="info-value">${date}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Subject:</div>
                <div class="info-value">${config.name}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Time Taken:</div>
                <div class="info-value">${timeTaken}</div>
            </div>
        </div>
        
        <div class="score-card">
            <div class="score">${boardExamState.totalScore} / ${config.totalMarks}</div>
            <div class="percentage">${percentage}%</div>
            <div class="grade">Grade: ${grade}</div>
        </div>
        
        <div class="section">
            <h3>📊 Performance Summary</h3>
            <table style="width: 100%; border-collapse: collapse;">
                <tr style="background: #f8fafc;">
                    <th style="padding: 12px; text-align: left; border: 1px solid #e5e7eb;">Metric</th>
                    <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;">Value</th>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid #e5e7eb;">Total Questions</td>
                    <td style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; font-weight: 600;">${boardExamState.questions.length}</td>
                </tr>
                <tr style="background: #f8fafc;">
                    <td style="padding: 12px; border: 1px solid #e5e7eb;">Correct Answers</td>
                    <td style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; font-weight: 600; color: #22c55e;">${boardExamState.correctAnswers}</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid #e5e7eb;">Incorrect Answers</td>
                    <td style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; font-weight: 600; color: #ef4444;">${boardExamState.incorrectAnswers}</td>
                </tr>
                <tr style="background: #f8fafc;">
                    <td style="padding: 12px; border: 1px solid #e5e7eb;">Time Taken</td>
                    <td style="padding: 12px; text-align: center; border: 1px solid #e5e7eb; font-weight: 600;">${timeTaken}</td>
                </tr>
            </table>
        </div>
        
        <div class="section">
            <h3>📝 Detailed Question-wise Analysis</h3>
    `;

    boardExamState.detailedResults.forEach(result => {
        const cardClass = result.isCorrect ? 'correct' : 'incorrect';
        const scoreClass = result.isCorrect ? 'correct' : 'incorrect';
        const feedbackClass = result.isCorrect ? 'correct' : 'incorrect';

        reportHTML += `
            <div class="question-card ${cardClass}">
                <div class="question-header">
                    <span class="question-number">Question ${result.questionNumber} (Section ${result.section})</span>
                    <span class="question-score ${scoreClass}">${result.score}/${result.maxMarks} marks</span>
                </div>
                <div class="question-text">
                    <strong>Question:</strong> ${result.question}
                </div>
                <div class="answer-box">
                    <div class="answer-label">Your Answer:</div>
                    ${result.userAnswer}
                </div>
                ${result.correctAnswer !== 'Evaluated answer' ? `
                    <div class="answer-box" style="border-left-color: #22c55e;">
                        <div class="answer-label" style="color: #22c55e;">✓ Correct Answer:</div>
                        ${result.correctAnswer}
                    </div>
                ` : ''}
                <div class="feedback ${feedbackClass}">
                    <strong>${result.isCorrect ? '✅' : '📌'} Feedback:</strong><br>
                    ${result.feedback}
                </div>
            </div>
        `;
    });

    reportHTML += `
        </div>
        
        <div class="footer">
            <p><strong>VAI-ai Education Platform</strong></p>
            <p>This is a computer-generated report. AI-evaluated answers may have minor variations from actual board evaluation.</p>
            <p>Generated on: ${new Date().toLocaleString('en-IN')}</p>
        </div>
    </div>
</body>
</html>
    `;

    // Create and download
    const blob = new Blob([reportHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Maharashtra_Board_${config.name.replace(/\s+/g, '_')}_Report_${date.replace(/\//g, '-')}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showNotification('Report downloaded successfully! Open the HTML file in your browser.', 'success');
}


// ==================== STUDENT SESSION & DASHBOARD ====================

// Initialize student session info safely
function loadStudentDashboard() {
    try {
        const sessionStr = localStorage.getItem('vai_session');
        if (!sessionStr) return;
        const student = JSON.parse(sessionStr);
        updateWelcomeMessage(student);
    } catch (e) {
        console.warn('Could not load student session info:', e);
    }
}

// Update welcome message
function updateWelcomeMessage(student) {
    if (!student) return;
    const nameEl = document.getElementById('topBarStudentName');
    if (nameEl) {
        nameEl.textContent = student.fullName || student.name || 'Scholar';
    }
}

// Handle logout
function handleLogout() {
    localStorage.removeItem('vai_session');
    sessionStorage.removeItem('vai_logged_in');
    window.location.href = 'index.html';
}

// Save test result safely when board exam is submitted
if (typeof submitBoardExam === 'function') {
    const originalSubmitBoardExam = submitBoardExam;
    submitBoardExam = async function () {
        await originalSubmitBoardExam();

        try {
            if (typeof boardExamState !== 'undefined' && typeof boardSubjectsConfig !== 'undefined' && boardExamState.subject) {
                const config = boardSubjectsConfig[boardExamState.subject] || { name: boardExamState.subject, totalMarks: 100 };
                const result = {
                    type: 'board_exam',
                    subject: config.name,
                    score: boardExamState.totalScore || 0,
                    maxScore: config.totalMarks || 100,
                    percentage: Math.round(((boardExamState.totalScore || 0) / (config.totalMarks || 100)) * 100),
                    timeTaken: (typeof formatTimeTaken === 'function' && boardExamState.startTime) ? formatTimeTaken(Date.now() - boardExamState.startTime) : 'N/A',
                    questionsTotal: boardExamState.questions ? boardExamState.questions.length : 0,
                    questionsCorrect: boardExamState.correctAnswers || 0,
                    questionsIncorrect: boardExamState.incorrectAnswers || 0,
                    date: new Date().toISOString()
                };
                const results = JSON.parse(localStorage.getItem('vai_test_results') || '[]');
                results.push(result);
                localStorage.setItem('vai_test_results', JSON.stringify(results));
            }
        } catch (e) {
            console.warn('Could not save test result:', e);
        }
    };
}


// ==================== BOARD PAPERS DATA ====================

// Map subject codes to actual PDF filenames
const boardPaperFilenames = {
    2024: {
        'science1': 'mh-board-class-10-science-and-technology-72-n-640-2024.pdf',
        'science2': 'mh-board-class-10-science-and-technology-72-n-653-2024.pdf',
        'maths1': 'mh-board-class-10-mathematics-algebra-71-n-619-2024.pdf',
        'maths2': 'mh-board-class-10-mathematics-geometry-71-n-632-2024.pdf',
        'history': 'mh-board-class-10-social-sciences-history-and-political-science-73-n-661-2024.pdf',
        'geography': 'mh-board-class-10-social-sciences-geography-73-n-669-2024.pdf',
        'english': 'mh-board-class-10-english-first-language-03-n-382-2024.pdf',
        'hindi': 'mh-board-class-10-hindi-15-n-582-2024.pdf',
        'marathi': 'mh-board-class-10-marathi-01-n-501-2024.pdf'
    },
    2023: {
        'science1': 'mh-board-class-10-science-and-technology-72-n-934-2023.pdf',
        'science2': 'mh-board-class-10-science-and-technology-72-n-947-2023.pdf',
        'maths1': 'mh-board-class-10-mathematics-algebra-71-n-913-2023.pdf',
        'maths2': 'mh-board-class-10-mathematics-geometry-71-n-926-2023.pdf',
        'english': 'mh-board-class-10-english-first-language-03-n-874-2023.pdf',
        'hindi': 'mh-board-class-10-hindi-n-876-2023.pdf',
        'marathi': 'mh-board-class-10-marathi-n-801-2023.pdf'
    },
    2022: {
        'science1': 'mh-board-class-10-science-and-technology-part-1-n-731-2022.pdf',
        'science2': 'mh-board-class-10-science-and-technology-part-2-n-744-2022.pdf',
        'maths1': 'mh-board-class-10-mathematics-71-n-710-2022.pdf',
        'maths2': 'mh-board-class-10-mathematics-geometry-n-723-2022.pdf',
        'history': 'mh-board-class-10-social-sciences-history-and-political-science-n-752-2022.pdf',
        'geography': 'mh-board-class-10-social-sciences-geography-n-760-2022.pdf',
        'english': 'mh-board-class-10-english-03-n-671-2022.pdf',
        'hindi': 'mh-board-class-10-hindi-15-n-673-2022.pdf',
        'marathi': 'mh-board-class-10-marathi-01-n-601-2022.pdf'
    },
    2020: {
        'science1': 'mh-board-class-10-science-and-technology-n-383-2020.pdf',
        'science2': 'mh-board-class-10-science-and-technology-n-396-2020.pdf',
        'maths1': 'mh-board-class-10-mathematics-algebra-part-1-n-362-2020.pdf',
        'maths2': 'mh-board-class-10-mathematics-geometry-n-375-2020.pdf',
        'history': 'mh-board-class-10-social-science-history-and-political-science-n-452-2020.pdf',
        'english': 'mh-board-class-10-english-n-360-2020.pdf',
        'hindi': 'mh-board-class-10-hindi-composite-n-324-2020.pdf',
        'marathi': 'mh-board-class-10-marathi-composite-n-314-2020.pdf'
    },
    2019: {
        'science1': 'mh-board-class-10-science-and-technology-n-631-2019.pdf',
        'science2': 'mh-board-class-10-science-and-technology-n-644-2019.pdf',
        'maths1': 'mh-board-class-10-mathematics-algebra-n-610-2019.pdf',
        'maths2': 'mh-board-class-10-mathematics-geometry-n-623-2019.pdf',
        'history': 'mh-board-class-10-social-science-history-and-political-science-n-652-2019.pdf',
        'geography': 'mh-board-class-10-social-science-geography-n-660-2019.pdf',
        'english': 'mh-board-class-10-english-n-523-2019.pdf',
        'hindi': 'mh-board-class-10-hindi-composite-n-574-2019.pdf',
        'marathi': 'mh-board-class-10-marathi-n-514-2019.pdf'
    },
    2025: {
        'science1': 'mh-board-class-10-science-and-tech-72-n-840-2025.pdf',
        'science2': 'mh-board-class-10-science-and-technology-72-n-853-2025.pdf',
        'maths1': 'mh-board-class-10-mathematics-algebra-71-n-819-2025.pdf',
        'maths2': 'mh-board-class-10-mathematics-geometry-71-n-832-2025.pdf',
        'history': 'mh-board-class-10-social-science-history-and-political-science-73-n-955-2025.pdf',
        'geography': 'mh-board-class-10-social-sciences-geography-73-n-869-2025.pdf',
        'english': 'mh-board-class-10-english-first-language-03-n-815-2025.pdf',
        'hindi': 'mh-board-class-10-hindi-second-or-third-language-15-n-817-2025.pdf',
        'marathi': 'mh-board-class-10-marathi-first-language-01-n-701-2025.pdf'
    }
};

const boardPapersData = [
    // 2024 Papers
    { year: 2024, subject: 'science1', subjectName: 'Science and Technology - Part 1', marks: 40, duration: '2 hours', size: '2.1 MB' },
    { year: 2024, subject: 'science2', subjectName: 'Science and Technology - Part 2', marks: 40, duration: '2 hours', size: '2.0 MB' },
    { year: 2024, subject: 'maths1', subjectName: 'Mathematics - Part 1 (Algebra)', marks: 40, duration: '2 hours', size: '1.8 MB' },
    { year: 2024, subject: 'maths2', subjectName: 'Mathematics - Part 2 (Geometry)', marks: 40, duration: '2 hours', size: '1.9 MB' },
    { year: 2024, subject: 'history', subjectName: 'History and Political Science', marks: 40, duration: '2 hours', size: '2.2 MB' },
    { year: 2024, subject: 'geography', subjectName: 'Geography', marks: 40, duration: '2 hours', size: '2.3 MB' },
    { year: 2024, subject: 'english', subjectName: 'English (First Language)', marks: 80, duration: '3 hours', size: '2.5 MB' },
    { year: 2024, subject: 'hindi', subjectName: 'Hindi (Second/Third Language)', marks: 40, duration: '2.5 hours', size: '1.7 MB' },
    { year: 2024, subject: 'marathi', subjectName: 'Marathi (Second/Third Language)', marks: 40, duration: '2.5 hours', size: '1.8 MB' },

    // 2023 Papers
    { year: 2023, subject: 'science1', subjectName: 'Science and Technology - Part 1', marks: 40, duration: '2 hours', size: '2.0 MB' },
    { year: 2023, subject: 'science2', subjectName: 'Science and Technology - Part 2', marks: 40, duration: '2 hours', size: '1.9 MB' },
    { year: 2023, subject: 'maths1', subjectName: 'Mathematics - Part 1 (Algebra)', marks: 40, duration: '2 hours', size: '1.7 MB' },
    { year: 2023, subject: 'maths2', subjectName: 'Mathematics - Part 2 (Geometry)', marks: 40, duration: '2 hours', size: '1.8 MB' },
    { year: 2023, subject: 'history', subjectName: 'History and Political Science', marks: 40, duration: '2 hours', size: '2.1 MB' },
    { year: 2023, subject: 'geography', subjectName: 'Geography', marks: 40, duration: '2 hours', size: '2.2 MB' },
    { year: 2023, subject: 'english', subjectName: 'English (First Language)', marks: 80, duration: '3 hours', size: '2.4 MB' },
    { year: 2023, subject: 'hindi', subjectName: 'Hindi (Second/Third Language)', marks: 40, duration: '2.5 hours', size: '1.6 MB' },
    { year: 2023, subject: 'marathi', subjectName: 'Marathi (Second/Third Language)', marks: 40, duration: '2.5 hours', size: '1.7 MB' },

    // 2022 Papers
    { year: 2022, subject: 'science1', subjectName: 'Science and Technology - Part 1', marks: 40, duration: '2 hours', size: '1.9 MB' },
    { year: 2022, subject: 'science2', subjectName: 'Science and Technology - Part 2', marks: 40, duration: '2 hours', size: '1.8 MB' },
    { year: 2022, subject: 'maths1', subjectName: 'Mathematics - Part 1 (Algebra)', marks: 40, duration: '2 hours', size: '1.6 MB' },
    { year: 2022, subject: 'maths2', subjectName: 'Mathematics - Part 2 (Geometry)', marks: 40, duration: '2 hours', size: '1.7 MB' },
    { year: 2022, subject: 'history', subjectName: 'History and Political Science', marks: 40, duration: '2 hours', size: '2.0 MB' },
    { year: 2022, subject: 'geography', subjectName: 'Geography', marks: 40, duration: '2 hours', size: '2.1 MB' },
    { year: 2022, subject: 'english', subjectName: 'English (First Language)', marks: 80, duration: '3 hours', size: '2.3 MB' },
    { year: 2022, subject: 'hindi', subjectName: 'Hindi (Second/Third Language)', marks: 40, duration: '2.5 hours', size: '1.5 MB' },
    { year: 2022, subject: 'marathi', subjectName: 'Marathi (Second/Third Language)', marks: 40, duration: '2.5 hours', size: '1.6 MB' },

    // 2021 Papers
    { year: 2021, subject: 'science1', subjectName: 'Science and Technology - Part 1', marks: 40, duration: '2 hours', size: '1.8 MB' },
    { year: 2021, subject: 'science2', subjectName: 'Science and Technology - Part 2', marks: 40, duration: '2 hours', size: '1.7 MB' },
    { year: 2021, subject: 'maths1', subjectName: 'Mathematics - Part 1 (Algebra)', marks: 40, duration: '2 hours', size: '1.5 MB' },
    { year: 2021, subject: 'maths2', subjectName: 'Mathematics - Part 2 (Geometry)', marks: 40, duration: '2 hours', size: '1.6 MB' },
    { year: 2021, subject: 'history', subjectName: 'History and Political Science', marks: 40, duration: '2 hours', size: '1.9 MB' },
    { year: 2021, subject: 'geography', subjectName: 'Geography', marks: 40, duration: '2 hours', size: '2.0 MB' },
    { year: 2021, subject: 'english', subjectName: 'English (First Language)', marks: 80, duration: '3 hours', size: '2.2 MB' },
    { year: 2021, subject: 'hindi', subjectName: 'Hindi (Second/Third Language)', marks: 40, duration: '2.5 hours', size: '1.4 MB' },
    { year: 2021, subject: 'marathi', subjectName: 'Marathi (Second/Third Language)', marks: 40, duration: '2.5 hours', size: '1.5 MB' },

    // 2020 Papers
    { year: 2020, subject: 'science1', subjectName: 'Science and Technology - Part 1', marks: 40, duration: '2 hours', size: '1.7 MB' },
    { year: 2020, subject: 'science2', subjectName: 'Science and Technology - Part 2', marks: 40, duration: '2 hours', size: '1.6 MB' },
    { year: 2020, subject: 'maths1', subjectName: 'Mathematics - Part 1 (Algebra)', marks: 40, duration: '2 hours', size: '1.4 MB' },
    { year: 2020, subject: 'maths2', subjectName: 'Mathematics - Part 2 (Geometry)', marks: 40, duration: '2 hours', size: '1.5 MB' },
    { year: 2020, subject: 'history', subjectName: 'History and Political Science', marks: 40, duration: '2 hours', size: '1.8 MB' },
    { year: 2020, subject: 'geography', subjectName: 'Geography', marks: 40, duration: '2 hours', size: '1.9 MB' },
    { year: 2020, subject: 'english', subjectName: 'English (First Language)', marks: 80, duration: '3 hours', size: '2.1 MB' },
    { year: 2020, subject: 'hindi', subjectName: 'Hindi (Second/Third Language)', marks: 40, duration: '2.5 hours', size: '1.3 MB' },
    { year: 2020, subject: 'marathi', subjectName: 'Marathi (Second/Third Language)', marks: 40, duration: '2.5 hours', size: '1.4 MB' }
];

let filteredBoardPapers = [...boardPapersData];

// ==================== BOARD PAPERS FUNCTIONS ====================

function initializeBoardPapers() {
    filteredBoardPapers = [...boardPapersData];
    renderBoardPapers();
}

function renderBoardPapers() {
    const grid = document.getElementById('boardPapersGrid');
    if (!grid) return;

    grid.innerHTML = '';

    if (filteredBoardPapers.length === 0) {
        grid.innerHTML = `
            <div class="no-papers-message">
                <div class="no-papers-icon">📋</div>
                <h3>No Papers Found</h3>
                <p>Try adjusting your filters</p>
            </div>
        `;
        return;
    }

    filteredBoardPapers.forEach(paper => {
        const paperCard = document.createElement('div');
        paperCard.className = 'paper-card';

        const subjectIcon = getSubjectIcon(paper.subject);

        paperCard.innerHTML = `
            <div class="paper-header">
                <div class="paper-year">${paper.year}</div>
                <div class="paper-subject-icon">${subjectIcon}</div>
            </div>
            <div class="paper-content">
                <h3 class="paper-title">${paper.subjectName}</h3>
                <div class="paper-details">
                    <div class="paper-detail">
                        <span class="detail-icon">📝</span>
                        <span>${paper.marks} Marks</span>
                    </div>
                    <div class="paper-detail">
                        <span class="detail-icon">⏱️</span>
                        <span>${paper.duration}</span>
                    </div>
                    <div class="paper-detail">
                        <span class="detail-icon">📦</span>
                        <span>${paper.size}</span>
                    </div>
                </div>
                <div class="paper-actions">
                    <button class="paper-btn paper-btn-view" onclick="viewBoardPaper('${paper.year}', '${paper.subject}')">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        View Paper
                    </button>
                    <button class="paper-btn paper-btn-download" onclick="downloadBoardPaper('${paper.year}', '${paper.subject}')">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                        </svg>
                        Download
                    </button>
                </div>
            </div>
        `;

        grid.appendChild(paperCard);
    });
}

function getSubjectIcon(subject) {
    const icons = {
        science1: '🔬',
        science2: '⚗️',
        maths1: '📐',
        maths2: '📊',
        history: '📜',
        geography: '🌍',
        english: '📖',
        hindi: '🇮🇳',
        marathi: '📚'
    };
    return icons[subject] || '📄';
}

function filterBoardPapers() {
    const yearFilter = document.getElementById('boardPaperYearFilter').value;
    const subjectFilter = document.getElementById('boardPaperSubjectFilter').value;

    filteredBoardPapers = boardPapersData.filter(paper => {
        const yearMatch = !yearFilter || paper.year.toString() === yearFilter;
        const subjectMatch = !subjectFilter || paper.subject === subjectFilter;
        return yearMatch && subjectMatch;
    });

    renderBoardPapers();
}

function resetBoardPaperFilters() {
    document.getElementById('boardPaperYearFilter').value = '';
    document.getElementById('boardPaperSubjectFilter').value = '';
    filteredBoardPapers = [...boardPapersData];
    renderBoardPapers();
}

function viewBoardPaper(year, subject) {
    const paper = boardPapersData.find(p => p.year == year && p.subject === subject);
    if (!paper) {
        showNotification('Paper not found!', 'error');
        return;
    }

    // Get actual filename from mapping
    const filename = boardPaperFilenames[year] && boardPaperFilenames[year][subject];

    if (!filename) {
        showNotification(`PDF not available for ${year} ${subject}`, 'error');
        return;
    }

    const pdfUrl = `board-papers/${year}/${filename}`;

    // Try to open in new tab
    const newWindow = window.open(pdfUrl, '_blank');

    if (newWindow) {
        showNotification(`Opening ${year} ${paper.subjectName}...`, 'info');
    } else {
        showNotification('Please allow pop-ups to view the paper', 'error');
    }
}


function downloadBoardPaper(year, subject) {
    const paper = boardPapersData.find(p => p.year == year && p.subject === subject);
    if (!paper) {
        showNotification('Paper not found!', 'error');
        return;
    }

    // Get actual filename from mapping
    const filename = boardPaperFilenames[year] && boardPaperFilenames[year][subject];

    if (!filename) {
        showNotification(`PDF not available for ${year} ${subject}`, 'error');
        return;
    }

    const pdfUrl = `board-papers/${year}/${filename}`;
    const downloadName = `Maharashtra_Board_${year}_${paper.subjectName.replace(/\s+/g, '_')}.pdf`;

    // Create download link
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = downloadName;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Increment download counter
    const counter = document.getElementById('boardPapersDownloadCount');
    if (counter) {
        counter.textContent = parseInt(counter.textContent || 0) + 1;
    }

    showNotification(`Downloading ${year} ${paper.subjectName}...`, 'success');
}

function bulkDownloadBoardPapers(type) {
    if (type === 'all') {
        if (confirm(`Download all ${boardPapersData.length} board papers?\n\nTotal size: ~90 MB\n\nThis will download each paper individually.`)) {
            showNotification('Starting bulk download...', 'success');

            boardPapersData.forEach((paper, index) => {
                setTimeout(() => {
                    downloadBoardPaper(paper.year, paper.subject);
                }, index * 500);
            });
        }
    } else if (type === 'year') {
        const year = prompt('Enter year (2020-2024):');
        if (year && year >= 2020 && year <= 2024) {
            const yearPapers = boardPapersData.filter(p => p.year == year);

            if (confirm(`Download ${yearPapers.length} papers from ${year}?`)) {
                showNotification(`Downloading ${year} papers...`, 'success');

                yearPapers.forEach((paper, index) => {
                    setTimeout(() => {
                        downloadBoardPaper(paper.year, paper.subject);
                    }, index * 500);
                });
            }
        } else if (year) {
            showNotification('Invalid year! Please enter a year between 2020 and 2024.', 'error');
        }
    } else if (type === 'subject') {
        const subject = prompt('Enter subject code:\nscience1, science2, maths1, maths2, history, geography, english, hindi, marathi');
        if (subject) {
            const subjectPapers = boardPapersData.filter(p => p.subject === subject);

            if (subjectPapers.length > 0) {
                if (confirm(`Download ${subjectPapers.length} ${subject} papers?`)) {
                    showNotification(`Downloading ${subject} papers...`, 'success');

                    subjectPapers.forEach((paper, index) => {
                        setTimeout(() => {
                            downloadBoardPaper(paper.year, paper.subject);
                        }, index * 500);
                    });
                }
            } else {
                showNotification('No papers found for this subject!', 'error');
            }
        }
    }
}

// Initialize board papers when section is shown
document.addEventListener('DOMContentLoaded', function () {
    // Initialize on page load
    if (document.getElementById('boardPapersGrid')) {
        initializeBoardPapers();
    }
});

