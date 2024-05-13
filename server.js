const express = require('express')
const pool = require('./db')
const port = 8080

const app = express()
app.use(express.json())

//routes
app.get('/', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM schools')
        res.status(200).send(data.rows)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.post('/', async (req, res) => {
    const { name, location } = req.body
    const insert = 'INSERT INTO schools (name, address) VALUES ($1, $2)';
    
    try {
        await pool.query(insert, [name, location])
        res.status(200).send({ message: "Successfully added" })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.get('/setup', async (req, res) => {
    const createTable = `
        CREATE TABLE schools(
            id SERIAL PRIMARY KEY, 
            name VARCHAR(100), 
            address VARCHAR(100)
        )
    `;

    try {
        await pool.query(createTable)
        res.status(200).send({ message: "Successfully created table" })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.listen(port, () => console.log(`Server has started on port: ${port}`))

pool
    .connect()
	.then(() => {
		console.log('Connected to PostgreSQL database');
	})
	.catch((err) => {
		console.error('Error connecting to PostgreSQL database', err);
	});