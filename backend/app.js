import express from 'express';
import cors from 'cors';


const contacts = [
	{name: 'ndounga frank', 'email': 'frankndounga@yahoo.fr', tel: 696250624, _id: 1},
	{name: 'yopa armel', 'email': 'yopaarmel@yahoo.fr', tel: 696070950, _id: 2},
	{name: 'dantse raissa', 'email': 'raissadantse@yahoo.fr', tel: 69826541, _id: 3},
]

const app = express();

app.use(cors());

app.get('/api/v1/contacts', (req, res) => {
	res.status(200).json({message: 'success', contacts: contacts})
})

export default app;
