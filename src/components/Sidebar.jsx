import { Link } from "react-router-dom";

const Sidebar = () => {
  return(
    <>  
      <ul className="list-unstyled">
        <li>
          <Link to={'/products'}> get All Products</Link>
        </li>
      </ul>
    </>
  )
}
export default Sidebar;