import {useState,useContext} from 'react';
import {Link} from 'react-router-dom';

import './signin.css';
import logo from '../../assets/logo.png';

import {AuthContext} from '../../contexts/auth';

function Signin() {
  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');

  const {signIn,loadingAuth} = useContext(AuthContext);

function handleSubmit(e)
{
 e.preventDefault();
 if(email !== '' && password !== '')
 {
   signIn(email,password);
 }
}

    return (
      <div className="containerCenter">
         <div className="login">
             <div className="loginArea">
               <img src={logo} alt="logo" />
             </div>
             <form onSubmit={handleSubmit}>
               <h1>Entrar</h1>
               <input type="text" placeholder="email@email.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
               <input type="password" placeholder="****" value={password} onChange={(e)=>setPassword(e.target.value)} />
               <button type="submit">{loadingAuth?'Carregando':'Acessar'}</button>
             </form>
             <Link to="/register">criar Conta</Link>
         </div>
      </div>
    );
  }
  
  export default Signin;
  