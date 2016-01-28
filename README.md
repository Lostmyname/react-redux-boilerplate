# react-redux-boilerplate

This repository contains a very minimal front-end setup that mirrors how we do
React and JavaScript on <https://www.lostmy.name/>.

It's designed for learning React and Redux outside of the context of the
website, which isn't the easiest place to get started.

## Includes

- Express, to serve the content and mock API calls
- React + Redux
- Browser-sync + hot module reloading, like Eagle
- Chameleon!

## To install and run

Same as eagle except without the silly Rails bits.

```
$ npm install
$ gulp
```

`gulp` starts the server via nodemon, too. If you want to run the server
manually, you'll need the following two commands:

```
$ node index.js # or npm start
$ gulp --no-nodemon --browser-sync-port 3000 # Whatever node outputs
```

Probably easier to just run `gulp`.

## To modify

It's basically the same as Eagle. You probably want to do most of your work in
src/react/client.js and src/scss/styles-react.scss.

## To mock API requests

You can mock your API requests at the bottom of index.js. It's powered by
Express, so it's [pretty simple to use](http://expressjs.com/en/4x/api.html#res.send)

## License

Released under the MIT license.
