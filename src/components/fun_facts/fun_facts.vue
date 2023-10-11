<template>
  <div class="q-pa-md" style="max-width: 1400px">
    <div class="banner">Fun Facts</div>

    <div>
      <q-spinner-pie color="white" v-if="fun_facts === null" size="4em" />
      <q-carousel
        v-if="fun_facts != null"
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        rounded-borders
        control-color="white"
        navigation
        :autoplay="autoplay"
        infinite
        padding
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        arrows
        class="bg-primary text-white shadow-1 rounded-borders fun_facts"
      >
        <q-carousel-slide :name="1" class="column no-wrap flex-center">
          <q-icon name="app:bum_king" size="64px" />
          <div class="q-mt-md text-center fact-text">
            The King of the Bums is {{ fun_facts[1].ckey }} - Played
            {{ fun_facts[1].role_count }} rounds
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap flex-center">
          <q-icon name="app:randy" size="64px" />
          <div class="q-mt-md text-center fact-text">
            Randy's Most Played Role Is: {{ fun_facts[0].role }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap flex-center">
          <q-icon name="app:reactor" size="64px" />
          <div class="q-mt-md text-center fact-text">
            The least played role in Lifeweb is {{ fun_facts[2].role }} - Played
            a Total of {{ fun_facts[2].role_count }} times
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap flex-center">
          <q-icon name="app:operator" size="64px" />
          <div class="q-mt-md text-center fact-text">
            The most common name in Ravenheart is
            {{ fun_facts[3].character_name }} - Played
            {{ fun_facts[3].played_count }} times
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="5" class="column no-wrap flex-center">
          <q-icon name="app:bum_king" size="64px" />
          <div class="q-mt-md text-center fact-text">
            The most common Migrant seen in the caves of Ravenheart is
            {{ fun_facts[4].role }} - played
            {{ fun_facts[4].count_played }} times
          </div>
        </q-carousel-slide>
      </q-carousel>
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

.fun_facts {
  height: 11rem;
  width: 30rem;
  text-shadow: 3px 2px 3px black;
}

.fact-text {
  font-family: monospace;
}

@media (max-width: 800px) {
  .banner {
    font-size: 1.5em;
  }
  .fun_facts {
    height: 15rem;
    width: 20rem;
  }
}
</style>

<script>
export default {
  name: "fun_facts",

  async created() {
    this.$q.loading.show({
      delay: 450, // ms
    });
    const fun_facts = await this.$axios.get(
      `http://localhost:5000/showlads/fun_facts`
    );

    this.fun_facts = fun_facts.data;
    this.$q.loading.hide();
  },

  data() {
    return {
      fun_facts: null,
      slide: 1,
      autoplay: true,
    };
  },

  methods: {
    async fetchCkeyData(ckey) {
      try {
        const response = await this.$axios.get(
          `http://localhost:5000/showlads/ckey/${this.ckey}`
        );
        this.ckey_data = response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
