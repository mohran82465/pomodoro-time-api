const express = require("express"); 
const app = express(); 
const port = process.env.PORT || 3000; 

app.get('/',(req,res)=>{
    res.status(200).json(
        {
            "message": "welcome to the port"
        }
    )
    app.listen(port,()=>{
        `server started on port ${port}`
    })
})