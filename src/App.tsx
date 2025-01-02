import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Login</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input type="text" placeholder="Email" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <button style={{ width: 200, height: 30 }} type="submit">Login</button>
        <br />
        <span style={{ color: 'red' }}>Error here</span>
      </div>
    </div>
  );
}

export default App;
