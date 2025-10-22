import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Alert, ListGroup, Badge, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  const loadCartItems = () => {
    const cartKey = `cart_${currentUser.username}`;
    const cart = JSON.parse(localStorage.getItem(cartKey) || '[]');
    setCartItems(cart);
  };

  const loadSubscriptions = () => {
    const subscriptionsKey = `subscriptions_${currentUser.username}`;
    const subs = JSON.parse(localStorage.getItem(subscriptionsKey) || '[]');
    setSubscriptions(subs);
  };

  useEffect(() => {
    // Load cart items and subscriptions on component mount
    loadCartItems();
    loadSubscriptions();
  }, []);

  const updateQuantity = (itemId, change) => {
    const cartKey = `cart_${currentUser.username}`;
    const cart = JSON.parse(localStorage.getItem(cartKey) || '[]');
    
    const itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex >= 0) {
      cart[itemIndex].quantity += change;
      
      // Remove item if quantity is 0
      if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1);
      }
      
      localStorage.setItem(cartKey, JSON.stringify(cart));
      loadCartItems();
    }
  };

  const removeItem = (itemId) => {
    const cartKey = `cart_${currentUser.username}`;
    const cart = JSON.parse(localStorage.getItem(cartKey) || '[]');
    const updatedCart = cart.filter(item => item.id !== itemId);
    localStorage.setItem(cartKey, JSON.stringify(updatedCart));
    loadCartItems();
  };

  const clearCart = () => {
    const cartKey = `cart_${currentUser.username}`;
    localStorage.setItem(cartKey, JSON.stringify([]));
    loadCartItems();
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('₱', '').replace(',', ''));
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    setShowLogoutAlert(true);
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  // Mock customer data
  const recentOrders = [
    { id: 1, item: 'Cappuccino', date: '2024-10-18', status: 'Delivered', amount: '₱180' },
    { id: 2, item: 'Caramel Macchiato', date: '2024-10-17', status: 'Delivered', amount: '₱200' },
    { id: 3, item: 'Iced Latte', date: '2024-10-15', status: 'Delivered', amount: '₱160' },
  ];

  const upcomingReservations = [
    { id: 1, date: '2024-10-20', time: '3:00 PM', guests: 4, status: 'Confirmed' },
    { id: 2, date: '2024-10-25', time: '6:00 PM', guests: 2, status: 'Pending' },
  ];

  return (
    <div className="customer-dashboard">
      {/* Page Header */}
      <div className="bg-primary text-white py-4 py-md-5 mb-3 mb-md-4">
        <Container>
          <Row className="align-items-center g-3">
            <Col md={8}>
              <h1 className="display-5 display-md-4 mb-2 mb-md-3">
                <i className="fas fa-user-circle me-2 me-md-3"></i>
                Welcome, {currentUser.username}!
              </h1>
              <p className="mb-0 small">
                Manage your orders, reservations, and preferences
              </p>
            </Col>
            <Col md={4} className="text-md-end">
              <Button 
                variant="light" 
                size="lg" 
                onClick={handleLogout}
                className="shadow w-100 w-md-auto"
              >
                <i className="fas fa-sign-out-alt me-2"></i>
                Logout
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        {showLogoutAlert && (
          <Alert variant="success" className="mb-4">
            <i className="fas fa-check-circle me-2"></i>
            Logout successful! Redirecting to home page...
          </Alert>
        )}

        {/* Account Info */}
        <Row className="mb-4">
          <Col md={12}>
            <Card className="shadow-sm">
              <Card.Body>
                <h4 className="mb-3">
                  <i className="fas fa-user me-2 text-primary"></i>
                  Account Information
                </h4>
                <Row>
                  <Col md={4}>
                    <p className="mb-2">
                      <strong>Username:</strong> {currentUser.username}
                    </p>
                  </Col>
                  <Col md={4}>
                    <p className="mb-2">
                      <strong>Email:</strong> {currentUser.email}
                    </p>
                  </Col>
                  <Col md={4}>
                    <p className="mb-2">
                      <strong>Account Type:</strong>{' '}
                      <Badge bg="info">{currentUser.role}</Badge>
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Quick Actions */}
        <Row className="mb-3 mb-md-4 g-3">
          <Col md={4}>
            <Card className="shadow-sm h-100 border-primary">
              <Card.Body className="text-center p-3 p-md-4">
                <i className="fas fa-coffee text-primary display-4 mb-2 mb-md-3 d-block"></i>
                <h5 className="h6 h-md-5">Browse Menu</h5>
                <p className="text-muted small d-none d-md-block">
                  Explore our delicious coffee and treats
                </p>
                <Button 
                  variant="primary" 
                  onClick={() => navigate('/menu')}
                  size="sm"
                  className="w-100"
                >
                  View Menu
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm h-100 border-success">
              <Card.Body className="text-center p-3 p-md-4">
                <i className="fas fa-calendar-check text-success display-4 mb-2 mb-md-3 d-block"></i>
                <h5 className="h6 h-md-5">Make Reservation</h5>
                <p className="text-muted small d-none d-md-block">
                  Book a table at your convenience
                </p>
                <Button 
                  variant="success" 
                  onClick={() => navigate('/reservation')}
                  size="sm"
                  className="w-100"
                >
                  Reserve Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm h-100 border-warning">
              <Card.Body className="text-center p-3 p-md-4">
                <i className="fas fa-bell text-warning display-4 mb-2 mb-md-3 d-block"></i>
                <h5 className="h6 h-md-5">Subscription</h5>
                <p className="text-muted small d-none d-md-block">
                  Get exclusive offers and updates
                </p>
                <Button 
                  variant="warning" 
                  onClick={() => navigate('/subscription')}
                  size="sm"
                  className="w-100"
                >
                  Subscribe
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* My Cart */}
        <Row className="mb-3 mb-md-4">
          <Col md={12}>
            <Card className="shadow-sm">
              <Card.Header className="bg-success text-white p-2 p-md-3">
                <h5 className="mb-0 h6 h-md-5">
                  <i className="fas fa-shopping-cart me-2"></i>
                  My Cart
                  {cartItems.length > 0 && (
                    <Badge bg="light" text="dark" className="ms-2 small">
                      {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                    </Badge>
                  )}
                </h5>
              </Card.Header>
              <Card.Body className="p-2 p-md-3">
                {cartItems.length === 0 ? (
                  <div className="text-center py-4 py-md-5">
                    <i className="fas fa-shopping-cart text-muted display-1 mb-3 d-block"></i>
                    <p className="text-muted mb-3">Your cart is empty</p>
                    <Button variant="primary" onClick={() => navigate('/menu')} size="sm">
                      <i className="fas fa-coffee me-2"></i>
                      Browse Menu
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="table-responsive">
                      <Table hover className="mb-0">
                        <thead className="d-none d-md-table-header-group">
                          <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((item) => {
                            const price = parseFloat(item.price.replace('₱', '').replace(',', ''));
                            const subtotal = (price * item.quantity).toFixed(2);
                            
                            return (
                              <tr key={item.id}>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div>
                                      <strong className="small">{item.name}</strong>
                                      <br className="d-md-none" />
                                      <small className="text-muted">{item.category}</small>
                                      <div className="d-md-none mt-1">
                                        <strong>₱{item.price}</strong> × {item.quantity}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="d-none d-md-table-cell">{item.price}</td>
                                <td className="d-none d-md-table-cell">
                                  <div className="d-flex align-items-center gap-2">
                                    <Button
                                      size="sm"
                                      variant="outline-secondary"
                                      onClick={() => updateQuantity(item.id, -1)}
                                    >
                                      <i className="fas fa-minus"></i>
                                    </Button>
                                    <span className="fw-bold">{item.quantity}</span>
                                    <Button
                                      size="sm"
                                      variant="outline-secondary"
                                      onClick={() => updateQuantity(item.id, 1)}
                                    >
                                      <i className="fas fa-plus"></i>
                                    </Button>
                                  </div>
                                </td>
                                <td className="d-none d-md-table-cell">
                                  <strong>₱{subtotal}</strong>
                                </td>
                                <td>
                                  <div className="d-flex gap-1 align-items-center">
                                    <Button
                                      size="sm"
                                      variant="outline-secondary"
                                      className="d-md-none"
                                      onClick={() => updateQuantity(item.id, -1)}
                                    >
                                      <i className="fas fa-minus"></i>
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline-secondary"
                                      className="d-md-none"
                                      onClick={() => updateQuantity(item.id, 1)}
                                    >
                                      <i className="fas fa-plus"></i>
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="danger"
                                      onClick={() => removeItem(item.id)}
                                    >
                                      <i className="fas fa-trash"></i>
                                    </Button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colSpan="3" className="text-end d-none d-md-table-cell">
                              <strong>Total:</strong>
                            </td>
                            <td colSpan="1" className="d-md-none">
                              <strong>Total:</strong>
                            </td>
                            <td colSpan="2">
                              <h5 className="mb-0 text-success">₱{calculateTotal()}</h5>
                            </td>
                          </tr>
                        </tfoot>
                      </Table>
                    </div>
                    
                    <div className="d-flex flex-column flex-md-row gap-2 justify-content-end mt-3">
                      <Button variant="outline-danger" onClick={clearCart} size="sm">
                        <i className="fas fa-trash me-2"></i>
                        Clear Cart
                      </Button>
                      <Button variant="success" size="sm">
                        <i className="fas fa-check me-2"></i>
                        Checkout (₱{calculateTotal()})
                      </Button>
                    </div>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Recent Orders */}
        <Row className="mb-3 mb-md-4 g-3">
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Header className="bg-primary text-white p-2 p-md-3">
                <h5 className="mb-0 h6 h-md-5">
                  <i className="fas fa-shopping-bag me-2"></i>
                  Recent Orders
                </h5>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  {recentOrders.map((order) => (
                    <ListGroup.Item key={order.id}>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="mb-1">{order.item}</h6>
                          <small className="text-muted">
                            <i className="fas fa-calendar me-1"></i>
                            {order.date}
                          </small>
                        </div>
                        <div className="text-end">
                          <Badge bg="success" className="mb-1">{order.status}</Badge>
                          <div>
                            <strong>{order.amount}</strong>
                          </div>
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button variant="link" size="sm">
                  View All Orders <i className="fas fa-arrow-right ms-1"></i>
                </Button>
              </Card.Footer>
            </Card>
          </Col>

          {/* Upcoming Reservations */}
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Header className="bg-success text-white p-2 p-md-3">
                <h5 className="mb-0 h6 h-md-5">
                  <i className="fas fa-calendar-alt me-2"></i>
                  Upcoming Reservations
                </h5>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  {upcomingReservations.map((reservation) => (
                    <ListGroup.Item key={reservation.id}>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="mb-1">
                            <i className="fas fa-calendar me-2"></i>
                            {reservation.date}
                          </h6>
                          <small className="text-muted">
                            <i className="fas fa-clock me-1"></i>
                            {reservation.time} • {reservation.guests} guests
                          </small>
                        </div>
                        <div>
                          <Badge bg={reservation.status === 'Confirmed' ? 'success' : 'warning'}>
                            {reservation.status}
                          </Badge>
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button variant="link" size="sm">
                  View All Reservations <i className="fas fa-arrow-right ms-1"></i>
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>

        {/* My Subscriptions */}
        <Row className="mb-3 mb-md-4">
          <Col md={12}>
            <Card className="shadow-sm">
              <Card.Header className="bg-warning text-dark p-2 p-md-3">
                <h5 className="mb-0 h6 h-md-5">
                  <i className="fas fa-box me-2"></i>
                  My Subscriptions
                  {subscriptions.length > 0 && (
                    <Badge bg="dark" className="ms-2 small">
                      {subscriptions.length} {subscriptions.length === 1 ? 'subscription' : 'subscriptions'}
                    </Badge>
                  )}
                </h5>
              </Card.Header>
              <Card.Body>
                {subscriptions.length === 0 ? (
                  <div className="text-center py-5">
                    <i className="fas fa-box-open text-muted display-1 mb-3"></i>
                    <p className="text-muted mb-3">You don't have any active subscriptions</p>
                    <Button variant="warning" onClick={() => navigate('/subscription')}>
                      <i className="fas fa-plus me-2"></i>
                      Start a Subscription
                    </Button>
                  </div>
                ) : (
                  <ListGroup variant="flush">
                    {subscriptions.map((sub) => {
                      const nextDeliveryDate = new Date(sub.nextDelivery).toLocaleDateString();
                      const planNames = {
                        'starter': 'Starter Pack - ₱599/month',
                        'premium': 'Premium Pack - ₱899/month',
                        'deluxe': 'Deluxe Pack - ₱1,299/month'
                      };
                      
                      return (
                        <ListGroup.Item key={sub.id}>
                          <Row className="align-items-center">
                            <Col md={6}>
                              <h6 className="mb-2">
                                <i className="fas fa-coffee me-2 text-warning"></i>
                                {planNames[sub.plan]}
                              </h6>
                              <small className="text-muted d-block">
                                <i className="fas fa-truck me-1"></i>
                                Delivery: {sub.frequency}
                              </small>
                              <small className="text-muted d-block">
                                <i className="fas fa-mortar-pestle me-1"></i>
                                Grind: {sub.grind}
                              </small>
                            </Col>
                            <Col md={4}>
                              <small className="text-muted d-block">
                                <i className="fas fa-calendar me-1"></i>
                                Next Delivery: <strong>{nextDeliveryDate}</strong>
                              </small>
                              <small className="text-muted d-block">
                                <i className="fas fa-map-marker-alt me-1"></i>
                                {sub.address}
                              </small>
                            </Col>
                            <Col md={2} className="text-end">
                              <Badge bg={sub.status === 'Active' ? 'success' : 'secondary'}>
                                {sub.status}
                              </Badge>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Loyalty Program */}
        <Row>
          <Col md={12}>
            <Card className="shadow-sm border-warning">
              <Card.Body>
                <Row className="align-items-center">
                  <Col md={8}>
                    <h4 className="mb-2">
                      <i className="fas fa-star text-warning me-2"></i>
                      Coffee Loyalty Program
                    </h4>
                    <p className="text-muted mb-0">
                      You have earned <strong>150 points</strong>! Get 50 more points for a free coffee upgrade!
                    </p>
                  </Col>
                  <Col md={4} className="text-md-end">
                    <div className="mb-2">
                      <h2 className="text-warning mb-0">150</h2>
                      <small className="text-muted">Loyalty Points</small>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CustomerDashboard;

