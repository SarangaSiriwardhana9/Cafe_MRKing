
# MRKing Cafe - Online Food Ordering System


<p align="center">
  <img src="https://github.com/SarangaSiriwardhana9/Cafe_MRKing/assets/99233703/30d8b629-d8f5-4b47-905c-d834f025d91d" alt="Logo" width="400" height="200">
</p>

MRKing Cafe is a web application designed for a cafe in Sri Lanka, allowing users to conveniently order food online, explore available menus, update their profiles, and manage their order history. The system is built using the MERN (MongoDB, Express.js, React, Node.js) stack and Vite for a fast and efficient development experience.

## Screenshots

| ![Screenshot 1](https://github.com/SarangaSiriwardhana9/Cafe_MRKing/assets/99233703/a29fa1b7-8bef-4a43-bdac-359154d32645) | ![Screenshot 2](https://github.com/SarangaSiriwardhana9/Cafe_MRKing/assets/99233703/2cd6d410-50e9-469f-a33a-8a3604cb1693) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                     |                                     |

| ![Screenshot 3](https://github.com/SarangaSiriwardhana9/Cafe_MRKing/assets/99233703/cabe0982-351c-46e9-acbe-15df7f152c45) | ![Screenshot 4](https://github.com/SarangaSiriwardhana9/Cafe_MRKing/assets/99233703/dd15220a-db6e-4a00-8995-c772607a135e) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                     |                                     |

| ![7](https://github.com/SarangaSiriwardhana9/Cafe_MRKing/assets/99233703/6251c6b7-ea62-4d1b-9098-94b5b7d29576)
 | ![Screenshot 6]![1](https://github.com/SarangaSiriwardhana9/Cafe_MRKing/assets/99233703/d4ee2ec8-1220-4742-b4d4-739680e19b16) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                     |                                     |


| ![Screenshot 5](https://github.com/SarangaSiriwardhana9/Cafe_MRKing/assets/99233703/4d57ca4f-a771-4d48-9f66-8c83870a2add) | ![Screenshot 6] |(https://github.com/SarangaSiriwardhana9/Cafe_MRKing/assets/99233703/ec9b4c12-cf4f-4c02-9871-e9747caf8b91) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                     |                                     |

| ![Screenshot 7](https://github.com/SarangaSiriwardhana9/Cafe_MRKing/assets/99233703/324a548c-3c2b-46c3-a47b-f06a91c15513) | ![Screenshot 8](https://github.com/SarangaSiriwardhana9/Cafe_MRKing/assets/99233703/7b0d209c-0745-4da3-a4af-0e3556e53ab6) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|    



| ![Screenshot 1](https://github.com/SarangaSiriwardhana9/Cafe_MRKing/assets/99233703/e8488b09-aeb8-40fb-a482-6f0abe45bf9e) | ![Screenshot 2](https://github.com/SarangaSiriwardhana9/Cafe_MRKing/assets/99233703/00c53d68-dac1-412e-94e8-4fc7793d1256) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                     |                                    |

## Features

- **User Authentication**: Secure user authentication powered by Firebase ensures a safe and seamless login and registration process.
- **Menu Display and Sorting**: Users can view and sort through the cafe's menu items, making it easy to find their favorite dishes.
- **Shopping Cart**: A user-friendly shopping cart allows customers to add items, review their selection, and proceed to checkout effortlessly.
- **Online Payments**: Integrated with Stripe for secure and convenient online payments, making the ordering process hassle-free.
- **Profile Management**: Users can update their profiles, ensuring accurate and up-to-date information for a personalized experience.
- **Order History**: Users have access to their order history, providing transparency and easy reference to past purchases.
- **Admin Dashboard**: Admins can manage menus, users, and table bookings efficiently through a dedicated admin dashboard.
- **Table Booking Management**: The system includes features for managing table bookings to streamline cafe operations.

**Responsive Design**: MRKing Cafe is designed with responsiveness in mind, ensuring a seamless and enjoyable experience across various devices and screen sizes.



## Tech Stack

- **Frontend**: React.js, Vite, DaisyUI, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Authentication
- **Payment Processing**: Stripe
- **Image Hosting**: Imgbb API

## Demo

Check out the [Demo](https://cafe-mrking.netlify.app) of MRKing Cafe!


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


**Remember to replace the placeholder values in the `.env.local` and `.env` files with your actual API keys and other sensitive information. Adjust the instructions and details according to your specific setup.**


