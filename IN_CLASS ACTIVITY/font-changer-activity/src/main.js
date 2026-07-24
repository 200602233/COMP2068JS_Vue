// main.js is the main entry point for our application, i.e. the first .js file that gets executed

// imports the built-in createApp function from the Vue library
// this creates and returns a new app instance
import { createApp } from 'vue'

// imports our app.vue SFC file, which contains script setup, template, code logic
import App from './App.vue'

// uses the imported createApp() function 
// we pass in our root component (i.e. our App variable) for the parameter
// and use the mount() function to mount the app to an html id
// this makes it so the DOM can target the app element in our html
createApp(App).mount('#app')
