<script setup lang="ts">
import enterQuote from "./components/enterQuote.vue";
import quotesView from "./components/quotesView.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <enterQuote />
      <Suspense>
        <quotesView />
      </Suspense>
    </div>
  </header>
  <RouterView />
</template>
