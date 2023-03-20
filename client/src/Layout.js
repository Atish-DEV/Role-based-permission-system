import { Link } from "react-router-dom";
function Layout(){
    return(
        <div>
            <header>Role Based Authentication app</header>
            <main>
                <Link className='link' to="/signin">SignIn</Link>
                <br/>
                <Link className='link' to="/signup">SignUp</Link>
            </main>
        </div>
    );
}
export default Layout;