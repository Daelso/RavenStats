<template>
  <div class="q-pa-md" style="max-width: 1400px">
    <div class="banner">Search by Character Name</div>
    <div>
      <q-select
        class="picker"
        standout
        v-model="char_name"
        :options="filteredOptions"
        label="Character Name"
        use-input
        @filter="filterFn"
        input-debounce="2"
        clearable
        color="black"
        bg-color="grey-3"
        popup-content-style="background-color:#222831; color:white"
        filled
        :loading="loading"
      />
    </div>
    <div v-if="this.char_name">
      <char_name_lookup v-model:character_name="this.char_name" />
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
import char_name_lookup from "./char_name/char_lookup.vue";

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
  components: { char_name_lookup },
  async created() {
    try {
      const char_options = await this.$axios.get(
        "https://www.schrecknet.live/showlads/characters",
        {
          withCredentials: true,
        }
      );
      this.char_options = char_options.data;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  },

  data() {
    return {
      char_name: "",
      char_options: [],
      filteredOptions: null,
      loading: true,
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
          this.filteredOptions = this.char_options;
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();

        this.filteredOptions = this.char_options.filter(
          (v) => v.toLowerCase().indexOf(needle) > -1
        );
      });
    },
  },
};
</script>
