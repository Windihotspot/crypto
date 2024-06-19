<template>
  <div class="settings-page">
    <SettingsSidebar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SettingsSidebar from './SettingsSidebar.vue'

export default defineComponent({
  components: {
    SettingsSidebar
  }
})
</script>

<style scoped>
.settings-page {
  display: flex;
}
.settings-sidebar {
  width: 250px;
}
</style>
