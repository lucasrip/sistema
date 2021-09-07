import { useContext } from 'react';
import {AuthContext} from '../../contexts/auth';
import {Link} from 'react-router-dom';

import {FiHome,FiUser,FiSettings} from 'react-icons/fi';
import './header.css';
import avatar from '../../assets/avatar.png';

export default function Header()
{
  const {user} = useContext(AuthContext);

    return(
      <div className="sidebar">
        <div>
            <img src={user.avatarUrl === null ? avatar :user.avatarUrl} alt="Foto avatar" />
        </div>

        <Link to="/dashboard">
          <FiHome color="#fff" size="24"/>
          Chamados
        </Link>

        <Link to="/custumers">
          <FiUser color="#fff" size="24"/>
         Clientes  
        </Link>

        <Link to="/profile">
          <FiSettings color="#fff" size="24"/>
          Configuracao
        </Link>

      </div>
    )
}