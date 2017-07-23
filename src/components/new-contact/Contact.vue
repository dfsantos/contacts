<template>
  <el-col :xs="24" :sm="24" :md="24" :lg="24">
    <el-row class="row-bg">
      <el-button type="primary">Save Contact</el-button>
    </el-row>
    <el-row>
      <el-tabs value="basic">
        <el-tab-pane label="Basic" name="basic">
          <basic :basic-data="contact.basic"></basic>
        </el-tab-pane>
        <el-tab-pane label="Phones" name="phone">
          <phone :phones="contact.phones"></phone>
        </el-tab-pane>
        <el-tab-pane label="Emails" name="email">
          <email :emails="contact.emails"></email>
        </el-tab-pane>
        <el-tab-pane label="Social" name="social">
          <social :social="contact.social"></social>
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </el-col>
</template>

<script>
  import Basic from './Basic'
  import Phone from './Phone'
  import Email from './Email'
  import Social from './Social'

  import { mapState } from 'vuex'

  export default {
    name: 'new-contact-form',
    components: {Basic, Phone, Email, Social},
    computed: mapState(['contact'])
  }
</script>

<style scoped>
  .row-bg {
    padding: 5px
  }
</style>
