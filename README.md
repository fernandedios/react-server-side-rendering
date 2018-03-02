node-learning-marketplace
=========

> NodeJs Express, ReactJs, MongoDB

A reactjs server-side rendering proof of concept

Getting Started
------------

Checkout this repo, install dependencies, configure, then start both the api and server.

```bash
$ git clone git@github.com:fernandedios/react-server-side-rendering.git
$ cd react-server-side-rendering
$ npm install
$ cd api
$ npm install

-- configure app

$ npm start
$ cd ..
$ npm start
```

Configuration
------------

This web application requires the following as starting point:
- Local or Online hosted MongoDB
- [Google OAuth]

### Local Development Variables
```js
module.exports = {
  googleClientID: 'your_google_client_id',
  googleClientSecret: 'your_google_client_secret',
  mongoURI: 'mongodb://your_mongodb_development_url',
  cookieKey: 'your_cookie_key'
};
```
cookieKey is a random string used for encryption.
Save as 'dev.js' and place it inside the api/config folder.

### Production Environment Variables
You will need to add the following environment variables to your production host

```js
GOOGLE_CLIENT_ID,
GOOGLE_CLIENT_SECRET,
MONGO_URI,
COOKIE_KEY
```

COOKIE_KEY is a random string used for encryption.

Thanks
------

react-server-side-rendering* © 2018, Fernan de Dios. Released under the [MIT License].<br>

> [fernandedios.com](http://fernandedios.com) &nbsp;&middot;&nbsp;
> GitHub [@fernandedios](https://github.com/fernandedios) &nbsp;&middot;&nbsp;
> Twitter [@fernan_de_dios](https://twitter.com/fernan_de_dios)

[MIT License]: http://mit-license.org/
[Google OAuth]: https://console.developers.google.com/apis/library
