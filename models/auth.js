module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        username: { 
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        passwordhash: {
            type: DataTypes.STRING,
            allowNull: false,
        } 
    })
}