# react-redux-comments

# deployment:
create a new application on the heroku dashboard<br>
add mLab as an addon<br>
get mLab config vars on local:<br>
`heroku config:get MONGODB_URI`
add your heroku repo on local machine:<br>
`heroku git:remote -a yournewappname`
add APP_SECRET with:<br>
`heroku config:set APP_SECRET=yoursupersecret`

finally run:
`npm run deploy`