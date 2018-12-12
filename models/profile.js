module.exports = function (sequelize, DataTypes) {
    const Profile = sequelize.define('profile', {
        owner: DataTypes.INTEGER,
        firstName: {
            type: DataTypes.STRING,
            allownull: true,
            unique: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allownull: true,
            unique: false,
        },
        screenName: {
            type: DataTypes.STRING,
            allownull: true,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allownull: true,
            unique: true,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allownull: true,
            unique: true,
        }
    })
    return Profile
}