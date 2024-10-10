import { createConnection } from 'typeorm';

createConnection()
    .then(() => {
        console.log('Database connection established successfully.');
    })
    .catch(error => {
        console.error('Error establishing database connection:', error);
    });
