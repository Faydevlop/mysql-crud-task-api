const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


const taskRoute = require('./routes/task.routes')
app.use('/api/tasks',taskRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});