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

    if (!language || !source) {
        return res.status(400).json({ error: "Missing language or source code" });
    }

    const languageId = languageMap[language];
    if (!languageId) {
        return res.status(400).json({ error: `Language ${language} not supported` });
    }

    try {
        const response = await fetch("https://judge0.com/api/submissions?base64_encoded=false&wait=true", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                language_id: languageId,
                source_code: source,
                cpu_time_limit: 5
            })
        });

        if (!response.ok) {
            throw new Error(`Judge0 API failed: ${response.statusText}`);
        }

        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Code execution server running on http://localhost:${PORT}`);
});
