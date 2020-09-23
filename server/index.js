const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const keys = require('./config/credentials')
require('./models/User')
require('./models/Survey')
require('./services/passport')

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })

const app = express()

// use body parser
app.use(bodyParser.json())

// tell express that it needs to make use of cookie inside our app
app.use(
  cookieSession({
    // How long can cookie remains in browser
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey],
  })
)

// tell passport to make use of cookie to handle authentication
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)
require('./routes/surveyRoutes')(app)

// Setup production
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like main.js or main.css files
  app.use(express.static('client/build'))

  // Express will serve up index.html if it doesnt recognise the route
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT)
