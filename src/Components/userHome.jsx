import { Route, Routes } from "react-router-dom";
import BookList from "./bookList";
import ReadBook from "./readBook";
import UserDashboard from "./userDashboard";
import UserNavbar from "./userNavbar";

const UserHome = () => {
    return (
        <div className="UserHome ">
            <UserNavbar />
            <Routes>
                <Route path="/" element={<UserDashboard/>} />
                <Route path="/book-list" element={<BookList/>}/>
                <Route path='/book-list/:id' element={<ReadBook/>}/>
            </Routes>

        </div>
    );
}

export default UserHome;