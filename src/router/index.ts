import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Onboarding from '../views/Onboarding.vue'
import Analytics from '../views/Analytics.vue'
import Workout from '../views/Workout.vue'
import Settings from '../views/Settings.vue'
import Weights from '../views/Weights.vue'
import Support from '../views/Support.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/onboarding',
    name: 'onboarding',
    component: Onboarding
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: Analytics
  },
  {
    path: '/workout',
    name: 'workout',
    component: Workout
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '/weights',
    name: 'weights',
    component: Weights
  },
  {
    path: '/support',
    name: 'support',
    component: Support
  },
  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
