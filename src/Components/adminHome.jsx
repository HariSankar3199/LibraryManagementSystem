import'../Styles/adminHome.css'
import AdminNavbar from './adminNavbar';
import { Routes,Route } from 'react-router-dom';
import AdminDashboard from './adminDashboard';
import BookList from './bookList';
import UserList from './userList';
import AddUser from './addUser';
import ReadBook from './readBook';
import AddBook from './addBook';

const AdminHome = () => {
    return (  
        <div className="adminHome">
            <AdminNavbar/> 
            <Routes>
            <Route path='/' element={<AdminDashboard/>}/>
            <Route path='/book-list' element={<BookList/>}/>
            <Route path='/user-list' element={<UserList/>}/>
            <Route path='/add-user' element={<AddUser/>} />
            <Route path='/book-list/:id' element={<ReadBook/>}/>
            <Route path='/add-book' element={<AddBook/>}/>
            </Routes>

        </div>
    );
}
 
export default AdminHome;