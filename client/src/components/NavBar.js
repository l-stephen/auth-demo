function NavBar({user,setUser}){

    function handleLogout(){
        fetch("/logout", {
            method: "DELETE",
        })
        .then((r) =>{
            if(r.ok){
                setUser(null);
            }
        })
    }
    return (
        <button onClick={handleLogout}>Logout</button>
    )

}
export default NavBar;