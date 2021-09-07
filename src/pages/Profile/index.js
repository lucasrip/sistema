import { useState , useContext} from 'react';
import firebase from '../../services/firebaseConnection';

import Header from '../../components/Header';
import Title from '../../components/Title';

import './profile.css';
import {FiSettings,FiUpload} from 'react-icons/fi';
import avatar from '../../assets/avatar.png';

import {AuthContext} from '../../contexts/auth';

export default function Profile()
{
 const {user, signOut,setUser,storageUser} = useContext(AuthContext);
 const [nome,setNome] = useState(user && user.nome);
 const [email,setEmail] = useState(user && user.email);
 const [avatarUrl,setAvatarUrl] = useState(user && user.avatarUrl);
 const [imageAvatar,setImageAvatar] = useState(null);


function handleFile(e)
{
  if(e.target.files[0])
  {
   const image = e.target.files[0];
        if(image.type === 'image/Jpeg' || image.type === 'image/png')
        {
            setImageAvatar(image);
            setAvatarUrl(URL.createObjectURL(e.target.files[0]));
        }
        else
        {
            alert('envie uma imagem PNG JPG ou JPEG');
            setImageAvatar(null);
            return null;
        }
  }
}

 async function handleUpload()
 {
  const currentUid = user.uid;
  const uploadTask = await firebase.storage()
  .ref(`images/${currentUid}/${imageAvatar.name}`) 
  .put(imageAvatar)
  .then(async()=>{
    alert('foto enviada com sucesso');

    await firebase.storage().ref(`images/${currentUid}`)
    .child(imageAvatar.name).getDownloadURL()
    .then(async(url)=>{
       let urlFoto = url;
       
       await firebase.firestore().collection('users')
       .doc(user.uid)
       .update({
           avatarUrl:urlFoto,
           nome:nome
       })
       .then(()=>{
        let data={
            ...user,
            avatarUrl:urlFoto,
            nome:nome
        };
        setUser(data);
        storageUser(data);
       })
    })
  }) 
}

async function handleSave (e)
{
  e.preventDefault();

  if(imageAvatar === null && nome !== '')
  {
   await firebase.firestore().collection('users')
   .doc(user.uid)
   .update({
       nome:nome,
   })
   .then(()=>{
      let data={
          ...user,
          nome:nome
      }
      setUser(data);
      storageUser(data);
   })
   .catch((erro)=>{
     console.log(erro)
   })
  }
   else if(nome !== '' && imageAvatar !== null)
   {
       handleUpload();
   }


}



    return(
        <div>
            <Header/>
            <div className="content">
                <Title name="Meu Perfil">
                    <FiSettings size={25}/>
                </Title>
            
                <div className="container">
                    
                    <form className="formProfile" onSubmit={handleSave}>
                        <label className="labelAvatar">
                         <span>
                             <FiUpload color="#fff" size={25}/>
                         </span>
                       
                        <input type="file" accept="image/*" onChange={handleFile}/>
                        {
                            avatarUrl === null ?
                            <img src={avatar} width="250" height="250" alt="foto de perfil" />
                            :
                            <img src={avatarUrl} width="250" height="250" alt="foto de perfil" />
                        } 
                        </label>

                        <label htmlFor="">Nome</label>
                        <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>

                        <label htmlFor="">Email</label>
                        <input type="text" value={email} disabled={true} />

                        <button type="submit">Salvar</button>
                        
                    </form> 
                  </div>

                  <div className="container">
                     <button className="logoutBtn" onClick={()=>signOut()}>
                         Sair
                     </button>
                  </div>

            </div>
        </div>
    )
}