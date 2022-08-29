const express = require("express");
const bodyParser = require('body-parser');
const { router } = require("./router/dummyRoutes");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send(``);
});
app.use(router)

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
