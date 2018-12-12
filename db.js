require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.PGDB, {
    dialect: 'postgres',
});
sequelize.authenticate().then(
    function () {
        console.log('Connected to Postgres Database');
    },
    function (err) {
        console.log(err)
    }
);

const User = sequelize.import('./models/auth');
const Payment = sequelize.import('./models/payment');

User.hasMany(Payment)

Payment.belongsTo(User)

module.exports = sequelize;