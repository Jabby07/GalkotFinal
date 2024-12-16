const jsonServer = require ("json-server");
const cors = require("cors");
const server =jsonServer.create();
const router = jsonServer.router("almacen.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 10000;


server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log(`JSON Server está corriendo en el puerto ${port}`);
});
