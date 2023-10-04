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

        <q-item clickable>
          <q-btn dense color="black" round icon="shopping_cart"> </q-btn>
        </q-item>

        <q-item v-if="logInCheck" clickable>
          <q-avatar @click="toggleRightDrawer"> </q-avatar>
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
      <router-link to="/privacy">Privacy</router-link> |
      <router-link to="/terms">Terms of Use</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/darkpack">Dark Pack</router-link>
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
    display: none;
  }
}
</style>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "login",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },

  methods: {},
});
</script>
