import { useEffect, useState } from 'react';
import '../Styles/userList.css'
const UserList = () => {
   let[user,setUser] =useState([])
   useEffect(()=>{
    let fetchData=async()=>{
        let response=await fetch(' http://localhost:3500/users')
        let data=await response.json()
        setUser(data)
        console.log(data);
    }
    fetchData()
   },[])
   let handleDelete=(id,name)=>{
    setUser(user.filter((x)=>x.id!=id))
    alert(`${name}  is removed from user`)
   }
    return ( 
        <div className="userList">
            <h1>User List</h1>
            <div className="user_Section">
                {
                    user.map((u)=>(
                        <div className="users">
                            <h5>Username:{u.name}</h5>
                            <h5>Userage:{u.age}</h5>
                            <h5>Useremail:{u.email}</h5>
                            <h5>Userphone no:{u.phoneno}</h5>
                             <button id="btn" onClick={()=>handleDelete(u.id,u.name)}>Delete</button>
                        </div>
                    ))
                }
            </div>

        </div>
     );
}
 
export default UserList;