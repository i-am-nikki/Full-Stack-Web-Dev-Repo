const { faker } = require('@faker-js/faker');
const mysql = require('mysql2'); //.mysql2 package is used to establish connection between js files and sql db.

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'del_app',
    password: 'MySQL@123#'
});

let q= "SHOW TABLES";
// .query object work is to run any query on database.
try{
    connection.query(q, (err, result) =>{
        if(err) throw err;
        console.log(result);
        console.log(result.length);
        console.log(result[0]);
    });
} catch (err){
    console.log(err);
}

connection.end();

let getRandomUser = () => {
    return {
        id: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
}

//console.log(getRandomUser());

