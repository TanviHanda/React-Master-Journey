// Notes.jsx
import React, { useReducer } from 'react';
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
  ],
  propDrilling:[
    "Prop drilling in React refers to the process of passing data or functions from a parent component down through multiple layers of intermediate components to a deeply nested child component that actually needs access to that data or function."
  ],
  contextAPI:[
    "It is a feature that allows you to manage and share state across your component tree without having to pass props down manually at every level.",
    "It is useful for scenarios where you need to share data or functions across many components, especially when these components are deeply nested."
  ],
  useContext:[
    "It allows us to access the context values provided by a context object directly within a functional component.",
    "It provides a way to pass data through the component tree without having to pass props down manually at every level."
  ],
  useReducer:[
    "It is similar to useState but it is designed for more complex state objects or state transitions that involves multiplt sub-values",
    "It allows you to manage state in a functional, immutable way."
  ],
  useRef:[
    "It provides a way to access and interact with DOM elements or to persist values across renders without causing a re-render."
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