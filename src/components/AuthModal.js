import React, { useState } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap';

const AuthModal = ({ show, onHide, onSuccess }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'customer'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Get users from localStorage
  const getUsers = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [
      // Default admin account
      { username: 'admin', email: 'admin@coffee.com', password: 'admin123', role: 'admin' }
    ];
  };

  // Save users to localStorage
  const saveUsers = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError('');

    const users = getUsers();
    const user = users.find(
      u => u.username === loginData.username && u.password === loginData.password
    );

    if (user) {
      // Store authenticated user data
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('currentUser', JSON.stringify({
        username: user.username,
        email: user.email,
        role: user.role
      }));

      setSuccess('Login successful!');
      setTimeout(() => {
        setLoginData({ username: '', password: '' });
        setSuccess('');
        onSuccess(user.role);
        handleClose();
      }, 1000);
    } else {
      setError('Invalid username or password!');
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (registerData.password !== registerData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (registerData.password.length < 6) {
      setError('Password must be at least 6 characters long!');
      return;
    }

    const users = getUsers();

    // Check if username or email already exists
    if (users.some(u => u.username === registerData.username)) {
      setError('Username already exists!');
      return;
    }

    if (users.some(u => u.email === registerData.email)) {
      setError('Email already registered!');
      return;
    }

    // Add new user (all new registrations are customers by default)
    const newUser = {
      username: registerData.username,
      email: registerData.email,
      password: registerData.password,
      role: 'customer'
    };

    users.push(newUser);
    saveUsers(users);

    setSuccess('Registration successful! You can now login.');
    setTimeout(() => {
      setRegisterData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'customer'
      });
      setSuccess('');
      setActiveTab('login');
    }, 2000);
  };

  const handleClose = () => {
    setLoginData({ username: '', password: '' });
    setRegisterData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'customer'
    });
    setError('');
    setSuccess('');
    setActiveTab('login');
    onHide();
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          <i className="fas fa-user-circle me-2"></i>
          Account Access
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Login Content */}
        {activeTab === 'login' && (
          <div>
            <div className="text-center mb-4">
              <i className="fas fa-lock text-primary display-3 mb-3"></i>
              <h5 className="mb-2">Welcome Back!</h5>
              <p className="text-muted">
                Please enter your credentials to access your account
              </p>
            </div>

            {error && (
              <Alert variant="danger" className="mb-3">
                <i className="fas fa-exclamation-triangle me-2"></i>
                {error}
              </Alert>
            )}

            {success && (
              <Alert variant="success" className="mb-3">
                <i className="fas fa-check-circle me-2"></i>
                {success}
              </Alert>
            )}

            <Form onSubmit={handleLoginSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>
                  <i className="fas fa-user me-2"></i>
                  Username
                </Form.Label>
                <Form.Control
                  type="text"
                  value={loginData.username}
                  onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                  placeholder="Enter username"
                  required
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  <i className="fas fa-key me-2"></i>
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  placeholder="Enter password"
                  required
                />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button type="submit" variant="primary">
                  <i className="fas fa-sign-in-alt me-2"></i>
                  Login
                </Button>
                <Button variant="outline-secondary" onClick={handleClose}>
                  Cancel
                </Button>
              </div>
            </Form>

            <div className="mt-3 text-center">
              <small className="text-muted">
                Don't have an account?{' '}
                <Button
                  variant="link"
                  size="sm"
                  className="p-0"
                  onClick={() => setActiveTab('register')}
                >
                  Register here
                </Button>
              </small>
            </div>
          </div>
        )}

        {/* Registration Content */}
        {activeTab === 'register' && (
          <div>
            <div className="text-center mb-4">
              <i className="fas fa-user-plus text-success display-3 mb-3"></i>
              <h5 className="mb-2">Create Account</h5>
              <p className="text-muted">
                Join us and start your coffee journey
              </p>
            </div>

            {error && (
              <Alert variant="danger" className="mb-3">
                <i className="fas fa-exclamation-triangle me-2"></i>
                {error}
              </Alert>
            )}

            {success && (
              <Alert variant="success" className="mb-3">
                <i className="fas fa-check-circle me-2"></i>
                {success}
              </Alert>
            )}

            <Form onSubmit={handleRegisterSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>
                  <i className="fas fa-user me-2"></i>
                  Username
                </Form.Label>
                <Form.Control
                  type="text"
                  value={registerData.username}
                  onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
                  placeholder="Choose a username"
                  required
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  <i className="fas fa-envelope me-2"></i>
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  <i className="fas fa-key me-2"></i>
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                  placeholder="Choose a password (min 6 characters)"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  <i className="fas fa-check-circle me-2"></i>
                  Confirm Password
                </Form.Label>
                <Form.Control
                  type="password"
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                  placeholder="Confirm your password"
                  required
                />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button type="submit" variant="success">
                  <i className="fas fa-user-plus me-2"></i>
                  Create Account
                </Button>
                <Button variant="outline-secondary" onClick={handleClose}>
                  Cancel
                </Button>
              </div>
            </Form>

            <div className="mt-3 text-center">
              <small className="text-muted">
                Already have an account?{' '}
                <Button
                  variant="link"
                  size="sm"
                  className="p-0"
                  onClick={() => setActiveTab('login')}
                >
                  Login here
                </Button>
              </small>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;

