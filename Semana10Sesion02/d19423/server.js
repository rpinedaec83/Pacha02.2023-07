const express = require("express")
const mongoose = require("mongoose") // new
const routes = require("./routes") // new

// Connect to MongoDB database
mongoose
	.connect("mongodb://localhost:27017/acmedb", { useNewUrlParser: true })
	.then(() => {
		const app = express()
		app.use("/api", routes) // new
        app.use(express.json()) // new
		app.listen(3456, () => {
			console.log("Server has started!")
		})
	})