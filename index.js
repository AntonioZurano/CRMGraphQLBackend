const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');
const conectarDB = require('./config/db');
const jwt = require('jsonwebtoken');
require('dotenv').config( { path:'.env' } );

// Conectar a la base de datos
conectarDB();


// Servidor
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        console.log(req.headers['authorization']);
        const token = req.headers['authorization'] || ''; // Si no hay token, se le asigna un string vacío
        if (token) {
            try {
                const usuario = jwt.verify(token.replace('Bearer ', ''), process.env.SECRETA);
                console.log(usuario);
                return {
                    usuario
                }
            } catch (error) {
                console.log(error);
            }
        }
    }       
});

// Iniciar servidor
server.listen().then(({ url }) => {
        console.log(`Servidor listo en la URL ${url}`);
} );



