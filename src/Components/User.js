import {useParams , Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from "axios"

function User() {

  const { id } = useParams()         // bir parametre oluşturup kullanıyoruz.

  const [loading,setLoading] = useState(true);
  const [user,setUser] = useState({})       // user tanımlanan bir değer,setUser ise user ı güncellemeye yarayan diğer bir değerdir.

  useEffect(()=>{
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>{setUser(res.data)})
    .finally(()=> setLoading(false))
  },[id])

  return (
    <div>
        <h1>User Detail</h1>
        {loading && <div>Loading...</div>}
        {!loading && <code>{JSON.stringify(user)}</code> }
   
        <br />
        <br />

        <Link to={`/user/${parseInt(id)+1}`} >
            Next User ({parseInt(id) + 1})
        </Link>

   </div>
  )
}

export default User