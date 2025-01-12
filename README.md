# Chat and Video Application

## Project Overview
This project implements a comprehensive real-time communication platform with chat and video calling capabilities. The application features a robust client-server architecture with:

Client-side:
- React-based frontend with Redux state management
- Organized component structure for UI elements
- Admin dashboard for system management
- Responsive layouts for chat and video interfaces

Server-side:
- Node.js backend with Express
- MongoDB database integration
- Socket.IO for real-time communication
- RESTful API endpoints for data operations
- Admin controllers for system administration

The system supports user authentication, real-time messaging, video calls, and group chat functionality with comprehensive error handling and input validation.## Project Image

![Chat and Video Application Overview](./assets/project-overview.png)


## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Database](#database)
3. [Project Structure Details](#project-structure-details)
    - [Client Structure](#client-structure)
    - [Server Structure](#server-structure)
4. [Features](#features)
    - [User Features](#user-features)
    - [Admin Features](#admin-features)
    - [Chat Features](#chat-features)
    - [Video Features](#video-features)
5. [Optimization](#optimization)
    - [Frontend Optimization](#frontend-optimization)
    - [Backend Optimization](#backend-optimization)
    - [Network Optimization](#network-optimization)
6. [API Endpoints](#api-endpoints)
    - [Authentication](#authentication)
    - [Users](#users)
    - [Chat](#chat)
    - [Messages](#messages)
    - [Groups](#groups)
    - [Admin](#admin)
7. [Installation](#installation)
8. [Contributing](#contributing)
9. [Demo](#demo)
10. [Project Image](#project-image)

## Technologies Used

- Frontend:
    - **React** - For building the user interface.
    - **Material-UI (MUI)** - For component library and styling.
    - **Redux** - For state management.
    - **React-Router** - For client-side routing.
    - **Axios** - For API calls.
    - **React-Hot-Toast** - For toast notifications.
    - **React Hook Form** - For form management and validation.
    - **MUI Icons** - For Material Design icons.
    - **WebRTC** - Real-time video and audio communication

- Backend:
    - **Node.js** - Server runtime environment
    - **Express.js** - Web application framework
    - **Socket.IO** - Real-time bidirectional communication
    - **JWT** - Authentication and authorization
    - **Bcrypt** - Password hashing
    - **Cors** - Cross-origin resource sharing
    - **Dotenv** - Environment variable management
    - **Multer** - File upload handling
    
- Database:
    - **Mongoose** - MongoDB object modeling
    - **Cloudinary** - Cloud storage for media files

## Project Structure Details

### Client Structure
```

├── src
│   ├── components
│   │   ├── layouts          # Layout components (e.g., AppLayout)
│   │   ├── styles           # Styled components (e.g., VisuallyHiddenInput)
│   │   └── ...              # Other UI components (e.g., AvatarCard, ButtonGroup)
│   ├── pages
│   │   ├── Admin # Admin functionality for managing
│   │   │     ├── AdminLogin.jsx                # Admin Login
│   │   │     ├── ChatMangement.jsx             # Groups and Chats (Manage
│   │   │     ├── UserManagement.jsx            # User (Manage
│   │   │     ├── MessageMangement.jsx          # Message (Manage
│   │   │     └── Dashboard.jsx                 # DashBoard (Manage  
│   │   ├── Home.jsx         # Home page (friend selection)
│   │   ├── Login.jsx        # Login/Register page
│   │   ├── Chat.jsx         # Chat with friends
│   │   ├── Group.jsx        # Managing Groups
│   │   ├── NotFound.jsx     # 404 error page
│   ├── redux
│   │   ├── reducers
│   │   │   └── slice
│   │   ├── actions
│   │   └── store.js
│   ├── services
│   │   ├── api.js           # API endpoints
│   │   └── operations
│   ├── utils                # Utility functions (validators, helpers)
│   ├── App.js               # Main entry point
│   └── index.js             # ReactDOM render
├── public
├── package.json
└── .env
```


### Server Structure
```
├── src
│   ├── controllers
│   │   ├── admin            # Admin-related controllers
│   │   │   ├── authController.js
│   │   │   ├── userController.js
│   │   │   ├── chatController.js
│   │   │   └── messageController.js
│   │   ├── auth.js         # User authentication
│   │   ├── chat.js         # Chat operations
│   │   ├── group.js        # Group management
│   │   └── video.js        # Video call handling
│   ├── middleware
│   │   ├── auth.js         # Authentication middleware
│   │   ├── error.js        # Error handling
│   │   └── validation.js   # Input validation
│   ├── models
│   │   ├── User.js         # User model
│   │   ├── Chat.js         # Chat model
│   │   ├── Group.js        # Group model
│   │   └── Message.js      # Message model
│   ├── routes
│   │   ├── admin          # Admin routes
│   │   ├── auth.js        # Authentication routes
│   │   ├── chat.js        # Chat routes
│   │   ├── group.js       # Group routes
│   │   └── video.js       # Video routes
│   ├── config
│   │   ├── db.js          # Database configuration
│   │   └── socket.js      # Socket.io setup
│   ├── utils              # Helper functions
│   │   ├── validators.js
│   │   └── helpers.js
│   └── app.js            # Main application file
├── tests                 # Test files
├── package.json
└── .env
```
## Features

### User Features
- User authentication (Login & Register)
- Profile management (Update Avatar, Username, Bio)
- Chat interface with friend selection
- Error handling and validation
- Loading states for better UX

### Admin Features
- **Group Management**: Admin can manage groups, delete groups, and add/remove members.
- **User Management**: Admin can view and manage user profiles.
- **Admin Dashboard**: Admin can view all users, groups, and activity.

### Chat Features
- **Real-time Updates**: Instant message delivery with Socket.IO integration
- **Read Receipts**: Message seen status with timestamp tracking
- **Online Status**: Real-time user presence indication with last seen
- **Typing Indicators**: Shows when users are typing with debounced events
- **Message History**: Loads previous messages with infinite scroll
- **File Sharing**: 
    - Support for images, videos, and documents
    - File size limits and type validation
    - Preview functionality
    - Progress tracking for uploads
- **Emojis**: 
    - Rich text with Unicode emoji support
    - Custom emoji picker
    - Reaction system for messages

### Video Features
- **Real-time Video Calls**: Implements WebRTC for peer-to-peer video communication
- **Screen Sharing**: Allows users to share their screens during calls
- **Video Quality Control**: Adjusts video quality based on network conditions
- **ICE/STUN/TURN**: Uses ICE framework with STUN/TURN servers for NAT traversal
- **Media Stream Management**: Handles video/audio stream capture and transmission
- **Call Controls**: Provides mute, camera toggle, and call end functionality
## Optimization

### Frontend Optimization
The frontend implementation focuses on performance through lazy loading of components and images, virtual scrolling for message lists, and strategic code splitting. Memory management is handled via useEffect cleanup, while state updates are optimized using Redux Toolkit. Search operations use debouncing, and WebSocket events are handled efficiently to prevent unnecessary re-renders.

### Backend Optimization
Server-side optimizations include MongoDB indexing for faster queries, connection pooling for database efficiency, and strategic caching of frequently accessed data. The system implements rate limiting, robust error handling, and optimized file processing. Load balancing ensures even distribution of traffic across servers.

### Network Optimization
Network performance is enhanced through effective WebSocket connection management, compression of API responses, and efficient data serialization. Static assets are served through CDN, and requests are batched where possible to reduce network load. This ensures smooth real-time communication while minimizing latency.### API Endpoints

#### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile

#### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get specific user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user
- `GET /api/users/search` - Search users

#### Chat
- `GET /api/chats` - Get user chats
- `POST /api/chats` - Create new chat
- `GET /api/chats/:id` - Get chat by ID
- `PUT /api/chats/:id` - Update chat
- `DELETE /api/chats/:id` - Delete chat

#### Messages
- `GET /api/messages/:chatId` - Get chat messages
- `POST /api/messages` - Send message
- `PUT /api/messages/:id` - Edit message
- `DELETE /api/messages/:id` - Delete message

#### Groups
- `POST /api/groups` - Create group
- `GET /api/groups` - Get user groups
- `PUT /api/groups/:id` - Update group
- `DELETE /api/groups/:id` - Delete group
- `POST /api/groups/:id/members` - Add group member
- `DELETE /api/groups/:id/members/:userId` - Remove member


#### Admin
- `POST /api/admin/login` - Admin authentication
- `GET /api/admin/dashboard` - Get dashboard statistics
- `GET /api/admin/users` - List all users
- `PUT /api/admin/users/:id` - Modify user status
- `GET /api/admin/chats` - View all chats
- `DELETE /api/admin/chats/:id` - Remove chat
- `GET /api/admin/groups` - View all groups
- `PUT /api/admin/groups/:id` - Modify group settings
- `GET /api/admin/messages` - View message logs
- `DELETE /api/admin/messages/:id` - Remove messages
## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/iakash22/Chat-And-Video-Calling.git
    ```

2. Navigate to the project directory:

    ```sh
    cd Chat-And-Video-Calling
    ```

3. Install the dependencies for both the client and server:

    ```sh
    npm install
    cd client
    npm install
    cd ..
    cd server
    npm install
    ```

4. Create a `.env` file in the root directory and add your environment variables:

    ```env
    DATABASE_URL=your_database_url
    PORT=your_port
    ```

5. Start the development server:

    ```sh
    npm run dev
    ```

6. Start the backend server:

    ```sh
    node index.js
    ```
## Contributing

Contributions are welcome! 

Please feel free to submit a Pull Request or open an Issue if you have any suggestions or improvements.

    1. Fork the repository
    2. Create a new branch (git checkout -b feature-xyz)
    3. Make changes and commit (git commit -am 'Add feature xyz')
    4. Push to the branch (git push origin feature-xyz)
    5. Create a new pull request
## Additional Notes

- Make sure you have Node.js and npm installed on your machine.
- The application uses a RESTful API backend, so ensure the backend server is running and accessible for API calls.
- You can check for available API documentation in the backend repository (if available).
## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Demo

Live Demo https://demo.com/

## Project Image
![Chat and Video Application Overview](./assets/project-overview.png)

## Table of Content
1. [Project Image](#project-image)
2. [Project Overview](#project-overview)
3. [Features](#features)
    - [User Features](#user-features)
    - [Admin Features](#admin-features)
    - [Chat Features](#chat-features)
    - [Video Features](#video-features)
4. [API Endpoints](#api-endpoints)
    - [Authentication](#authentication)
    - [Users](#users)
    - [Chat](#chat)
    - [Messages](#messages)
    - [Groups](#groups)
    - [Admin](#admin)
5. [Technologies Used](#technologies-used)
6. [Optimization](#optimization)
    - [Frontend Optimization](#frontend-optimization)
    - [Backend Optimization](#backend-optimization)
    - [Network Optimization](#network-optimization)
7. [Installation](#installation)
8. [Contributing](#contributing)
9. [License](#license)
10. [Project Structure Details](#project-structure-details)
    - [Client Structure](#client-structure)
    - [Server Structure](#server-structure)


## Technologies Used
- Frontend:
    - **React** - For building the user interface.
    - **Material-UI (MUI)** - For component library and styling.
    - **Redux** - For state management.
    - **React-Router** - For client-side routing.
    - **Axios** - For API calls.
    - **React-Hot-Toast** - For toast notifications.
    - **React Hook Form** - For form management and validation.
    - **MUI Icons** - For Material Design icons.
    - **WebRTC** - Real-time video and audio communication

- Backend:
    - **Node.js** - Server runtime environment
    - **Express.js** - Web application framework
    - **Socket.IO** - Real-time bidirectional communication
    - **JWT** - Authentication and authorization
    - **Bcrypt** - Password hashing
    - **Cors** - Cross-origin resource sharing
    - **Dotenv** - Environment variable management
    - **Multer** - File upload handling


- Database:
    - **Mongoose** - MongoDB object modeling
    - **Cloudinary** - Cloud storage for media files


## Features

### User Features
- User authentication (Login & Register)
- Profile management (Update Avatar, Username, Bio)
- Chat interface with friend selection
- Error handling and validation
- Loading states for better UX

### Admin Features
- **Group Management**: Admin can manage groups, delete groups, and add/remove members.
- **User Management**: Admin can view and manage user profiles.
- **Admin Dashboard**: Admin can view all users, groups, and activity.

### Chat Features
- **Real-time Updates**: Instant message delivery with Socket.IO integration
- **Read Receipts**: Message seen status with timestamp tracking
- **Online Status**: Real-time user presence indication with last seen
- **Typing Indicators**: Shows when users are typing with debounced events
- **Message History**: Loads previous messages with infinite scroll
- **File Sharing**: 
    - Support for images, videos, and documents
    - File size limits and type validation
    - Preview functionality
    - Progress tracking for uploads
- **Emojis**: 
    - Rich text with Unicode emoji support
    - Custom emoji picker
    - Reaction system for messages

### Video Features
- **Real-time Video Calls**: Implements WebRTC for peer-to-peer video communication
- **Screen Sharing**: Allows users to share their screens during calls
- **Video Quality Control**: Adjusts video quality based on network conditions
- **ICE/STUN/TURN**: Uses ICE framework with STUN/TURN servers for NAT traversal
- **Media Stream Management**: Handles video/audio stream capture and transmission
- **Call Controls**: Provides mute, camera toggle, and call end functionality

    ## Optimization

    ### Frontend Optimization
    The frontend implementation focuses on performance through lazy loading of components and images, virtual scrolling for message lists, and strategic code splitting. Memory management is handled via useEffect cleanup, while state updates are optimized using Redux Toolkit. Search operations use debouncing, and WebSocket events are handled efficiently to prevent unnecessary re-renders.

    ### Backend Optimization
    Server-side optimizations include MongoDB indexing for faster queries, connection pooling for database efficiency, and strategic caching of frequently accessed data. The system implements rate limiting, robust error handling, and optimized file processing. Load balancing ensures even distribution of traffic across servers.

    ### Network Optimization
    Network performance is enhanced through effective WebSocket connection management, compression of API responses, and efficient data serialization. Static assets are served through CDN, and requests are batched where possible to reduce network load. This ensures smooth real-time communication while minimizing latency.

### API Endpoints

#### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile

#### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get specific user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user
- `GET /api/users/search` - Search users

#### Chat
- `GET /api/chats` - Get user chats
- `POST /api/chats` - Create new chat
- `GET /api/chats/:id` - Get chat by ID
- `PUT /api/chats/:id` - Update chat
- `DELETE /api/chats/:id` - Delete chat

#### Messages
- `GET /api/messages/:chatId` - Get chat messages
- `POST /api/messages` - Send message
- `PUT /api/messages/:id` - Edit message
- `DELETE /api/messages/:id` - Delete message

#### Groups
- `POST /api/groups` - Create group
- `GET /api/groups` - Get user groups
- `PUT /api/groups/:id` - Update group
- `DELETE /api/groups/:id` - Delete group
- `POST /api/groups/:id/members` - Add group member
- `DELETE /api/groups/:id/members/:userId` - Remove member


#### Admin
- `POST /api/admin/login` - Admin authentication
- `GET /api/admin/dashboard` - Get dashboard statistics
- `GET /api/admin/users` - List all users
- `PUT /api/admin/users/:id` - Modify user status
- `GET /api/admin/chats` - View all chats
- `DELETE /api/admin/chats/:id` - Remove chat
- `GET /api/admin/groups` - View all groups
- `PUT /api/admin/groups/:id` - Modify group settings
- `GET /api/admin/messages` - View message logs
- `DELETE /api/admin/messages/:id` - Remove messages


## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Install dependencies:
```bash
# Client
cd client
npm install

# Server
cd server
npm install
```

3. Configure environment variables:
- Create `.env` file in server directory
- Create `.env` file in client directory

4. Start the application:
```bash
# Server
npm run start

# Client
npm run dev
```

## Contributing
[Add contribution guidelines]

## License
[Add your license information]

## Project Structure Details

### Client Structure
```

├── src
│   ├── components
│   │   ├── layouts          # Layout components (e.g., AppLayout)
│   │   ├── styles           # Styled components (e.g., VisuallyHiddenInput)
│   │   └── ...              # Other UI components (e.g., AvatarCard, ButtonGroup)
│   ├── pages
│   │   ├── Admin # Admin functionality for managing
│   │   │     ├── AdminLogin.jsx                # Admin Login
│   │   │     ├── ChatMangement.jsx             # Groups and Chats (Manage
│   │   │     ├── UserManagement.jsx            # User (Manage
│   │   │     ├── MessageMangement.jsx          # Message (Manage
│   │   │     └── Dashboard.jsx                 # DashBoard (Manage  
│   │   ├── Home.jsx         # Home page (friend selection)
│   │   ├── Login.jsx        # Login/Register page
│   │   ├── Chat.jsx         # Chat with friends
│   │   ├── Group.jsx        # Managing Groups
│   │   ├── NotFound.jsx     # 404 error page
│   ├── redux
│   │   ├── reducers
│   │   │   └── slice
│   │   ├── actions
│   │   └── store.js
│   ├── services
│   │   ├── api.js           # API endpoints
│   │   └── operations
│   ├── utils                # Utility functions (validators, helpers)
│   ├── App.js               # Main entry point
│   └── index.js             # ReactDOM render
├── public
├── package.json
└── .env
```


### Server Structure
```
├── src
│   ├── controllers
│   │   ├── admin            # Admin-related controllers
│   │   │   ├── authController.js
│   │   │   ├── userController.js
│   │   │   ├── chatController.js
│   │   │   └── messageController.js
│   │   ├── auth.js         # User authentication
│   │   ├── chat.js         # Chat operations
│   │   ├── group.js        # Group management
│   │   └── video.js        # Video call handling
│   ├── middleware
│   │   ├── auth.js         # Authentication middleware
│   │   ├── error.js        # Error handling
│   │   └── validation.js   # Input validation
│   ├── models
│   │   ├── User.js         # User model
│   │   ├── Chat.js         # Chat model
│   │   ├── Group.js        # Group model
│   │   └── Message.js      # Message model
│   ├── routes
│   │   ├── admin          # Admin routes
│   │   ├── auth.js        # Authentication routes
│   │   ├── chat.js        # Chat routes
│   │   ├── group.js       # Group routes
│   │   └── video.js       # Video routes
│   ├── config
│   │   ├── db.js          # Database configuration
│   │   └── socket.js      # Socket.io setup
│   ├── utils              # Helper functions
│   │   ├── validators.js
│   │   └── helpers.js
│   └── app.js            # Main application file
├── tests                 # Test files
├── package.json
└── .env
```
