<template>
  <el-table :data="contacts" stripe empty-text="No data found.">
    <el-table-column prop="basic.firstName" label="Contact"></el-table-column>
    <el-table-column label="Actions">
      <template scope="scope">
        <el-button type="text" size="small" @click="handleEditRowButtonClick(scope)">Edit</el-button>
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
      handleEditRowButtonClick: function (scope) {
        console.log(scope.row)
      },
      handleDeleteRowButtonClick: function (scope) {
        this.$store.commit(mutations.DELETE_CONTACT, scope.row.id)
        this.contacts.splice(scope.$index, 1)
      }
    }
  }
</script>
