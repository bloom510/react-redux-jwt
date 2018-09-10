const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

//DB setup
mongoose.connect( process.env.MONGO_URL || 'mongodb://localhost:auth/auth', { useNewUrlParser: true })

//App setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));
router(app);
//init static folder after router has been initialized
app.use(express.static(path.resolve(__dirname, '..', '..', 'public')))
//after deployment NODE_ENV='production', therefore set express to read from client/build as oppose to public
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
} 
//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})