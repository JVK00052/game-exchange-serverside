module.exports = function (sequelize, DataTypes) {
    const Payment = sequelize.define('payment', {
        nameOfCompany: {
            type: DataTypes.STRING,
            allownull: false,
        },
        cardNumber: {
            type: DataTypes.STRING,
            allownull: false,
            unique: true,
        },
        cardVerification: {
            type: DataTypes.STRING,
            allownull: false,
            unique: true,
        },
        expirationDate: {
            type: DataTypes.STRING,
            allownull: false,
            unique: false,
        },
        cardOwner: {
            type: DataTypes.STRING,
            allownull: false,
            unique: false,
        }
    });
    Payment.associate = models => {
        Payment.belongsTo(models, {foreignKey: ['user']})
    }
    return Payment;
}