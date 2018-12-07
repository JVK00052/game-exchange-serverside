module.exports = function (sequelize, DataTypes) {
    return sequelize.define('payment', {
        nameOfCompany: {
            type: DataTypes.STRING,
            allownull: false,
            unique: false,
        },
        cardNumber: {
            type: DataTypes.STRING,
            allownull: false,
            unique: true,
            validate: {
                min: 16,
                max: 16,
            },
        },
        cardVerificationCode: {
            type: DataTypes.STRING,
            allownull: false,
            unique: true,
            validate: {
                min: 3,
                max: 3,
            },
        },
        expirationDate: {
            type: DataTypes.STRING,
            allownull: false,
            unique: false,
        },
        cardOwner: {
            type: DataTypes.STRING,
            allownull: false,
        }
    })
}