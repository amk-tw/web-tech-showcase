// import preline from 'preline/plugin.js'
// const preline = require('preline/plugin.js')
/** @type {import('tailwindcss').Config} */
// module.exports = {
// 	content: [
// 		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
// 		'./node_modules/preline/dist/*.js',
// 	],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [

// 		require('preline/plugin'),
// 	],
// }
import preline from "preline/plugin.js"
import typeography from "@tailwindcss/typography"
import containerQueries from "@tailwindcss/container-queries"
import forms from "@tailwindcss/forms"
export default {
  content: [
    "./public/**/*.astro",
    "./src/**/*.{astro,js,jsx,ts,tsx,vue}",
    "./node_modules/preline/dist/*.js",
  ],
  plugins: [containerQueries, forms, typeography, preline],
  darkMode: "class",
}
