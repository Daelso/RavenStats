<template>
  <div class="q-pa-md" style="max-width: 1400px">
    <div>
      {{ this.ckey }}
    </div>
  </div>
</template>

<style scoped></style>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  name: "ckey_charts",
  props: ["ckey"],
  emits: ["update:ckey"],

  data() {
    return {
      ckey_data: this.ckey,
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
          `http://localhost:5000/showlads/ckey/${this.ckey}`
        );
        this.ckey_data = response.data;
        console.log(this.ckey_data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
