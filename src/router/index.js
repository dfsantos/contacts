import Vue from 'vue'
import Router from 'vue-router'
import NewContact from '@/components/new-contact/NewContact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewContact',
      component: NewContact
    }
  ]
})
