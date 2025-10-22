import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import bottomsCupImage from '../asset/bottomscup.png';

const Home = () => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/menu');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-primary text-white pt-3 pb-5">
        <Container>
          <Row className="align-items-center" style={{ minHeight: '70vh' }}>
            <Col lg={6} className="mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-3 mb-md-4">
                <i className="fas fa-coffee me-2 me-md-3"></i>Welcome to BottomsCup
              </h1>
              <p className="lead mb-3 mb-md-4">
                <i className="fas fa-quote-left me-2"></i>
                Where every cup tells a story, and every sip creates memories
                <i className="fas fa-quote-right ms-2"></i>
              </p>
              <p className="mb-3 mb-md-4">
                <i className="fas fa-globe-americas me-2 text-primary d-none d-sm-inline"></i>
                Experience the art of coffee brewing with our carefully selected beans 
                from around the world. From farm to cup, we ensure every step is 
                crafted with passion and precision.
              </p>
              <div className="d-flex gap-2 gap-md-3 flex-wrap justify-content-center justify-content-lg-start">
                <Button 
                  variant="light" 
                  size="lg" 
                  onClick={handleMenuClick}
                  className="px-3 px-md-4 flex-fill flex-sm-grow-0"
                >
                  <i className="fas fa-coffee me-2"></i>
                  Explore Menu
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  onClick={handleContactClick}
                  className="px-3 px-md-4 flex-fill flex-sm-grow-0"
                >
                  <i className="fas fa-phone me-2"></i>
                  Contact
                </Button>
              </div>
            </Col>
            <Col lg={6} className="text-center mt-3 mt-lg-0">
              <div className="hero-image">
                <img 
                  src={bottomsCupImage} 
                  alt="BottomsCup Coffee" 
                  style={{ maxWidth: '60%', height: 'auto', borderRadius: '10px' }}
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body className="p-4">
                  <i className="fas fa-leaf text-success display-4 mb-3"></i>
                  <Card.Title><i className="fas fa-certificate me-2"></i>100% Organic</Card.Title>
                  <Card.Text>
                    <i className="fas fa-globe me-2 text-primary"></i>
                    All our coffee beans are certified organic and ethically sourced 
                    from sustainable farms around the world.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body className="p-4">
                  <i className="fas fa-fire text-danger display-4 mb-3"></i>
                  <Card.Title><i className="fas fa-clock me-2"></i>Freshly Roasted</Card.Title>
                  <Card.Text>
                    <i className="fas fa-calendar-week me-2 text-primary"></i>
                    We roast our coffee beans weekly to ensure maximum freshness 
                    and flavor in every cup.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body className="p-4">
                  <i className="fas fa-heart text-danger display-4 mb-3"></i>
                  <Card.Title><i className="fas fa-users me-2"></i>Made with Love</Card.Title>
                  <Card.Text>
                    <i className="fas fa-coffee me-2 text-primary"></i>
                    Every item is crafted with care by our passionate team 
                    of coffee experts and baristas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center g-4">
            <Col xs={6} md={3}>
              <div className="mb-2 mb-md-3">
                <i className="fas fa-coffee text-primary fs-1 mb-2 d-block"></i>
                <h2 className="display-4 fw-bold text-primary">20+</h2>
                <p className="text-muted small mb-0"><i className="fas fa-star me-1 me-md-2 d-none d-sm-inline"></i>Specialty Drinks</p>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="mb-2 mb-md-3">
                <i className="fas fa-users text-primary fs-1 mb-2 d-block"></i>
                <h2 className="display-4 fw-bold text-primary">1,000+</h2>
                <p className="text-muted small mb-0"><i className="fas fa-smile me-1 me-md-2 d-none d-sm-inline"></i>Happy Customers</p>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="mb-2 mb-md-3">
                <i className="fas fa-leaf text-primary fs-1 mb-2 d-block"></i>
                <h2 className="display-4 fw-bold text-primary">Fresh</h2>
                <p className="text-muted small mb-0"><i className="fas fa-calendar-day me-1 me-md-2 d-none d-sm-inline"></i>Daily Beans</p>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="mb-2 mb-md-3">
                <i className="fas fa-calendar-alt text-primary fs-1 mb-2 d-block"></i>
                <h2 className="display-4 fw-bold text-primary">2023</h2>
                <p className="text-muted small mb-0"><i className="fas fa-flag me-1 me-md-2 d-none d-sm-inline"></i>Established</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Coffee Brewing Guide Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Coffee Brewing Guide</h2>
              <p className="lead text-muted">
                Master the art of brewing the perfect cup at home
              </p>
            </Col>
          </Row>
          
          <Row className="g-3 g-md-4">
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-3 p-md-4 text-center">
                  <div className="mb-2 mb-md-3">
                    <i className="fas fa-tint text-primary display-4"></i>
                  </div>
                  <h4 className="mb-2 mb-md-3">Pour Over</h4>
                  <p className="text-muted mb-3 mb-md-4 small">
                    Clean, bright flavors with full control over brewing variables
                  </p>
                  <div className="text-start">
                    <h6 className="mb-2 mb-md-3"><i className="fas fa-list-ol me-2"></i>Steps:</h6>
                    <ol className="text-muted small">
                      <li className="mb-1"><i className="fas fa-thermometer-half me-2 d-none d-sm-inline"></i>Heat water to 200°F (93°C)</li>
                      <li className="mb-1"><i className="fas fa-filter me-2 d-none d-sm-inline"></i>Rinse filter and warm vessel</li>
                      <li className="mb-1"><i className="fas fa-coffee me-2 d-none d-sm-inline"></i>Add 15g coffee, bloom with 30g water</li>
                      <li className="mb-1"><i className="fas fa-tint me-2 d-none d-sm-inline"></i>Pour remaining water in circular motion</li>
                    </ol>
                  </div>
                  <div className="alert alert-info mt-2 mt-md-3 mb-0 small">
                    <i className="fas fa-lightbulb me-1 me-md-2"></i><strong>Pro Tip:</strong> Use a gooseneck kettle
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-3 p-md-4 text-center">
                  <div className="mb-2 mb-md-3">
                    <i className="fas fa-mug-hot text-primary display-4"></i>
                  </div>
                  <h4 className="mb-2 mb-md-3">French Press</h4>
                  <p className="text-muted mb-3 mb-md-4 small">
                    Full-bodied, rich coffee with natural oils preserved
                  </p>
                  <div className="text-start">
                    <h6 className="mb-2 mb-md-3"><i className="fas fa-list-ol me-2"></i>Steps:</h6>
                    <ol className="text-muted small">
                      <li className="mb-1"><i className="fas fa-cogs me-2 d-none d-sm-inline"></i>Coarse grind coffee beans</li>
                      <li className="mb-1"><i className="fas fa-tint me-2 d-none d-sm-inline"></i>Add hot water (200°F)</li>
                      <li className="mb-1"><i className="fas fa-clock me-2 d-none d-sm-inline"></i>Stir gently and let steep 4 minutes</li>
                      <li className="mb-1"><i className="fas fa-hand-paper me-2 d-none d-sm-inline"></i>Press plunger slowly and serve</li>
                    </ol>
                  </div>
                  <div className="alert alert-info mt-2 mt-md-3 mb-0 small">
                    <i className="fas fa-lightbulb me-1 me-md-2"></i><strong>Pro Tip:</strong> Don't steep too long
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} lg={4} className="mx-auto">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-3 p-md-4 text-center">
                  <div className="mb-2 mb-md-3">
                    <i className="fas fa-thermometer-half text-primary display-4"></i>
                  </div>
                  <h4 className="mb-2 mb-md-3">Cold Brew</h4>
                  <p className="text-muted mb-3 mb-md-4 small">
                    Smooth, low-acid coffee perfect for hot days
                  </p>
                  <div className="text-start">
                    <h6 className="mb-2 mb-md-3"><i className="fas fa-list-ol me-2"></i>Steps:</h6>
                    <ol className="text-muted small">
                      <li className="mb-1"><i className="fas fa-cogs me-2 d-none d-sm-inline"></i>Coarse grind coffee beans</li>
                      <li className="mb-1"><i className="fas fa-balance-scale me-2 d-none d-sm-inline"></i>Mix with cold water (1:4 ratio)</li>
                      <li className="mb-1"><i className="fas fa-snowflake me-2 d-none d-sm-inline"></i>Steep in fridge 12-24 hours</li>
                      <li className="mb-1"><i className="fas fa-filter me-2 d-none d-sm-inline"></i>Strain and dilute to taste</li>
                    </ol>
                  </div>
                  <div className="alert alert-info mt-2 mt-md-3 mb-0 small">
                    <i className="fas fa-lightbulb me-1 me-md-2"></i><strong>Pro Tip:</strong> Great for iced lattes
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">What Our Customers Say</h2>
            </Col>
          </Row>
          
          <Row className="g-3 g-md-4">
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-3 p-md-4">
                  <div className="text-center mb-2 mb-md-3">
                    <div className="fs-5 fs-md-4">⭐⭐⭐⭐⭐</div>
                  </div>
                  <p className="text-muted mb-3 mb-md-4 fst-italic small">
                    "The best coffee I've ever had! The baristas are so friendly and the 
                    atmosphere is perfect for working or relaxing."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="me-2 me-md-3">
                      <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                           style={{width: '40px', height: '40px'}}>
                        <i className="fas fa-user text-white small"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0 small">Sarah M.</h6>
                      <small className="text-muted" style={{fontSize: '0.75rem'}}>Regular Customer</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-3 p-md-4">
                  <div className="text-center mb-2 mb-md-3">
                    <div className="fs-5 fs-md-4">⭐⭐⭐⭐⭐</div>
                  </div>
                  <p className="text-muted mb-3 mb-md-4 fst-italic small">
                    "Their pour-over coffee is absolutely divine. You can taste the quality 
                    of the beans and the skill of the brewing process."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="me-2 me-md-3">
                      <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                           style={{width: '40px', height: '40px'}}>
                        <i className="fas fa-user text-white small"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0 small">Michael R.</h6>
                      <small className="text-muted" style={{fontSize: '0.75rem'}}>Coffee Enthusiast</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} lg={4} className="mx-auto">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-3 p-md-4">
                  <div className="text-center mb-2 mb-md-3">
                    <div className="fs-5 fs-md-4">⭐⭐⭐⭐⭐</div>
                  </div>
                  <p className="text-muted mb-3 mb-md-4 fst-italic small">
                    "I love their seasonal drinks! The pumpkin spice latte is my favorite 
                    fall treat. Always consistent quality."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="me-2 me-md-3">
                      <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                           style={{width: '40px', height: '40px'}}>
                        <i className="fas fa-user text-white small"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0 small">Emma L.</h6>
                      <small className="text-muted" style={{fontSize: '0.75rem'}}>Seasonal Drinks Fan</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
