import './App.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';


function LoginForm() {
  const [userName, setUserName] = useState("");  
  const [password, setPassword] = useState("");  

  return (
    <>
      <div className="grid justify-center">
        <h1>Login Here</h1>
        <input type="text" placeholder="Enter your Username" value={userName}onChange={(data) => {setUserName(data.target.value)
            console.log(userName)}
        }/>
        <input type="password" placeholder="Enter your Password" value={password}onChange={(data) => {setPassword(data.target.value)
            console.log(password)
        }}/>
        <Link to="/register" style={buttonStyle} >Sign Up</Link>

      </div>
    </>
  );
}

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

export default LoginForm;
