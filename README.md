FILE MANAGEMENT SYSTEM

 OVERVIEW
The File Management System is a web-based application developed as a project by B.Tech CSE students at VFSTR University. It is designed to allow users to securely upload, view, organize, and manage digital files in an efficient and user-friendly manner. This system helps streamline document handling processes and ensures centralized access to important files.

GitHub Repository: [notes_app](https://github.com/ujjwal-kriti/notes_app/tree/main)

 OBJECTIVES
- Provide a secure platform for storing and managing files.
- Allow users to upload, view, and delete files easily.
- Implement role-based access for enhanced security.
- Enable efficient organization and retrieval of digital documents.

 KEY FEATURES
1. User Authentication
   - Secure login system for registered users.  
   - Role-based access control (admin/user).  

2. File Upload & Management 
   - Upload files with metadata (title, description, category).  
   - View, download, and delete files.  

3. Search & Filter 
   - Search for files using keywords or categories.  
   - Filter by upload date, type, or user.

4. Activity Logging
   - Logs user activities like upload, delete, and login for audit purposes.

5. Responsive Interface
   - Optimized UI for desktop and mobile views.

TECHNOLOGIES USED
- Frontend:HTML, CSS  
- Backend:Node.js, Express.js  
- Database: MongoDB  
- Server: Node.js runtime environment

PROJECT STRUCTURE
- `/routes/` → Contains Express route handlers.  
- `/controllers/` → Contains logic for handling requests.  
- `/models/` → Mongoose models for MongoDB collections.  
- `/public/` → Static frontend files (HTML, CSS).  
- `server.js`→ Entry point for the Node.js application.

DEPLOYMENT GUIDE  
Prerequisites  
- Node.js and npm installed  
- MongoDB database (local or cloud like MongoDB Atlas)  
- Code editor (e.g., VS Code)

Setup Steps  
1. Clone the Repository  
   - `git clone https://github.com/ujjwal-kriti/notes_app.git`  
   - Navigate to the project folder.

2. Install Dependencies
   - Run `npm install` to install all required packages.

3. Configure Environment Variables
   - Create a `.env` file and add MongoDB connection URI and other secrets.

4. Start the Server  
   - Run `npm run dev` or `node server.js`.  
   - Open `http://localhost:3000` in your browser.

5. Login and Use
   - Use test credentials to log in and explore the app.

 FUTURE ENHANCEMENTS
- Implement file versioning and history.  
- Add drag-and-drop upload support.  
- Integrate cloud storage services (e.g., Google Drive).  
- Add notifications for shared files or expired access.

 AUTHORS
Akhil - 231FA04087, Ramya - 231FA04258, Bhargavi - 231FA04336, Ujjwal Kriti - 231FA04G25  
B.Tech CSE, VFSTR University

