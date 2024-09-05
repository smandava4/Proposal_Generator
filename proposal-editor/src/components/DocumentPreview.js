import React from 'react';

function DocumentPreview({ sections }) {
    return (
        <div className="component document-preview">
            <h2>Document Preview</h2>
            <div className="preview-content">
                {sections.map((section, index) => (
                    <div key={index}>
                        <h3>{section}</h3>
                        <p>{localStorage.getItem(section) || "No content yet..."}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DocumentPreview;
