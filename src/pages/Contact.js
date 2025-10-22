import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="display-4 fw-bold mb-3"><i className="fas fa-phone me-3"></i>Contact Us</h1>
              <p className="lead">
                <i className="fas fa-comments me-2"></i>
                Get in touch with us for any questions or feedback
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Information & Form */}
      <section className="py-4 py-md-5">
        <Container>
          <Row className="g-4 g-md-5">
            {/* Contact Information */}
            <Col lg={6}>
              <h2 className="h4 h-md-3 mb-3 mb-md-4"><i className="fas fa-map-marker-alt me-2"></i>Visit Us</h2>
              
              <Row className="g-3 g-md-4">
                <Col sm={6}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-3 p-md-4">
                      <div className="d-flex align-items-start">
                        <i className="fas fa-map-marker-alt text-primary fs-5 fs-md-4 me-2 me-md-3 mt-1"></i>
                        <div>
                          <h5 className="h6 h-md-5"><i className="fas fa-building me-1 me-md-2 d-none d-sm-inline"></i>Location</h5>
                          <p className="text-muted mb-0 small">
                            <i className="fas fa-road me-1 me-md-2 d-none d-sm-inline"></i>123 Coffee Street<br />
                            <i className="fas fa-city me-1 me-md-2 d-none d-sm-inline"></i>Cabuyao, Laguna 4025
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                
                <Col sm={6}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-3 p-md-4">
                      <div className="d-flex align-items-start">
                        <i className="fas fa-clock text-primary fs-5 fs-md-4 me-2 me-md-3 mt-1"></i>
                        <div>
                          <h5 className="h6 h-md-5"><i className="fas fa-calendar-alt me-1 me-md-2 d-none d-sm-inline"></i>Hours</h5>
                          <p className="text-muted mb-0 small">
                            <i className="fas fa-briefcase me-1 me-md-2 d-none d-sm-inline"></i>Mon - Fri: 6AM - 8PM<br />
                            <i className="fas fa-weekend me-1 me-md-2 d-none d-sm-inline"></i>Sat - Sun: 7AM - 9PM
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                
                <Col sm={6}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-3 p-md-4">
                      <div className="d-flex align-items-start">
                        <i className="fas fa-phone text-primary fs-5 fs-md-4 me-2 me-md-3 mt-1"></i>
                        <div>
                          <h5 className="h6 h-md-5"><i className="fas fa-headset me-1 me-md-2 d-none d-sm-inline"></i>Contact</h5>
                          <p className="text-muted mb-0 small">
                            <i className="fas fa-phone-alt me-1 me-md-2 d-none d-sm-inline"></i>(1234) 123-BEAN<br />
                            <i className="fas fa-envelope me-1 me-md-2 d-none d-sm-inline"></i>bottomscup@gmail.com
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                
                <Col sm={6}>
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-3 p-md-4">
                      <div className="d-flex align-items-start">
                        <i className="fas fa-wifi text-primary fs-5 fs-md-4 me-2 me-md-3 mt-1"></i>
                        <div>
                          <h5 className="h6 h-md-5"><i className="fas fa-star me-1 me-md-2 d-none d-sm-inline"></i>Amenities</h5>
                          <p className="text-muted mb-0 small">
                            <i className="fas fa-wifi me-1 me-md-2 d-none d-sm-inline"></i>Free WiFi • Power<br />
                            <i className="fas fa-volume-mute me-1 me-md-2 d-none d-sm-inline"></i>Quiet Zones • Meeting Space
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* Social Media */}
              <div className="mt-4 mt-md-5">
                <h5 className="mb-2 mb-md-3"><i className="fas fa-share-alt me-2"></i>Follow Us</h5>
                <div className="d-flex gap-2 gap-md-3">
                  <Button variant="outline-primary" className="rounded-circle" style={{width: '40px', height: '40px', padding: '0'}} title="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </Button>
                  <Button variant="outline-primary" className="rounded-circle" style={{width: '40px', height: '40px', padding: '0'}} title="Instagram">
                    <i className="fab fa-instagram"></i>
                  </Button>
                  <Button variant="outline-primary" className="rounded-circle" style={{width: '40px', height: '40px', padding: '0'}} title="Twitter">
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button variant="outline-primary" className="rounded-circle" style={{width: '40px', height: '40px', padding: '0'}} title="TikTok">
                    <i className="fab fa-tiktok"></i>
                  </Button>
                </div>
              </div>
            </Col>

            {/* Contact Form */}
            <Col lg={6}>
              <Card className="border-0 shadow">
                <Card.Body className="p-3 p-md-4">
                  <h3 className="h5 h-md-4 mb-3 mb-md-4"><i className="fas fa-envelope me-2"></i>Send us a message</h3>
                  
                  {showAlert && (
                    <Alert variant="success" className="mb-3 mb-md-4">
                      <i className="fas fa-check-circle me-2"></i>
                      Thank you for your message! We will get back to you soon.
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="small"><i className="fas fa-user me-1 me-md-2 d-none d-sm-inline"></i>Your Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="small"><i className="fas fa-envelope me-1 me-md-2 d-none d-sm-inline"></i>Your Email</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mb-3">
                      <Form.Label className="small"><i className="fas fa-tag me-1 me-md-2 d-none d-sm-inline"></i>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Enter subject"
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-3 mb-md-4">
                      <Form.Label className="small"><i className="fas fa-comment me-1 me-md-2 d-none d-sm-inline"></i>Your Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Enter your message"
                      />
                    </Form.Group>
                    
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      className="w-100"
                    >
                      <i className="fas fa-paper-plane me-2"></i>
                      Send Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
