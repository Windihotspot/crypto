<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import sidebarItems from './sidebarItem'
import LogoDark from '../logo/LogoDark.vue'
export default defineComponent({
  components: {
    LogoDark
  },
  setup() {
    const sidebarMenu = ref(sidebarItems)

    return {
      sidebarMenu
    }
  }
})
</script>

<template>
  <div class="side-bar">
    <!-- ---------------------------------------------- -->
    <!---Logo part -->
    <!-- ---------------------------------------------- -->

    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <div class="scrollnavbar">
      <v-list class="pa-4" color="transparent">
        <!-- ---------------------------------------------- -->
        <!---Menu Loop -->
        <!-- ---------------------------------------------- -->
        <template v-for="(item, i) in sidebarMenu" :key="i">
          <!-- ---------------------------------------------- -->
          <!---Single Item-->
          <!-- ---------------------------------------------- -->

          <v-btn
            size="large"
            rounded="lg"
            :to="item.to"
            class="mb-4 pr-4 custom-btn no-uppercase"
            block
            no-uppercase
          >
            <!-- <v-icon class="feather-sm">{{ item.icon }}</v-icon> -->
            <v-icon left>{{ item.icon }}</v-icon>
            <span class="menu-item ml-4" v-text="item.title"></span>
          </v-btn>
        </template>
      </v-list>
    </div>
    <!-- <div class="pa-4 ma-4 bg-light-primary rounded-lg text-center">
      <img src="@/assets/images/sidebar-buynow-bg.svg" />
      <h4 class="font-weight-regular mb-3">Get Template for Free</h4>
      <v-btn class="mb-2" href="https://www.wrappixel.com/templates/flexy-vuejs-admin-free/" block
        >Download Free</v-btn
      >
      <v-btn color="info" href="https://www.wrappixel.com/templates/flexy-vuetify-dashboard/" block
        >Check Pro</v-btn
      >
    </div> -->
  </div>
</template>

<style scoped>
.menu-item {
  font-size: 36px;
  text-transform: none;
  color: #1e1e1e; /* Text color for both active and inactive */
}

.custom-btn {
  text-align: left; /* Aligns text to the left */
  justify-content: flex-start; /* Aligns all contents to the left */
}

.custom-btn .v-icon {
  margin-right: 8px; /* Adjusts spacing between icon and text */
  color: #1e1e1e; /* Icon color for both active and inactive */
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
}

/* Style for the active button */
.v-btn.router-link-active {
  color: #1e1e1e !important; /* Text color for active state */
}

.v-btn.router-link-active .menu-item {
  color: #1e1e1e !important; /* Text color for active state */
}

.v-btn.router-link-active .v-icon {
  color: #1e1e1e !important; /* Icon color for active state */
}
</style>
