import React, { useState } from "react";
import "./LoginWindow.css"

function LoginWindow() {
    const [formData, setFormData] = useState({    
        email: "",
        password: ""
      });
    
      const updateFormData = event =>
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
    
      const {  email, password } = formData;
    return (
        <div>
            <div className="allcomponents">
                <div className="singinblock">
                    
                        <h1>SIGN <span>IN</span></h1>                              
                    <div className="formablock">
                    <form>                                      
                        <input
                            value={email}
                            onChange={e => updateFormData(e)}
                            placeholder="Username or Email"
                            type="email"
                            name="email"
                            required
                        />
                        <input
                            value={password}
                            onChange={e => updateFormData(e)}
                            placeholder="Password"
                            type="password"
                            name="password"
                            required
                        />
                            <button type="submit">Sign IN</button>
                        </form>
                    </div>
                </div>
                <div className="picture_block">
                    <img src="https://i.ibb.co/kmm6xxD/new.jpg" alt="new" border="0"></img>
                </div>
            </div>
        </div>
    )
}

export default LoginWindow
