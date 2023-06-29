const { gql } = require('apollo-server');





//Schema
const typeDefs = gql`
    type Usuario {
        nombre: String
        apellido: String
        email: String
        password: String
        creado: String
    }
    
    type Query {
        obtenerCurso: String
    }
    
    type Mutation {
        nuevoUsuario: Usuario        
    }
`;


module.exports = typeDefs;