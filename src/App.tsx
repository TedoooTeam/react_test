import React, { useState } from 'react';
import { login } from './api';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = () => {
    setLoading(true);
    setError('');
    login({ email, password }).then(res => {
      alert(`Welcome ${email}! Your access token is ${res.accessToken}`);
    }).catch(e => {
      setError(e.message);
    }).finally(() => { setLoading(false) });
  }
  const isDisabled = loading || email.length === 0 || password.length < 6;

  return (
    <div className="App">
      <h1>Login</h1>
      <div className="form-container">
        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <br />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <br />
        <button disabled={isDisabled} type="submit" onClick={onSubmit}>Login</button>
        <br />
        {error && <span style={{ color: 'red' }}>{error}</span>}

      </div>
    </div>
  );
}

export default App;
