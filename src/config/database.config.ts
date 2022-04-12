import { Sequelize } from 'sequelize';

const db = new Sequelize('nodetest', 'Lms_Md', 'Adm1nLmsMd2022!', {
    host: '203.150.199.24',
    dialect: 'mysql',
  });

  db.authenticate().then(() => {
    console.log('Connection to remote MySQL database has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to remote MySQL database:', err);
});


export default db;