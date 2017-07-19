import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Goodbye from '@/components/Goodbye'
import NewContactForm from '@/components/NewContactForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/bye',
      name: 'Goodbye',
      component: Goodbye
    },
    {
      path: '/new-contact',
      name: 'NewContactForm',
      component: NewContactForm
    }
  ]
})
