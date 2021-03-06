const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User');

User.hasMany(Post, {
	foreignKey: 'user_id'
});

Post.belongsTo(User, {
	foreignKey: 'user_id',
	onDelete: 'SET NULL'
});

User.hasMany(Comment, {
	foreignKey: 'user_id'
});

Comment.belongsTo(User, {
	foreignKey: 'user_id',
	onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
	foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
	foreignKey: 'post_id',
	onDelete: 'SET NULL'
});

module.exports = {
	Post,
	Comment,
	User
};