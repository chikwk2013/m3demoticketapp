const express=require('express');

const app = express();
const port = 5000;

app.use(express.static(__dirname+'/'));

app.get('/', (req, res)=>  {
    res.send('<img src="/images/logom3demo.jpg" alt="Logo" style="width:50%;"><h1>Auto Scaling Demo App</h1><h4>Version : 1.0</h4>');
})
const x = 1;
const y = 'y';



let name=5000;
app.listen(port,()=> {
    console.log('lll',x, y);
    console.log('Demo app is up and listening to port ',port);
})