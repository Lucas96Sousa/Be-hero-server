const app = require("./app");

const port = 3001;

app.listen(process.env. PORT || port, () => console.log(`Port: ${port}`));
