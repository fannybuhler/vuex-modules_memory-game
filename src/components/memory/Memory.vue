<template>
  <div class="cards">
    <ul>
      <MemoryCards v-for="card in memoryCards" :key="card.id" :card="card"/>
    </ul>
    {{ deck }}
  </div>
</template>

<script>
import MemoryCards from "@/components/memory/MemoryCards.vue";
import { mapGetters } from 'vuex'

export default {
name: 'Memory',
components: {
  MemoryCards
},

computed: {
    ...mapGetters('a', {
      memoryCards: 'getMemoryCards',
      deck: 'getDeck',
    })
  }
}
</script>

<style>
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>