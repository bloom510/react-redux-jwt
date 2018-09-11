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

mongoose.connect(
    'mongodb://bloom-admin:9e2458c4d59a762f080c366f9bbf7cdc@dokku-mongo-bloom-admin:27017/bloom-admin', 
    { useNewUrlParser: true });
// mongodb://bloom-admin:9e2458c4d59a762f080c366f9bbf7cdc@dokku-mongo-bloom-admin:27017/bloom-admin

//App setup
// app.use(morgan('combined'));


app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));
router(app);

//init static folder after router has been initialized
app.use(express.static(path.resolve(__dirname, '..', '..', 'public')))
 // Handles all routes so you do not get a not found error

//after deployment NODE_ENV='production', therefore set express to read from client/build as oppose to public
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
} 

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})


if (process.env.NODE_ENV === 'test') {

    app.use(morgan(() => {
        return null;
    }));

} else {
    app.use(morgan('API Request (port ' + port + '): :method :url :status :response-time ms - :res[content-length]'));
}
