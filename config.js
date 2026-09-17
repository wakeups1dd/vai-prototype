// ==================== API CONFIGURATION ====================
// Store your OpenRouter API key here (Backend Configuration)
// This file should be kept secure and not exposed publicly

const API_CONFIG = {
    // Replace with your actual OpenRouter API key or set via localStorage:
    // localStorage.setItem('OPENROUTER_API_KEY', 'your-key-here')
    // Get it from: https://openrouter.ai/
    API_KEY: (typeof window !== 'undefined' && window.localStorage && window.localStorage.getItem('OPENROUTER_API_KEY')) 
        ? window.localStorage.getItem('OPENROUTER_API_KEY') 
        : 'YOUR_OPENROUTER_API_KEY_HERE',

    // AI Model to use (can be changed)
    MODEL: 'openai/gpt-4o-mini',  // Recommended: Fast & Smart

    // Alternative models you can use:
    // 'google/gemini-2.0-flash-exp:free'  - FREE, Good quality
    // 'openai/gpt-3.5-turbo'              - Fast and reliable  
    // 'openai/gpt-4o'                     - Most advanced
    // 'meta-llama/llama-3.2-3b-instruct:free' - FREE, Very fast

    // System prompt for the AI assistant
    SYSTEM_PROMPT: 'You are a helpful and patient AI teaching assistant for students from 5th to 10th standard. Explain concepts clearly, use simple language, provide examples, and encourage learning.'
};

// Function to get API configuration
function getAPIConfig() {
    return API_CONFIG;
}

// Validate API key is configured
function isAPIConfigured() {
    return API_CONFIG.API_KEY && API_CONFIG.API_KEY !== 'YOUR_OPENROUTER_API_KEY_HERE';
}

// Automatically sync API key from Vercel Serverless environment if deployed
if (typeof window !== 'undefined') {
    fetch('/api/config')
        .then(res => res.ok ? res.json() : null)
        .then(data => {
            if (data && data.apiKey && data.apiKey !== 'YOUR_OPENROUTER_API_KEY_HERE') {
                API_CONFIG.API_KEY = data.apiKey;
                console.log('✅ OpenRouter key loaded from Vercel environment');
            }
        })
        .catch(() => {
            // Standalone or local mode without /api/config
        });
}

