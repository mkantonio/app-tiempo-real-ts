import Server from './classes/server';


const server = new Server();

server.start( () => {
    console.log(`servidor corriendo en ${server.port}`);
})