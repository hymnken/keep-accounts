<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0)
const onclick = () => {
  
}
</script>


<template>
  <div>
    {{ count }}
    <h2>12341</h2>
  </div>
  <button @click="onclick">+1</button>
</template>

