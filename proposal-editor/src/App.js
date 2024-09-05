
// import React, { useState } from 'react';
// import ProposalManager from './components/ProposalManager';
// import DocumentPreview from './components/DocumentPreview';
// import './styles.css';

// function App() {
//   const [sections, setSections] = useState(['Introduction', 'Problem Statement', 'Solution', 'Conclusion']);
//   const [currentSection, setCurrentSection] = useState(sections[0]);
//   const [content, setContent] = useState('');
//   const [proposalTitle, setProposalTitle] = useState('Title');

//   const updateSectionContent = (section, newContent) => {
//     setSections((prevSections) =>
//       prevSections.map((sec) => (sec === section ? newContent : sec))
//     );
//   };

//   const handleUpdateContent = (newContent) => {
//     setContent(newContent);
//     updateSectionContent(currentSection, newContent);
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
//       <div style={{ flex: 1, width: '100%' }}>
//         <ProposalManager
//           llmContent={content}
//           sections={sections}
//           currentSection={currentSection}
//           setCurrentSection={setCurrentSection}
//           setContent={handleUpdateContent}
//         />
//         <div style={{ flex: 1, width: '100%', marginTop: '20px' }}>
//           <DocumentPreview sections={sections} />
//         </div>
//       </div>

//     </div>
//   );
// }

// export default App; 

import React, { useState, useEffect } from 'react';
import ProposalManager from './components/ProposalManager';
import DocumentPreview from './components/DocumentPreview';
import './styles.css';

function App() {
  const [sections, setSections] = useState(['Introduction', 'Problem Statement', 'Solution', 'Conclusion']);
  const [currentSection, setCurrentSection] = useState(sections[0]);
  const [content, setContent] = useState('');
  const [isPreviewEnabled, setIsPreviewEnabled] = useState(false);
  const [showPreview, setShowPreview] = useState(false); // State to control preview display

  // Function to check if at least one section has content in local storage
  const checkPreviewAvailability = () => {
    const hasContent = sections.some(section => localStorage.getItem(section));
    setIsPreviewEnabled(hasContent);
  };

  useEffect(() => {
    checkPreviewAvailability();
  }, [sections]); // Re-run check when sections change

  const updateSectionContent = (section, newContent) => {
    setSections((prevSections) =>
      prevSections.map((sec) => (sec === section ? newContent : sec))
    );
  };

  const handleUpdateContent = (newContent) => {
    setContent(newContent);
    updateSectionContent(currentSection, newContent);
    checkPreviewAvailability(); // Check if preview should be enabled
  };

  const handlePreviewClick = () => {
    setShowPreview(true); // Set state to show the document preview
  };

  return (
    <div className="proposal-manager-container">
      {!showPreview ? (
        <>
          <ProposalManager
            llmContent={content}
            sections={sections}
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            setContent={handleUpdateContent}
          />
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button
              onClick={handlePreviewClick}
              disabled={!isPreviewEnabled}
              className="preview-button"
            >
              Preview Document
            </button>
          </div>
        </>
      ) : (
        <DocumentPreview sections={sections} />
      )}
    </div>
  );
}

export default App;
  