import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Profile(){
    const [name,setName]=useState('');
    const [role,setRole]=useState('');
    const [email,setEmail]=useState('');
    const [userExist,setUser]=useState(false);
    const [msg,setMsg]=useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        console.log('this fetch');
        fetch('http://localhost:4000/profile',{
            headers: {
                'Content-Type': 'application/json',
                Authorization:'bearer '+localStorage.getItem('token')
              }
        }).then(res=>{
            if(res.status==200){
                return res.json();
            }
        }).then((res)=>{
            setUser(true);
            setName(res.data.name);
            setEmail(res.data.email);
            setRole(res.data.role);
        }).catch((err)=>{
            setUser(false);
            setMsg('Unauthorised entry,Sign in first');
        })
    });
    function handleSignOut(){
        localStorage.clear();
        navigate('/signin', { replace: true });
    }

    return(
        <div>
        { userExist ? 
        <div>
        <header>Profile Page
        <button onClick={handleSignOut}>SignOut</button>
        </header>
        <main>
            <div>
        <h2>Name : {name}</h2>
        <h2>Role : {role}</h2>
        <ul>
            <li>
            <Link to='/profile/clerk'>Clerk page</Link>
            </li>
            <li>
            <Link to='/profile/manager'>Manager Page</Link>
            </li>
            <li>
            <Link to='/profile/supervisior'>Supervisor page</Link>
            </li>
        </ul>
        </div>
        </main>
        </div>:<h1>Unauthorised Entry</h1>}
        </div>
    );
}
export default Profile;