import React, { useState, useCallback } from 'react';
import ProposalOutline from './ProposalOutline';
import ProposalEditor from './ProposalEditor';
import LLMSuggestions from './LLMSuggestions';


function ProposalManager() {

    const [sections, setSections] = useState(['Introduction', 'Problem Statement', 'Solution', 'Conclusion']);
    const [currentSection, setCurrentSection] = useState(sections[0]);

    const [ content, setContent] = useState('');
    const [llmContent, setLlmContent] = useState('');
    // Function to update the content of the current section
    const updateSectionContent = (sectionName, newContent) => {
        setSections(prevSections =>
            prevSections.map(sec =>
                sec.name === sectionName ? { ...sec, content: newContent } : sec
            )
        );
    };

    const handleUpdateContent = (newContent, section=null) => {
        console.log("editor sugges::",newContent)
        console.log("section::::",currentSection)
        const storedContent = section !== null ? localStorage.getItem(section) : localStorage.getItem(currentSection);
        console.log("content::",content)
        var initialText = '';
        if (storedContent !== null ) {
            initialText =  storedContent
            if (newContent !== undefined || newContent.length !== null) {
                initialText += "\n"+newContent 
            }
        }else{
            initialText = newContent 
        }
        setContent(initialText);
    };

    // Handle save button click
    const handleSave = () => {
        updateSectionContent(currentSection, content);
    };
    console.log("contentCheck:::",content)
    // Get the content for the current section
    const currentSectionContent = sections.find(sec => sec.name === currentSection)?.content || '';
    return (
        <div className='proposal-generator' style ={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
                <ProposalOutline
                    sections={sections}
                    setCurrentSection={setCurrentSection}
                    setContent={handleUpdateContent}
                />
            </div>
            <div style={{ flex: 2 }}>
                <h2>{currentSection}</h2>
                <ProposalEditor
                    section={currentSection}
                    setContent={handleUpdateContent} // Update content in the editor and section
                    content={content}
                />
            </div>
            <div style={{ flex: 1 }}>
                <LLMSuggestions
                    content={llmContent}
                    setContent={handleUpdateContent} // Pass handleUpdateContent for updating content
                />
            </div>
        </div>
    );
}

export default ProposalManager;