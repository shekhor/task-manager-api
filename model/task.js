const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

const Task = sequelize.define('Task',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        }
    },
    {
        timestamps: false,
    }
);

module.exports = Task;