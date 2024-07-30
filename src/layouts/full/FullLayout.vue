<script lang="ts">
import { RouterView } from 'vue-router'
import { defineComponent, ref, onMounted } from 'vue'
import SidebarView from './sidebar/SidebarView.vue'
import HeaderView from './header/HeaderView.vue'
export default defineComponent({
  components: {
    SidebarView,
    HeaderView
  },
  setup() {
    const drawer = ref(undefined || true)
    const innerW = window.innerWidth
    onMounted(() => {
      if (innerW < 950) {
        drawer.value = !drawer.value
      }
    })

    return {
      drawer
    }
  }
})
</script>

<template>
  <v-app>
    <!-- ---------------------------------------------- -->
    <!---Sidebar -->
    <!-- ---------------------------------------------- -->
    <v-navigation-drawer
      left
      :permanent="$vuetify.display.mdAndUp"
      elevation="10"
      app
      :temporary="$vuetify.display.mdAndDown"
      v-model="drawer"
      expand-on-hover
      class="side-bar"
    >
      <SidebarView />
    </v-navigation-drawer>
    <!-- ---------------------------------------------- -->
    <!---Header -->
    <!-- ---------------------------------------------- -->
    <v-app-bar elevation="0" class="v-topbar">
      <v-btn class="hidden-md-and-up" icon @click="drawer = !drawer">
        <v-icon>fa-solid fa-bars</v-icon>
      </v-btn>
      <v-spacer />
      <!-- ---------------------------------------------- -->
      <!-- User Profile -->
      <!-- ---------------------------------------------- -->
      <HeaderView />
    </v-app-bar>

    <!-- ---------------------------------------------- -->
    <!---Page Wrapper -->
    <!-- ---------------------------------------------- -->
    <v-main>
      <v-container fluid class="page-wrapper">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>

  <v-icon class="settings-icon">fa-solid fa-cog</v-icon>
</template>

<style scoped>
.side-bar {
  background-color: #121621;
}

.settings-icon {
  position: fixed;
  bottom: 16px;
  right: 16px;
  font-size: 36px;
  color: #121621;
  animation: rotate 5s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
