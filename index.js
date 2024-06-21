import express from "express";


const app=express();
const port=4000;

//middleware
app.use(express.json())

//routes
app.get('/',(req,res)=>{
   res.status(200).send(`<span style="background: linear-gradient(to left, #33ccff 0%, #ff99cc 100%); color:black;font-size:100px">hii welcome to node project</span>`)
   //res.status(200).json({message:"hii all welcome to our first node app"})
})

app.get('/data',(req,res)=>{
   res.status(200).send(`<span style="background: linear-gradient(to left, #33ccff 0%, #ff99cc 100%); color:black;font-size:100px">hii welcome to node project Day-1</span>`)

})


app.listen(port,()=>{
   console.log(`App is a listening on the port ${port}`)
})