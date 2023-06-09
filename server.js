const jsonServer = require('json-server');
const app = jsonServer.create();
const route = jsonServer.router('db.json');
const middleware = jsonServer.defaults()
app.use(middleware);
app.use(route);
app.listen(6000,()=>{
    console.log(`Server is running at the port 6000`);
})