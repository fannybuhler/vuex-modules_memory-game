<template>
  <li class="card" @click="handleClick">
    {{ card.id }}
    {{ card.color }}
    {{ card.isFlipped }}
  </li>
</template>

<script>
export default {
name: 'MemoryCards',
props: {
    card: {
      type: Object,
      default: () => {}
    },
    index: Number
  },

  methods: {
    handleClick() {
      console.log(this.index)
      this.index.card.isFlipped = true
    }
  }
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