<template>
  <el-table :data="contacts" stripe empty-text="No data found.">
    <el-table-column prop="basic.firstName" label="Contact"></el-table-column>
    <el-table-column label="Actions">
      <template scope="scope">
        <el-button type="text" size="small">
          <router-link :to="'/contact/' + scope.row.id">
            Edit
          </router-link>
        </el-button>
        <el-button type="text" size="small" @click="handleDeleteRowButtonClick(scope)">Remove</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import * as mutations from '../../store/mutation-types'

  export default {
    name: 'contacts',
    computed: {
      contacts () {
        return this.$store.getters.allContacts
      }
    },
    methods: {
      handleDeleteRowButtonClick: function (scope) {
        this.$store.commit(mutations.DELETE_CONTACT, scope.row.id)
        this.contacts.splice(scope.$index, 1)
      }
    }
  }
</script>
