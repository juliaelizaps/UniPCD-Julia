const jwt = require("jsonwebtoken");
const databaseConfig = require("../config/database");
const mysql = require("mysql2/promise");

async function AuthController(req, res) {
  const { email, password } = req.body;
  try {
    const connection = await mysql.createConnection(databaseConfig);
    const select = "SELECT * FROM user WHERE email = ? AND password = ?";
    const [rows] = await connection.query(select, [email, password]);
    await connection.end();
    if (rows.length == 0) throw new Error("User or password invalid!");
    const id = rows[0].id;
    const token = jwt.sign({ id, email }, "SECRET", {
      expiresIn: 300,
    });
    res.status(200).send({
      auth: true,
      token: token,
    });
  } catch (error) {
    res.status(500).send({
      message: "Erro interno no servidor",
      body: error.message,
    });
  }
}

function verifyJWT(req, res, next) {
  const token = req.headers["x-access-token"];
  if (!token)
    res.status(500).send({
      auth: false,
      body: "No token provided.",
    });
  jwt.verify(token, "SECRET", (err, decoded) => {
    if (err) {
      return res.status(500).send({
        auth: false,
        body: "Failed to authenticate token.",
      });
    }
    req.userId = decoded.id;
    next();
  });
}

module.exports = {
  AuthController,
  verifyJWT,
};
