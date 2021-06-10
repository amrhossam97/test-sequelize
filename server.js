const express = require("express");
const cors = require("cors");
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
const db = require("./models");
db.seq.sync({ alter: true });

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
require('./routes/book.routes')(app);
require('./routes/user.routers')(app);
require('./routes/sales.routes')(app);

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(422).send({ err: err.message });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
module.exports=app;