heroku setup:

1. install heroku `brew tap heroku/brew && brew install heroku`
2. loggin heroku `heroku login`
3. create `heroku create`
4. add remote git for heroku `git remote add <heroku_git_url>`
5. push in order to deploy `git push heroku master`
6. open heroku url `heroku open`

concurrently: module that allows terminal to run 2 servers at the same time (review package.json)

Passport strategy: a module that helps authenticate with one very specific provider.

\*\* Create a credentials.js file in config that store google client ID and google client secret key

-- TODO: Create more auth strategy (as possible)

Stacks:

- Express.js
- React.js
- Redux
- Atlas Mongodb
- Google OAuth
- Sendgrid
- Ngrok (used for SendGrid make post webhooks call)
