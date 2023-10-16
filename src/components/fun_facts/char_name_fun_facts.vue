<template>
  <div class="q-pa-md" style="max-width: 1400px">
    <div class="banner">{{ this.character_name }} Fun Facts</div>
    <q-spinner-pie color="white" v-if="fun_facts === null" size="4em" />

    <div v-if="fun_facts" class="fun-facts-container">
      <div class="q-pa-sm">
        {{ this.character_name }} is Most Commonly Played by:
        {{ fun_facts[1].ckey }} - Played {{ fun_facts[1].static_count }} times
      </div>
      <div class="q-pa-sm">
        Most Commonly Played Role: {{ fun_facts[0].role }} - Played
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
  props: ["character_name"],

  data() {
    return {
      fun_facts: null,
    };
  },

  watch: {
    character_name: {
      handler(newcharacter_name, oldcharacter_name) {
        if (newcharacter_name !== oldcharacter_name) {
          this.fetchcharacter_nameData(newcharacter_name);
        }
      },
      immediate: true, // Trigger the watcher immediately after the component is created
    },
  },
  methods: {
    async fetchcharacter_nameData(character_name) {
      try {
        const response = await this.$axios.get(
          `https://www.schrecknet.live/showlads/character_name_fun_facts/${encodeURIComponent(
            this.character_name
          )}`
        );
        this.fun_facts = response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
