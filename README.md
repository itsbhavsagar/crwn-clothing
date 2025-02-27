# 🛒 Crown Clothing - React E-Commerce Platform

A modern and scalable e-commerce platform built with React, featuring a comprehensive shopping experience with category browsing, cart management, user authentication, and payment processing.

![Crown Clothing Screenshot](https://drive.google.com/uc?export=view&id=1YT_JSp7lC3AkGUwz4pLG7WIxNlcn-SCL)


## 📋 Project Overview

Crown Clothing is a full-featured e-commerce application that demonstrates modern web development practices and architecture. The application allows users to browse clothing categories, add items to their shopping cart, create accounts, sign in, and complete purchases using credit card payments.

## 🚀 Technologies Used

### Frontend
- **React.js** (v18) - Functional components with Hooks
- **React Router v6** - For declarative routing and navigation
- **Styled Components** - For component-scoped styling
- **Context API** - For state management across components
- **React Hooks** - useState, useEffect, useContext, and custom hooks

### Backend & Services
- **Firebase** 
- Authentication (email/password & Google sign-in)
- Firestore Database (NoSQL) for product and user data
- **Stripe API** - For secure payment processing

### Development Tools
- **Create React App** - For project scaffolding and configuration
- **Git & GitHub** - Version control and collaboration
- **npm** - Package management
- **ESLint** - Code quality and style checking

## 🎯 Features Implemented
- ✅ **User Authentication**
- Email & Password sign-up/sign-in
- Google Authentication
- Persistent user sessions
- ✅ **Product Browsing**
- Category-based navigation 
- Product listings with images and pricing
- ✅ **Shopping Cart Management**
- Add/remove items
- Adjust quantities
- Persistent cart state
- ✅ **Checkout Process**
- Cart summary
- Stripe payment integration
- ✅ **Responsive Design**
- Mobile-friendly interface
- ✅ **State Management with Context API**
- User context
- Cart context
- Categories context

## 📂 Project Structure

```
src/
├── assets/            # Images and static assets
├── components/        # Reusable UI components
│   ├── button/        # Button variants
│   ├── cart-dropdown/ # Shopping cart dropdown
│   ├── cart-icon/     # Cart icon with item count
│   ├── cart-item/     # Individual cart item
│   ├── category-item/ # Category display
│   ├── checkout-item/ # Items in checkout
│   ├── directory/     # Main directory/categories listing
│   ├── form-input/    # Form input components
│   ├── payment-form/  # Stripe payment form
│   ├── product-card/  # Individual product display
│   └── sign-in-form/  # Authentication form
├── contexts/          # React Context providers
│   ├── cart.context.jsx      # Shopping cart state
│   ├── categories.context.jsx # Product categories
│   └── user.context.jsx      # Authentication state
├── routes/            # Application routes/pages
│   ├── authentication/ # Sign-in and Sign-up
│   ├── categories-preview/ # All categories overview
│   ├── category/      # Single category view
│   ├── checkout/      # Checkout and payment
│   ├── home/          # Homepage with categories
│   ├── navigation/    # App navigation/header
│   └── shop/          # Main shopping experience
├── utils/             # Utility functions
│   └── firebase/      # Firebase configuration and helpers
├── App.js             # Main application component
└── index.js           # Application entry point
```

## 🔑 Authentication Details

The application uses Firebase Authentication with multiple sign-in methods:

- **Email/Password Authentication**: Traditional sign-up and sign-in flow
- **Google Authentication**: One-click sign-in with Google account
- **User Session Persistence**: Firebase's auth state persistence

Authentication state is managed through the UserContext, making user information available throughout the application.

## 🧠 State Management Approach

Crown Clothing uses the **React Context API** for state management:

- **UserContext**: Manages authentication state and user information
- **CategoriesContext**: Manages product categories and items
- **CartContext**: Manages shopping cart state, including:
- Cart items
- Item count
- Cart total
- Add/remove item functionality

Each context provider encapsulates related state and functions, making the state management clean and maintainable.

## 🔥 Firebase Integration

Firebase provides backend services for the application:

- **Authentication**: User account creation and management
- **Firestore Database**: 
- Product data storage
- User data persistence
- Order history (planned)

The Firebase configuration and helper functions are centralized in the `firebase.utils.js` file, which handles:
- Service initialization
- Authentication operations
- Database operations (create, read, update)
- Data transformations between app and Firestore

## 💳 Stripe Payment Integration

The application integrates with Stripe for secure payment processing:

- Custom payment form component
- Credit card element from Stripe
- Secure payment processing
- Order completion handling

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- Firebase account (for authentication and database)
- Stripe account (for payment processing)

### Installation
1. **Clone this repo:**
```sh
git clone https://github.com/itsbhavsagar/crwn-clothing.git
cd crwn-clothing
```

2. **Install dependencies:**
```sh
npm install
```

3. **Set up environment variables:**
Create a `.env` file in the root directory with the following variables:
```
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

4. **Start the development server:**
```sh
npm start
```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

### Firebase Setup
1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable Authentication (Email/Password and Google provider)
3. Create a Firestore database
4. Add your Firebase configuration to the environment variables

### Stripe Setup
1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your publishable key from the Stripe dashboard
3. Add your Stripe publishable key to the environment variables

## 🌎 Live Demo

🚀 [View Deployed Project](https://crwn-clothing-omega-sepia.vercel.app/)

## 📌 Project Roadmap

- [x] **Project Setup & Initial UI**  
- [x] **Authentication with Firebase**  
- [x] **Shopping Cart Functionality**
- [x] **Integrating Stripe Payments**  
- [ ] **User Order History** (Upcoming)
- [ ] **Admin Dashboard** (Planned)
- [ ] **Product Reviews & Ratings** (Planned)
- [ ] **Mobile App Version** (Future)

## 🤝 Contributing

This is a **personal learning project**. However, if you'd like to suggest improvements or collaborate, feel free to open an **issue** or submit a **pull request**!

## 📜 License

This project is for **educational purposes** only.

---

💡 **Follow my journey on [GitHub](https://github.com/itsbhavsagar) & [Twitter](https://twitter.com/itsbhavsagar)!** 🚀
