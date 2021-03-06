// const express = require ('express')
// const bodyParser = require('body-parser')
// const app = express()
// const cors = require("cors");
// const db = require('./queries')
// const PORT = 3000


// app.use(cors())
// app.use(bodyParser.json())
// app.use(
//     bodyParser.urlencoded({
//         extended:true,
//     })
// )




// app.get('/', (request, response) => {
//     response.json({info: 'API NodeJS com PostgreSQL.'})
// })

// app.get('/perfil', db.getUsers)
// app.get('/perfil/:id', db.getUserById)
// app.post('/perfil', db.createUser)
// app.put('/perfil/:id', db.updateUser)
// app.delete('/perfil/:id', db.deleteUser)


// app.listen(PORT, ()=> {
//     console.log(`Servidor inicializado em http://localhost:${PORT}`)
// })






// iniciando o server
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./queries");
const PORT = 5000;

// uso de middleware
app.use(cors());
app.use(express.json());

// Rotas //

// Create anuncio

// app.post("/anuncios", async (req, res) => {
//   try {
//     const { title, description, date_start, date_end, category, email, phone } =
//       req.body;
//     const newAnuncio = await pool.query(
//       "INSERT INTO anuncios (title, description, date_start, date_end, category, email, phone) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
//       [title, description, date_start, date_end, category, email, phone]
//     );
//     res.json(newAnuncio);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // Get todos anuncios

app.get("/perfil", async (req, res) => {
  try {
    const allPerfil = await pool.query("SELECT * FROM perfil");
    res.json(allPerfil.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get em um anuncio unico

// app.get("anuncios/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const anuncio = await pool.query(
//       "SELECT * FROM anuncios WHERE idanuncio = $1",
//       [id]
//     );

//     res.json(anuncio.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // Update em um anuncio unico

// app.put("anuncios/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, description, date_start, date_end, category, email, phone } =
//       req.body;

//     const updateAnuncio = await pool.query(
//       "UPDATE anuncios SET title = $1, description = $2, date_start = $3, date_end = $4, category = $5, email = $6, phone = $7 WHERE idanuncio = $8 ",
//       [title, description, date_start, date_end, category, email, phone, id]
//     );

//     res.json("An??ncio atualizado!");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// // Deletar anuncio

// app.delete("anuncios/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteAnuncio = await pool.query(
//       "DELETE FROM anuncios WHERE idanuncio = $1",
//       [id]
//     );

//     res.json("An??ncio exclu??do!");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// server methods
app.listen(PORT, () => {
  console.log(`Server has started in: http://localhost:${PORT}`);
});

