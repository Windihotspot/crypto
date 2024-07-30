import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VerificationPage from '../views/VerificationPage.vue'
import SettingsView from '../views/settings/SettingsView.vue'
import { supabase } from '../components/base/supabase/supabase'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/verification',
      name: 'verification',
      component: VerificationPage
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/layouts/full/FullLayout.vue'),
      meta: {
        auth: true
      },
      children: [
        {
          name: 'dashboard',
          path: '/dashboard',

          component: () => import('@/views/dashboard/DashboardView.vue')
        },
        {
          path: '/settings',
          name: 'settings',
          redirect: '/settings/account',
          component: SettingsView,
          children: [
            {
              path: 'account',
              name: 'account',
              component: () => import('@/views/settings/AccountView.vue')
            },
            {
              path: 'notifications',
              name: 'notifications',
              component: () => import('@/views/settings/NotificationsView.vue')
            },
            {
              path: 'security',
              name: 'security',
              component: () => import('@/views/settings/SecurityView.vue')
            }
          ]
        }
      ]
    }
  ]
})

//Route guard for each route
router.beforeEach((to, from, next) => {
  const user = supabase.auth.getUser()
  if (to.matched.some((res) => res.meta.auth)) {
    if (user) {
      next()
      return
    }
    next({ name: 'Login' })
    return
  }
  next()
})

export default router
