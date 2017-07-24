import Vue from 'vue'
import Router from 'vue-router'
import Contact from '@/components/contact/Contact'
import Contacts from '@/components/contacts/Contacts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/contact/create',
      name: 'CreateContact',
      component: Contact
    },
    {
      path: '/contact/:id',
      name: 'EditContact',
      component: Contact
    }
  ]
})
