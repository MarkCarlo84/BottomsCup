import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import bottomsCupImage from '../asset/bottomscup.png';

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="display-4 fw-bold mb-3"><i className="fas fa-info-circle me-3"></i>About BottomsCup</h1>
              <p className="lead">
                <i className="fas fa-search me-2"></i>
                Discover our story, passion, and commitment to exceptional coffee
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center mb-4 mb-md-5 g-3 g-md-4">
            <Col lg={5} className="mb-3 mb-lg-0">
              <div className="about-image text-center">
                <img 
                  src={bottomsCupImage} 
                  alt="BottomsCup Coffee" 
                  style={{ maxWidth: '50%', height: 'auto', borderRadius: '10px' }}
                  className="shadow img-fluid"
                />
                <div className="mt-2 mt-md-3">
                  <span className="badge bg-warning text-dark fs-6">
                    <i className="fas fa-award me-1"></i>
                    Best Coffee Shop 2023
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="about-content ps-lg-3">
                <h2 className="h3 mb-3 mb-md-4"><i className="fas fa-book-open me-2"></i>Our Story</h2>
                <p className="mb-2 mb-md-3">
                  <i className="fas fa-coffee me-2 text-primary d-none d-sm-inline"></i>
                  At <strong>BottomsCup</strong>, coffee is more than just a drink — 
                  it's a daily ritual. Since 2023, we've been crafting premium, 
                  ethically sourced brews with love and precision.
                </p>
                <p className="mb-2 mb-md-3">
                  <i className="fas fa-heart me-2 text-danger d-none d-sm-inline"></i>
                  From the rich aroma of freshly ground beans to the warm smile of 
                  our baristas, every visit is designed to make you feel at home.
                </p>
                <p className="mb-3 mb-md-4">
                  <i className="fas fa-home me-2 text-primary d-none d-sm-inline"></i>
                  Whether you're starting your morning, catching up with friends, 
                  or simply savoring a quiet moment, BottomsCup is your cozy corner 
                  for comfort and connection.
                </p>
              </div>
            </Col>
          </Row>

          {/* Mission & Vision */}
          <Row className="g-3 g-md-4">
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-3 p-md-4">
                  <div className="text-center mb-2 mb-md-3">
                    <i className="fas fa-bullseye text-primary display-4"></i>
                  </div>
                  <Card.Title className="text-center h5 h-md-4">Our Mission</Card.Title>
                  <Card.Text className="text-center small">
                    To provide exceptional coffee experiences that bring people together, 
                    using only the finest ethically sourced beans and sustainable practices.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-3 p-md-4">
                  <div className="text-center mb-2 mb-md-3">
                    <i className="fas fa-eye text-primary display-4"></i>
                  </div>
                  <Card.Title className="text-center h5 h-md-4">Our Vision</Card.Title>
                  <Card.Text className="text-center small">
                    To be the community's favorite coffee destination, known for 
                    quality, sustainability, and creating meaningful connections 
                    over great coffee.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Values */}
          <Row className="mt-4 mt-md-5">
            <Col>
              <h3 className="text-center mb-3 mb-md-4"><i className="fas fa-gem me-2"></i>Our Values</h3>
              <Row className="g-3 g-md-4">
                <Col xs={6} md={3}>
                  <div className="text-center">
                    <i className="fas fa-leaf text-success display-4 mb-2 mb-md-3 d-block"></i>
                    <h5 className="h6"><i className="fas fa-award me-1 me-md-2 d-none d-sm-inline"></i>Quality</h5>
                    <p className="text-muted small mb-0">
                      <i className="fas fa-check-circle me-1 me-md-2 d-none d-sm-inline"></i>
                      We never compromise on quality.
                    </p>
                  </div>
                </Col>
                <Col xs={6} md={3}>
                  <div className="text-center">
                    <i className="fas fa-recycle text-success display-4 mb-2 mb-md-3 d-block"></i>
                    <h5 className="h6"><i className="fas fa-globe me-1 me-md-2 d-none d-sm-inline"></i>Sustainability</h5>
                    <p className="text-muted small mb-0">
                      <i className="fas fa-seedling me-1 me-md-2 d-none d-sm-inline"></i>
                      Eco-friendly practices.
                    </p>
                  </div>
                </Col>
                <Col xs={6} md={3}>
                  <div className="text-center">
                    <i className="fas fa-users text-primary display-4 mb-2 mb-md-3 d-block"></i>
                    <h5 className="h6"><i className="fas fa-handshake me-1 me-md-2 d-none d-sm-inline"></i>Community</h5>
                    <p className="text-muted small mb-0">
                      <i className="fas fa-heart me-1 me-md-2 d-none d-sm-inline"></i>
                      Building connections.
                    </p>
                  </div>
                </Col>
                <Col xs={6} md={3}>
                  <div className="text-center">
                    <i className="fas fa-heart text-danger display-4 mb-2 mb-md-3 d-block"></i>
                    <h5 className="h6"><i className="fas fa-fire me-1 me-md-2 d-none d-sm-inline"></i>Passion</h5>
                    <p className="text-muted small mb-0">
                      <i className="fas fa-coffee me-1 me-md-2 d-none d-sm-inline"></i>
                      Love for coffee.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
