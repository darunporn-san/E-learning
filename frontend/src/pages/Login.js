import React, { useState } from 'react';
import { Eye, EyeOff, BookOpen } from 'lucide-react';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Handle login logic here
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Handle social login logic here
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="brand-icon">
          <BookOpen />
        </div>
        
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Sign in to continue your learning journey</p>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="input-group">
            <label className="input-label">Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                className="input"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
                style={{ paddingRight: '3rem' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#7f8c8d'
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
              />
              Remember me
            </label>
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>
          
          <button type="submit" className="sign-in-btn">
            Sign In
          </button>
        </form>
        
       
        
        <div className="signup-link">
          Don't have an account? <a href="#">Sign up for free</a>
        </div>
      </div>
    </div>
  );
}

export default Login;