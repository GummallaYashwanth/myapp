import React from 'react'
import { useNavigate } from 'react-router-dom'



export default function Signup() {
    const navigate  = useNavigate();
    const handleLogin = () =>{
        navigate("/Login")
    }
  return (
    <div>
        
        <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class="form-group">
                <label for="role">Role</label>
                <select id="role" name="role" required>
                    <option value="">Select your role</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    <option value="guest">Guest</option>
                </select>
            </div>
            <div class="checkbox-group">
                <label>
                    <input type="checkbox" id="remember" name="remember"/>
                    Remember me
                </label>
            </div>
            <div class="checkbox-group">
                <label>
                    <input type="checkbox" id="terms" name="terms" required/>
                    I agree to the terms and conditions
                </label>
            </div>
            <button type="submit" class="login-btn">Login</button>

            <button onClick={handleLogin}> Already loged in </button>
       
    </div>
  )
}
