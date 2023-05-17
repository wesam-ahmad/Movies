const express = require("express")
const cors = require("cors")
const app = express()
const port = 4000;
app.use(cors())
const axios = require('axios');
app.use(express.json());


const options = {
    method: 'GET',
    url: 'https://imdb-top-100-movies.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': '073fb81b91mshfb500d9988a5219p13f389jsnd3d065dc02e9',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };
  
  app.get("/movies", (req, res) => {
    axios
      .request(options)
      .then((response) => {
        res.json(response.data);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
      });
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})