import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Alert, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    setShowLogoutAlert(true);
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  // Mock data for demonstration
  const orders = [
    { id: 1, customer: 'John Doe', item: 'Cappuccino', status: 'Completed', time: '10:30 AM' },
    { id: 2, customer: 'Jane Smith', item: 'Caramel Macchiato', status: 'In Progress', time: '11:15 AM' },
    { id: 3, customer: 'Mike Johnson', item: 'Cold Brew', status: 'Pending', time: '11:45 AM' },
  ];

  const stats = [
    { title: 'Total Orders', value: '156', icon: 'fas fa-shopping-cart', color: 'primary' },
    { title: 'Revenue Today', value: '₱12,450', icon: 'fas fa-dollar-sign', color: 'success' },
    { title: 'Active Customers', value: '89', icon: 'fas fa-users', color: 'info' },
    { title: 'Menu Items', value: '24', icon: 'fas fa-coffee', color: 'warning' },
  ];

  return (
    <div className="admin-page">
      {/* Page Header */}
      <section className="py-3 py-md-4 bg-dark text-white">
        <Container>
          <Row className="align-items-center g-2">
            <Col>
              <h1 className="h4 h-md-3 mb-1 mb-md-2">
                <i className="fas fa-cog me-2"></i>
                Admin Dashboard
              </h1>
              <p className="mb-0 text-muted small">
                Welcome back, <strong>{currentUser.username}</strong>
              </p>
            </Col>
            <Col xs="auto">
              <Button variant="outline-light" onClick={handleLogout} size="sm">
                <i className="fas fa-sign-out-alt me-2 d-none d-sm-inline"></i>
                <i className="fas fa-sign-out-alt d-inline d-sm-none"></i>
                <span className="d-none d-sm-inline">Logout</span>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {showLogoutAlert && (
        <Alert variant="success" className="mb-0">
          <i className="fas fa-check-circle me-2"></i>
          Logged out successfully! Redirecting to homepage...
        </Alert>
      )}

      {/* Stats Cards */}
      <section className="py-3 py-md-4 bg-light">
        <Container>
          <Row className="g-2 g-md-3">
            {stats.map((stat, index) => (
              <Col key={index} xs={6} md={3}>
                <Card className="border-0 shadow-sm">
                  <Card.Body className="p-2 p-md-3">
                    <div className="d-flex align-items-center">
                      <div className={`text-${stat.color} me-2 me-md-3`}>
                        <i className={`${stat.icon} fs-5 fs-md-4`}></i>
                      </div>
                      <div>
                        <div className="h6 h-md-5 mb-0">{stat.value}</div>
                        <small className="text-muted" style={{fontSize: '0.7rem'}}>{stat.title}</small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-3 py-md-4">
        <Container>
          <Row className="g-3 g-md-4">
            {/* Recent Orders */}
            <Col lg={8}>
              <Card className="border-0 shadow-sm">
                <Card.Header className="bg-white border-bottom p-2 p-md-3">
                  <h5 className="mb-0 h6 h-md-5">
                    <i className="fas fa-list me-2"></i>
                    Recent Orders
                  </h5>
                </Card.Header>
                <Card.Body className="p-0">
                  <div className="table-responsive">
                    <Table className="mb-0">
                      <thead className="table-light">
                        <tr>
                          <th className="small">ID</th>
                          <th className="small d-none d-md-table-cell">Customer</th>
                          <th className="small">Item</th>
                          <th className="small">Status</th>
                          <th className="small d-none d-lg-table-cell">Time</th>
                          <th className="small">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map(order => (
                          <tr key={order.id}>
                            <td className="small">#{order.id}</td>
                            <td className="small d-none d-md-table-cell">{order.customer}</td>
                            <td className="small">{order.item}</td>
                            <td>
                              <span className={`badge small ${
                                order.status === 'Completed' ? 'bg-success' :
                                order.status === 'In Progress' ? 'bg-warning' :
                                'bg-secondary'
                              }`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="small d-none d-lg-table-cell">{order.time}</td>
                            <td>
                              <Button variant="outline-primary" size="sm">
                                <i className="fas fa-eye"></i>
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Quick Actions */}
            <Col lg={4}>
              <Card className="border-0 shadow-sm">
                <Card.Header className="bg-white border-bottom p-2 p-md-3">
                  <h5 className="mb-0 h6 h-md-5">
                    <i className="fas fa-bolt me-2"></i>
                    Quick Actions
                  </h5>
                </Card.Header>
                <Card.Body className="p-2 p-md-3">
                  <div className="d-grid gap-2">
                    <Button variant="primary" size="sm">
                      <i className="fas fa-plus me-2"></i>
                      Add Menu Item
                    </Button>
                    <Button variant="outline-primary" size="sm">
                      <i className="fas fa-edit me-2"></i>
                      Update Menu
                    </Button>
                    <Button variant="outline-success" size="sm">
                      <i className="fas fa-chart-bar me-2"></i>
                      View Reports
                    </Button>
                    <Button variant="outline-info" size="sm">
                      <i className="fas fa-users me-2"></i>
                      Manage Staff
                    </Button>
                    <Button variant="outline-warning" size="sm">
                      <i className="fas fa-cog me-2"></i>
                      Settings
                    </Button>
                  </div>
                </Card.Body>
              </Card>

              {/* System Status */}
              <Card className="border-0 shadow-sm mt-3">
                <Card.Header className="bg-white border-bottom p-2 p-md-3">
                  <h5 className="mb-0 h6 h-md-5">
                    <i className="fas fa-heartbeat me-2"></i>
                    System Status
                  </h5>
                </Card.Header>
                <Card.Body className="p-2 p-md-3">
                  <div className="d-flex justify-content-between align-items-center mb-2 small">
                    <span>Server Status</span>
                    <span className="badge bg-success small">Online</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2 small">
                    <span>Database</span>
                    <span className="badge bg-success small">Connected</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2 small">
                    <span>Payment System</span>
                    <span className="badge bg-success small">Active</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center small">
                    <span>Last Backup</span>
                    <small className="text-muted">2 hours ago</small>
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

export default Admin;
