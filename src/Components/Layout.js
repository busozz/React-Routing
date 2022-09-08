import { Link, Outlet} from "react-router-dom"


function Layout() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="users">Users</Link>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
            </ul>
        </nav>
         <Outlet/>   {/*  iç içe geçmiş routerları sayfanın neresinde gösterilecegğini sağlar */}
    </div>
  )
}

export default Layout