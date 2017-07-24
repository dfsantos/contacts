<template>
  <el-col :xs="24" :sm="24" :md="24" :lg="24">
    <el-row class="row-bg">
      <el-form>
        <el-row class="row-bg">
          <el-col :span="15" align="start">
            <el-row class="row-bg">
              <span class="main-title">{{fullname}}</span>
            </el-row>
            <el-row class="row-bg">
              <span class="small-title">{{relation}}</span>
            </el-row>
            <el-row class="row-bg">
              <span class="small-title">{{age}}</span>
            </el-row>
          </el-col>
        </el-row>
        <el-form-item align="start">
          <el-button type="primary" @click="handleSaveButtonClick">Save</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row>
      <el-tabs value="basic">
        <el-tab-pane label="Basic" name="basic">
          <basic :basic-data="localContact.basic"></basic>
        </el-tab-pane>
        <el-tab-pane label="Phones" name="phone">
          <phone :phones="localContact.phones"></phone>
        </el-tab-pane>
        <el-tab-pane label="Emails" name="email">
          <email :emails="localContact.emails"></email>
        </el-tab-pane>
        <el-tab-pane label="Social" name="social">
          <social :social="localContact.social"></social>
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

  import * as mutations from '../../store/mutation-types'

  export default {
    name: 'contact-form',
    components: {Basic, Phone, Email, Social},
    props: {
      contact: {
        type: Object,
        default: function () {
          return {
            id: null,
            basic: {
              firstName: '',
              lastName: '',
              groups: [],
              relation: '',
              age: null
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
        }
      }
    },
    computed: {
      localContact () {
        return this.contact
      },
      fullname () {
        return this.contact.basic.firstName + ' ' + this.contact.basic.lastName
      },
      relation () {
        return this.contact.basic.relation
      },
      age () {
        return this.contact.basic.age
      }
    },
    methods: {
      handleSaveButtonClick: function () {
        this.$store.commit(mutations.CREATE_CONTACT, this.localContact)
      }
    }
  }
</script>

<style scoped>
  .row-bg {
    padding: 5px
  }
</style>
