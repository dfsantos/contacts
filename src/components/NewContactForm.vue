<template>
  <el-col :span="12" :push="6">
    <el-row class="row-bg">
      <el-button type="primary" @click="handleSaveButtonClick">Save Contact</el-button>
      {{contact}}
    </el-row>
    <el-row>
      <el-tabs value="basic">
        <el-tab-pane label="Basic" name="basic">
          <basic-tab :basic-data="contact.basic"></basic-tab>
        </el-tab-pane>
        <el-tab-pane label="Phones" name="phone">
          <phone-tab :phones="contact.phones"></phone-tab>
        </el-tab-pane>
        <el-tab-pane label="Emails" name="email">
          <email-tab :emails="contact.emails"></email-tab>
        </el-tab-pane>
        <el-tab-pane label="Social" name="social"></el-tab-pane>
      </el-tabs>
    </el-row>
  </el-col>
</template>

<script>
  import BasicTab from './BasicTab'
  import PhoneTab from './PhoneTab'
  import EmailTab from './EmailTab'

  export default {
    name: 'new-contact-form',
    components: {BasicTab, PhoneTab, EmailTab},
    data () {
      return {
        contact: {
          basic: {
            firstName: '',
            lastName: ''
          },
          phones: [],
          emails: []
        }
      }
    },
    methods: {
      handleSaveButtonClick: function () {
        alert(this.contact)
      }
    }
  }
</script>

<style scoped>
  .row-bg {
    padding: 5px
  }
</style>
