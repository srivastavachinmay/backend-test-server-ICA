const Express = require("express");
const userController = require("./Controller/user-controller");
const sequelize = require("./connection");
const cors= require('cors');

sequelize.sync({force:true});

const app = Express();
app.use(Express.json());
app.use(cors());
app.post("/submit", userController.handleSubmit);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
