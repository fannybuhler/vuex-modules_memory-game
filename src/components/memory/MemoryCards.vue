<template>
  <li class="card">
    {{ card.id }}
    {{ card.color }}
    {{ card.isFlipped }}
  </li>
</template>

<script>
export default {
name: 'MemoryCards',
props: {
    card: Array
  },
}
</script>

<style>
.card {
  list-style-type: none;
  border: 1px solid navy;
  color: #000;
  background: rgba(146, 181, 215, 0.1);
  opacity: 0.5;  
  padding: 20px;
  margin: 5px;
}
</style>