# react-redux-comments

# deployment:
create a new application on the heroku dashboard
add mLab as an addon
get mLab config vars on local:
heroku config:get MONGODB_URI
add your heroku repo on local machine:
heroku git:remote -a yournewappname
add APP_SECRET with:
heroku config:set APP_SECRET=yoursupersecret

finally run:
npm run deploy