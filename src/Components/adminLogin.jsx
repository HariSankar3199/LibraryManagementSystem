import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/adminLogin.css'
const AdminLogin = () => {
    let [email, setEmail] = useState("")
    //    let eml = ((e)=>setEmail(e.target.value))
    let [password, setPassword] = useState("")
    //    let pswd = ((p)=>setPassword(p.target.value)) 
    let navigate = useNavigate()

    let login = (l) => {
        l.preventDefault();
        let data = { email, password }
        console.log(data);
        if (email == 'admin1@gmail.com' && password == "0000") {
            navigate('/admin/')

        }
        else {
            alert('invalid credentials')
        }

    }
    return (
        <div className="adminlogin">
            <div className="form_container_card">
                <h1>Login as Admin</h1>
                <div className="form_input">
                    <form action="" onSubmit={login}>
                        <div className="email">
                            <label htmlFor="" id='b'>Email </label><br />
                            <input type="email" placeholder='* Enter your Email' value={email} required onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="password">
                            <label htmlFor="" id='a'>Password </label> <br />
                        
                            <input type="password" placeholder='* Enter your Password' value={password} required onChange={(p) => setPassword(p.target.value)} />
                        </div>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default AdminLogin;