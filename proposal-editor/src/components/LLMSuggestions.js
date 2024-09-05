import React, { useState } from 'react';
import axios from 'axios';

function LLMSuggestions({ content, setContent }) {
    const [prompt, setPrompt] = useState('');
    const [suggestions, setSuggestions] = useState('');

    const handleGenerate = async () => {
        try {
            const response = await axios.post('http://localhost:5000/generate', { prompt });
            setSuggestions(response.data.content);
        } catch (error) {
            console.error("Error generating suggestions:", error);
        }
    };

    const handleCopySuggestion = () => {
        console.log("llm suggestion:::", content + ' ' + suggestions)
        setContent(content + ' ' + suggestions);
        setSuggestions('');
        setPrompt("");

    };

    return (
        <div className="component llm-suggestions">
            <div><em>LLM Suggestion box</em></div>
            <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your prompt here..."
                rows="4"
                cols="50"
            />
            <button onClick={handleGenerate}>Get Suggestions</button>
            <div>{suggestions}</div>
            {suggestions && <button onClick={handleCopySuggestion}>Copy to Editor</button>}
        </div>
    );
}

export default LLMSuggestions;