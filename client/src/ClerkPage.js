import { useEffect, useState } from "react";

function ClerkPage(props){
    const [msg,setMsg]=useState('');
    useEffect(()=>{
        fetch('http://localhost:4000/profile/clerk',{
            headers: {
                'Content-Type': 'application/json',
                Authorization:'bearer '+localStorage.getItem('token')
              }
        }).then((res)=>res.json())
            .then((res)=>{
                setMsg(res.message);
            }).catch((err)=>{
                setMsg('Unauthorised entry,please Signin');
            })
    })
    return(
        <h1>{msg}</h1>
    );
}
export default ClerkPage;