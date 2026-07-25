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
  <!-- templates contain HTML that appears on web -->

  <!-- text for adjustment -->
   <!-- :style - allows Vue to change the CSS using the variable fontSize
   + 'px' converts the num to CSS  
   -->
   <!-- https://vuejs.org/guide/essentials/class-and-style.html#binding-to-arrays -->
   <h1 :style="{fontSize: fontSize + 'px'}">Hello World, welcome to Vue!</h1>

   <!-- Buttons to increase & decrease text -->

   <!-- @click: "" - listens to our functions we made prior, increase and decrease -->
   <!-- https://vuejs.org/guide/essentials/event-handling.html -->
   <button @click="increase">+</button>

   <button @click="decrease">-</button>
</template>

<style scoped></style>
