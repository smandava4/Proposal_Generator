require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Import the cors package
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = 5000;

app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend's origin
})); // Use the cors middleware to enable CORS
app.use(express.json());

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
console.log('API Key:', process.env.API_KEY);  // For debugging purposes
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Endpoint to generate content based on a provided prompt
app.post('/generate', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const result = await model.generateContent(prompt);
        res.json({ content: result.response.text() });
    } catch (error) {
        console.error('Error generating content:', error);
        res.status(500).json({ error: 'An error occurred while generating content' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
    