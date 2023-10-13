import { createPool } from "mysql2/promise";

export default createPool({
    user: process.env.db_mysql_user,
    host: process.env.db_mysql_host,
    password: process.env.db_mysql_password,
    database: process.env.db_mysql_database,
    decimalNumbers: true
});


