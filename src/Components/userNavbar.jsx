import { Link } from "react-router-dom";
import '../Styles/userNavbar.css'
const UserNavbar = () => {
    return (
        <div className="userNavbar">

            <div className="logo">
                <img height="80px" src="/images/adp.png" alt="userPortel" />
                {/* <p>admin Portel</p> */}

            </div>
            <div className="links">
                <ul>
                    <li><Link to='/user/'>Dashboard</Link></li>
                    < li>< Link to="/user/book-list" className='nav_links'>Book List</ Link></ li >
                    < li>< Link to="/" className='nav_links'>Logout</ Link></ li >
                </ul>
            </div>
        </div>

    );
}

export default UserNavbar;