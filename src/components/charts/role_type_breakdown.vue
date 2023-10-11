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
  name: "role_type_pie",
  props: ["ckey"],
  components: {
    Doughnut,
  },

  async created() {},

  data() {
    return {
      loaded: false,
      chart_data: {
        labels: [
          "Donation Role",
          "Nobility Role",
          "Migrant Role",
          "OS13 Role",
          "Combat Role",
          "Support Role",
          "Church Role",
          "Lateparty Role",
          "Bandit Role",
          "Medical Role",
          "Business Role",
          "Special Role",
        ],
        datasets: [
          {
            backgroundColor: [
              "#00a131",
              "#810097",
              "#5b2d00",
              "#001ace",
              "#e51d1d",
              "#2ce7ec",
              "#ceb5a2",
              "#858f82",
              "#a8b6b6",
              "#3B722E",
              "#f1c232",
              "#FF1DCD",
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
    ckey: {
      handler(newCkey, oldCkey) {
        if (newCkey !== oldCkey) {
          this.fetchChartData(newCkey);
        }
      },
      immediate: true, // Trigger the watcher immediately after the component is created
    },
  },
  methods: {
    async fetchChartData(ckey) {
      try {
        this.loaded = false;
        const response = await this.$axios.get(
          `https://www.schrecknet.live/showlads/pie_chart/${this.ckey}`
        );
        this.chart_data.datasets[0].data = [];

        for (const key in response.data[0]) {
          this.chart_data.datasets[0].data.push(
            parseInt(response.data[0][key])
          );
        }

        this.loaded = true;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
