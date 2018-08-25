const jwt = require('jwt-simple');
const config = require('../config');
const User = require('../models/user');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
}

exports.signin = function(req, res, next) {
    //User has already had email and password authed
    //We just need to give them a token
    res.send({ token: tokenForUser(req.user) })
}

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password) {
        return res.status(422).send({ error: 'You must provide email and password' })
    }
    //See if user with a given email exists
    User.findOne({ email: email }, function(err, existingUser) {
        if(err) return next(err);

        //If yes, return error
        if(existingUser) return res.status(422).send({ error: 'Email is in use' });
        
        const user = new User({
            email,
            password
        });

        user.save(function(err) {
            if(err) return next(err);
            //If no, respond to request indicating user was created
            res.json({ token: tokenForUser(user) });
        });

    });
    
}