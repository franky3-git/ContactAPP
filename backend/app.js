const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('All you have to do is bring your pussy to the table')
})

export default app;