# In-Class Activity

## Step 1: Setting up our Vue Project
Create a new project and open Terminal to run:

* npm create vue@latest

(name project **FontSizeChanger** . select no for TypeScript, hit enter twice, then select Yes for creating blank project)

* cd FontSizeChanger

* npm install

## Step 2: Replacing code in App.vue
Replace generated code with skeleton set-up code:
```
<!-- All Vue projects NEED a script & template -->

<script setup>

</script>

<template>
  <!-- templates contain HTML that appears on web -->

</template>

```

## Step 3: Script pt 1 - import ref and create variable
under <script setup>, add this code:
```
// import ref creates reactive variables
// a reactive variable is one that Vue can track for changes, so it can update the DOM accordingly
// https://vuejs.org/guide/essentials/reactivity-fundamentals.html 
import { ref } from 'vue'

// fontsize variable
// we pass in a font size in px to our reactive variable
// and assign is to a const value
// fontSize is initialized at 40px
const fontSize = ref(40) //pxs
```

## Step 4: Script pt 3 - functions
after the variable, add the functions:
```
// function definitions to increase or decrease the value of our fontSize variable
// https://vuejs.org/guide/essentials/event-handling.html
function increase(){
  fontSize.value++
}
function decrease(){
  fontSize.value--
}
```

## Step 5: Create the template with h1 and buttons

```
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
```

## Step 6: Terminal & Run
Run **npm run dev**

open http://localhost:5173/  (can open earlier too)