import express from 'express';
import cors from 'cors';
import {getDB, getPrimaryKey} from './db/db';
const collection = 'contactsInfo'


const contacts = [
	{name: 'ndounga frank', 'email': 'frankndounga@yahoo.fr', tel: 696250624, _id: 1},
	{name: 'yopa armel', 'email': 'yopaarmel@yahoo.fr', tel: 696070950, _id: 2},
	{name: 'dantse raissa', 'email': 'raissadantse@yahoo.fr', tel: 69826541, _id: 3},
]

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/api/v1/contacts', (req, res) => {
	getDB().collection(collection).insertOne({
		...req.body
	})
	.then(response => {
		res.status(201).json(response)
		
	})
	.catch(err => res.status(400).json({error: err, message: 'bad request'}))
})


app.get('/api/v1/contacts', (req, res) => {
	getDB().collection(collection).find({}).toArray()
	.then(response => {
		res.status(200).json({message: 'success', contacts: response})
	})
	.catch(err => {
		res.status(500).json({error: err, message: 'internal server error'})
	})
	
})

app.delete('/api/v1/contacts/:id', (req, res) => {
	const contactID = req.params.id;
	getDB().collection(collection).findOneAndDelete({_id: getPrimaryKey(contactID)})
	.then(() => {
		res.status(200).json({message: 'user deleted'})
	})
	.catch(err => {
		res.status(500).json({error: err, message: 'internal server error'})
	})
})

export default app;
