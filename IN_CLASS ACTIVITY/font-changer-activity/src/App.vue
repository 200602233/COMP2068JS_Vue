<script setup>
// import ref creates reactive variables
// a reactive variable is one that Vue can track for changes, so it can update the DOM accordingly
// https://vuejs.org/guide/essentials/reactivity-fundamentals.html 
import { ref } from 'vue'

// fontsize variable
// we pass in a font size in px to our reactive variable
// and assign is to a const value
// fontSize is initialized at 40px
const fontSize = ref(40) //pxs

// function definitions to increase or decrease the value of our fontSize variable
// https://vuejs.org/guide/essentials/event-handling.html
function increase(){
  fontSize.value++
}
function decrease(){
  fontSize.value--
}

// end of script setup
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style>
