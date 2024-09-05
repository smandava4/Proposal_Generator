import React from 'react';

function ProposalOutline({ sections, setCurrentSection,setContent }) {
    console.log("In Outline Section:", sections); // Debugging to check sections data

    if (!sections || sections.length === 0) {
        return <p>No sections available</p>; // Provide feedback if no sections
    }

    const handleSectionChange = (section)=>{
        setCurrentSection(section);
        setContent('',section);
    }
    return (
        <div className="component proposal-outline">
            <h2>Proposal Outline</h2>
            <ul>
                {sections.map((section, index) => (
                    <li key={index} onClick={() => handleSectionChange(section)}>
                        {section}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProposalOutline;

