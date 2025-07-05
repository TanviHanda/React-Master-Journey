import React from 'react';
import Notes from './Components/Notes';
import Weather from './Components/Weather';
import UserStates from './Components/UserStates';
import Greetings from './Components/Greetings';

const App = () => {
  return (
    <div>
      <Notes />
      <Weather />
      <UserStates loggedIn={true} isadmin={true} />
      <Greetings timeOfDay="morning" />
    </div>
  );
};

export default App;
