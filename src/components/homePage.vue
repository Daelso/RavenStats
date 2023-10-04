<template>
  <div class="q-pa-md" style="max-width: 1400px">
    <div class="banner">Search by Ckey</div>
    <div>
      <q-select
        class="picker"
        standout
        v-model="ckey"
        :options="ckey_options"
        label="Ckey"
        use-input
        input-debounce="2"
        clearable
        color="black"
        bg-color="grey-3"
        popup-content-style="background-color:#222831; color:white"
        filled
      />
    </div>
  </div>
</template>

<style>
.banner {
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
  font-family: TMUnicorn;
  text-shadow: 3px 2px 3px black;
  font-size: 2.8em;
  color: #c4171d;
}

@media (max-width: 800px) {
  .banner {
    font-size: 1.5em;
  }
}
</style>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

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
  async created() {
    if (window.location.href.includes("localhost")) {
      this.baseUrl = "http://localhost:5000";
    } else {
      this.baseUrl = window.location.origin;
    }
  },

  data() {
    return {
      baseUrl: null,
      ckey: "",
      ckey_options: [],
    };
  },
  setup() {
    useMeta(metaData);

    return {};
  },
};
</script>
