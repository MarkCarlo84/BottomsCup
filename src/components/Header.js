import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import AuthModal from './AuthModal';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status on component mount
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    setIsAuthenticated(authStatus);
    setCurrentUser(user);
  }, [location]);

  const handleNavClick = () => {
    setExpanded(false);
  };

  const handleLoginClick = () => {
    setShowAuthModal(true);
  };

  const handleAuthSuccess = (role) => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    setIsAuthenticated(true);
    setCurrentUser(user);
    
    // Navigate based on role
    if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/customer-dashboard');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    setIsAuthenticated(false);
    setCurrentUser(null);
    navigate('/');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Navbar 
      bg="light" 
      expand="lg" 
      fixed="top" 
      className="shadow-sm"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          <i className="fas fa-coffee me-2"></i>
          BottomsCup
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={isActive('/') ? 'active fw-bold' : ''}
              onClick={handleNavClick}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={isActive('/about') ? 'active fw-bold' : ''}
              onClick={handleNavClick}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/menu" 
              className={isActive('/menu') ? 'active fw-bold' : ''}
              onClick={handleNavClick}
            >
              Menu
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className={isActive('/contact') ? 'active fw-bold' : ''}
              onClick={handleNavClick}
            >
              Contact
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/subscription" 
              className={isActive('/subscription') ? 'active fw-bold' : ''}
              onClick={handleNavClick}
            >
              Subscription
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/reservation" 
              className={isActive('/reservation') ? 'active fw-bold' : ''}
              onClick={handleNavClick}
            >
              Reservations
            </Nav.Link>

            {/* Authentication Buttons */}
            {!isAuthenticated ? (
              <Nav.Link as="div" className="d-flex align-items-center">
                <Button 
                  variant="outline-primary" 
                  size="sm"
                  onClick={handleLoginClick}
                >
                  <i className="fas fa-sign-in-alt me-1"></i>
                  Login / Register
                </Button>
              </Nav.Link>
            ) : (
              <Nav.Link as="div" className="d-flex align-items-center">
                <Dropdown>
                  <Dropdown.Toggle variant="primary" size="sm">
                    <i className="fas fa-user-circle me-1"></i>
                    {currentUser?.username}
                  </Dropdown.Toggle>

                  <Dropdown.Menu align="end">
                    <Dropdown.Header>
                      <div><strong>{currentUser?.username}</strong></div>
                      <div><small className="text-muted">{currentUser?.email}</small></div>
                      <div>
                        <small>
                          <i className="fas fa-tag me-1"></i>
                          Role: <strong>{currentUser?.role}</strong>
                        </small>
                      </div>
                    </Dropdown.Header>
                    <Dropdown.Divider />
                    {currentUser?.role === 'admin' ? (
                      <Dropdown.Item onClick={() => navigate('/admin')}>
                        <i className="fas fa-tachometer-alt me-2"></i>
                        Admin Dashboard
                      </Dropdown.Item>
                    ) : (
                      <Dropdown.Item onClick={() => navigate('/customer-dashboard')}>
                        <i className="fas fa-user me-2"></i>
                        My Dashboard
                      </Dropdown.Item>
                    )}
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout} className="text-danger">
                      <i className="fas fa-sign-out-alt me-2"></i>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      
      <AuthModal 
        show={showAuthModal}
        onHide={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
      />
    </Navbar>
  );
};

export default Header;
