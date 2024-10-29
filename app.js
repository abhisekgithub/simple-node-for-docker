const app = require('express')();
const cpus = require('os').cpus();
import cluster from 'cluster';
for(i=0;i<cpus;i++){
    if(cluster){}
}
console.log(cpus);
app.listen(3000, (a)=>{
   
});

app.get('/', (req,res)=>{
res.send("Hi!");
})