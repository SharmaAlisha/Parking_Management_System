# Parking Management System
Welcome to the Parking Management System! This web application helps manage parking slots, keeps real-time updates of the number of parked vehicles, assigns slots to incoming vehicles, and calculates the total parking cost based on the duration for both two-wheelers and four-wheelers.
# Features
* Real-time updates of the number of parked two-wheelers and four-wheelers.
* Displays total slots available for parking.
* Assigns slots to incoming vehicles.
* Evaluates the total parking cost for two-wheelers and four-wheelers based on parking duration.
# Usage
1. Dashboard: View real-time updates of parked vehicles and available slots.
2. Assign Slot: Add a new vehicle and assign a parking slot.
3. Slot avaibility: keep record of slots availble for parking.
4. Calculate Cost: Check out a vehicle and calculate the parking fee based on the duration.
# Tech Stack
* **Frontend**: React.js with Bootstrap CSS framework
* **Backend**: Node.js and Express.js
* **Database**: MySQL
# Installation #
## Prerequisites ##
* Node.js and npm installed on your local machine
* MySQL installed and running
## Steps ##
1. Clone the repository:
   ```console
   git clone https://github.com/yourusername/parking-management-system.git
   cd parking-management-system
2. Install frontend dependencies:
   ```console
   cd frontend
   npm install
3. Install backend dependencies:
   ```console
   cd ../backend
   npm install
4. Set up the MySQL database:
   * Create a database named ***parking_db***.
   * Run the SQL script located at ***backend/db/schema.sql*** to create the necessary tables.
5. Configure environment variables:
   Create a .env file in the backend directory with the following content:
   ```javascript
   DB_HOST=your_db_host
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=parking_db
6. Start the backend server:
      ```console
      nodemon server.js
7. Start the frontend server:
      ```console
      npm start
8. Access the application:
   Open your web browser and navigate to ***http://localhost:3000***.



  
