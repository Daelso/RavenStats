<template>
  <div class="q-pa-md" style="max-width: 1400px">
    <div class="banner">{{ this.ckey }} Fun Facts</div>
    <q-spinner-pie color="white" v-if="fun_facts === null" size="4em" />

    <div v-if="fun_facts" class="fun-facts-container">
      <div class="q-pa-sm">
        Most Commonly Played Character: {{ fun_facts[1].character_name }} -
        Played {{ fun_facts[1].static_count }} times
      </div>
      <div class="q-pa-sm">
        Most Commonly Role: {{ fun_facts[0].role }} - Played
        {{ fun_facts[0].role_count }} times
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  display: flex;

  justify-content: center;
  margin-bottom: 1em;
  font-family: TMUnicorn;
  text-shadow: 3px 2px 3px black;
  font-size: 2.8em;
  color: #c4171d;
}

.fun-facts-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222831;
  border: 1px solid grey;
  border-radius: 5px;
  color: white;
}

@media (max-width: 800px) {
  .banner {
    font-size: 1.5em;
  }

  .fun-facts-container {
    max-width: 20em;
    margin: auto;
  }
}
</style>

<script>
export default {
  name: "player_fun_facts",
  props: ["ckey"],

  data() {
    return {
      fun_facts: null,
    };
  },

  watch: {
    ckey: {
      handler(newCkey, oldCkey) {
        if (newCkey !== oldCkey) {
          this.fetchCkeyData(newCkey);
        }
      },
      immediate: true, // Trigger the watcher immediately after the component is created
    },
  },
  methods: {
    async fetchCkeyData(ckey) {
      try {
        const response = await this.$axios.get(
          `https://www.schrecknet.live/showlads/ckey_fun_facts/${this.ckey}`
        );
        this.fun_facts = response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
