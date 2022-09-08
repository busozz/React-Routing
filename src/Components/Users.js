import {useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"

 
function Users() {
  const [loading,setLoading] = useState(true);
  const [users,setUsers] = useState({}) 
  
  useEffect(()=>{
    axios(`https://jsonplaceholder.typicode.com/users/`)
    .then((res)=>{setUsers(res.data)})
    .finally(()=> setLoading(false))
  },[])


  return (
    <div>
      <h1>Users</h1>
      {loading && <div>Loading...</div>}
        {!loading && <code>{JSON.stringify(users)}</code> }
   
        <br />
        <br />
      <ul>
        {users.map((item)=>(
          <li key ={item.id}>
            <Link to={`/users/${item.id}`}></Link>
            {item.name}
          </li>
        ))}
          
      </ul>

    
        
    </div>
  )
}

export default Users