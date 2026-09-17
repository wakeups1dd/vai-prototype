// Vercel Serverless Function to securely deliver environment configuration
module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const apiKey = process.env.OPENROUTER_API_KEY || '';

    return res.status(200).json({
        configured: Boolean(apiKey && apiKey !== 'YOUR_OPENROUTER_API_KEY_HERE'),
        apiKey: apiKey
    });
};
