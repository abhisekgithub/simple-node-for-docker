const app = require('express')();
const cpus = require('os').cpus();
app.listen(3000, (a)=>{
   
});

app.get('/', (req,res)=>{
res.send("Hi!");
})