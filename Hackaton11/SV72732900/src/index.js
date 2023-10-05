const app = require("./app/app")
const PORT_ = process.env.PORT || 3001

app.listen(PORT_, ()=>{
    console.log(`Running on port: ${PORT_}`)
}) 