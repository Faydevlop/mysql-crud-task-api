# 📝 MySQL CRUD Task API

A simple RESTful Task Management API built using **Node.js**, **Express**, and **MySQL**. This project helps beginners understand how CRUD operations work with a relational database.

---

## 🚀 Features

- ✅ Create a new task
- ✅ Get all tasks
- ✅ Update an existing task
- ✅ Delete a task

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MySQL
- dotenv

---

## 📁 Project Structure

mysql-crud-task-api/ 
              ├── controllers/ 
              │ └── task.controller.js 
              ├── routes/ 
              │ └── task.routes.js 
              ├── models/ 
              │ └── task.model.js 
              ├── .env 
              ├── app.js 
              ├── package.json 
              └── README.md


---

## ⚙️ Setup Instructions


```
1. Clone the repository

git clone https://github.com/your-username/mysql-crud-task-api.git

cd mysql-crud-task-api

2. Install dependencies

npm install

3. Configure environment variables

Create a .env file in the root folder and add:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=taskdb
PORT=3000

4. Set up the database

Make sure MySQL is running, then create the database manually:

CREATE DATABASE taskdb;

5. Start the server

node app.js

Server will run on: http://localhost:3000

📬 API Endpoints

Method	Endpoint	Description
POST	/api/tasks	Create a new task
GET	/api/tasks	Get all tasks
PUT	/api/tasks/:id	Update a task
DELETE	/api/tasks/:id	Delete a task

🧪 Testing with Thunder Client / Postman

URL: http://localhost:3000/api/tasks

Method: POST

Headers: Content-Type: application/json

Body (JSON):

{
  "title": "Sample Task",
  "description": "This is a sample task"
}
You can also test GET, PUT, DELETE endpoints similarly.

👨‍💻 Author
GitHub: FayDevlop

