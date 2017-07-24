<template>
  <el-form>
    <el-form-item>
      <el-col :span="15">
        <el-input id="email" type="tel" placeholder="Insert an email address" title="New email address"
                  v-model.lazy.trim="vm.newEmailAddressInput"></el-input>
      </el-col>
      <el-col :span="3" :offset="1">
        <el-button id="add-email-button" title="Includes email address" @click="handleAddEmailClick">
          Add Email
        </el-button>
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-table :data="contactEmails" stripe empty-text="No data found.">
        <el-table-column prop="address" label="Emails"></el-table-column>
      </el-table>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'email',
    props: {
      emails: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data () {
      return {
        contactEmails: this.emails,
        vm: {
          newEmailAddressInput: ''
        }
      }
    },
    methods: {
      handleAddEmailClick: function () {
        let newEmail = {address: this.vm.newEmailAddressInput}
        this.contactEmails.push(newEmail)
        this.vm.newEmailAddressInput = ''
      }
    }
  }
</script>
