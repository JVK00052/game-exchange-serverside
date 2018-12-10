module.exports = function (sequelize, DataTypes) {
    return sequelize.define('payment', {
        nameOfCompany: {
            type: DataTypes.STRING,
            allownull: false,
        },
        cardNumber: {
            type: DataTypes.STRING,
            allownull: false,
        },
        cardVerification: {
            type: DataTypes.STRING,
            allownull: false,
        },
        expirationDate: {
            type: DataTypes.STRING,
            allownull: false,
        },
        cardOwner: {
            type: DataTypes.STRING,
            allownull: false,
        }
    })
}