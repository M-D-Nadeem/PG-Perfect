
# Project Title

PG-Perfect: PG management system 

PG-Perfect offers a user-friendly interface designed for both PG owners and tenants searching for accommodations. PG owners can efficiently manage their properties, monitor progress, view feedback, and address complaints via the admin dashboard. The platform automatically lists nearby PGs based on ratings, allowing users to connect directly with owners. Tenants can also submit complaints, pay rent, and make deposits easily through their personalized dashboard.




## Features
*Owner Features*
- **Login and Signup Authentication**: Email and password validation with encrypted password storage for secure authentication.
- **Add New Buildings**: Owners can provide the property name, category (Boys, Girls, Co-ed), list of facilities, property photos, description, starting price, and address to add new buildings.
- **Add Tenants**: Select the relevant property and input tenant details such as name, email, phone number, room sharing type, room number, rent amount, and deposit amount. Upon successful addition, an email is sent to the tenant with login credentials for their dashboard.
- **View Building Data and Manage Feedback**: Owners can view comprehensive data for all buildings, including complaints, feedback, and ratings. They can respond to or resolve complaints within a week, or the system will automatically reduce the building's rating.
- **Dynamic Owner Dashboard**: The dashboard is responsive and provides insights into overall revenue and individual building revenue. It also displays complaints in an easy-to-analyze graphical format.

*User Features*

- **Search for PGs**: Tenants can search for accommodations based on their location, with nearby PGs displayed in order of ratings.
- **Contact PG Owners**: Send an email to the PG owner containing the tenant’s name, phone number, and the selected building, so the owner can reach out.
- **Receive Login Credentials**: Once the tenant is added to a building and assigned a room, they will receive an email with login credentials (ID and password) to access their tenant dashboard.
- **Tenant Dashboard**: Through the dashboard, tenants can lodge complaints, pay rent, and deposit money directly from the website.
- **Admin Fee**: 10% of the tenant’s deposit amount will be transferred to the admin account as a platform fee, charged to the owner.
- **Submit Feedback**: User can provide feedback on the PG and its services



## Tech Stack

**Frontend:** 

Tailwind CSS & DaisyUI: For modern, responsive, and accessible design.

React: For building the dynamic user interface.

Redux: For state management.

Axios: For making HTTP requests.

**Backend:** 

Node and Express.js: For backend development.

MongoDB: For database management.

bcrypt: For password hashing.

Cloudinary: For image and video storage.

Razorpay: For payment integration.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- Port in which backend will be running
`PORT`

- MongoDB connection string
`MONGO_URI`

- JWT secret key for authentication
`JWT_SECRET_CODE`

- Cors origin
`CLIENT_URL`

- Cloudinary credentials for image and video storage
`CLOUD_NAME`
`API_KEY`
`API_SECRET`

- Email service credentials for sending emails
`GMAIL_APP_ID`
`GMAIL_APP_PASSWORD`

- Razorpay credentials for payment integration
`RAZORPAY_KEY_ID`
`RAZORPAY_SECRET_KEY`
`RAZORPAY_PLAN_ID`

- For creating axios instance to connect frontend with backend
`VITE_BASE_URL`


## Installation


Follow these steps to set up the project on your local machine:

Prerequisites
- Ensure you have react with vite, Node.js and npm installed on your system.
- Make sure you have MongoDB installed and running.

Clone the Repository

```bash
git clone https://github.com/M-D-Nadeem/PG-Perfect.git
```

Install Dependencies

- Install the backend dependencies

```bash
  cd backend
  npm install 
  cd..
```
- Install the frontend dependencies
    
```bash
  cd frontend
  cd perfect-pg-front
  npm install 
  cd..
```
## Deployment

To run this project

Start the backend server:

```bash
  cd backend
  npm run start
```

Start the frontend development server:

```bash
  cd frontend
  cd perfect-pg-front
  npm run start
```


## Authors

- [@MD Nadeem](https://github.com/M-D-Nadeem)


## Demo


https://youtu.be/SQVBaJzQIPg
