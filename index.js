const express = require("express")
const path = require("path")
const cors = require("cors")
const app = express()
const port = 8000

app.use(cors())

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req,res) {
		res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})