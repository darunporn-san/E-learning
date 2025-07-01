import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  GraduationCap,
  User,
  Mail,
  Lock,
  CheckCircle,
} from "lucide-react";
function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Registration attempt:", formData);
      // Handle registration logic here
    }
  };

  const handleSocialSignup = (provider) => {
    console.log(`Sign up with ${provider}`);
    // Handle social signup logic here
  };

  const getPasswordStrength = () => {
    const password = formData.password;
    if (!password) return { strength: 0, text: "" };

    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    const strengthTexts = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
    return { strength, text: strengthTexts[strength - 1] || "" };
  };

  const passwordStrength = getPasswordStrength();

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="brand-icon">
          <GraduationCap />
        </div>

        <h1 className="signup-title">Create Account</h1>
        <p className="signup-subtitle">Join thousands of learners worldwide</p>

        <form onSubmit={handleSubmit}>
          <div className="name-row">
            <div className="input-group">
              <label className="input-label">First Name</label>
              <div className="input-wrapper">
                <User className="input-icon" size={18} />
                <input
                  type="text"
                  name="firstName"
                  className={`input ${errors.firstName ? "is-danger" : ""}`}
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              {errors.firstName && (
                <p className="error-text">{errors.firstName}</p>
              )}
            </div>

            <div className="input-group">
              <label className="input-label">Last Name</label>
              <div className="input-wrapper">
                <User className="input-icon" size={18} />
                <input
                  type="text"
                  name="lastName"
                  className={`input ${errors.lastName ? "is-danger" : ""}`}
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
              {errors.lastName && (
                <p className="error-text">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Email Address</label>
            <div className="input-wrapper">
              <Mail className="input-icon" size={18} />
              <input
                type="email"
                name="email"
                className={`input ${errors.email ? "is-danger" : ""}`}
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <div className="input-wrapper">
              <Lock className="input-icon" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className={`input ${errors.password ? "is-danger" : ""}`}
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {formData.password && (
              <div className="password-strength">
                <div
                  className={`strength-bar strength-${passwordStrength.strength}`}
                >
                  <div className="strength-fill"></div>
                </div>
                <span className="strength-text">
                  Password strength: {passwordStrength.text}
                </span>
              </div>
            )}
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          <div className="input-group">
            <label className="input-label">Confirm Password</label>
            <div className="input-wrapper">
              <Lock className="input-icon" size={18} />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                className={`input ${errors.confirmPassword ? "is-danger" : ""}`}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="error-text">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="terms-group">
            <label
              className={`terms-label ${
                errors.agreeToTerms ? "is-danger" : ""
              }`}
            >
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="terms-checkbox"
              />
              <span className="checkmark">
                {formData.agreeToTerms && <CheckCircle size={16} />}
              </span>
              I agree to the{" "}
              <a href="#" className="terms-link">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="terms-link">
                Privacy Policy
              </a>
            </label>
            {errors.agreeToTerms && (
              <p className="error-text">{errors.agreeToTerms}</p>
            )}
          </div>

          <button type="submit" className="create-account-btn">
            Create Account
          </button>
        </form>

        <div className="signin-link">
          Already have an account?{" "}
          <a href="#" className="signin-link-text">
            Sign in here
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
