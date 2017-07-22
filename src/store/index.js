import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contact: {
      basic: {
        firstName: '',
        lastName: '',
        groups: [],
        relation: 'Eu mesmo',
        age: 32
      },
      phones: [],
      emails: [],
      social: {
        facebook: '',
        twitter: '',
        instagram: '',
        googlePlus: '',
        github: ''
      }
    }
  },
  mutations: {
    changeFirstName (state) {
      state.contact.basic.firstName = 'Name Changed!'
    }
  }
})
