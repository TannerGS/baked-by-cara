const express = require('express');
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const routes = require('./routes/routes')
const cors = require('cors');

// Config
dotenv.config({ path: './config/.env' })

connectDB()

const app = express();

app.use(cors())
app.use(express.json()) 
app.use('/api', routes)

PORT = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Baked by Cara Serving running!'))

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));