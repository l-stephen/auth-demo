import {useState} from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
function Login({onLogin}){
    const [show, setShow] = useState(true);

    return (
       show  ? ( 
            <>
            <LoginForm onLogin = {onLogin} />
            Don't have an account?
            <button onClick = {() => setShow(false)}>Sign UP</button>
            </> 
        ) : (
            <>
            <SignUpForm onLogin = {onLogin} />
            Already have an account?
            <button onClick = {()=> setShow(true)}>Log In</button>
            </>
        )
    );
}
export default Login;