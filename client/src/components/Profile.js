// src/components/Profile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/login', { withCredentials: true })
      .then(response => {
        console.log('Authenticated');
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
        console.log('Not authenticated');
      });
  }, []);

  const logout = () => {
    window.open('http://localhost:5000/logout', '_self');
  };

  if (!user) {
    return <div>Not logged in</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.displayName}</p>
      <p>Email: {user.emails[0].value}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
