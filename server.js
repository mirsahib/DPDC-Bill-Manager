const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const scraperRoutes = require("./routes/scraper.routes");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls

app.use("/", scraperRoutes);

// API test call
async function sleep(millis) {
  // testing loading spinner
  return new Promise((resolve) => setTimeout(resolve, millis));
}
app.get("/hello", async (req, res) => {
  await sleep(5000);
  res.send("server says hi");
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
