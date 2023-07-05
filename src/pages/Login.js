import { useState } from 'react';
import { 
  getAuth,
  signInWithEmailAndPassword
 } from 'firebase/auth';
 import {useNavigate} from 'react-router-dom'
import { checkLogout } from '../action/auth';

function Login () {
  checkLogout()
  const navigate = useNavigate()
  const [data, setData] = useState({
    name:'',
    username:'',
    email:'',
    password:''
  })
  const auth = getAuth();
  const handleInputs = (event) => {
    let inputs = {[event.target.name] : event.target.value}

    setData({...data, ...inputs})

  }

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then(authUser => {
      if(authUser.user.emailVerified){ //This will return true or false
        console.log('email is verified')
        localStorage.setItem('token', authUser.user.accessToken)
        localStorage.setItem('uid', authUser.user.uid)
        navigate('/home')
      }else{
        console.log('email not verified')
        alert("verify your email first before login")
      }
      
      }).catch((err) => {
        alert(err.message)

    });
    
  }

    return (
      <div>
        <link rel="stylesheet" href="/bootstrap/css/bootstrap.css" />
        <script src="/bootstrap/js/bootstrap.js"></script>
        <link rel="stylesheet" href="/css/Login.css" />
        <div className="container-fluid"> 
          <div className="row justify-content-center">
            <div className="col-12 col-sm-6 col-md-4">
              <div className="form-container">
                <h4 className="text-center font-weight-bold"> Sign-In </h4>

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
                  </div>
                </div>
                <p className="text-center">
                  Don't have an account? <a href="/register">Register</a>
                </p>
                {/* Button */}
                <button onClick={handleSubmit}>Sign In </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Login;