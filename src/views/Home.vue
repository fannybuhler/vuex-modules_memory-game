<template>
  <div class="home">
    <HelloWorld />
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapGetters } from 'vuex'

export default {
  name: "Home",
  components: {
    HelloWorld,
  },

  ...mapGetters([
    'a/getMsg' 
  ]),

  mounted() {
    console.log(msg)
  }
};
</script>
