import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Code from '../views/Code.vue'
import Write from '../views/Write.vue'
import Dive from '../views/Dive.vue'
import Capture from '../views/Capture.vue'
import Travel from '../views/Travel.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/code',
    name: 'Code',
    component: Code
  },
  {
    path: '/write',
    name: 'Write',
    component: Write
  },
  {
    path: '/dive',
    name: 'Dive',
    component: Dive
  },
  {
    path: '/capture',
    name: 'Capture',
    component: Capture
  },
  {
    path: '/travel',
    name: 'Travel',
    component: Travel
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
