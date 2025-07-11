// Notes.jsx
import React from 'react';
import NoteSection from '../Components/NotesSection';

const notesData = {
  LISTS: [
    "In React, you will render lists with some type of loop. The JS map() array method is generally the preferred method."
  ],
  PROPS: [
    "Props / Properties are arguments passed into React components.",
    "Props allow us to pass data from a parent component to a child component.",
    "Props are passed to components via HTML attributes."
  ],
  CONDITIONAL_RENDERING: [
    "It allows us to dynamically display different UI components or content based on specific conditions. This enables us to create a more interactive and responsive user experience."
  ],
  STATE_HOOKS: [
    "State is a way to store and manage data that can change over time and affects how the component renders. We define state using the useState Hook, which allows you to set an initial value and provides a way to update that state.",
    "What is a HOOK?",
    "Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.",
  ],
  useState:[
    "It allows us to track state in a functional component. State generally refers to data or properties that need to be tracked in an application.",
    "Syntax: const [data, changeData] = useState()"
  ],
  Portal: [
    "Portal is a feature that allows you to render a child component into a Dom node that exists outside the hierarchy of the parent component.",
    "This can be useful for scenarios like modals, tolltips or dropdowns, where you want to break out of the usual parent-child structure and render in a different part of the DOM."
  ],
  useEffect: [
    "It allows you to perform *side effects* in your components. Some examples of side effects are : fetching data, directly updating the DOM etc."
  ]
};

const Notes = () => {
  return (
    <div>
      {Object.entries(notesData).map(([title, items]) => (
        <NoteSection key={title} title={title} items={items} />
      ))}
    </div>
  );
};

export default Notes;