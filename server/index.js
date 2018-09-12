const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

class Server {
    constructor() {
        this.port = process.env.PORT || 3090;
        this.server = http.createServer(app);
        this.initDb();
        this.initMiddleware();
        this.run();
    }
    initDb() {
        mongoose.connect(
            'mongodb://bloom-admin:9e2458c4d59a762f080c366f9bbf7cdc@dokku-mongo-bloom-admin:27017/bloom-admin', 
            { useNewUrlParser: true }
        );
    }
    initMiddleware() {
        app.use(cors());
        app.use(bodyParser.json({ type: '*/*'}));
        app.use(express.static(path.resolve(__dirname, '..', '..', 'public')))
        router(app);
        if (process.env.NODE_ENV === 'production') 
            app.use(express.static('client/build'));
        if (process.env.NODE_ENV === 'test') 
            app.use(morgan(() => null));
        else 
            app.use(morgan('API Request (port ' + this.port + '): :method :url :status :response-time ms - :res[content-length]'));   
    }
    run() {
        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`)
        })
    }
}

new Server()