import http from 'http';
require('dotenv').config()
import app from './app';
const port = process.env.PORT || 7000;
import { connect, getPrimaryKey, getDB } from './db/db';


app.set('port', port);
const server = http.createServer(app)

connect((err) => {
	if(err) {
		console.log('Unable to connect to database')
		process.exit(1)
	} else {
		server.listen(port, (err) => {
			if(err) console.log(err);
			console.log('Connected to database');
			console.log('running on http://localhost:' + port);
		})
	}
})



