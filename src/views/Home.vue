<template>
  <div class="home">
    <Memory />
    <h2>{{ msg }}</h2>
    <h2>{{ msg2 }}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import Memory from "@/components/memory/Memory.vue";
import { mapGetters } from 'vuex'

export default {
  name: "Home",
  components: {
    Memory,
  },

  computed: {
    ...mapGetters('a', {
      msg: 'getMsg',
    }),

    ...mapGetters('b', {
      msg2: 'getMsg2' 
    }),
  }
};
</script>
