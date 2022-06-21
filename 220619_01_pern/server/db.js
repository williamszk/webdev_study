// The purpose of this file is to hold
// code responsible for database connection and credentials
// ideally we should include all the secrets in a non-commited file

const Pool = require("pg").Pool;

const pool = new Pool({
	user: "postgres",
	password: "myPassword",
	host: "localhost",
	port: 5432,
	database: "perntodo",
});

module.exports = pool;
