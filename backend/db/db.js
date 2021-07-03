import { MongoClient, ObjectID } from 'mongodb';
require('dotenv').config()

const dbname = 'contactapp';
const dbOptions = {useUnifiedTopology: true, useNewUrlParser: true};
const connectionString = process.env.CONNECTIONSTRING;

const state = {
	db: null
}

export const connect = (cb) => {
	if(state.db) {
		cb()
	} else {
		MongoClient.connect(connectionString, dbOptions, (err, client) => {
			if(err) {
				cb(err)
			} else {
				state.db = client.db()
				cb()
			}
		})
	}
}

export const getPrimaryKey = (_id) => {
	return ObjectID(_id)
}

export const getDB = () => {
	return state.db;
}
























