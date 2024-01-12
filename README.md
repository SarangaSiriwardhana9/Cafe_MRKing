# MRKing Cafe - Online Food Ordering System

MRKing Cafe is a web application designed for a cafe in Sri Lanka, allowing users to conveniently order food online, explore available menus, update their profiles, and manage their order history. The system is built using the MERN (MongoDB, Express.js, React, Node.js) stack and Vite for a fast and efficient development experience.

## Features

- **User Authentication**: Secure user authentication powered by Firebase ensures a safe and seamless login and registration process.
- **Menu Display and Sorting**: Users can view and sort through the cafe's menu items, making it easy to find their favorite dishes.
- **Shopping Cart**: A user-friendly shopping cart allows customers to add items, review their selection, and proceed to checkout effortlessly.
- **Online Payments**: Integrated with Stripe for secure and convenient online payments, making the ordering process hassle-free.
- **Profile Management**: Users can update their profiles, ensuring accurate and up-to-date information for a personalized experience.
- **Order History**: Users have access to their order history, providing transparency and easy reference to past purchases.
- **Admin Dashboard**: Admins can manage menus, users, and table bookings efficiently through a dedicated admin dashboard.
- **Table Booking Management**: The system includes features for managing table bookings to streamline cafe operations.

## Tech Stack

- **Frontend**: React.js, Vite, DaisyUI, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Authentication
- **Payment Processing**: Stripe
- **Image Hosting**: Imgbb API

## Getting Started

### Client

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/SarangaSiriwardhana9/Cafe_MRKing.git
   
2. **Navigate to Client Folder:**

   ```bash
   cd client

3. **Create .env.local File:**

4. **Copy the following content and replace the placeholder values with your own:**

- VITE_APIKEY=your_firebase_api_key
- VITE_AUTHDOMAIN=your_firebase_auth_domain
- VITE_PROJECTID=your_firebase_project_id
- VITE_STORAGEBUCKET=your_firebase_storage_bucket
- VITE_MESSAGESENDERID=your_firebase_message_sender_id
- VITE_APPID=your_firebase_app_id
- VITE_IMAGE_HOSTING_KEY=your_imgbb_api_key
- VITE_STRIPE_PK=your_stripe_publishable_key

5. **Install Dependencies**

   ```bash
   npm install

7. **Run the Application:**

   ```bash
   npm run dev

### Client

1. **Navigate to Server Folder:**

   ```bash
   cd server
   
2. **Create .env File:**

3. **Copy the following content and replace the placeholder values with your own:**
   
- DB_USER=your_database_user
- DB_PASSWORD=your_database_password
- ACCESS_TOKEN_SECRET=your_access_token_secret
- STRIPE_SECRET_KEY=your_stripe_secret_key

4. **Install Dependencies:**

   ```bash
   npm install

5. **Run the Server:**
   ```bash
   npm start









