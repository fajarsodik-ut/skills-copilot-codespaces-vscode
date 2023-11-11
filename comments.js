// Create web server using express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// Create web server using express
const app = express();
// Add middleware to parse JSON
app.use(bodyParser.json());
// Add middleware to allow other domains to access our resources
app.use(cors());
// Add middleware for logging
app.use(morgan('combined'));
// Add a route handler
app.get('/status', (req, res) => {
    res.send({
        message: 'hello world!'
    });
});
// Start the server
app.listen(process.env.PORT || 8081);
