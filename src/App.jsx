import React, { useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('sajjan');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formHandler = (e) => {
    e.preventDefault();
  };
  console.log('Form submitted:', { username, email, password });

  return (
    <>
      <form onSubmit={formHandler}>
        <input
          placeholder='username'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder='email'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder='password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default App;