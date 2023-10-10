<template>
  <q-page class="container">
    <Suspense>
      <fun_facts />
      <template #fallback> Loading... </template>
    </Suspense>
    <Suspense>
      <home-page />
      <template #fallback> Loading... </template>
    </Suspense>
  </q-page>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>

<script>
import { defineComponent } from "vue";
import HomePage from "src/components/homePage.vue";
import fun_facts from "src/components/fun_facts/fun_facts.vue";

export default defineComponent({
  name: "IndexPage",
  components: { HomePage, fun_facts },
});
</script>
