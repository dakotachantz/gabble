const app = require("./app");
const port = process.env.PORT || 7777;

// LISTEN
app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
