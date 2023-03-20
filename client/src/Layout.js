import { useEffect } from "react";
import { Link } from "react-router-dom";

function Layout(){
    return(
        <div>
            <h1>Role Based Authentication app</h1>
            <Link to="/signin">SignIn</Link>
            <br/>
            <Link to="/signup">SignUp</Link>
        </div>
    );
}
export default Layout;