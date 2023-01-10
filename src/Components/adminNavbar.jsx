import '../Styles/adminNavbar.css'
import { Link } from 'react-router-dom';
const adminNavbar = () => {
    return (
        <div className="adminNavbar">
            <div className="logo">
                <img height="80px" src="/images/adp.png" alt="adminPortel" />
                {/* <p>admin Portel</p> */}

            </div>
            <div className="links">
                <ul>
                    <li><Link to='/admin/'>Dashboard</Link></li>
                    < li>< Link to="/admin/add-book" className='nav_links'>Add Books</ Link></ li >
                    < li>< Link to="/admin/add-user" className='nav_links'>Add User</ Link></ li >
                    < li>< Link to="/admin/book-list" className='nav_links'>Book List</ Link></ li >
                    < li>< Link to="/admin/user-list" className='nav_links'>User List</ Link></ li >
                    < li>< Link to="/" className='nav_links'>Logout</ Link></ li >
                </ul>
            </div>
        </div>      
    );
}

export default adminNavbar;