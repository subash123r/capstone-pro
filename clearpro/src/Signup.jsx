import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup(){
    const [name,setname]=useState()
    const [email,setemail]=useState()
    const [password,setpassword]=useState()

    const handlesubmit =(e) =>{
   e.preventDefault()
   axios.post('http://127.0.0.1:27017?register',{name, email, password, })
   .then(result =>console.log(err))
   .catch(err => console.log(err))
    }

    

    return(

    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Register</h2>
         <form onSubmit= {handlesubmit}>
            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Name</strong>
                </label>
                <input type="text"
                placeholder="Enter Name"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                onChange={(e)=> setname(e.target.value)}
                />
            </div>

                <div/>
                <div>
                    <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="email"
                    placeholder="Enter Email"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0"
                    onChange={(e)=> setemail(e.target.value)}
                    />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input type="Password"
                    placeholder="Enter Password"
                    name="password"
                    className="form-control rounded-0"
                    onChange={(e)=> setpassword(e.target.value)}
                    />
                </div>
                <button type="submit" className ="btn btn-sucess w-100 rounded-0 bg-blue" >
                    Register
                </button>
                </form> 

                <p>Already Have An Account</p>
                <Link to="/Login" className="btnbtn-default border w-100 bg-light rounded-0 text-decoration-none">
                Login
                </Link>
                 
             
           
           <div/>
           </div>
     </div>

    )
   
}




export default Signup