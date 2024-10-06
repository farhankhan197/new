import './App.css';
import { useState } from 'react';  
import {Link} from 'react-router-dom';

function App() {
  const [userName, setUserName] = useState("");  
  const [password, setPassword] = useState("");

  const buttonStyle = {
      padding: '10px 20px',
      margin: '10px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    };
  return (
    <>
      <div className="grid justify-center">
        <h1>Register Here</h1>
        <input type="text" placeholder="Enter your Username" value={userName}onChange={(data) => setUserName(data.target.value)}/>
        <input type="password" placeholder="Enter your Password" value={password}onChange={(data) => setPassword(data.target.value)}/>
        <Link to="/login" style={buttonStyle}> Login </Link>
      </div>

    </>
  );
}


export default App;
