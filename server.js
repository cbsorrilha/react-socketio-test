const express = require('express')

const app = express()

// Webpack Requirements
const webpack = require('webpack')
const config = require('./webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.set('view engine', 'ejs')

app.use(express.static('build'));

app.get('/', (req, res) => {
    res.render('index')
})


app.listen(8000)
