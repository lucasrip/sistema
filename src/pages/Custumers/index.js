import { useState } from "react";
import firebase from "../../services/firebaseConnection";

import './custumers.css';
import Title from '../../components/Title';
import Header from '../../components/Header';
import {FiUser} from 'react-icons/fi';
import {toast} from 'react-toastify';

export default function Custumers()
{
  const [nomeFantasia , setNomeFantasia] = useState('');
  const [cnpj , setCnpj] = useState('');
  const [endereco , setEndereco] = useState('');

  async function handleAdd(e)
  {
    e.preventDefault();

    if(nomeFantasia !== '' && cnpj !== '' && endereco !== '')
    {
        await firebase.firestore().collection('customers')
        .add({
            nomeFantasia:nomeFantasia,
            cnpj:cnpj,
            endereco:endereco,
        })
        .then(()=>{
            setNomeFantasia('');
            setCnpj('');
            setEndereco('');
            toast.info("cadastrado com sucesso");
        })
        .catch((erro)=>{
            console.log(erro)
         toast.error("algo deu errado");
        })
    }else
    {
        toast.error('preencha toodos os campos');
    }
  }


    return(
         <div>
           <Header/>
           <div className="content">
               <Title name="Clientes">
                 <FiUser size={25}/>          
               </Title>
              
              <div className="container">
                <form className="formProfile custumers" onSubmit={handleAdd} >

                 <label>Nome fantasia</label>
                 <input type="text" placeholder="nome da sua empresa" value={nomeFantasia} onChange={(e)=>setNomeFantasia(e.target.value)} />

                 <label>Cnpj</label>
                 <input type="text" placeholder="seu cnpj" value={cnpj} onChange={(e)=>setCnpj(e.target.value)} />

                 <label>Endereco</label>
                 <input type="text" placeholder="seu endereco" value={endereco} onChange={(e)=>setEndereco(e.target.value)} />

                  <button type="submit">Cadastrar</button>
                </form>
              </div>
           </div>
         </div>
    )
}