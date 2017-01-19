const express = require('express')

const app = express()

var http = require('http').Server(app);

var io = require('socket.io')(http);

// Webpack Requirements
const webpack = require('webpack')
const config = require('./webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.set('view engine', 'ejs')

app.use(express.static('build'))

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('user logged', () => {
        console.log('user logged')
        socket.emit('user logged', "User connected");
    })
});

app.get('/', (req, res) => {
    res.render('index')
})

http.listen(8000, function(){
  console.log('listening on *:8000');
});
