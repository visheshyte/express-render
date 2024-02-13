const express = require("express")

app = express() 

app.use(express.json())



app.get("/" , (req , res)=>{
    res.json("vishesh is coding!")
})

app.listen(3000)
