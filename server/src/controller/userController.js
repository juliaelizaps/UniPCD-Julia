const mysql = require('mysql2/promise');
const databaseConfig = require('../config/database');

async function CreateUser(req, res) {
	const { name, password } = req.query;
	try {
		const connection = await mysql.createConnection(databaseConfig);
		const insertUser = `INSERT INTO user (name, password)
                                values(?, ?)`;
		await connection.query(insertUser, [name, password]);
		await connection.end();
		res.status(201).send({ message: 'success' });
	} catch (error) {
		res.status(500).send(
			{
				message: 'Error adding user!',
				body: error.message,
			}
		);
	}
}

async function GetAllUsers(req, res) {
	try {
		const connection = await mysql.createConnection(databaseConfig);
		const [users] = await connection.query('SELECT * FROM user');
		await connection.end();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).send(
			{
				message: 'Error getting users!',
				body: error.message,
			}
		)
	}
}

async function GetUserById(req, res) {
	const { id } = req.params;
	try {
		const connection = await mysql.createConnection(databaseConfig);
		const [user] = await connection.query('SELECT * FROM user WHERE id = ?', [id]);
		await connection.end();
		res.status(200).json(user);
	} catch (error) {
		res.status(500).send(
			{
				message: 'Error getting user!',
				body: error.message,
			}
		)
	}
}

async function UpdateUser(req, res) {
	const { id } = req.params;
	const { name, password } = req.query;
	try {
		const connection = await mysql.createConnection(databaseConfig);
		await connection.query('UPDATE user SET name = ?, password = ? WHERE id = ?', [name, password, id]);
		await connection.end();
		res.status(200).send("Update success!");
	} catch (error) {
		res.status(500).send(
			{
				message: 'Error updating user!',
				body: error.message,
			}
		)
	}
}

async function DeleteUser(req, res) {
	const { id } = req.params;
	try {
		const connection = await mysql.createConnection(databaseConfig);
		await connection.query('DELETE FROM user WHERE id = ?', [id]);
		await connection.end();
		res.status(200).send("Delete success!");
	} catch (error) {
		res.status(500).send(
			{
				message: 'Error deleting user!',
				body: error.message,
			}
		)
	}
}

module.exports = {
	CreateUser,
	GetAllUsers,
	GetUserById,
	UpdateUser,
	DeleteUser
}