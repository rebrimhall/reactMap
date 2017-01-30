
import express from 'express';
import HBS from 'express-handlebars';
import session from 'express-session';
import FS from 'fs';
import PATH from 'path';
import nconf from 'nconf';
import axios from 'axios';
import React from 'react'
import {renderToString} from 'react-dom/server';
import {match, RoutingContext} from 'react-router';
import morgan from 'morgan';
import compression from 'compression';
import bodyParser from 'body-parser'
//React Components
import Main from  '../components/index/app';


//initialize express and express router
const app = express();
const router = express.Router();


//config manager//
nconf.argv().env().file({file: PATH.resolve(__dirname, 'default.json')}).defaults({ENV: 'development'});


//PATHS
const ROOT = '../';
const templateRoot		= PATH.resolve(__dirname, ROOT, nconf.get('templateRoot'));
const templateLayouts	= PATH.resolve(__dirname, ROOT, nconf.get('templateLayouts'));
const assetsPath		= PATH.resolve(__dirname, ROOT, nconf.get('staticFolders')[0]);


//Express setup and handlebars setup
app
	.all('*', (req, res, next) => {
		if(!req.get('Origin')){return next()};
		next();
	})
	.use('/assets/', express.static(assetsPath))
	.set('x-powered-by', false)
	.set('views', templateRoot)
	.engine('hbs', HBS({
	    extname:'hbs',
	    defaultLayout:'index.hbs',
	    layoutsDir: templateLayouts
	}))
	.enable('trust proxy')
	.set('view engine', 'hbs')
	.use(compression({threshold: nconf.get('compressionThreshold')}))
	.use((req, res, next) => {
		res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
		res.header('Expires', '-1');
		res.header('Pragma', 'no-cache');
		next()
;	})
	//.use(cookieParser())
	.use(session({
	    secret: 'whamBamThankYouMam',
	    cookie: {maxAge: 90000 /*20 min*/ },
	    proxy: true,
	    resave: true,
	    saveUninitialized: true
	}))
	.use(morgan('dev'))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: true }))
;


//app

app
	.use( (req, res, next) => {

		if (req.session){
			res.locals.session = req.session
		};
		next();
	})


	.get('/', (req, res) => {

			var html = renderToString(<Main/>);

	    	res.render('index', {
	            html: html
	        });

	})

app.use( (req,res) => {
	res.status(200).send("Sorry can't find that!");
});

app.listen(nconf.get('port'), () => {
    console.log('Listening on http://' + nconf.get('host') + ':' + nconf.get('port'));
});
