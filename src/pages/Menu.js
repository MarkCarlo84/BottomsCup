import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Toast } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    
    if (!currentUser) {
      setToastMessage('Please login to add items to cart');
      setShowToast(true);
      return;
    }

    // Get existing cart items
    const cartKey = `cart_${currentUser.username}`;
    const existingCart = JSON.parse(localStorage.getItem(cartKey) || '[]');
    
    // Add new item with quantity
    const existingItemIndex = existingCart.findIndex(cartItem => cartItem.id === item.id);
    
    if (existingItemIndex >= 0) {
      // Item already exists, increase quantity
      existingCart[existingItemIndex].quantity += 1;
    } else {
      // New item, add with quantity 1
      existingCart.push({ ...item, quantity: 1, addedAt: new Date().toISOString() });
    }
    
    localStorage.setItem(cartKey, JSON.stringify(existingCart));
    setToastMessage(`${item.name} added to cart!`);
    setShowToast(true);
  };

  const categories = [
    { id: 'all', name: 'All Products', icon: 'fas fa-coffee' },
    { id: 'espresso', name: 'Espresso', icon: 'fas fa-mug-hot' },
    { id: 'brewed', name: 'Brewed Coffee', icon: 'fas fa-tint' },
    { id: 'specialty', name: 'Specialty Drinks', icon: 'fas fa-star' },
    { id: 'coldbrew', name: 'Cold Brew', icon: 'fas fa-thermometer-half' },
    { id: 'pastries', name: 'Pastries', icon: 'fas fa-birthday-cake' }
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Classic Espresso',
      description: 'Rich, intense, and perfectly extracted single shot of pure coffee essence',
      price: '₱99.50',
      category: 'espresso',
      calories: '~5 cal',
      tags: ['Strong', 'Pure'],
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and velvety foam in perfect harmony',
      price: '₱129.50',
      category: 'espresso',
      calories: '~120 cal',
      tags: ['Creamy', 'Balanced'],
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 3,
      name: 'Caffè Latte',
      description: 'Smooth blend of espresso and steamed milk for a gentle coffee experience',
      price: '₱139.00',
      category: 'espresso',
      calories: '~150 cal',
      tags: ['Smooth', 'Mild'],
      image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 4,
      name: 'Pour Over',
      description: 'Single-origin beans, hand-crafted to perfection with precise water control',
      price: '₱89.00',
      category: 'brewed',
      calories: '~5 cal',
      tags: ['Artisanal', 'Clean'],
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 5,
      name: 'Caramel Macchiato',
      description: 'Espresso, vanilla, steamed milk, and caramel drizzle for a sweet treat',
      price: '₱159.50',
      category: 'specialty',
      calories: '~250 cal',
      tags: ['Sweet', 'Indulgent'],
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 6,
      name: 'Classic Cold Brew',
      description: 'Slow-steeped coffee over ice for smooth, low-acid refreshment',
      price: '₱129.00',
      category: 'coldbrew',
      calories: '~5 cal',
      tags: ['Smooth', 'Refreshing'],
      image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 7,
      name: 'Butter Croissant',
      description: 'Flaky, golden, and freshly baked daily with premium butter',
      price: '₱55.00',
      category: 'pastries',
      calories: '~260 cal',
      tags: ['Flaky', 'Fresh'],
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 8,
      name: 'Blueberry Muffin',
      description: 'Moist and bursting with fresh blueberries, perfect with coffee',
      price: '₱50.50',
      category: 'pastries',
      calories: '~320 cal',
      tags: ['Fruity', 'Moist'],
      image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 9,
      name: 'Mocha',
      description: 'Decadent blend of espresso, steamed milk, and premium chocolate',
      price: '₱149.00',
      category: 'espresso',
      calories: '~290 cal',
      tags: ['Chocolate', 'Sweet'],
      image: 'https://images.unsplash.com/photo-1514066558159-fc8c737ef259?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 10,
      name: 'Americano',
      description: 'Bold espresso diluted with hot water for a lighter, smoother taste',
      price: '₱99.00',
      category: 'espresso',
      calories: '~10 cal',
      tags: ['Bold', 'Simple'],
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 11,
      name: 'French Press',
      description: 'Full-bodied coffee brewed to bring out rich, complex flavors',
      price: '₱95.00',
      category: 'brewed',
      calories: '~5 cal',
      tags: ['Rich', 'Full-bodied'],
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 12,
      name: 'Vanilla Latte',
      description: 'Smooth espresso with vanilla syrup and steamed milk perfection',
      price: '₱145.00',
      category: 'specialty',
      calories: '~200 cal',
      tags: ['Sweet', 'Creamy'],
      image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 13,
      name: 'Hazelnut Latte',
      description: 'Rich espresso combined with hazelnut syrup and steamed milk',
      price: '₱149.00',
      category: 'specialty',
      calories: '~220 cal',
      tags: ['Nutty', 'Smooth'],
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 14,
      name: 'Iced Caramel Macchiato',
      description: 'Chilled espresso with vanilla, milk, and caramel drizzle over ice',
      price: '₱165.00',
      category: 'coldbrew',
      calories: '~250 cal',
      tags: ['Iced', 'Sweet'],
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 15,
      name: 'Nitro Cold Brew',
      description: 'Infused with nitrogen for a creamy, cascading, smooth finish',
      price: '₱155.00',
      category: 'coldbrew',
      calories: '~5 cal',
      tags: ['Creamy', 'Unique'],
      image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 16,
      name: 'Iced Latte',
      description: 'Refreshing espresso and milk served over ice for a cool treat',
      price: '₱139.00',
      category: 'coldbrew',
      calories: '~130 cal',
      tags: ['Iced', 'Refreshing'],
      image: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 17,
      name: 'White Chocolate Mocha',
      description: 'Luxurious white chocolate, espresso, and steamed milk blend',
      price: '₱159.00',
      category: 'specialty',
      calories: '~310 cal',
      tags: ['Sweet', 'Luxurious'],
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 18,
      name: 'Flat White',
      description: 'Double shot of espresso with velvety microfoam for coffee purists',
      price: '₱135.00',
      category: 'espresso',
      calories: '~120 cal',
      tags: ['Strong', 'Smooth'],
      image: 'https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 19,
      name: 'Chocolate Chip Cookie',
      description: 'Freshly baked with generous chocolate chips, crispy outside and chewy inside',
      price: '₱45.00',
      category: 'pastries',
      calories: '~250 cal',
      tags: ['Sweet', 'Chocolate'],
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 20,
      name: 'Cinnamon Roll',
      description: 'Warm, gooey cinnamon roll with cream cheese frosting',
      price: '₱65.00',
      category: 'pastries',
      calories: '~420 cal',
      tags: ['Sweet', 'Warm'],
      image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 21,
      name: 'Banana Bread',
      description: 'Moist homemade banana bread with walnuts, perfect comfort food',
      price: '₱55.00',
      category: 'pastries',
      calories: '~280 cal',
      tags: ['Moist', 'Homemade'],
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 22,
      name: 'Almond Croissant',
      description: 'Buttery croissant filled with almond cream and topped with sliced almonds',
      price: '₱65.00',
      category: 'pastries',
      calories: '~340 cal',
      tags: ['Flaky', 'Nutty'],
      image: 'https://images.unsplash.com/photo-1623334044303-241021148842?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 23,
      name: 'Drip Coffee',
      description: 'Classic filter coffee brewed fresh throughout the day',
      price: '₱75.00',
      category: 'brewed',
      calories: '~5 cal',
      tags: ['Classic', 'Simple'],
      image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 24,
      name: 'Matcha Latte',
      description: 'Premium Japanese matcha green tea with steamed milk',
      price: '₱155.00',
      category: 'specialty',
      calories: '~180 cal',
      tags: ['Green Tea', 'Healthy'],
      image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300&h=200&fit=crop&crop=center'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page">
      {/* Page Header */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="display-4 fw-bold mb-3"><i className="fas fa-utensils me-3"></i>Our Menu</h1>
              <p className="lead">
                <i className="fas fa-search me-2"></i>
                Discover our carefully crafted selection of premium coffee and delicious treats
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="py-3 py-md-4 bg-light">
        <Container>
          <Row>
            <Col>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? 'primary' : 'outline-primary'}
                    size="sm"
                    onClick={() => setActiveCategory(category.id)}
                    className="d-flex align-items-center gap-1 gap-md-2 px-2 px-md-3"
                  >
                    <i className={category.icon}></i>
                    <span className="d-none d-sm-inline">{category.name}</span>
                    <span className="d-inline d-sm-none">{category.name.split(' ')[0]}</span>
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Menu Items */}
      <section className="py-4 py-md-5">
        <Container>
          <Row className="g-3 g-md-4">
            {filteredItems.map(item => (
              <Col key={item.id} sm={6} lg={4} xl={3}>
                <Card className="h-100 border-0 shadow-sm menu-item">
                  <div className="position-relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="card-img-top"
                      style={{height: '180px', objectFit: 'cover'}}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="position-absolute top-0 end-0 m-2">
                      <Badge bg="secondary" className="text-capitalize small">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  <Card.Body className="p-3 p-md-4">
                    <div className="d-flex justify-content-between align-items-start mb-2 mb-md-3">
                      <div className="flex-grow-1">
                        <Card.Title className="h6 h-md-5 mb-1">{item.name}</Card.Title>
                      </div>
                      <div className="text-end ms-2">
                        <div className="h6 h-md-5 text-primary mb-0">{item.price}</div>
                        <small className="text-muted" style={{fontSize: '0.7rem'}}>{item.calories}</small>
                      </div>
                    </div>
                    
                    <Card.Text className="text-muted mb-2 mb-md-3 small">
                      {item.description}
                    </Card.Text>
                    
                    <div className="d-flex flex-wrap gap-1 mb-2 mb-md-3">
                      {item.tags.map((tag, index) => (
                        <Badge key={index} bg="light" text="dark" className="border" style={{fontSize: '0.7rem'}}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      variant="primary" 
                      className="w-100"
                      size="sm"
                      onClick={() => handleAddToCart(item)}
                    >
                      <i className="fas fa-cart-plus me-1 me-md-2"></i>
                      <span className="d-none d-sm-inline">Add to Cart</span>
                      <span className="d-inline d-sm-none">Add</span>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Toast Notification */}
      <div
        style={{
          position: 'fixed',
          top: '80px',
          right: '20px',
          zIndex: 9999
        }}
      >
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
          bg="success"
        >
          <Toast.Header>
            <i className="fas fa-check-circle me-2 text-success"></i>
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </div>

      {/* Menu Info */}
      <section className="py-4 py-md-5 bg-light">
        <Container>
          <Row className="g-3 g-md-4">
            <Col md={4}>
              <Card className="h-100 border-0 bg-white shadow-sm">
                <Card.Body className="p-3 p-md-4 text-center">
                  <i className="fas fa-leaf text-success display-4 mb-2 mb-md-3 d-block"></i>
                  <Card.Title className="h6 h-md-5"><i className="fas fa-certificate me-1 me-md-2 d-none d-sm-inline"></i>100% Organic</Card.Title>
                  <Card.Text className="small mb-0">
                    <i className="fas fa-globe me-1 me-md-2 d-none d-sm-inline"></i>
                    All our coffee beans are certified organic
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 bg-white shadow-sm">
                <Card.Body className="p-3 p-md-4 text-center">
                  <i className="fas fa-clock text-primary display-4 mb-2 mb-md-3 d-block"></i>
                  <Card.Title className="h6 h-md-5"><i className="fas fa-calendar-day me-1 me-md-2 d-none d-sm-inline"></i>Fresh Daily</Card.Title>
                  <Card.Text className="small mb-0">
                    <i className="fas fa-birthday-cake me-1 me-md-2 d-none d-sm-inline"></i>
                    Baked fresh every morning
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 bg-white shadow-sm">
                <Card.Body className="p-3 p-md-4 text-center">
                  <i className="fas fa-heart text-danger display-4 mb-2 mb-md-3 d-block"></i>
                  <Card.Title className="h6 h-md-5"><i className="fas fa-users me-1 me-md-2 d-none d-sm-inline"></i>Made with Love</Card.Title>
                  <Card.Text className="small mb-0">
                    <i className="fas fa-coffee me-1 me-md-2 d-none d-sm-inline"></i>
                    Crafted with care
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Menu;
