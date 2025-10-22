import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found-page">
      <Container className="py-5">
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <div className="py-5">
              {/* 404 Icon */}
              <div className="mb-4">
                <i className="fas fa-coffee display-1 text-muted"></i>
              </div>
              
              {/* Error Message */}
              <h1 className="display-1 fw-bold text-primary mb-3">404</h1>
              <h2 className="h3 mb-4">Oops! Page Not Found</h2>
              <p className="lead text-muted mb-4">
                The page you're looking for seems to have vanished like morning mist. 
                Don't worry, even the best baristas sometimes miss a cup!
              </p>
              
              {/* Action Buttons */}
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={handleGoHome}
                  className="px-4"
                >
                  <i className="fas fa-home me-2"></i>
                  Go Home
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg" 
                  onClick={() => navigate(-1)}
                  className="px-4"
                >
                  <i className="fas fa-arrow-left me-2"></i>
                  Go Back
                </Button>
              </div>
              
              {/* Additional Help */}
              <div className="mt-5">
                <p className="text-muted">
                  Need help? Try these popular pages:
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Button 
                    variant="link" 
                    onClick={() => navigate('/menu')}
                    className="text-decoration-none"
                  >
                    <i className="fas fa-coffee me-1"></i>
                    Menu
                  </Button>
                  <Button 
                    variant="link" 
                    onClick={() => navigate('/about')}
                    className="text-decoration-none"
                  >
                    <i className="fas fa-info-circle me-1"></i>
                    About
                  </Button>
                  <Button 
                    variant="link" 
                    onClick={() => navigate('/contact')}
                    className="text-decoration-none"
                  >
                    <i className="fas fa-phone me-1"></i>
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
