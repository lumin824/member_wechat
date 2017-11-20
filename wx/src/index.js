import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({extended:true,limit:'5mb'}))
app.use(bodyParser.json())
app.use(bodyParser.text({type:'text/xml'}))
app.disable('x-powered-by')

app.use('/wx', require('./router/wx'))

app.listen(9063);
