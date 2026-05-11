const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
const PORT = 5501;

app.use(cors());
app.use(express.json());

// Language mappings to Judge0 language IDs
const languageMap = {
    "python": 71,
    "go": 60,
    "cpp": 54,
    "c": 50,
    "csharp": 51
};

app.post('/api/execute', async (req, res) => {
    const { language, source } = req.body;

    console.log(`Request received: language=${language}, source length=${source?.length}`);

    if (!language || !source) {
        console.log('Missing language or source');
        return res.status(400).json({ error: "Missing language or source code" });
    }

    const languageId = languageMap[language];
    if (!languageId) {
        console.log(`Unsupported language: ${language}`);
        return res.status(400).json({ error: `Language ${language} not supported` });
    }

    try {
        console.log(`Sending to Judge0: language_id=${languageId}`);
        
        const response = await fetch("https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
                "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY"  // You'll need a free key
            },
            body: JSON.stringify({
                language_id: languageId,
                source_code: source,
                cpu_time_limit: 5
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Judge0 API error: ${response.status} - ${errorText}`);
            throw new Error(`Judge0 API failed: ${response.status} - ${errorText}`);
        }

        const result = await response.json();
        console.log('Judge0 response:', result);
        res.json(result);
    } catch (error) {
        console.error('Server error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Code execution server running on http://localhost:${PORT}`);
});