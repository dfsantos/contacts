<template>
  <el-form label-width="120px">
    <span v-if="isSubmitedDataReady">{{submitedData}}</span>
    <el-form-item label="First name">
      <el-input id="first-name" type="text" title="First name" v-model.lazy.trim="contact.firstName"></el-input>
    </el-form-item>

    <el-form-item label="Second name">
      <el-input id="second-name" type="text" title="Second name" v-model.lazy.trim="contact.secondName"></el-input>
    </el-form-item>

    <el-form-item label="Phone">
      <el-col :span="15">
        <el-input id="phone" type="tel" placeholder="Insert a phone number" title="New phone number"
                  v-model.lazy.trim="formTempData.newPhoneNumber"></el-input>
      </el-col>
      <el-col :span="3">
        <el-button id="add-fone-button" title="Includes phone number" @click="handleAddPhoneClick">
          Add Phone
        </el-button>
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-table :data="contact.phones" stripe empty-text="No data found.">
        <el-table-column prop="number" label="Phones"></el-table-column>
      </el-table>
    </el-form-item>

    <el-form-item label="Email">
      <el-col :span="15">
        <el-input id="email" type="tel" placeholder="Insert an email address" title="New email address"
                  v-model.lazy.trim="formTempData.newEmailAddress"></el-input>
      </el-col>
      <el-col :span="3">
        <el-button id="add-email-button" title="Includes email address" @click="handleAddEmailClick">
          Add Email
        </el-button>
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-table :data="contact.emails" stripe empty-text="No data found.">
        <el-table-column prop="address" label="Emails"></el-table-column>
      </el-table>
    </el-form-item>

    <el-form-item>
      <el-button id="save-contact-button" title="Save contact" @click="handleSaveContactClick" type="primary">
        Save
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import Vue from 'vue'
  import { Form, FormItem, Button, Input, Table, Col } from 'element-ui'
  import ElFormItem from '../../node_modules/element-ui/packages/form/src/form-item'

  Vue.component(Form)
  Vue.component(FormItem)
  Vue.component(Button)
  Vue.component(Input)
  Vue.component(Table)

  Vue.component(Col)

  export default {
    components: {ElFormItem},
    name: 'new-contact-form',
    data () {
      return {
        formTempData: {newPhoneNumber: '', newEmailAddress: ''},
        contact: {firstName: '', secondName: '', phones: [], emails: []},
        submitedData: null
      }
    },
    methods: {
      handleAddPhoneClick: function () {
        let newPhone = {number: this.formTempData.newPhoneNumber}
        this.contact.phones.push(newPhone)
        this.formTempData.newPhoneNumber = ''
      },
      handleAddEmailClick: function () {
        let newEmail = {address: this.formTempData.newEmailAddress}
        this.contact.emails.push(newEmail)
        this.formTempData.newEmailAddress = ''
      },
      handleSaveContactClick: function () {
        this.submitedData = this.contact
      }
    },
    computed: {
      isSubmitedDataReady: function () {
        return !!this.submitedData
      }
    }
  }
</script>

<style scoped>
</style>
