import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Subscription = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
  
  const [formData, setFormData] = useState({
    name: currentUser?.username || '',
    email: currentUser?.email || '',
    phone: '',
    plan: '',
    frequency: '',
    grind: '',
    address: '',
    notes: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success');
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!currentUser) {
      setAlertMessage('Please login to subscribe!');
      setAlertType('warning');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }

    // Create subscription object
    const subscription = {
      id: Date.now(),
      ...formData,
      username: currentUser.username,
      status: 'Active',
      startDate: new Date().toISOString(),
      nextDelivery: calculateNextDelivery(formData.frequency)
    };

    // Save to localStorage
    const subscriptionsKey = `subscriptions_${currentUser.username}`;
    const existingSubscriptions = JSON.parse(localStorage.getItem(subscriptionsKey) || '[]');
    existingSubscriptions.push(subscription);
    localStorage.setItem(subscriptionsKey, JSON.stringify(existingSubscriptions));

    setAlertMessage('Subscription started successfully! Welcome to our coffee family!');
    setAlertType('success');
    setShowAlert(true);
    
    setFormData({
      name: currentUser.username,
      email: currentUser.email,
      phone: '',
      plan: '',
      frequency: '',
      grind: '',
      address: '',
      notes: ''
    });
    
    setTimeout(() => {
      setShowAlert(false);
      navigate('/customer-dashboard');
    }, 2000);
  };

  const calculateNextDelivery = (frequency) => {
    const today = new Date();
    let daysToAdd = 30; // default monthly
    
    if (frequency === 'weekly') daysToAdd = 7;
    else if (frequency === 'biweekly') daysToAdd = 14;
    
    const nextDelivery = new Date(today);
    nextDelivery.setDate(today.getDate() + daysToAdd);
    return nextDelivery.toISOString();
  };

  const handlePlanSelect = (planId) => {
    setFormData({ ...formData, plan: planId });
    setSelectedPlan(planId);
    
    // Scroll to form
    const formSection = document.getElementById('subscription-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Show selection feedback
    setAlertMessage(`${plans.find(p => p.id === planId).name} selected! Complete the form below.`);
    setAlertType('info');
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const plans = [
    {
      id: 'starter',
      name: 'Starter Pack',
      price: '₱599',
      period: '/month',
      features: [
        '500g Premium Coffee Beans',
        '2 Coffee Varieties',
        'Monthly Delivery',
        'Free Shipping',
        'Brewing Tips'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Pack',
      price: '₱899',
      period: '/month',
      featured: true,
      features: [
        '1kg Premium Coffee Beans',
        '4 Coffee Varieties',
        'Bi-weekly Delivery',
        'Free Shipping',
        'Brewing Guide',
        'Coffee Tasting Notes'
      ]
    },
    {
      id: 'deluxe',
      name: 'Deluxe Pack',
      price: '₱1,299',
      period: '/month',
      features: [
        '1.5kg Premium Coffee Beans',
        '6 Coffee Varieties',
        'Weekly Delivery',
        'Free Shipping',
        'Premium Brewing Guide',
        'Coffee Tasting Notes',
        'Exclusive Coffee Events'
      ]
    }
  ];

  return (
    <div className="subscription-page">
      {/* Page Header */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="display-4 fw-bold mb-3"><i className="fas fa-shipping-fast me-3"></i>Coffee Subscription Service</h1>
              <p className="lead">
                <i className="fas fa-home me-2"></i>
                Get premium coffee beans delivered to your doorstep
              </p>
              <p>
                <i className="fas fa-coffee me-2"></i>
                Join our coffee subscription service and never run out of your favorite beans. 
                We source the finest coffee from around the world and deliver them fresh to your home.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Subscription Plans */}
      <section className="py-4 py-md-5">
        <Container>
          <Row className="g-3 g-md-4">
            {plans.map(plan => (
              <Col key={plan.id} md={6} lg={4}>
                <Card 
                  className={`h-100 border-0 shadow ${plan.featured ? 'border-primary' : ''} ${selectedPlan === plan.id ? 'border-success border-3' : ''}`}
                  style={{ transition: 'all 0.3s ease' }}
                >
                  {plan.featured && (
                    <div className="position-absolute top-0 start-50 translate-middle">
                      <span className="badge bg-primary small">Most Popular</span>
                    </div>
                  )}
                  {selectedPlan === plan.id && (
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className="badge bg-success small">
                        <i className="fas fa-check me-1"></i>Selected
                      </span>
                    </div>
                  )}
                  <Card.Body className="p-3 p-md-4 text-center">
                    <h3 className="h5 h-md-4 mb-2 mb-md-3">{plan.name}</h3>
                    <div className="mb-3 mb-md-4">
                      <span className="display-4 fw-bold text-primary">{plan.price}</span>
                      <span className="text-muted">{plan.period}</span>
                    </div>
                    <ul className="list-unstyled mb-3 mb-md-4">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="mb-2 small">
                          <i className="fas fa-check text-success me-1 me-md-2"></i>
                          <i className="fas fa-coffee me-1 me-md-2 text-primary d-none d-sm-inline"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant={selectedPlan === plan.id ? 'success' : (plan.featured ? 'primary' : 'outline-primary')} 
                      className="w-100"
                      size="sm"
                      onClick={() => handlePlanSelect(plan.id)}
                    >
                      <i className={`fas ${selectedPlan === plan.id ? 'fa-check' : 'fa-hand-pointer'} me-1 me-md-2`}></i>
                      {selectedPlan === plan.id ? 'Selected' : `Choose Plan`}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Subscription Form */}
      <section className="py-4 py-md-5 bg-light" id="subscription-form">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <Card className="border-0 shadow">
                <Card.Body className="p-3 p-md-4">
                  <h3 className="h5 h-md-4 text-center mb-3 mb-md-4"><i className="fas fa-rocket me-2"></i>Start Your Coffee Journey</h3>
                  
                  {showAlert && (
                    <Alert variant={alertType} className="mb-3 mb-md-4 small">
                      <i className={`fas ${alertType === 'success' ? 'fa-check-circle' : alertType === 'info' ? 'fa-info-circle' : 'fa-exclamation-triangle'} me-2`}></i>
                      {alertMessage}
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
                          <Form.Label className="small">Subscription Plan</Form.Label>
                          <Form.Select name="plan" value={formData.plan} onChange={handleChange} required>
                            <option value="">Select Plan</option>
                            <option value="starter">Starter - ₱599/mo</option>
                            <option value="premium">Premium - ₱899/mo</option>
                            <option value="deluxe">Deluxe - ₱1,299/mo</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="small">Delivery Frequency</Form.Label>
                          <Form.Select name="frequency" value={formData.frequency} onChange={handleChange} required>
                            <option value="">Select Frequency</option>
                            <option value="monthly">Monthly</option>
                            <option value="biweekly">Every 2 Weeks</option>
                            <option value="weekly">Weekly</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="small">Coffee Grind Size</Form.Label>
                          <Form.Select name="grind" value={formData.grind} onChange={handleChange} required>
                            <option value="">Select Grind</option>
                            <option value="whole-bean">Whole Bean</option>
                            <option value="coarse">Coarse (French Press)</option>
                            <option value="medium">Medium (Drip)</option>
                            <option value="fine">Fine (Espresso)</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mb-3">
                      <Form.Label className="small">Complete Delivery Address</Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-3 mb-md-4">
                      <Form.Label className="small">Special Instructions</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Coffee preferences, delivery notes, etc."
                      />
                    </Form.Group>
                    
                    <Button type="submit" variant="primary" size="lg" className="w-100">
                      <i className="fas fa-coffee me-2"></i>
                      Start Subscription
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-4 py-md-5">
        <Container>
          <Row className="g-3 g-md-4">
            <Col xs={6} md={3}>
              <Card className="h-100 border-0 text-center">
                <Card.Body className="p-3 p-md-4">
                  <i className="fas fa-leaf text-success display-4 mb-2 mb-md-3 d-block"></i>
                  <h5 className="h6 h-md-5">100% Organic</h5>
                  <p className="text-muted small mb-0">Certified organic beans</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card className="h-100 border-0 text-center">
                <Card.Body className="p-3 p-md-4">
                  <i className="fas fa-shipping-fast text-primary display-4 mb-2 mb-md-3 d-block"></i>
                  <h5 className="h6 h-md-5">Free Delivery</h5>
                  <p className="text-muted small mb-0">Free shipping on all orders</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card className="h-100 border-0 text-center">
                <Card.Body className="p-3 p-md-4">
                  <i className="fas fa-coffee text-warning display-4 mb-2 mb-md-3 d-block"></i>
                  <h5 className="h6 h-md-5">Freshly Roasted</h5>
                  <p className="text-muted small mb-0">Roasted weekly for freshness</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card className="h-100 border-0 text-center">
                <Card.Body className="p-3 p-md-4">
                  <i className="fas fa-heart text-danger display-4 mb-2 mb-md-3 d-block"></i>
                  <h5 className="h6 h-md-5">Flexible Plans</h5>
                  <p className="text-muted small mb-0">Cancel or modify anytime</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Subscription;
