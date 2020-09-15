const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const mongoose = require('mongoose')
const keys = require('../config/credentials')

// mongoose.model: 1 argument = trying to fetch from mongoose
// 2 arguments = trying to load into mongoose
const User = mongoose.model('users')

passport.serializeUser((user, done) => {
  // user id identified by mongo, not google id
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user)
  })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // Call done() callback to tell passport that we have the user and
      //  it should resume authentication process
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          // if we already have a record with the given id
          // null identify error
          done(null, existingUser)
        } else {
          // we don't have a record with this id, make a new record
          new User({ googleId: profile.id })
            .save()
            .then((user) => done(null, user))
        }
      })
    }
  )
)
