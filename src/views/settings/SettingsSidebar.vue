<template>
  <div class="settings-sidebar">
    <v-list class="pa-4" color="transparent">
      <template v-for="(item, i) in settingsMenu" :key="i">
        <v-btn :to="item.to" size="large" rounded="lg" class="mb-4 pr-4 custom-btn" block exact>
          <v-icon left>{{ item.icon }}</v-icon>
          <span class="menu-item ml-4" v-text="item.title"></span>
        </v-btn>
      </template>
    </v-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import settingsMenu from './settingsSidebarItems'

export default defineComponent({
  setup() {
    const settingsMenuRef = ref(settingsMenu)

    return {
      settingsMenu: settingsMenuRef
    }
  }
})
</script>

<style scoped>
.menu-item {
  font-size: 24px;
  color: #000000; /* Default text color for inactive state */
}

.custom-btn {
  text-align: left;
  justify-content: flex-start;
  background-color: transparent; /* Default background for inactive state */
}

.custom-btn .v-icon {
  margin-right: 8px;
}

.custom-btn .menu-item {
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Helvetica,
    Arial,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
  /* Ensure the text is white */
}

/* Style for the active button */
.v-btn.router-link-active {
  background-color: #ebebeb !important;
  color: #000000 !important; /* Text color for active state */
}

.v-btn.router-link-active .menu-item {
  color: #000000 !important; /* Text color for active state */
}
</style>
