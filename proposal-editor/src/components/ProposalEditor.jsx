import React, { useCallback} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function ProposalEditor({ content, setContent,section }) {


    const handleSave = () => {
        // Save the content (e.g., send it to an API or save it locally)
        const plainText = document.querySelector('#editor .ql-editor').innerText;
        localStorage.setItem(section, plainText);
        setContent('');
    };
    return (
        <div className="component proposal-editor">
            <h2>Edit Proposal</h2>
            <ReactQuill id="editor" value={content} onChange={setContent} placeholder="Use llm to generate text or manually add content."
                style={{ minHeight: '200px' }} />
            <button onClick={handleSave}>Save to Section</button>
        </div>
    );
}

export default ProposalEditor;
