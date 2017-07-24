import _ from 'lodash'
import * as types from '../mutation-types'

const state = {
  all: []
}

const getters = {
  allContacts: state => state.all
}

const mutations = {
  [types.CREATE_CONTACT] (state, contact) {
    contact.id = state.all.length + 1
    state.all.push(contact)
  },
  [types.UPDATE_CONTACT] (state, updatedContact) {
    let index = _.findIndex(state.all, contact => {
      return contact.id === updatedContact.id
    })
    state.all[index] = updatedContact
  },
  [types.DELETE_CONTACT] (state, id) {
    _.remove(state.all, contact => {
      return contact.id === id
    })
  }
}

export default {
  state,
  getters,
  mutations
}
