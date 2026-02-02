🔐 Authentication_Pro

A beginner-friendly full-stack authentication web application built with Node.js, Express, MongoDB, EJS, and Tailwind CSS.
The project implements secure JWT-based authentication along with user profiles, post creation, and profile picture uploads.

🚀 Features

🔑 User Registration & Login with JWT Authentication

🔓 Secure Logout functionality

👤 User Profile Page

📝 Create and View Posts

🖼️ Upload Profile Pictures

🎨 Clean and Responsive UI using EJS & Tailwind CSS

🛡️ Protected Routes for authenticated users

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JSON Web Tokens (JWT)

Frontend: EJS, Tailwind CSS

File Uploads: Multer

Other Tools: bcrypt, dotenv, mongoose

📁 Project Structure
Authentication_Pro/
│
├── models/           # Mongoose schemas
├── routes/           # Authentication & user routes
├── views/            # EJS templates
├── public/           # Static files (CSS, images)
├── uploads/          # Uploaded profile images
├── middleware/       # Auth middleware
├── app.js            # Main application file
├── package.json
└── README.md

⚙️ Installation & Setup
Prerequisites

Node.js installed

MongoDB installed or MongoDB Atlas account

Step 1: Clone the Repository
git clone <your-github-repo-link>
cd Authentication_Pro

Step 2: Install Dependencies
npm install

Step 3: Environment Variables

Create a .env file in the root directory:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Step 4: Run the Application
npm start


Open your browser and go to:

http://localhost:3000

🧪 How It Works

Users register and log in securely using JWT tokens.

Authenticated users can access protected routes.

Users can create posts and upload a profile picture.

All user data is securely stored in MongoDB.

📌 Future Improvements

🔐 Password reset functionality

📧 Email verification

🗂️ Role-based access control

☁️ Cloud image storage (Cloudinary)

🌐 Deployment on Render / Railway
