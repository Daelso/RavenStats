<template>
  <q-layout view="hhh lpR lfr">
    <q-header elevated>
      <q-toolbar style="background-color: #222831">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title
          style="
            font-family: lazymonkdemo;
            text-shadow: 3px 2px 3px black;
            color: #c4171d;
          "
        >
          <router-link class="titleLogo" to="/">RavenStats</router-link>
        </q-toolbar-title>

        <q-item clickable style="align-items: center">
          <q-avatar icon="live_help">
            <q-tooltip
              style="
                background-color: #222831;
                color: white;
                font-size: 1rem;
                font-family: monospace;
              "
              transition-show="scale"
              transition-hide="scale"
            >
              If you would like your data anonymized, contact Wel Ard on
              Discord. This is 4fun, don't take it too serious.</q-tooltip
            >
          </q-avatar>
        </q-item>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      style="background-color: #171a1e; border-color: red"
      overlay
    >
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      class="bg-transparent text-white text-center"
      style="opacity: 35%"
    >
      <a href="https://github.com/Daelso/RavenStatsScraper" target="_blank">
        Scraper Github
      </a>
      |
      <a href="https://github.com/Daelso/RavenStats" target="_blank">
        Site Github
      </a>
      - Made by Wel Ard (Daelso)
    </q-footer>
  </q-layout>
</template>

<style>
a,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: inherit;
}
.titleLogo {
  font-size: 2.5rem;
  color: #e31c25;
}

body {
  background-color: #171a1e;
}

@media only screen and (max-width: 600px) {
  .titleLogo {
    font-size: 1rem;
  }
}
</style>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import bum_king from "../assets/images/bum_king.png";
import randy from "../assets/images/randy.png";
import cave from "../assets/images/cave.png";
import operator from "../assets/images/operator.png";

import { useQuasar } from "quasar";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const $q = useQuasar();

    const myIcons = {
      "app:bum_king": `img:${bum_king}`,
      "app:randy": `img:${randy}`,
      "app:reactor": `img:${cave}`,
      "app:operator": `img:${operator}`,
    };

    const leftDrawerOpen = ref(false);

    $q.iconMapFn = (iconName) => {
      const icon = myIcons[iconName];
      if (icon !== void 0) {
        return { icon: icon };
      }
    };

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
