import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { database } from '../services/firebase';
import { 
  getAuth,
  createUserWithEmailAndPassword,
  
  sendEmailVerification
 } from 'firebase/auth';
 import {  
  setDoc, doc 
} from 'firebase/firestore';
import { checkLogout } from '../action/auth';

function Register() {
  checkLogout()
  const navigate = useNavigate()
  const [data, setData] = useState({
    firstName:'',
    username:'',
    email:'',
    password:'',
    score: 0
  })
  const auth = getAuth();
  const handleInputs = (event) => {
    let inputs = {[event.target.name] : event.target.value}

    setData({...data, ...inputs})

  }

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(() => {
      setDoc(doc(database, "users", `${auth.currentUser.uid}`), data)
      .then(() => {
        sendEmailVerification(auth.currentUser)
        alert('verify your email first before login')
        navigate('/login') 
      })
      .catch(err => alert(err.message))
      })
    .catch((err) => {
      alert(err.message)
    })
    
  }


    return (
      <div>
       <link rel="stylesheet" href="/bootsrap/css/bootstrap.css" />
        <script src="/bootstrap/js/bootstrap.js"></script>
        <link rel="stylesheet" href="/css/Register.css" />
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-6 col-md-4">
              <div className="form-container">
              <h4 className="text-center font-weight-bold"> Sign-Up </h4>
                <p className="text-center">
                  Already have an account? <a href="/login">Login</a>
                </p>
                <div className="mb-3">
                  <label for="inputName" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className='form-control'
                    name="name"
                    onChange={event => handleInputs(event)}
                  ></input>
                </div>

                {/* Username */}

                <div className="mb-3">
                  <label for="inputUserName" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    className='form-control'
                    onChange={event => handleInputs(event)}
                  ></input>
                </div>

                      {/* Email */}
                      <div className="mb-3">
                  <label for="inputEmail" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className='form-control'
                    name="email"
                    aria-describedby="emailHelp"
                    onChange={event => handleInputs(event)}
                  ></input>
                  <div id="email" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                {/* Password */}
                <div className="mb-3">
                  <label for="inputPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className='form-control'
                    name="password"
                    onChange={event => handleInputs(event)}
                  ></input>
                  <div id="passwordHelpBlock" className="form-text">
                    Your password must be at least 6 characters
                  </div>
                </div>
                <button onClick={handleSubmit}>Sign Up 
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  } 

  export default Register;