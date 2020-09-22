const keys = require('../config/credentials')
const stripe = require('stripe')(keys.stripeSecretKey)
const requireLogin = require('../middlewares/requireLogin')

module.exports = (app) => {
  // requireLogin is called whenever there's a request come in
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'aud',
      description: 'A$5.00 for 5 credits',
      source: req.body.id,
    })
    req.user.credits += 5
    const user = await req.user.save()

    res.send(user)
  })
}
