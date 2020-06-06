import React, { useState } from 'react';
import Api from '../../../../apiAccess';

import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const submitCredentials = (e) => {
    e.preventDefault();
    setLoading(true);
    Api('http://localhost:5000').trigger(
      {
        endpoint: 'auth/login',
        options: {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        }
      }
    ).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
        <div className='login-form-wrapper'>
            <form onSubmit = {(e) => submitCredentials(e)}>
                <label htmlFor='username'>Username</label>
                <input
                    type='text'
                    className='form-control'
                    id='username'
                    value = {username}
                    onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    id='password'
                    className='form-control'
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button
                    type='submit'
                    className='btn btn-primary'
                    disabled= {loading}>
                        Login
                </button>
            </form>
        </div>
  );
};

export default Login;
