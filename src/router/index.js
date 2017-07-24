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
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/new-contact',
      name: 'NewContact',
      component: Contact
    }
  ]
})
