const keys = require('../config/credentials')
const stripe = require('stripe')(keys.stripeSecretKey)

module.exports = (app) => {
  app.post('/api/stripe', async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'aud',
      description: 'A$5.00 for 5 credits',
      source: req.body.id,
    })
    console.log(charge)
  })
}
