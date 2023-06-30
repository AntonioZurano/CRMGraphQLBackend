const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');

const resolvers = {
  Query: {
    obtenerCursos: () => 'Algo'
  },
  Mutation: {
    nuevoUsuario: async (_, { input }) => {
      const { email, password } = input;
        // Revisar si el usuario ya está registrado
      const existeUsuario = await Usuario.findOne({ email });
      if (existeUsuario) {
        throw new Error('El usuario ya está registrado');
      }
      // Hashear su password
      const salt = await bcryptjs.genSalt(10);
      input.password = await bcryptjs.hash(password, salt);

      try {
        // Guardarlo en la base de datos
        const usuario = new Usuario(input);
        usuario.save(); // Guardarlo en la base de datos
        return usuario; // Devolverlo para que se vea en el cliente
      } catch (error) {         
        console.log(error); 
      }
    }
  }
};

module.exports = resolvers;



