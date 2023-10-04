<template>
  <q-item
    clickable
    style="color: #c4171d"
    href="https://discord.gg/lfwb"
    target="_blank"
  >
    <q-item-section avatar>
      <q-icon color="#C4171D" name="discord" style="scale: 120%" />
    </q-item-section>

    <q-item-section>
      <q-item-label>Lifeweb Hideout</q-item-label>
      <q-item-label caption style="color: white"
        >A ticket to Ravenheart</q-item-label
      >
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  methods: {
    goToFaq() {
      this.$router.push({ name: "faq" });
    },
    goToCatalog() {
      this.$router.push({ name: "home" });
    },
  },
});
</script>
