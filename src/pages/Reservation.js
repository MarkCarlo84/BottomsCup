import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    date: '',
    time: '',
    occasion: '',
    seating: '',
    special: ''
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
    setFormData({
      name: '', email: '', phone: '', guests: '', date: '', 
      time: '', occasion: '', seating: '', special: ''
    });
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="reservation-page">
      {/* Page Header */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="display-4 fw-bold mb-3"><i className="fas fa-calendar-check me-3"></i>Reserve Your Table</h1>
              <p className="lead">
                <i className="fas fa-map-marker-alt me-2"></i>
                Book your perfect spot for a memorable coffee experience
              </p>
              <p>
                <i className="fas fa-users me-2"></i>
                Whether it's a casual meetup, business meeting, or special celebration, 
                we'll ensure you have the perfect table waiting for you.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Reservation Information */}
      <section className="py-4 py-md-5">
        <Container>
          <Row className="g-3 g-md-4">
            <Col sm={6} lg={3}>
              <Card className="h-100 border-0 text-center shadow-sm">
                <Card.Body className="p-3 p-md-4">
                  <i className="fas fa-clock text-primary display-4 mb-2 mb-md-3 d-block"></i>
                  <h5 className="h6 h-md-5">Operating Hours</h5>
                  <p className="text-muted mb-1 small"><strong>Mon - Fri:</strong></p>
                  <p className="text-muted mb-1 small">6AM - 8PM</p>
                  <p className="text-muted mb-1 small"><strong>Sat - Sun:</strong></p>
                  <p className="text-muted small">7AM - 9PM</p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} lg={3}>
              <Card className="h-100 border-0 text-center shadow-sm">
                <Card.Body className="p-3 p-md-4">
                  <i className="fas fa-users text-primary display-4 mb-2 mb-md-3 d-block"></i>
                  <h5 className="h6 h-md-5">Group Size</h5>
                  <p className="text-muted mb-1 small">1 to 8 people</p>
                  <p className="text-muted small">Larger groups: contact us</p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} lg={3}>
              <Card className="h-100 border-0 text-center shadow-sm">
                <Card.Body className="p-3 p-md-4">
                  <i className="fas fa-calendar-alt text-primary display-4 mb-2 mb-md-3 d-block"></i>
                  <h5 className="h6 h-md-5">Advance Booking</h5>
                  <p className="text-muted mb-1 small">Up to 30 days ahead</p>
                  <p className="text-muted small">Same-day if available</p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} lg={3}>
              <Card className="h-100 border-0 text-center shadow-sm">
                <Card.Body className="p-3 p-md-4">
                  <i className="fas fa-utensils text-primary display-4 mb-2 mb-md-3 d-block"></i>
                  <h5 className="h6 h-md-5">Special Occasions</h5>
                  <p className="text-muted mb-1 small">Birthdays, meetings</p>
                  <p className="text-muted small">Special decorations</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Reservation Form */}
      <section className="py-4 py-md-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <Card className="border-0 shadow">
                <Card.Body className="p-3 p-md-4">
                  <h3 className="h5 h-md-4 text-center mb-3 mb-md-4"><i className="fas fa-edit me-2"></i>Make Your Reservation</h3>
                  
                  {showAlert && (
                    <Alert variant="success" className="mb-3 mb-md-4 small">
                      <i className="fas fa-check-circle me-2"></i>
                      Table reserved successfully! We'll send you a confirmation email shortly.
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="small">Full Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="small">Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="small">Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="small">Number of Guests</Form.Label>
                          <Form.Control
                            type="number"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            min="1"
                            max="8"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="small">Date</Form.Label>
                          <Form.Control
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="small">Time</Form.Label>
                          <Form.Control
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="small">Occasion</Form.Label>
                          <Form.Select name="occasion" value={formData.occasion} onChange={handleChange} required>
                            <option value="">Select Occasion</option>
                            <option value="casual">Casual Meetup</option>
                            <option value="business">Business Meeting</option>
                            <option value="date">Date Night</option>
                            <option value="celebration">Celebration</option>
                            <option value="study">Study/Work Session</option>
                            <option value="other">Other</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="small">Seating Preference</Form.Label>
                          <Form.Select name="seating" value={formData.seating} onChange={handleChange} required>
                            <option value="">Select Preference</option>
                            <option value="window">Window Seat</option>
                            <option value="quiet">Quiet Corner</option>
                            <option value="outdoor">Outdoor Seating</option>
                            <option value="bar">Bar/Counter</option>
                            <option value="any">No Preference</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mb-3 mb-md-4">
                      <Form.Label className="small">Special Requests</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="special"
                        value={formData.special}
                        onChange={handleChange}
                        placeholder="Dietary restrictions, decorations, etc."
                      />
                    </Form.Group>
                    
                    <Button type="submit" variant="primary" size="lg" className="w-100">
                      <i className="fas fa-calendar-check me-2"></i>
                      Reserve Table
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Reservation Policy */}
      <section className="py-4 py-md-5">
        <Container>
          <Row className="g-3 g-md-4">
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-3 p-md-4">
                  <h5 className="h6 h-md-5"><i className="fas fa-times-circle text-primary me-2"></i>Cancellation Policy</h5>
                  <p className="text-muted small mb-0">
                    <i className="fas fa-clock me-1 me-md-2 d-none d-sm-inline"></i>
                    Cancel up to 2 hours before without charges. Late cancellations may incur a fee.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-3 p-md-4">
                  <h5 className="h6 h-md-5"><i className="fas fa-user-clock text-primary me-2"></i>Arrival Time</h5>
                  <p className="text-muted small mb-0">
                    <i className="fas fa-hourglass-half me-1 me-md-2 d-none d-sm-inline"></i>
                    Arrive within 15 minutes. After that, we may release your table.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-3 p-md-4">
                  <h5 className="h6 h-md-5"><i className="fas fa-phone text-primary me-2"></i>Contact Information</h5>
                  <p className="text-muted small mb-0">
                    <i className="fas fa-envelope me-1 me-md-2 d-none d-sm-inline"></i>
                    For changes: (1234) 123-BEAN or bottomscup@gmail.com
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-3 p-md-4">
                  <h5 className="h6 h-md-5"><i className="fas fa-exclamation-triangle text-primary me-2"></i>Important Notes</h5>
                  <p className="text-muted small mb-0">
                    <i className="fas fa-info-circle me-1 me-md-2 d-none d-sm-inline"></i>
                    We may modify reservations due to unforeseen circumstances.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Reservation;
