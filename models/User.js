const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const { beforeCreate, beforeUpdate } = require('./Post');

class User extends Model {
	checkPassword(pw) {
		return bcrypt.compareSync(pw, this.password);
	}
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [4]
			}
		}
	},
	{
		hooks: {
			async beforeCreate(newUser) {
				newUser.password = await bcrypt.hash(newUser.password, 10);
				return newUser;
			},
			async beforeUpdate(updatedUser) {
				updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
				return updatedUser;
			}
		},
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'user'
	}
);

module.exports = User;