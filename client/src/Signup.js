import { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import {  Link } from "react-router-dom";
function Signup(){
    const [data, setData] = useState({});
    const [msg,setMsg]=useState('');
    const navigate = useNavigate();
    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const submit = e => {
        e.preventDefault();
        //console.log(data);
        fetch('http://localhost:4000/signup',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
        }).then(res=>{
            if(res.status==200){
                setMsg('');
                navigate('/signin', { replace: true });
            }else if(res.status==409){
                setMsg('User alredy created, kindly Sign in');
            }else{
                setMsg('Server Error');
            }
        })
    }
    return(
        <div>
        <h2>Create an Account</h2>
        <form onSubmit={submit}>
            <label>Email</label>
            <br/>
            <input type='email' name='email' placeholder="Enter email"  onChange={updateData} required/>
            <br/>
            <label>Name</label>
            <br/>
            <input type='text' name='name' placeholder="Enter name"  onChange={updateData} required/>
            <br/>
            <label>Password</label>
            <br/>
            <input type='password' name='password' placeholder="Enter password"  onChange={updateData} required/>
            <br/>
            <label>Roles</label>
            <br/>
            <input type='radio' value='clerk' name='role'  onChange={updateData} required/>
            <label for='clerk'>clerk</label>
            <input type='radio' value='supervisior' name='role'  onChange={updateData} required/>
            <label for='supervisior'>supervisior</label>
            <input type='radio' value='manager' name='role'  onChange={updateData} required/>
            <label for='manager'>manager</label>
            <br/>
            <input type='submit' value='submit'/>
        </form>
        <h2>{msg}</h2>
        <h2>Already have an account ??</h2>
        <Link to="/signin">SignIn</Link>
        </div>
    );
}
export default Signup;