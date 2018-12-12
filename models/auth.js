module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('user', {
        username: { 
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        }
    });
    User.associate = models => {
        User.hasMany(models, {foreignKey: ['payment']})
     }
    return User
}