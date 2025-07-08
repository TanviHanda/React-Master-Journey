import React, { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState([
    {
      name: 'sanya',
      age: 25,
    },
  ]);

  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');

  const handleUpdates = () => {
    const updatedProfile = profile.map((person) => ({
      ...person,
      name: newName,
      age: parseInt(newAge),
    }));
    setProfile(updatedProfile);
  };

  return (
    <div>
      {profile.map((m, index) => (
        <ul key={index}>
          <li>Name: {m.name}</li>
          <li>Age: {m.age}</li>
        </ul>
      ))}

      <input
        type="text"
        placeholder="update name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="text"
        placeholder="update age"
        value={newAge}
        onChange={(e) => setNewAge(e.target.value)}
      />
      <button onClick={handleUpdates}>Update profile</button>
    </div>
  );
};

export default Profile;
