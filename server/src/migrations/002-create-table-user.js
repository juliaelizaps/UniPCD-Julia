const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database");

async function CreateTableUser() {
  try {
    const connection = await mysql.createConnection(databaseConfig);
    await connection.query(`USE ${databaseConfig.database}`);
    await connection.query(`
            CREATE TABLE IF NOT EXISTS user (
                id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(255),
				email VARCHAR(255),
                password VARCHAR(255)
            )
        `);
    await connection.end();
    console.log("Table criada!!!");
  } catch (error) {
    console.log("Error creating tabel user: ", error);
  }
}

CreateTableUser();
