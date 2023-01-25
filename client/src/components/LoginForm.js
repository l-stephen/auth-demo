import React, {useState} from 'react';

function LoginForm({onLogin}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setLoading] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({username, password}),
        }).then((r) => {
            setLoading(false);
            if(r.ok){
                r.json().then((user)=> onLogin(user))
            }
            else{
                r.json().then((err) => console.log(err))
            }
        })
    }
    return(
        <form onSubmit = {handleSubmit}>
            <label><b>Username</b></label>
            <input type="text" value={username} onChange = {(e) => setUsername(e.target.value)}></input>
            <label><b>Password</b></label>
            <input type="text" value={password} onChange = {(e) => setPassword(e.target.value)}></input>
            <br></br>
            <button>{isLoading ? "Loading..." : "Login"}</button>
        </form>
    )
}
export default LoginForm;
