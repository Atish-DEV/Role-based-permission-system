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
        navigate('/signup', { replace: true });
    }

    return(
        <div>
        { userExist ? 
        <div>
        <h1>Profile Page</h1>
        <button onClick={handleSignOut}>SignOut</button>
        <h2>Name</h2>
        <h3>{name}</h3>
        <h2>Role</h2>
        <h3>{role}</h3>
        <div><Link to='/profile/clerk'>Clerk page</Link></div>
        <div><Link to='/profile/manager'>Manager Page</Link></div>
        <div><Link to='/profile/supervisior'>Supervisor page</Link></div>
        </div>:<h1>Unauthorised Entry</h1>}
        </div>
    );
}
export default Profile;