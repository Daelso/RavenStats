<template>
  <div class="q-pa-md" style="max-width: 1400px">
    <Doughnut v-if="loaded" :data="chart_data" :options="chart_options" />
  </div>
</template>

<style scoped>
@media (max-width: 800px) {
}
</style>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "role_type_pie_character",
  props: ["character_name"],
  components: {
    Doughnut,
  },

  async created() {},

  data() {
    return {
      loaded: false,
      chart_data: {
        labels: [
          "Authority",
          "Bandit",
          "Business",
          "Church",
          "Dirt",
          "Donation Role",
          "Garrison",
          "Healers",
          "Late-Party",
          "Migrant",
          "Noble Family/Entourage",
          "OS13",
          "Special",
        ],
        datasets: [
          {
            backgroundColor: [
              "#b900ff",
              "#df000a",
              "#f3f21f",
              "#616161",
              "#4C1605",
              "#2ce7ec",
              "#ceb5a2",
              "#7CB342",
              "#880E4F",
              "#3B722E",
              "#AB47BC",
              "#0D47A1",
              "#F9A825",
            ],
            data: null,
          },
        ],
      },
      chart_options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  watch: {
    character_name: {
      handler(newcharacter_name, oldcharacter_name) {
        if (newcharacter_name !== oldcharacter_name) {
          this.fetchChartData(newcharacter_name);
        }
      },
      immediate: true, // Trigger the watcher immediately after the component is created
    },
  },
  methods: {
    async fetchChartData(character_name) {
      try {
        this.loaded = false;
        const response = await this.$axios.get(
          `https://www.schrecknet.live/showlads/pie_chart_character/${encodeURIComponent(
            this.character_name
          )}`
        );
        this.chart_data.datasets[0].data = [];

        response.data.forEach((row) => {
          this.chart_data.datasets[0].data.push(row.play_count);
        });

        this.loaded = true;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
