const express = require('express');
const sql = require('mssql');
const app = express();
const port = 8080;

const config = {
  user: 'operador',
  password: 'Palmas2557$.',
  server: 'sbxc-0001-plmvis-snb-asq-01.database.windows.net',
  database: 'SBXC-0001-PLMVIS-SNB-ASDB-01',
};

async function testConnection() {
  try {
    // Conectarse a la base de datos
    await sql.connect(config);
    console.log('Conexión exitosa a la base de datos');

    // Hacer algo con la conexión, como ejecutar una consulta
    const result = await sql.query('SELECT @@VERSION AS version');
    console.log('Versión del servidor SQL:', result.recordset[0].version);
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err.message);
  } finally {
    // Cerrar la conexión después de su uso
    await sql.close();
  }
}

//API REPORTES Y SABANAS
app.get('/api/SabanaReportes', async (req, res) => {
  try {
    // Conectarse a la base de datos
    const pool = await sql.connect(config);

    // Consulta SELECT simple (reemplázala con tu propia consulta)
    const result = await pool.request().query('select top 6 * from dbo.ReportesSabanas');

    // Enviar los datos como respuesta
    res.json(result.recordset);
  } catch (err) {
    console.error('Error al obtener datos:', err.message);
    print(res.status)
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`La API está escuchando en http://localhost:${port}`);
});

testConnection();
