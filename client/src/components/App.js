import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router';
import Login from "./Login";
import Home from "./Home";
import NavBar from './NavBar';

function App() {
  const [user, setUser] = useState(null);
  console.log(user)

  useEffect(() => {
    fetch("/me").then((r)=> {
      if(r.ok){
        r.json().then((user) => setUser(user))
      }
    })
  }, []);

  if(!user) return <Login onLogin={setUser}/>

  return (
    <div className="App">
      <NavBar user = {user} setUser = {setUser}/>
      <Routes>
        <Route path= "/" element = {<Home user = {user} />} />
      </Routes>
    </div>
  )

}

export default App;
