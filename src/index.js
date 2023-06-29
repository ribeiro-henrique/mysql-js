const mysql = require('mysql2/promise');

async function main() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123',
    database: 'sakila',
  });

  const result = await connection.execute('SELECT * FROM customer');
  console.log(result);

  await connection.end();
}

main();