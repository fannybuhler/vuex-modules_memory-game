<template>
  <div class="cards">
    <div class="cards__memory">
      <ul class="cards__grid">
        <MemoryCards v-for="(card, index) in deck" :key="index" :card="card" :index="index"/>
      </ul>
    </div>
    <div class="cards__shuffle">
      {{ deck }}
    </div>
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
      // memoryCards: 'getMemoryCards',
      deck: 'getDeck',
    })
  },
}
</script>

<style>
  .cards__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
</style>