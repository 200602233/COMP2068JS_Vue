<!-- 
 Resources:
    Setup:
        * https://vuejs.org/guide/quick-start.html
    
    Code: 
        * https://vuejs.org/guide/essentials/reactivity-fundamentals.html 
        * https://vuejs.org/guide/essentials/event-handling.html
        * https://vuejs.org/guide/essentials/template-syntax.html
        * 


 -->


<script setup>
// https://vuejs.org/guide/essentials/reactivity-fundamentals.html 
//imports ref to creaet reactive vars
import { ref } from 'vue'

//vars
const num1 = ref(0)
const num2 = ref(0)
const results = ref(0)


// https://vuejs.org/guide/essentials/event-handling.html
// fucntions
function add(){
    results.value = Number(num1.value) + Number(num2.value)
}

function minus(){
    results.value = Number(num1.value) - Number(num2.value)
}

function multiply(){
    results.value = Number(num1.value) * Number(num2.value)
}

function divide(){
    // if statement if user tries to divide by 0
    if (Number(num2.value == 0)){
        results.value = "Invalid! Cannot divide by zero"
    } else{
        results.value = Number(num1.value) / Number(num2.value)
    }
}

function clear(){
    results.value = 0
    num1.value = 0
    num2.value = 0
}
</script>


<template>
    <!-- https://vuejs.org/guide/essentials/template-syntax.html -->
    <!-- add layout here, div, h1, inputs,etc.. -->
     <!-- then connect to above functions -->
      <!-- add class OR id's for easier nav (also ref for style.css) -->
    <div id="calc">
        <!-- Title (maybe we can linked the web for vue in the word Vue) -->
        <h1>Simple Calculator Using Vue</h1>

        <!-- Calculator -->
        <!-- results section -->
        <div id="results">
            {{ results }}
        </div>

        <!-- https://vuejs.org/guide/essentials/forms.html -->
        <!-- inputs -->
        <input v-model="num1" type="number">
        <input v-model="num2" type="number">
        
        <!-- https://vuejs.org/guide/essentials/event-handling.html -->
        <!-- @click - refers to functions we declared above in the script-->
        <div class="actionBtns">
            <button @click="add">+</button>
            <button @click="minus">-</button>
            <button @click="multiply">*</button>
            <button @click="divide">/</button>
            <button @click="clear" id="clear">Clear</button>
        </div>
    </div>

</template>