import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function SignIn(){
    const [data, setData] = useState({});
    const [msg,setmsg]=useState('');
    const navigate = useNavigate();
    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const submit=e=>{
        e.preventDefault();
        //console.log(JSON.stringify(data));
        fetch('http://localhost:4000/signin',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
        }).then(res=>{
                return res.json();
        }).then(res=>{
            setmsg(res.message);
            if(res.data){
           localStorage.setItem('token',res.data.token);
           navigate('/profile', { replace: true });
            }
        }).catch(err=>{
            console.log(err);
        });
    }
    return(
        <div>
            <header>Sign in</header>
            <main>
                <div>
            <form onSubmit={submit}>
            <label>Email</label>
            <br/>
            <input type='email' name='email' placeholder="Enter email" onChange={updateData} required/>
            <br/>
            <label>Password</label>
            <br/>
            <input type='password' name='password' placeholder="Enter password"  onChange={updateData} required/>
            <p>
            <input type='submit' value='submit'/>
            </p>
            </form>
            <p>Don't have an account 
            <br/>
            <Link className='text-center' to='/signup'>Click here to sign up</Link>
            </p>
            <br/>
            <h3>{msg}</h3>
            </div>
            </main>
        </div>
    );
}
export default SignIn;