const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');

class Post extends Model {}

Post.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: User,
				key: 'id'
			}
		}
	}
);

module.exports = Post;