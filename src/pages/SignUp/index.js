import {useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import {AuthContext} from '../../contexts/auth';


function SignUp() {
  const [nome,setNome] =useState('');
  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');
  const {signUp,loadingAuth} = useContext(AuthContext);


function handleSubmit(e)
{
 e.preventDefault();

if(nome !== '' && email !== '' && password !== '')
{
  signUp(nome,email,password);
}

}

    return (
      <div className="containerCenter">
         <div className="login">
             <div className="loginArea">
               <img src={logo} alt="logo" />
             </div>
             <form onSubmit={handleSubmit}>
               <h1>Criar conta</h1>
               <input type="text" value={nome} placeholder="Seu nome" onChange={(e)=>setNome(e.target.value)} />
               <input type="text" placeholder="email@email.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
               <input type="password" placeholder="****" value={password} onChange={(e)=>setPassword(e.target.value)} />
               <button type="submit">{loadingAuth?'Carregando...':'Cadastrar'}</button>
             </form>
             <Link to="/">ja tem uma conta ?</Link>
         </div>
      </div>
    );
  }
  
  export default SignUp;
  