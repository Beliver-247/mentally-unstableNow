const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.send('API is running');
});

// API routes
app.use('/sollara/v1.0', userRoutes);  // Mounting under correct path

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
