const express = require("express");
const getRandomAffirmation = require('../gong/src/random_affirmation');

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({affirmation: getRandomAffirmation()});
  });

app.listen(PORT, () => {
  console.log(`Good morning from ${PORT}!!`);
});