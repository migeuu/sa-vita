// const Pool = require("pg").Pool;
// const pool = new Pool({
//   host: "localhost",
//   database: "VitaDB",
//   user: "postgres",
//   password: "aluno",
//   port: 5432,
// });

// const getUsers = async (req, res) => {
//   try {
//     const allUsers = await pool.query("SELECT * FROM perfil");
//     response.json(allUsers);
//   } catch (err) {
//     console.error(err.message);
//   }
// };

// const getUserById = (req, response) => {
//   const id = parseInt(req.params.id);
//   pool.query("SELECT * FROM PERFIL WHERE ID = $1", [id], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };

// const createUser = (req, response) => {
//   const { nome, email } = req.body;

//   pool.query(
//     "INSERT INTO PERFIL (NOME. EMAIL) VALUES ($1, $2)",
//     [NOME, EMAIL],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response
//         .status(201)
//         .send(`Usuário adicionado com ID: ${results.insertId}`);
//     }
//   );
// };

// const updateUser = (req, response) => {
//   const { nome, email } = req.body;
//   const id = parseInt(req.params.id);

//   pool.query(
//     "UPDATE PERFIL SET NOME = $1, EMAIL = $2 WHERE ID = $3",
//     [nome, email, id],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }

//       response.status(200).send(`Usuário com ID: ${id} modificado com sucesso`);
//     }
//   );
// };

// const deleteUser = (req, response) => {
//   const id = parseInt(req.params.id);

//   pool.query("DELETE FROM PERFIL WHERE ID = $1", [id], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(201).send(`Usuário com ID ${id} deletado com sucesso`);
//   });
// };

// module.exports = {
//   getUsers,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUser,
// };





const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "senai",
  host: "localhost",
  port: 5432,
  database: "DBVita",
});

module.exports = pool;


