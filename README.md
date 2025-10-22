# BottomsCup Coffee Shop - React SPA

A modern Single Page Application (SPA) for BottomsCup Coffee Shop built with React and React Router DOM.

## 🚀 Features

### ✅ Lab Requirements Completed:
1. **Single Page Application (SPA)** - Built with React Router DOM
2. **Navigation without page reload** - Smooth client-side routing
3. **Dynamic routing** - Multiple routes with parameters
4. **Nested routes** - Organized component structure
5. **Protected routes** - Admin section with authentication
6. **Programmatic navigation** - useNavigate hook implementation
7. **404 page** - Custom error page for invalid routes

### 🎯 Application Sections:
- **Home** - Hero section with features and statistics
- **About** - Company story, mission, vision, and values
- **Menu** - Interactive menu with category filtering
- **Contact** - Contact form and business information
- **Admin** - Protected admin dashboard (password: `admin123`)

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **React Router DOM 6** - Client-side routing
- **Bootstrap 5** - CSS framework
- **React Bootstrap** - Bootstrap components for React
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter & Playfair Display)

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation component
│   └── ProtectedRoute.js  # Route protection component
├── pages/
│   ├── Home.js           # Homepage
│   ├── About.js          # About page
│   ├── Menu.js           # Menu page with filtering
│   ├── Contact.js        # Contact page with form
│   ├── Admin.js          # Admin dashboard
│   └── NotFound.js       # 404 error page
├── styles/
│   └── index.css         # Custom CSS styles
├── App.js                # Main app component with routing
└── index.js              # App entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 🎨 Key Features Demonstrated

### 1. React Router DOM Implementation
- **BrowserRouter** - Wraps the entire app
- **Routes & Route** - Define application routes
- **Link & NavLink** - Navigation components
- **useNavigate** - Programmatic navigation
- **useLocation** - Access current route information

### 2. Dynamic Routing
- Route parameters for dynamic content
- Nested route structure
- Route-based component rendering

### 3. Protected Routes
- Authentication check using localStorage
- Redirect to home page if not authenticated
- Admin dashboard with password protection

### 4. 404 Error Handling
- Custom NotFound component
- Catch-all route (`*`) for invalid URLs
- User-friendly error page with navigation options

### 5. Responsive Design
- Bootstrap 5 grid system
- Mobile-first approach
- Responsive navigation with hamburger menu

## 🔐 Admin Access

To access the admin dashboard:
1. Click the "Admin" button in the navigation
2. Enter password: `admin123`
3. Access the protected admin panel

## 📱 Responsive Features

- **Mobile Navigation** - Collapsible hamburger menu
- **Responsive Grid** - Bootstrap grid system
- **Touch-Friendly** - Optimized for mobile devices
- **Flexible Layout** - Adapts to different screen sizes

## 🎯 Learning Objectives Achieved

✅ **Build a Single Page Application (SPA)** using React Router DOM  
✅ **Navigate between pages** without reloading the browser  
✅ **Implement dynamic routing** with multiple routes  
✅ **Create nested routes** with organized component structure  
✅ **Add protected routes** with authentication  
✅ **Handle programmatic navigation** using useNavigate  
✅ **Implement 404 pages** for invalid routes  
✅ **Apply responsive styling** with Bootstrap and custom CSS  

## 🚀 Future Enhancements

- Add state management (Redux/Context API)
- Implement user authentication system
- Add shopping cart functionality
- Integrate with backend API
- Add animations and transitions
- Implement search functionality
- Add user reviews and ratings

## 📄 License

This project is created for educational purposes as part of a React Router DOM lab activity.

---

**Note:** This is a demonstration project showcasing React Router DOM implementation. The admin password is hardcoded for educational purposes only.
