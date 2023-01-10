import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
    let [email, setEmail] = useState('')
    let em = ((e) => setEmail(e.target.value))
    let [password, setPassword] = useState('')
    let ps = ((p) => setPassword(p.target.value))
    let navigate = useNavigate()
    let login = (l) => {
        l.preventDefault()
        let data = { email, password }
        console.log(data);
        if (email == 'user1@gmail.com' && password == "0001") {
            navigate('/user/')
            alert(`user is logging in`)
        }
        else if(email == 'user2@gmail.com' && password == "0002") {
            navigate('/user/')
            alert(`${email} is logging in`)
        }
        else {
            alert('invalid credentials')
        }

    }
    return (
        <div className="userlogin">
            <div className="form_container_card">
                <h1>Login as User</h1>
                <div className="form_input">
                    <form action="" onSubmit={login}>
                        <div className="email">
                            <label htmlFor="" id='b'>Email </label><br />
                            <input type="email" placeholder="*Enter your Email" value={email} required onChange={em} />
                        </div>
                        <div className="password">
                            <label htmlFor="" id='a'>Password </label> <br />
                            <input type="password" placeholder="*Enter Your Password" value={password} required onChange={ps} />
                        </div>
                        <button>Log In</button>
                    </form>
                </div>

            </div>

        </div>
    );
}

export default UserLogin;