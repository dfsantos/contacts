import _ from 'lodash'
import * as types from '../mutation-types'

const state = {
  all: []
}

const getters = {
  allContacts: state => state.all,
  getById: (state, getters) => (id) => _.find(state.all, contact => contact.id === parseInt(id))
}

const mutations = {
  [types.SAVE_CONTACT] (state, contact) {
    if (!contact.id) {
      mutations[types.CREATE_CONTACT](state, contact)
    } else {
      mutations[types.UPDATE_CONTACT](state, contact)
    }
  },
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
