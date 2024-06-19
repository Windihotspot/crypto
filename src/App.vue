<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen font-sans antialiased relative">
    <div class="relative">
      <div
        class="absolute top-0 left-0 w-full h-[125vh] sm:h-[225vh] lg:h-[125vh] cover-gradient-2 sm:cover-gradient"
      ></div>

      <main class="text-neutral-800">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  setup() {}
})
</script>
