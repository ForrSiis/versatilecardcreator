const { Client } = require('pg');
const client = new Client({
	connectionString: process.env.DATABASE_URL
});

/*
console.log('process.env.DATABASE_URL', process.env.DATABASE_URL);
console.log('client', client);
//*/

export default client ;
