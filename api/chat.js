// Vercel Serverless Function to proxy AI chat requests securely without exposing secrets
module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey || apiKey === 'YOUR_OPENROUTER_API_KEY_HERE') {
        return res.status(500).json({ 
            error: 'OPENROUTER_API_KEY is not configured in Vercel Environment Variables.' 
        });
    }

    try {
        const { messages, model, systemPrompt } = req.body || {};

        const formattedMessages = [];
        if (systemPrompt) {
            formattedMessages.push({ role: 'system', content: systemPrompt });
        }
        if (Array.isArray(messages)) {
            formattedMessages.push(...messages);
        }

        const openRouterResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': req.headers.referer || 'https://vai-prototype.vercel.app',
                'X-Title': 'VAI-ai Virtual Academic Intelligence'
            },
            body: JSON.stringify({
                model: model || 'openai/gpt-4o-mini',
                messages: formattedMessages
            })
        });

        const data = await openRouterResponse.json();
        return res.status(openRouterResponse.status).json(data);
    } catch (err) {
        return res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
};
