import React, {useState} from "react";
import '../Components/LoginPage.css';
import fb from "../Images/facebook.png"
import google from "../Images/google.png"
import redIcon from "../Images/redIcon.png"; 

function LoginPage()
{
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [pwErr, setPWerr] = useState("");

    const validateForm = (e) =>
    {
        e.preventDefault();
         if(email==="")
         {
            setEmailErr("The email field is required !");
            return;
         }
         if(password==="")
         {
            setPWerr("The password field is required");
            return;
         }
         setEmail("");
         setPassword("");
    }       
    return(
        <div className="login-bg">
            <div className="login-box">
                <header className="header"></header>
                
                <p className="login-text"> Login </p>

                <div className="login-img"/>

                    <form onSubmit={validateForm} action="/">
                        <label htmlFor="email" className="form-labels"> Email</label>
                        <input type="email" value={email} onChange={e=> setEmail(e.target.value)}/>
                        {emailErr===""?null: 
                            <div className="error">
                                <img className="red-icon" src={redIcon} alt="red-icon"/>
                                <p className="error-msg">{emailErr}</p>
                            </div>
                        }


                        <label htmlFor="password" className="form-labels"> Password</label>
                        <input type="password" value={password} onChange={e=> setPassword(e.target.value)}/>
                        {pwErr===""?null: 
                        <div className="error">
                            <img className="red-icon" src={redIcon} alt="red-icon"/>
                            <p className="error-msg">{pwErr}</p> 
                        </div>
                        }
                        
                        <button className="submit-button">
                            Sign In
                        </button>

                        <span id="forgot-pw">Forgot Password?</span>
                        <span id="signup">New User? Sign Up</span>
                        <span id="or">or</span>

                        <button className="blue-buttons" id="button1">
                        <img  className="icon1" src={google} alt="loading" />
                            <p>
                                CONTINUE WITH GOOGLE
                            </p>
                        </button>
                        <button className="blue-buttons" id="button2">
                            <img  className="icon2" src={fb}  alt="loading"/>
                            {/* <div id="icon2"> */}
                               <p> CONTINUE WITH FACEBOOK   </p>
                            {/* </div>  */}
                        </button>
                    </form>

                    
            </div>
        </div>
    )
}

export default LoginPage;