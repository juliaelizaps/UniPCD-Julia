const express = require('express');
const userRouter = require('./router/userRouter');
const bodyparser = require('body-parser');
const authRouter = require('./router/authRouter');
const cors = require('cors');

const app = express();
const port = 3500;

const corsOptions = {
	origin: "http://localhost:3000",
	methods: "GET,POST,PUT,DELETE",
	allowedHeaders:
		"Content-Type,Authorization,X-Requested-With, content-type,XMLHttpRequest,Access-Control-Allow-Origin,Origin,Accept,Access-Control-Allow-Credentials,",
};
app.use(cors(corsOptions));

app.use(bodyparser.json());

app.use('/api', userRouter);
app.use('/api', authRouter);

//app.use(cors);

app.get("/", (req, res) => {
	res.send({
		nome: 'Joao',
		telefone: '47 999999999'
	});
});


app.listen(port, () => {
	console.log('Server online on port: ' + port)
});
