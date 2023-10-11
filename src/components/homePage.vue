<template>
  <div class="q-pa-md" style="max-width: 1400px">
    <div class="banner">Search by Ckey</div>
    <div>
      <q-select
        class="picker"
        standout
        v-model="ckey"
        :options="filteredOptions"
        label="Ckey"
        use-input
        @filter="filterFn"
        input-debounce="2"
        clearable
        color="black"
        bg-color="grey-3"
        popup-content-style="background-color:#222831; color:white"
        filled
      />
    </div>
    <div v-if="this.ckey">
      <ckey_lookup v-model:ckey="this.ckey" />
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

.picker {
  max-width: 28em;
  margin: auto;
}

@media (max-width: 800px) {
  .banner {
    font-size: 1.5em;
  }
  .picker {
    width: 22em;
    margin: auto;
  }
}
</style>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import ckey_lookup from "./ckey/ckey_lookup.vue";

import { useMeta } from "quasar";

const metaData = {
  title: "RavenStats",
  titleTemplate: (title) => `${title}`,

  // meta tags
  meta: {
    keywords: {
      name: "keywords",
      content: "lifeweb, ss13, spacestation13, space station 13, byond",
    },
  },
};

export default {
  components: { ckey_lookup },
  async created() {
    const ckey_options = await this.$axios.get(
      "http://localhost:5000/showlads/ckeys",
      {
        withCredentials: true,
      }
    );
    this.ckey_options = ckey_options.data;
  },

  data() {
    return {
      ckey: "",
      ckey_options: [],
      filteredOptions: null,
    };
  },
  setup() {
    useMeta(metaData);

    return {};
  },

  methods: {
    filterFn(val, update) {
      if (val === "") {
        update(() => {
          this.filteredOptions = this.ckey_options;
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();

        this.filteredOptions = this.ckey_options.filter(
          (v) => v.toLowerCase().indexOf(needle) > -1
        );
      });
    },
  },
};
</script>
