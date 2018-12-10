module.exports = function (sequelize, DataTypes) {
    return sequelize.define('profile', {
        owner: DataTypes.INTEGER,
        firstName: {
            type: DataTypes.STRING,
            allownull: true,
        },
        lastName: {
            type: DataTypes.STRING,
            allownull: true,
        },
        screenName: {
            type: DataTypes.STRING,
            allownull: true,
        },
        email: {
            type: DataTypes.STRING,
            allownull: true,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allownull: true,
        }
    })
}