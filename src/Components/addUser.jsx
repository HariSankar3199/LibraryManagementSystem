import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/addUser.css'
const AddUser = () => {
let navigate=useNavigate()
    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [email, setEmail] = useState("")
    let [phoneno, setPhoneno] = useState("")
    let  handleSubmit= (e) => {
        e.preventDefault()
        let data = { name, age, email, phoneno }
        fetch('http://localhost:3500/users', {
            method: 'POST',
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify(data)
        })
alert(`${name} is added`)
navigate('/admin/user-list')
    }
    return (
        <div className="addUser">
            <h1>Adding New Users</h1>
            <div className="Forms">
                <div className="addUserimg">
                    <img src={"/images/bg3.jpg"} alt="" />
                </div>
                <div className="addUserform">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="username">
                            <label htmlFor="">Name</label>
                            <input  type="text"  placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="Userage">
                            <label htmlFor="">Age</label>
                            <input type="number"  min='1' placeholder="Enter your age"  value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <div className=''>
                            <label htmlFor="">Email</label>
                            <input type='email' placeholder="Enter your email" required  value={email}  onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className=''>
                            <label htmlFor="">Phoneno</label>
                            <input type="tel" minLength='10' maxLength='10' placeholder="Enter your phoneno"  value={phoneno} onChange={(e) => setPhoneno(e.target.value)} />
                        </div>

                        <button type='submit'>Submit</button>
                    </form>
                </div>

            </div>

        </div>
    );
}

export default AddUser;