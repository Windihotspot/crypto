<script lang="ts">
import { defineComponent } from 'vue'
import BaseCard from '@/components/BaseCard.vue'
import DailyActivities from './dashboardComponents/daily-activities/DailyActivities.vue'
import TransactionsTable from './dashboardComponents/transactions-table/TransactionsTable.vue'
import CoinCard from './dashboardComponents/coin-card/CoinCard.vue'
import CurrentBalance from './dashboardComponents/current-balance/CurrentBalance.vue'
import OperationCard from './dashboardComponents/operation-card/OperationCard.vue'
import CardsMedia from '@/components/vuetifyComponents/cards/CardsMedia.vue'

export default defineComponent({
  components: {
    CurrentBalance,
    DailyActivities,
    TransactionsTable,
    CoinCard,
    OperationCard,
    // BaseCard,
    CardsMedia
  },
  setup() {}
})
</script>

<template>
  <div class="dashboard">
    <div>
      <v-btn color="#5542f8" size="large" rounded="lg" class="mb-4 pr-4 custom-btn">
        <v-icon left>fa-solid fa-plus</v-icon>
        <span class="menu-item ml-4">Add Wallet</span>
      </v-btn>
    </div>
    <v-row>
      <v-col cols="12" sm="12">
        <CoinCard />
      </v-col>
      <v-col cols="12" lg="6">
        <CurrentBalance />
      </v-col>
      <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
        <CardsMedia />
      </v-col>
      <v-col cols="12" lg="6">
        <OperationCard />
      </v-col>

      <v-col cols="12" lg="6" class="d-flex align-items-stretch">
        <TransactionsTable />
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.dashboard {
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
}
.custom-btn .v-icon {
  margin-right: 8px; /* Adjusts spacing between icon and text */
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
  color: rgb(255, 255, 255);
  font-size: 14px;
  line-height: 28px;
}
</style>
