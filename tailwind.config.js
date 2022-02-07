module.exports = {
	content: [
		'./views/**/*.handlebars',
		'./public/src/**/*.js',
		'./node_modules/tw-elements/dist/js/**/*.js'
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tw-elements/dist/plugin')
	],
}