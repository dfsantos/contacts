<template>
  <el-col :xs="24" :sm="24" :md="24" :lg="24">
    <el-row class="row-bg">
      <el-button type="primary">Save Contact</el-button>
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
        <el-tab-pane label="Social" name="social">
          <social-tab :social="contact.social"></social-tab>
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </el-col>
</template>

<script>
  import BasicTab from './BasicTab'
  import PhoneTab from './PhoneTab'
  import EmailTab from './EmailTab'
  import SocialTab from './SocialTab'

  import { mapState } from 'vuex'

  export default {
    name: 'new-contact-form',
    components: {BasicTab, PhoneTab, EmailTab, SocialTab},
    computed: mapState(['contact'])
  }
</script>

<style scoped>
  .row-bg {
    padding: 5px
  }
</style>
