const passportService = require('./services/passport');
const Authentication = require('./controllers/authentication');
const passport = require('passport');
const path = require('path');

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

module.exports = function(app) {
    app.get('/api', requireAuth, function(req, res, next) {
        res.send( { hi: 'there' });
    });
    app.post('/api/signin', requireSignin, Authentication.signin)
    app.post('/api/signup', Authentication.signup)
    // Handles all routes so you do not get a not found error
    app.get('*', function (request, response){
        response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
    })
}