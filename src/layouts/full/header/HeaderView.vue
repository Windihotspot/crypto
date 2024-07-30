<script lang="ts">
import { defineComponent, ref } from 'vue'
import { profile } from './data.ts'
import { contacts } from './contact.ts'
import { notifications } from './notification.ts'
export default defineComponent({
  setup() {
    const userprofile = ref(profile)
    const usernotification = ref(notifications)
    const usercontacts = ref(contacts)

    return {
      userprofile,
      usernotification,
      usercontacts
    }
  }
})
</script>

<template>
  <div>
    <!-- Row containing notification icon, contacts icon, and user profile -->
    <v-row justify="end" align="center">
      <!-- Notification Icon with Dropdown -->
      <v-col class="d-flex justify-center" cols="auto">
        <v-menu anchor="bottom end" origin="auto" min-width="300">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon>
              <i class="fa-regular fa-bell fa-1x"></i>
            </v-btn>
          </template>
          <v-list class="pa-6" elevation="10" rounded="lg">
            <v-list-item
              v-for="(item, i) in usernotification"
              :key="i"
              :title="item.title"
              :subtitle="item.desc"
              rounded="lg"
              class="pa-3 mb-2"
            >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>

      <!-- Contacts Icon with Dropdown -->
      <v-col class="d-flex justify-center" cols="auto">
        <v-menu anchor="bottom end" origin="auto" min-width="300">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon>
              <i class="fa-regular fa-address-book fa-1x"></i>
            </v-btn>
          </template>
          <v-list class="pa-6" elevation="10" rounded="lg">
            <v-list-item
              v-for="(contact, i) in usercontacts"
              :key="i"
              :title="contact.name"
              :subtitle="contact.status"
              rounded="lg"
              class="pa-3 mb-2"
            >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <!-- User Profile -->
      <v-col class="d-flex justify-center" cols="auto">
        <v-menu anchor="bottom end" origin="auto" min-width="300">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              class="pa-0 px-1"
              elevation="0"
              color="transparent"
              plain
              :ripple="false"
            >
              <v-avatar size="35">
                <img src="@/assets/images/users/user2.jpg" alt="Julia" />
              </v-avatar>
            </v-btn>
          </template>

          <v-list class="pa-6" elevation="10" rounded="lg">
            <v-list-item
              class="pa-3 mb-2"
              v-for="(item, i) in userprofile"
              :key="i"
              :value="item"
              :title="item.title"
              :subtitle="item.desc"
              rounded="lg"
            >
            </v-list-item>
            <v-btn block color="secondary" variant="contained" class="mt-4 py-4">Logout</v-btn>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </div>
</template>
