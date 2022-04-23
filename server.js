const express = require('express')
const app = express();
const path = require("path");
const PORT = 8000;
const cors = require("cors");

app.use(express.static(path.join(__dirname, "client", "build")));

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})